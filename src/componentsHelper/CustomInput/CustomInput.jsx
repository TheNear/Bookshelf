import React from "react";
import PropTypes from "prop-types";
import style from "./CustomInput.module.css";

function CustomInput({ title, type, id }) {
  return (
    <div className={style.input_wrapper}>
      {title && <label htmlFor={id}>{title}</label>}
      <input type={type} name={id} id={id} />
    </div>
  );
}

CustomInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
};

CustomInput.defaultProps = {
  title: "",
  type: "text",
};

export default CustomInput;
