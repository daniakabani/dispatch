import styled from "styled-components";

const ButtonStyle = styled.div`{
  .DA-button {
    &.success {
        button {
          background-color: #2ecc71;
        }
      }
      &.warning {
        button {
          background-color: #f1c40f;
        }
      }
      &.danger {
        button {
          background-color: darkred;
        }
      }
    button {
      color: #fff;
      background-color: #ccc;
      border-radius: 20px;
      border: none;
      padding: 10px;
      box-shadow: unset;
      outline: none;
      cursor: pointer;
      transition: all ease 0.3s;
      &:hover {
        background-color: #8e44ad;
      }
    }
  }
}`;

export default ButtonStyle;