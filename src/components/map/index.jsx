/*global google*/

import React, { useState, useEffect } from "react";
import { GoogleMap, withGoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
import propTypes from "prop-types";

const mapDefaultCenter = {
  lat: 3.1524588,
  lng: 101.6226098
};
const defaultMapOptions = {
  disableDefaultUI: true,
  zoomControl: true
};

const MapViewContainer = withGoogleMap(props => {
  const {pickUp = null, dropOff = null, wayPoint = null, mapCenter = null, calculateDistance = null} = props;
  const [state, setState] = useState({
    directions: null,
    centerPoint: mapDefaultCenter
  });
  const { directions, centerPoint } = state;

  useEffect(()  => {
    mapCenter?.lat && setState({
      ...state,
      centerPoint: {
        lat: mapCenter?.lat,
        lng: mapCenter?.lng
      }
    })
    if ( pickUp?.lat && dropOff?.lat ) {
      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: pickUp,
          destination: dropOff,
          travelMode: google.maps.TravelMode.DRIVING,
          optimizeWaypoints: true,
          provideRouteAlternatives: false,
          waypoints: wayPoint && [
            {
              location: wayPoint
            }
          ]
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            const pickUpLatLng = {
              lat: () => pickUp?.lat,
              lng: () => pickUp?.lng
            }
            const dropOffLatLng = {
              lat: () => dropOff?.lat,
              lng: () => dropOff?.lng
            }
            const waypointLatLng = {
              lat: () => wayPoint?.lat,
              lng: () => wayPoint?.lng
            }
            setState({
              directions: result
            });
            const pickupToDropOff = google.maps.geometry.spherical.computeDistanceBetween(pickUpLatLng, dropOffLatLng);
            const waypointToDropOff = wayPoint ? google.maps.geometry.spherical.computeDistanceBetween(waypointLatLng, dropOffLatLng) : 0;
            calculateDistance(Math.floor((pickupToDropOff + waypointToDropOff) / 1000));
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }, [dropOff, pickUp, wayPoint, mapCenter]);

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={centerPoint}
      options={defaultMapOptions}
    >
      <Marker position={pickUp?.lat && {lat: pickUp?.lat, lng: pickUp?.lng}} />
      <Marker position={dropOff?.lat && {lat: dropOff?.lat, lng: dropOff?.lng}} />
      <Marker position={wayPoint?.lat && {lat: wayPoint?.lat, lng: wayPoint?.lng}} />
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
});

MapViewContainer.propTypes = {
  markers: propTypes.array,
  calculateDistance: propTypes.func,
  pickUp: propTypes.object,
  dropOff: propTypes.object,
  wayPoint: propTypes.object
}

export default MapViewContainer;