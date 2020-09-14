import styled from "styled-components";

const PlacesSearchStyle = styled.div`{
  .location-search {
    input {
      display: block;
      width: 100%;
      background: #f5f5f5;
      font-size: 14px;
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 13px 20px;
      font-weight: 300;
      transition: 0.3s ease all;
      margin-bottom: 20px;
      &::placeholder {
        color: #bcbcbc;
      }
      &:focus {
        background: white;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.07);
        outline: none;
      }
    }
  }
}`;

export default PlacesSearchStyle;