#! /usr/bin/env node
import inquirer from "inquirer";
class Person {
    personality = "";
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion = (answer) => {
        answer === 1
            ? (this.personality = "Extroverted.")
            : answer === 2
                ? (this.personality = "Introverted.")
                : (this.personality = "Mystery.");
    };
    getPersonality() {
        return `your personality is ${this.personality}`;
    }
}
class Student extends Person {
    name = "";
    constructor() {
        super();
        this.name = "No Name";
    }
    set Name(name) {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
}
await inquirer
    .prompt([
    {
        type: "number",
        name: "choice",
        message: "Do you like to communicate with others?[1/2]",
    },
    {
        type: "input",
        name: "name",
        message: "Enter your name:",
    },
])
    .then((answer) => {
    let value = new Student();
    value.askQuestion(answer.choice);
    value.Name = answer.name;
    console.log(`Your name is ${value.Name} and ${value.getPersonality()}`);
})
    .catch(() => console.log("You have encountered an error."));
