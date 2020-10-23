export default function validateForm(values, rules) {
  const err = {};

  for (let i = 0; i < rules.length; i++) {
    let bol = "";
    if (rules[i]["name2"] === "") {
      bol =
        "values." +
        [rules[i]["name"]] +
        ".length" +
        rules[i]["condition"] +
        rules[i]["value"];
    } else {
      bol =
        "values." +
        [rules[i]["name"]] +
        rules[i]["condition"] +
        "values." +
        rules[i]["name2"];
    }

    console.log(bol);

    if (eval(bol)) {
      err[rules[i]["name"]] = rules[i]["msg"];
    }
  }

  //Todos los campos del formulario
  return err;
}
