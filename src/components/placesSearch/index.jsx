import React from "react";
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxOption} from "@reach/combobox";
import PlacesSearchStyle from "./placesSearch.style";
import propTypes from "prop-types";
import "@reach/combobox/styles.css";


const PlacesSearch = props => {
  const {placeHolder, addMarkers} = props;
  const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
    location: {
      lat: () => 3.1524588,
      lng: () => 101.6226098
    },
    radius: 2000 // radius in meters
  });

  return (
    <PlacesSearchStyle>
      <div className="location-search">
        <Combobox
          onSelect={async (address) => {
            setValue(address, false);
            clearSuggestions();
            try {
              const results = await getGeocode({address});
              const {lat, lng} = await getLatLng(results[0])
              addMarkers({
                lat,
                lng,
                address
              })
            } catch(e) {
              console.error(e);
            }
          }}>
          <ComboboxInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
            disabled={!ready}
            placeholder={placeHolder}
          />
          <ComboboxPopover>
            {status === "OK" && data?.map(({id, description}) => (
              <ComboboxOption key={id} value={description}/>
            ))}
          </ComboboxPopover>
        </Combobox>
      </div>
    </PlacesSearchStyle>
  )
};

PlacesSearch.propTypes = {
  placeHolder: propTypes.string,
  addMarkers: propTypes.func
}

export default PlacesSearch;