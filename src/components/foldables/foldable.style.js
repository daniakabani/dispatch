import styled from "styled-components";

const FoldableStyle = styled.div`{
  .DA-foldable-wrapper {
    position: relative;
    width: 100%;
    border-radius: 10px;
    background-color: #f5f5f5;
    margin-bottom: 20px;
    .foldable-toggle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    padding: 7px;
    height: 40px;
      figure{
        position: absolute;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
        width: 15px;
        height: 15px;
        cursor: pointer;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    .foldable-content {
      padding: 20px;
      transition: max-height 0.3s ease-out;
    }
    &.disabled {
      .foldable-content {
        max-height: 0;
        padding: 0;
        * {
          display: none;
        }
      }
    }
  }
}`;

export default FoldableStyle;