import React, { useState } from "react";
import PropTypes from "prop-types";
import FoldableStyle from "./foldable.style";
import ArrowImage from "./images/down-arrow.svg";

const Foldable = (props) => {
  const [state, setState] = useState({
    active: false,
    disabled: false
  });
  const { disabled, children, title } = props;
  const { active } = state;
  const toggleActive = () => {
    setState({
      ...state,
      active: !active
    })
  }

  return (
    <FoldableStyle>
      <div className={active ? "DA-foldable-wrapper disabled" : "DA-foldable-wrapper"}>
        <div className="foldable-toggle" onClick={toggleActive}>
          <article className={active ? "active" : ""}>
            {title}
          </article>
          <figure>
            <img src={ArrowImage} alt="arrow" />
          </figure>
        </div>
        <div className="foldable-content">
          {children}
        </div>
      </div>
    </FoldableStyle>
  )
};

Foldable.prototype = {
  disabled: PropTypes.bool,
  children: PropTypes.any,
  title: PropTypes.string
};

export default Foldable;
