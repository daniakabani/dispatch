import React from "react";
import MapViewContainer from "../../components/map";
import DispatchStyle from "./dispatch.style";
import InputField from "../../components/formComponents/inputField";
import ParcelType from "../../sections/parcelType";

const DispatchPage = () => {
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
            <ParcelType />
          </div>
        </div>
      </section>
    </DispatchStyle>
  )
};

export default DispatchPage;