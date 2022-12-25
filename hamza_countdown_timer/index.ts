#! /usr/bin/env node
import inquirer from "inquirer";
interface timeInterface {
  year: number;
  month: number;
  date: number;
  hours: number;
  minutes: number;
  seconds: number;
}

let currentYearValidation = new Date().getFullYear();
inquirer
  .prompt([
    {
      type: "number",
      name: "year",
      message: "Enter the year: ",
      default: 0,
      validate: (year) => {
        if (year < currentYearValidation) {
          console.log(
            "Invalid year, the input must be greater or equal to the current year"
          );
          process.exit();
        } else {
          return true;
        }
      },
    },
    {
      type: "list",
      name: "month",
      message: "Enter the month: ",
      choices: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      default: 0,
    },
    {
      type: "number",
      name: "date",
      message: "Enter the date: ",
      default: 0,
      validate: (date) => {
        if (date < 1 || date > 31) {
          console.log("invalid input for date.");
          process.exit();
        } else {
          return true;
        }
      },
    },
    {
      type: "number",
      name: "hours",
      message: "Enter the hours: ",
      default: 0,
      validate: (hours) => {
        if (hours < 0 || hours > 24) {
          console.log("invalid input for hours.");
          process.exit();
        } else {
          return true;
        }
      },
    },
    {
      type: "number",
      name: "minutes",
      message: "Enter the minutes: ",
      default: 0,
      validate: (minutes) => {
        if (minutes < 0 || minutes > 60) {
          console.log("invalid input for minutes.");
          process.exit();
        } else {
          return true;
        }
      },
    },
    {
      type: "number",
      name: "seconds",
      message: "Enter the seconds: ",
      default: 0,
      validate: (seconds) => {
        if (seconds < 0 || seconds > 60) {
          console.log("invalid input for seconds.");
          process.exit();
        } else {
          return true;
        }
      },
    },
  ])
  .then((answer: timeInterface) => {
    let year = answer.year,
      month = answer.month,
      date = answer.date;
    let hours = answer.hours,
      minutes = answer.minutes,
      seconds = answer.seconds;
    let countDownDate = new Date(
      `${month} ${date}, ${year} ${hours}:${minutes}:${seconds}`
    ).getTime();
    let time = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let newDay = Math.floor(distance / (1000 * 60 * 60 * 24));
      let newHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let newMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let newSeconds = Math.floor((distance % (1000 * 60)) / 1000);
      console.log(`${newDay}d:${newHours}h:${newMinutes}m:${newSeconds}s`);
      if (distance <= 0) {
        clearInterval(time);
      }
    }, 1000);
    
  });
