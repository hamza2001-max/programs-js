#! /usr/bin/env node 
import inquirer from "inquirer";

const question = [
  {
    type: "input",
    name: "paragraph",
    message: "Enter the paragraph",
  },
];

interface answerInterface {
  paragraph: string;
}
inquirer.prompt(question).then((answers: answerInterface) => {
  let paragraph = answers.paragraph;
  let words = 1;
  let letterCounter = 0;
  console.log(paragraph);
  for (let i = 0; i < paragraph.length; i++) {
    let currentLetter = paragraph[i];
    if (currentLetter !== " ") {
        letterCounter++;
    }
    if (currentLetter == " ") {
      words++;
    }
  }
  console.log("The total words are:" + words);
  console.log("The total characters are " + letterCounter);
});
