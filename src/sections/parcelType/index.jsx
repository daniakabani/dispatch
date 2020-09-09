import React, {useState} from "react";
import Foldable from "../../components/foldables";
import ContentBox from "../../components/contentBoxes";
import ParcelTypeStyle from "./parcelType.style";
import InputField from "../../components/formComponents/inputField";

const ParcelType = () => {
  const [state, setState] = useState({
    allowOther: false
  });
  const { allowOther } = state;
  const toggleAllowOther = () => {
    setState({
      ...state,
      allowOther: !allowOther
    });
  }
  return(
    <ParcelTypeStyle>
      <Foldable title="Your Parcel Type">
        <div className="parcel-type">
          <header>
            <h4>what are you delivering?</h4>
          </header>
          <div className="package-types">
            <ContentBox text_content="Document"/>
            <ContentBox text_content="Food"/>
            <ContentBox text_content="Cakes"/>
            <ContentBox text_content="Flowers"/>
            <ContentBox text_content="Others..." onClick={toggleAllowOther}/>
            {allowOther && <InputField id="package-type" placeHolder="tell us what it is"/>}
          </div>
        </div>
      </Foldable>
    </ParcelTypeStyle>
  )
};

export default ParcelType;