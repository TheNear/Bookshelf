/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";

function CustomButton({ children, className, type, onClick }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

CustomButton.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  type: "button",
  className: "",
  onClick: () => {},
};

export default CustomButton;
