#! /usr/bin/env node
import inquirer from "inquirer";
async function main() {
    const quiz = await inquirer.prompt([
        {
            type: "list",
            name: "setQ",
            message: "Typescript in the ______ of javascript",
            choices: ["subset", "superset", "sibling", "parent"],
        },
        {
            type: "list",
            name: "xmlQ",
            message: "The jsx equivalent of jsx is ______",
            choices: ["ttsx", "jtsx", "tsx", "xls"],
        },
        {
            type: "list",
            name: "mainTypesQ",
            message: "The main types of typescript are ______",
            choices: [
                "Object String Number",
                "Array Object Boolean",
                "Boolean Number String",
                "Object Array Symbol",
            ],
        },
        {
            type: "list",
            name: "TFQ1",
            message: "True or False: TypeScript will always correctly infer the type of an array",
            choices: ["True", "False"],
        },
        {
            type: "list",
            name: "TFQ2",
            message: "True or False: The use of Types and Interfaces are almost always interchangeable",
            choices: ["True", "False"],
        },
    ]);
    let score = 0;
    if (quiz.setQ === "superset") {
        score++;
    }
    else {
        score--;
    }
    if (quiz.xmlQ === "tsx") {
        score++;
    }
    else {
        score--;
    }
    if (quiz.mainTypesQ === "Boolean Number String") {
        score++;
    }
    else {
        score--;
    }
    if (quiz.TFQ1 === "False") {
        score++;
    }
    else {
        score--;
    }
    if (quiz.TFQ2 === "True") {
        score++;
    }
    else {
        score--;
    }
    console.log(`Your total score is ${score}`);
    console.log("The correct answers were: ");
    console.log("1.superset");
    console.log("2.tsx");
    console.log("3.Boolean Number String");
    console.log("4.False");
    console.log("5.True");
    await inquirer
        .prompt({
        type: "list",
        name: "tryAgain",
        message: "do you want to try again",
        choices: ["Yes", "No"],
    })
        .then((answer) => {
        if (answer.tryAgain === "Yes") {
            main();
        }
        else {
            return;
        }
    });
}
main();
