const inquirer = require("inquirer");
let questions = [
  {
    type: "input",
    name: "guess",
    message: "Enter a number between 1 and 10",
    validate: (answer: number) => {
      if (isNaN(answer)) {
        return false;
      }
      return true;
    },
  },
];

interface answerInterface {
  guess: number;
}
inquirer.prompt(questions).then((answer: answerInterface) => {
  const recievedValue = answer.guess;
  const randomValue = Math.floor(Math.random() * 11);
  if (recievedValue == randomValue) {
    console.log("correct");
    console.log(`the correct value was ${randomValue}`);
  } else {
    console.log("wrong");
    console.log(`the correct value was ${randomValue}`);
}
});
