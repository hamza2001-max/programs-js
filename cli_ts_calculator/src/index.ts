const inquirer = require("inquirer");
let question = [
  {
    type: "input",
    name: "first_variable",
    message: "Enter the first variable",
    validate: (answer: number) => {
      if (isNaN(answer)) {
        return false;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "second_variable",
    message: "Enter the second variable",
    validate: (answer: number) => {
      if (isNaN(answer)) {
        return false;
      }
      return true;
    },
  },
  {
    type: "list",
    name: "operator",
    message: "Choose an operator",
    choices: ["+", "-", "*", "/"],
  },
];
inquirer
  .prompt(question)
  .then((answers: any) => {
    const firstVar = answers.first_variable;
    const secondVar = answers.second_variable;
    const operator = answers.operator;

    if (operator == "+") {
      console.log(
        `${firstVar} ${operator} ${secondVar} = ${parseInt(firstVar) + parseInt(secondVar)}`
      );
    }
    if (operator == "-") {
      console.log(
        `${firstVar} ${operator} ${secondVar} = ${firstVar - secondVar}`
      );
    }
    if (operator == "*") {
      console.log(
        `${firstVar} ${operator} ${secondVar} = ${firstVar * secondVar}`
      );
    }
    if (operator == "/") {
      console.log(
        `${firstVar} ${operator} ${secondVar} = ${firstVar / secondVar}`
      );
    }
  })
  .catch((error: any) => {
    console.log(error);
  });
