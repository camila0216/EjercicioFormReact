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
      <div className="form-group">
        <label htmlFor={c.label.htmlFor}>{c.label.text}</label>
        <input
          type={c.input.type}
          name={c.input.name}
          placeholder={c.input.placeholder}
          onChange={handleChange}
          className="form-control"
          id={c.input.id}
        ></input>
        {errors[nombre] && <p>{errors[nombre]}</p>}
      </div>
    );
  });
  return (
    <div>
      <Theme.Consumer>
        {(value) => <h1 className={value}>Register Form</h1>}
      </Theme.Consumer>
      <form onSubmit={handleSubmit}>
        {elementos}
        <button className="btn-primary">Send</button>
      </form>
    </div>
  );
};

export default Form;
