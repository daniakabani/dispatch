import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const MapViewContainer = props => {
    const defaultMapStyles = {
        height: "100%",
        width: "100%"
    }

    return (
        <Map
            google={props.google}
            zoom={14}
            style={defaultMapStyles}
            initialCenter={{
                lat: 3.1524588,
                lng: 101.6226098
            }}
        />
    );

};

export default GoogleApiWrapper({
    apiKey: 'API_KEY'
})(MapViewContainer);