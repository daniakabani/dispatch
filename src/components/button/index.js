import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";
import ButtonStyle from "./button.style"

const Button = props => {
  const { content, warning, danger, success, onClick } = props;
  const classes = classNames("DA-button", {
    "warning": warning,
    "danger": danger,
    "success": success
  })
  return (
    <ButtonStyle>
      <div className={classes}>
        <button onClick={onClick}>{content}</button>
      </div>
    </ButtonStyle>
  )
}

Button.propTypes = {
  content: propTypes.string,
  onClick: propTypes.func,
  warning: propTypes.string,
  danger: propTypes.string,
  success: propTypes.string
};

export default Button;