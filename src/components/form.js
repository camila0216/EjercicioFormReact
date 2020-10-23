import React, { useState } from "react";
import useForm from "../customHooks/useForm";
import validateForm from "../utils/validateForm";
import Theme from "../context/theme";

const Form = (props) => {
  const [campos] = useState(props.campos);
  const { handleChange, handleSubmit, errors } = useForm(validateForm, props);
  let nombre = "";
  console.log(errors);
  const elementos = campos.map((c) => {
    nombre = c.input.name;
    return (
      <div>
        <label htmlFor={c.label.htmlFor}>{c.label.text}</label>
        <input
          type={c.input.type}
          name={c.input.name}
          placeholder={c.input.placeholder}
          onChange={handleChange}
          id={c.input.id}
        ></input>
        {errors[nombre] && <p>{errors[nombre]}</p>}
      </div>
    );
  });
  return (
    <div>
      <Theme.Consumer>
        {(value) => <h1 classname={value}>Register Form</h1>}
      </Theme.Consumer>
      <form onSubmit={handleSubmit}>
        {elementos}
        <button>Send</button>
      </form>
    </div>
  );
};

export default Form;
