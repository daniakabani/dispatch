/*global google*/

import React, { useState, useEffect } from "react";
import { GoogleMap, withGoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
import PropTypes from "prop-types";

const mapDefaultCenter = {
  lat: 3.1524588,
  lng: 101.6226098
};
const defaultMapOptions = {
  disableDefaultUI: true,
  zoomControl: true
};

const MapViewContainer = withGoogleMap(props => {
  const {pickUp = null, dropOff = null, wayPoint = null, mapCenter = null} = props;

  const [state, setState] = useState({
    directions: null
  });
  const { directions } = state;

  useEffect(()  => {
    console.log(wayPoint);
    if ( pickUp?.lat && dropOff?.lat ) {
      const directionsService = new google.maps.DirectionsService();

      directionsService.route(
        {
          origin: pickUp,
          destination: dropOff,
          travelMode: google.maps.TravelMode.DRIVING,
          waypoints: wayPoint && [
            {
              location: wayPoint
            }
          ]
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setState({
              directions: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }, [dropOff, pickUp, wayPoint]);
console.log(pickUp && !directions, dropOff && !directions);
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={mapCenter ? mapCenter : mapDefaultCenter}
      options={defaultMapOptions}
    >
      {(pickUp && !directions) && <Marker position={{lat: pickUp.lat, lng: pickUp.lng}} />}
      {(dropOff && !directions) && <Marker position={{lat: dropOff.lat, lng: dropOff.lng}} />}
      {(wayPoint && !directions) && <Marker position={{lat: wayPoint.lat, lng: wayPoint.lng}} />}
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
});

MapViewContainer.propTypes = {
  markers: PropTypes.array
}

export default MapViewContainer;