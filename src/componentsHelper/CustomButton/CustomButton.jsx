/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";

function CustomButton({ children, className, type }) {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}

CustomButton.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CustomButton.defaultProps = {
  type: "button",
  className: "",
};

export default CustomButton;
