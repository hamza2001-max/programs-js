// #! /usr/bin/env node
// const inquirer =
// import inquirer from "inquirer";
// import { inquirer } from "inquirer";
import inquirer from "inquirer";
let question = [
    {
        type: "input",
        name: "first_variable",
        message: "Enter the first variable",
        validate: (answer) => {
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
        validate: (answer) => {
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
async function main() {
    inquirer
        .prompt(question)
        .then((answers) => {
        const firstVar = answers.first_variable;
        const secondVar = answers.second_variable;
        const operator = answers.operator;
        if (operator == "+") {
            console.log(`${firstVar} ${operator} ${secondVar} = ${parseInt(firstVar) + parseInt(secondVar)}`);
        }
        if (operator == "-") {
            console.log(`${firstVar} ${operator} ${secondVar} = ${firstVar - secondVar}`);
        }
        if (operator == "*") {
            console.log(`${firstVar} ${operator} ${secondVar} = ${firstVar * secondVar}`);
        }
        if (operator == "/") {
            console.log(`${firstVar} ${operator} ${secondVar} = ${firstVar / secondVar}`);
        }
    })
        .catch((error) => {
        console.log(error);
    });
}
main();
