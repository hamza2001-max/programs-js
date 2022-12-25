#! /usr/bin/env node
import inquirer from "inquirer";

class Person {
  private personality: string = "";
  constructor() {
    this.personality = "Mystery";
  }

  public askQuestion = (answer: number) => {
    answer === 1
      ? (this.personality = "Extroverted.")
      : answer === 2
      ? (this.personality = "Introverted.")
      : (this.personality = "Mystery.");
  };

  public getPersonality() {
    return `your personality is ${this.personality}`;
  }
}

class Student extends Person {
  private name: string = "";
  constructor() {
    super();
    this.name = "No Name";
  }

  public set Name(name: string) {
    this.name = name;
  }
  public get Name() {
    return this.name;
  }
}

interface personalityInterface {
  choice: number;
  name: string;
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
  .then((answer: personalityInterface) => {
    let value = new Student();
    value.askQuestion(answer.choice);
    value.Name = answer.name;
    console.log(`Your name is ${value.Name} and ${value.getPersonality()}`);
  })
  .catch(() => console.log("You have encountered an error."));
