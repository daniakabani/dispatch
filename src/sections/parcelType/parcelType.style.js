import styled from "styled-components";

const ParcelTypeStyle = styled.div`{
  .parcel-type {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    .package-types{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}`;

export default ParcelTypeStyle;