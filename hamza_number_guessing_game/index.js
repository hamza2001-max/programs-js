#! /usr/bin/env node
import inquirer from "inquirer";
let questions = [
    {
        type: "input",
        name: "guess",
        message: "Enter a number between 1 and 10",
        validate: (answer) => {
            if (isNaN(answer)) {
                return false;
            }
            return true;
        },
    },
];
inquirer.prompt(questions).then((answer) => {
    const recievedValue = answer.guess;
    const randomValue = Math.floor(Math.random() * 11);
    if (recievedValue == randomValue) {
        console.log("correct");
        console.log(`the correct value was ${randomValue}`);
    }
    else {
        console.log("wrong");
        console.log(`the correct value was ${randomValue}`);
    }
});
