import styled from "styled-components";

const DispatchStyle = styled.section`
  #main {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    .container {
      padding: 20vw;
      &.full {
        padding: 0;
      }
    }
    .actions-wrapper{
      position: absolute;
      left: 0;
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      top: 0;
      max-width: 600px;
      margin: 20px;
      width: 100%;
      h1 {
        margin-bottom: 20px;
      }
      .parcel-type, .vehicle-type {
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
    }
  }
`;

export default DispatchStyle;