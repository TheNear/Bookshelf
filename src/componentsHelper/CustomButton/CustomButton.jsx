/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";

function CustomButton({ name, className, type }) {
  return (
    <button type={type} className={className}>
      {name}
    </button>
  );
}

CustomButton.propTypes = {
  type: PropTypes.oneOf(["button", "sumbit", "reset"]),
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

CustomButton.defaultProps = {
  type: "button",
};

export default CustomButton;
