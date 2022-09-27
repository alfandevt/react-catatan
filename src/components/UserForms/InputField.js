import "../../styles/UserForm/InputField.css";
import React from "react";
import PropTypes from "prop-types";

const InputField = ({ label, ...props }) => {
  return (
    <div className="user-form__input-control">
      <label htmlFor="username">{label}</label>
      <input {...props} />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default InputField;
