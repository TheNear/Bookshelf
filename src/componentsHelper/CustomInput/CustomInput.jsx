import React from "react";
import PropTypes from "prop-types";
import style from "./CustomInput.module.css";

function CustomInput({ title, type, id, name, value, onChange }) {
  return (
    <div className={style.input_wrapper}>
      {title && <label htmlFor={id}>{title}</label>}
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        id={id}
      />
    </div>
  );
}

CustomInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

CustomInput.defaultProps = {
  title: "",
  type: "text",
  value: null,
  onChange: () => {},
};

export default CustomInput;
