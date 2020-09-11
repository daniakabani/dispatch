import styled from "styled-components";

const ContentBoxStyle = styled.div`{
  .DA-content-box-wrapper {
    display: inline-block;
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 7px;
    margin-bottom: 20px;
    border: 1px solid #333;
    min-width: 80px;
    cursor: pointer;
    .DA-box-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 7px;
      figure {
        width: 100%;
        height: auto;
      }
      article {
        width: 100%;
        text-align: center;
        font-size: 14px;
      }
    }
    &.active {
      background-color: #1abc9c;
    }
  }
}`;

export default ContentBoxStyle;