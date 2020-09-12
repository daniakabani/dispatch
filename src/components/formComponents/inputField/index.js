import React from "react";
import PropTypes from "prop-types";
import InputFieldStyle from "./input.style";
import classNames from "classnames";

const InputField = props => {
  const { name, type = "text", onChange, required, id, placeHolder, lite } = props;
  const classes = classNames("DA-input-field", {
    "lite": lite
  })

  return(
    <InputFieldStyle>
      <div className={classes}>
        <input
          name={name}
          type={type}
          onChange={onChange}
          required={required}
          id={id}
          placeholder={placeHolder}
        />
      </div>
    </InputFieldStyle>
  )
};

InputField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  id: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  lite: PropTypes.bool
}

export default InputField;