import React, { useState } from "react";
import MapViewContainer from "../../components/map";
import DispatchStyle from "./dispatch.style";
import InputField from "../../components/formComponents/inputField";
import ContentBox from "../../components/contentBoxes";
import Foldable from "../../components/foldables";

const DispatchPage = () => {

  const [orderSummary, setOrderSummary] = useState({
    packageType: null,
    vehicleType: null
  });
  const { packageType, vehicleType } = orderSummary;

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
  return (
    <DispatchStyle>
      <section id="main">
        <div className="container full">
          <MapViewContainer/>
          <div className="actions-wrapper">
            <h1>Lets get your stuff delivered!</h1>
            <div className="form-wrapper">
              <form>
                <InputField placeHolder="Where do we meet you?" id="DA-pickup-location" />
                <InputField placeHolder="Where to?" id="DA-drop-off-location" />
              </form>
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
                  <InputField id="special-remarks" />
                </div>
              </div>
            </Foldable>
          </div>
        </div>
      </section>
    </DispatchStyle>
  )
};

export default DispatchPage;