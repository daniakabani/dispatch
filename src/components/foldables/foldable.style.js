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
    cursor: pointer;
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
      max-height: 0;
      padding: 0;
      * {
        max-height: 0;
        visibility: hidden;
      }
    }
    &.active {
      &.foldable-toggle {
        figure {
          transform: rotate(180deg);
        }
      }
      .foldable-content {
        max-height: unset;
        padding: 20px;
        * {
          max-height: unset;
          visibility: unset;
        }
      }
    }
  }
}`;

export default FoldableStyle;