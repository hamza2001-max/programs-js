#! /usr/bin/env node
import inquirer from "inquirer";

interface personalInfoInterface {
  fname: string;
  lname: string;
  gender: string;
  age: number;
  mobileNumber: number;
  initialBalance: number;
}
class Customer {
  protected customer: personalInfoInterface = {
    fname: "",
    lname: "",
    gender: "",
    age: 0,
    mobileNumber: 0,
    initialBalance: 0,
  };

  public createAccount(answer: personalInfoInterface) {
    this.customer = answer;
  }

  public showInfo() {
    console.log(
      `Name: ${this.customer.fname} ${this.customer.lname}\nGender: ${this.customer.gender}\nAge: ${this.customer.gender}\nAge: ${this.customer.age}\nMobile Number: ${this.customer.mobileNumber}\n`
    );
  }
}
class BankAccount extends Customer {
  creditMoney = (amount: number) => {
    if (amount <= 0) {
      console.log("invalid amount.");
      return;
    }
    if (amount > 100) {
      this.customer.initialBalance = amount - 1;
      console.log(
        `A total amount of $${amount} has been deposited in your account, with a tax of 1$.`
      );
    } else if (amount < 100) {
      this.customer.initialBalance = amount;
    }
  };

  debitMoney = (amount: number) => {
    if (this.customer.initialBalance < amount || amount <= 0) {
      console.log("invalid amount.");
      return;
    } else {
      this.customer.initialBalance -= amount;
      console.log(
        `A total amount of $${amount} has been extracted from your account.`
      );
    }
  };

  checkBalance = () => {
    return this.customer.initialBalance;
  };
}

let question: personalInfoInterface = await inquirer.prompt([
  {
    type: "input",
    name: "fname",
    message: "lets create an account.\nEnter your first name:",
  },
  {
    type: "input",
    name: "lname",
    message: "Enter your last name:",
  },
  {
    type: "list",
    name: "gender",
    message: "What is your gender?",
    choices: ["Male", "Female"],
  },
  {
    type: "number",
    name: "age",
    message: "Enter your age:",
  },
  {
    type: "number",
    name: "mobileNumber",
    message: "Enter your mobile number:",
  },
  {
    type: "number",
    name: "initialBalance",
    message: "Enter your initial balance:",
  },
]);

let account = new BankAccount();
account.createAccount(question);

interface answerInterface {
  choice: "credit money" | "debit money" | "check balance" | "exit";
}
const main = async () => {
  let answer: answerInterface = await inquirer.prompt({
    type: "list",
    name: "choice",
    choices: ["credit money", "debit money", "check balance", "exit"],
  });
  switch (answer.choice) {
    case "credit money":
      let credit = await inquirer.prompt({
        type: "number",
        name: "credit",
        message: "how much do you want to deposit in your account?",
      });
      account.creditMoney(credit.credit);
      break;
    case "debit money":
      let debit = await inquirer.prompt({
        type: "number",
        name: "debit",
        message: "how much do you want to extract from your account?",
      });
      account.debitMoney(debit.debit);
      break;
    case "check balance":
      console.log(`Your total balance is ${account.checkBalance()}`);
      break;
    case "exit":
      return;
    default:
      console.log("invalid case.");
      break;
  }
  main();
};
main();
