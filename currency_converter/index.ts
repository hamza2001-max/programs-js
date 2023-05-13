#! /usr/bin/env node
import inquirer from "inquirer";
const USDConvert = [1, 0.83, 225, 7.2];
const PoundConvert = [1.21, 1, 272.3, 8.7];
const PKRConvert = [0.004, 0.003, 1, 0.032];
const YUANConvert = [0.14, 0.12, 31.22, 1];
let questions = [
  {
    type: "list",
    name: "convertee",
    choices: [
      "U.S Dollars",
      "British Pounds",
      "Pakistani Ruppees",
      "Chinese Yuan",
    ],
    message: "Choose the Currency you want to convert: ",
  },
  {
    type: "list",
    name: "converted",
    choices: [
      "U.S Dollars",
      "British Pounds",
      "Pakistani Ruppees",
      "Chinese Yuan",
    ],
    message: "Choose the Currency, you want the previous currecy convert to",
  },
  {
    type: "input",
    name: "amount",
    message: "Enter an amount to convert",
  },
];
interface answersInterface {
  convertee: string;
  converted: string;
  amount: number;
}
inquirer.prompt(questions).then((answers: answersInterface) => {
  let convertee = answers.convertee;
  let converted = answers.converted;
  let amount = answers.amount;
  let sum;

  switch (convertee) {
    case "U.S Dollars":
      switch (converted) {
        case "U.S Dollars":
          sum = amount * USDConvert[0];
          break;
        case "British Pounds":
          sum = amount * USDConvert[1];
          break;
        case "Pakistani Ruppees":
          sum = amount * USDConvert[2];
          break;
        case "Chinese Yuan":
          sum = amount * USDConvert[3];
          break;
      }
      break;
    case "British Pounds":
      switch (converted) {
        case "U.S Dollars":
          sum = amount * PoundConvert[0];
          break;
        case "British Pounds":
          sum = amount * PoundConvert[1];
          break;
        case "Pakistani Ruppees":
          sum = amount * PoundConvert[2];
          break;
        case "Chinese Yuan":
          sum = amount * PoundConvert[3];
          break;
      }
      break;
    case "Pakistani Ruppees":
      switch (converted) {
        case "U.S Dollars":
          sum = amount * PKRConvert[0];
          break;
        case "British Pounds":
          sum = amount * PKRConvert[1];
          break;
        case "Pakistani Ruppees":
          sum = amount * PKRConvert[2];
          break;
        case "Chinese Yuan":
          sum = amount * PKRConvert[3];
          break;
      }
    case "Chinese Yuan":
      switch (converted) {
        case "U.S Dollars":
          sum = amount * YUANConvert[0];
          break;
        case "British Pounds":
          sum = amount * YUANConvert[1];
          break;
        case "Pakistani Ruppees":
          sum = amount * YUANConvert[2];
          break;
        case "Chinese Yuan":
          sum = amount * YUANConvert[3];
          break;
      }
      break;
  }
  console.log(
    `The total amount after ${convertee} conversion to ${converted} is ${sum} ${converted}`
  );
});
