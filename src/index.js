import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/form";

const campos = [
  {
    label: { htmlFor: "username", text: "UserName: " },
    input: {
      type: "text",
      name: "username",
      placeholder: "Username",
      id: "username",
    },
    key: 1,
  },
  {
    label: { htmlFor: "email", text: "Email: " },
    input: { type: "email", name: "email", placeholder: "Email", id: "email" },
    key: 2,
  },
  {
    label: { htmlFor: "password", text: "Password: " },
    input: {
      type: "password",
      name: "password",
      placeholder: "Password",
      id: "password",
    },
    key: 3,
  },
  {
    label: { htmlFor: "confirmPassword", text: "Confirm password: " },
    input: {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm password",
      id: "confirmPassword",
    },
    key: 4,
  },
];

const rules = [
  {
    name: "username",
    condition: "===",
    value: 0,
    name2: "",
    msg: "Length of username is too short",
  },
  {
    name: "email",
    condition: "===",
    value: 0,
    name2: "",
    msg: "Length of email is too short",
  },
  {
    name: "password",
    condition: "<",
    value: 5,
    name2: "",
    msg: "Length of password is too short",
  },
  {
    name: "password",
    condition: "!==",
    value: 0,
    name2: "confirmPassword",
    msg: "Passwords must match",
  },
];

ReactDOM.render(
  <Form campos={campos} rules={rules} />,
  document.getElementById("root")
);
