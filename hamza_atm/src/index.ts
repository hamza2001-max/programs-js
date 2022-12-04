const inquirer = require("inquirer");
let idArray = [123, 124, 125, 126];
let questions = [
  {
    type: "input",
    name: "id",
    message: "Enter your id, The ids are: 123, 124, 125, 126.",
  },
  {
    type: "password",
    name: "password",
    message: "Enter your password: ",
  },
];

interface answersInterface {
  password: string | number;
  id: number;
}

const idFunc = (id: number) => {
  let match = false;
  idArray.map((element: number) => {
    if (id == element) {
      match = true;
    }
  });
  return match;
};

inquirer.prompt(questions).then((answers: answersInterface) => {
  let randomValue = Math.floor(Math.random() * 10000);
  let recievedPwd = answers.password;
  let id = answers.id;
  let pwd = "hamza";
  if (idFunc(id) == true) {
    if (pwd == recievedPwd) {
      console.log(`Id- ${id}`);
      console.log(`Password- ******`);
      console.log(`Balance- $${randomValue}`);
    } else {
      console.log("wrong password.");
    }
  } else {
    console.log("wrong id.");
  }
});
