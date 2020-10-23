import { useState } from "react";

const useForm = (validateForm, props) => {
  const [errors, setErrors] = useState({});
  const [campos] = useState(props.campos);
  const [rules] = useState(props.rules);

  const elements = () => {
    let json = "{";
    for (let i = 0; i < campos.length; i++) {
      json += '"' + campos[i].input.name + '":""';
      if (i < campos.length - 1) {
        json += ",";
      }
    }
    json += "}";
    return json;
  };

  const [values, setValues] = useState(JSON.parse(elements()));

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setErrors(validateForm(values, rules));
  };

  return { handleChange, handleSubmit, errors };
};

export default useForm;
