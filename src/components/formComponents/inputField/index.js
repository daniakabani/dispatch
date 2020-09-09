import React from "react";
import PropTypes from "prop-types";
import InputFieldStyle from "./input.style";

const InputField = props => {
  const { name, type = "text", onChange, required, id, placeHolder } = props;

  return(
    <InputFieldStyle>
      <div className="DA-input-field">
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
  placeHolder: PropTypes.string
}

export default InputField;