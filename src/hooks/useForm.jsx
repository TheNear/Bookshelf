import { useState } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const errorsValid = validate(values);

    if (!Object.keys(errorsValid).length) {
      callback(values);
    } else {
      setErrors(errorsValid);
    }
  };

  const handleChange = (evt) => {
    setValues((value) => ({
      ...value,
      [evt.target.name]: evt.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
