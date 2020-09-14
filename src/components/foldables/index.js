import React, { useState } from "react";
import PropTypes from "prop-types";
import FoldableStyle from "./foldable.style";
import ArrowImage from "./images/down-arrow.svg";
import classNames from "classnames";

const Foldable = (props) => {
  const [state, setState] = useState({
    active: false,
    disabled: false
  });
  const { children, title } = props;
  const { active } = state;
  const classes = classNames("DA-foldable-wrapper", {
    active
  })

  const toggleActive = () => {
    setState({
      ...state,
      active: !active
    })
  }

  return (
    <FoldableStyle>
      <div className={classes}>
        <div className="foldable-toggle" onClick={toggleActive}>
          <article>
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

Foldable.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.any,
  title: PropTypes.string
};

export default Foldable;
