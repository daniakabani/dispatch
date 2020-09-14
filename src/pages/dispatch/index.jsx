import React, { useState } from "react";
import MapViewContainer from "../../components/map";
import DispatchStyle from "./dispatch.style";
import InputField from "../../components/formComponents/inputField";
import ContentBox from "../../components/contentBoxes";
import Foldable from "../../components/foldables";
import PlacesSearch from "../../components/placesSearch";

const DispatchPage = () => {

  const [orderSummary, setOrderSummary] = useState({
    packageType: null,
    vehicleType: null,
    pickup: null,
    destination: null,
    special: null
  });
  const [mapState, setMapState] = useState({
    pickUp: null,
    dropOff: null,
    multi: false,
    wayPoint: null
  });
  const { packageType, vehicleType } = orderSummary;
  const {pickUp, dropOff, multi, wayPoint} = mapState;

  const handlePackageTypeActive = (type) => {
    setOrderSummary({
      ...orderSummary,
      packageType: type
    })
  }
  const handleVehicleTypeActive = (type) => {
    setOrderSummary({
      ...orderSummary,
      vehicleType: type
    })
  }
  const handleInputs = (event, type) => {
    if (type === "pickup") {
      setOrderSummary({
        ...orderSummary,
        pickup: event.target.value
      })
    } else if(type === "destination") {
      setOrderSummary({
        ...orderSummary,
        destination: event.target.value
      })
    } else {
      setOrderSummary({
        ...orderSummary,
        special: event.target.value
      })
    }
  }
  const toggleDropOff = () => {
    setMapState({
      ...mapState,
      multi: !multi
    })
  }
  const setPickup = address => {
      setMapState({
        ...mapState,
        pickUp: address
      })
  }
  const setDropOff = address => {
    setMapState({
      ...mapState,
      dropOff: address
    })
  }
  const setWayPoint = address => {
    setMapState({
      ...mapState,
      wayPoint: address
    })
  }

  return (
    <DispatchStyle>
      <section id="main">
        <div className="container full">
          <MapViewContainer pickUp={pickUp} dropOff={dropOff} containerElement={<div style={{ height: "100vh", width: "100vw" }} />} mapElement={<div style={{ height: "100%" }} />} />
          <div className="actions-wrapper">
            <h1>Lets get your stuff delivered!</h1>
            <div className="form-wrapper">
              <PlacesSearch placeHolder="Where do we meet you?" addMarkers={setPickup} />
              <PlacesSearch placeHolder="Where do we drop off your items?" addMarkers={ multi ? setWayPoint : setDropOff} />
              <a className="clickable" onClick={toggleDropOff}>{multi ? "Remove Extra Drop-off" : "Multiple Drop-offs?"}</a>
              {multi && <PlacesSearch placeHolder="Where do we drop off your items?" addMarkers={setDropOff} />}
            </div>
            <Foldable title="Your Parcel Type">
              <div className="parcel-type">
                <header>
                  <h4>what are you delivering?</h4>
                </header>
                <div className="package-types">
                  <ContentBox active={packageType === "doc"} onClick={() => handlePackageTypeActive("doc")} text_content="Document" />
                  <ContentBox active={packageType === "food"} onClick={() => handlePackageTypeActive("food")} text_content="Food" />
                  <ContentBox active={packageType === "cake"} onClick={() => handlePackageTypeActive("cake")} text_content="Cakes" />
                  <ContentBox active={packageType === "flowers"} onClick={() => handlePackageTypeActive("flowers")} text_content="Flowers" />
                </div>
              </div>
            </Foldable>
            <Foldable title="Your Vehicle Type">
              <div className="parcel-type">
                <header>
                  <h4>Select your desired transportation medium</h4>
                </header>
                <div className="package-types">
                  <ContentBox active={vehicleType === "bike"} onClick={() => handleVehicleTypeActive("bike")} text_content="Bike" />
                  <ContentBox active={vehicleType === "car"} onClick={() => handleVehicleTypeActive("car")} text_content="Car" />
                  <ContentBox active={vehicleType === "suv"} onClick={() => handleVehicleTypeActive("suv")} text_content="SUV" />
                  <ContentBox active={vehicleType === "van"} onClick={() => handleVehicleTypeActive("van")} text_content="Van" />
                </div>
              </div>
            </Foldable>
            <Foldable title="Any special notes?">
              <div className="parcel-type">
                <header>
                  <h4>Tell us if you have special instructions</h4>
                </header>
                <div className="package-types">
                  <InputField onChange={e => handleInputs(e)} lite id="special-remarks" placeHolder="Any special remarks?" />
                </div>
              </div>
            </Foldable>
            <button onClick={() => console.log(orderSummary)}>Show Summary</button>
          </div>
        </div>
      </section>
    </DispatchStyle>
  )
};

export default DispatchPage;