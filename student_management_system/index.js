#! /usr/bin/env node
import inquirer from "inquirer";
class ManagementSystem {
    newStudent = {
        id: 0,
        name: "",
        balance: 0,
        coursesEnrolled: [""],
        feesPaid: false,
    };
    students = [];
    addNewStudent(newStudent) {
        this.students = [...this.students, newStudent];
    }
    viewBalance() {
        if (this.students.length == 0) {
            console.log("No students have been enrolled.");
            return;
        }
        return this.newStudent.balance;
    }
    showStatusOfAllStudents() {
        if (this.students.length == 0) {
            console.log("No students have been enrolled.");
            return;
        }
        this.students.map((stnt) => {
            console.log(`id: ${stnt.id}\nname: ${stnt.name}\nbalance: ${stnt.balance}\nCourses Enrolled: ${stnt.coursesEnrolled}\nFees Status: ${stnt.feesPaid}\n`);
        });
    }
}
const system = new ManagementSystem();
async function main() {
    const questions = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Choices: ",
            choices: [
                "Enroll new student",
                "Display all the students and their details",
                "Display the current student balance",
                "Exit",
            ],
        },
    ]);
    if (questions.choice === "Enroll new student") {
        const newStudent = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter your Name",
                default: "John Doe",
            },
            {
                type: "number",
                name: "balance",
                message: "Enter your Balance [minimum: 500]",
                default: 0,
                validate: (answer) => {
                    if (answer >= 500) {
                        return true;
                    }
                    else {
                        console.log("\nbalance is too low.");
                        return false;
                    }
                },
            },
            {
                type: "checkbox",
                name: "courses",
                message: "choose the courses for yourself",
                choices: ["Typescript", "React", "NodeJs", "NextJs"],
                default: "Javascript",
            },
            {
                type: "list",
                name: "payFees",
                message: "Do you want to pay the fees now?",
                choices: ["Yes", "No"],
            },
        ]);
        let feesStatus = false;
        if (newStudent.payFees === "Yes") {
            feesStatus = true;
            newStudent.balance -= 500;
        }
        const studentObj = {
            id: Math.floor(Math.random() * 99999) + 1000,
            name: newStudent.name,
            balance: newStudent.balance,
            coursesEnrolled: newStudent.courses,
            feesPaid: feesStatus,
        };
        system.addNewStudent(studentObj);
        main();
    }
    if (questions.choice === "Display all the students and their details") {
        console.log("The status of all the students is: ");
        system.showStatusOfAllStudents();
        main();
    }
    if (questions.choice === "Display the current student balance") {
        console.log("The balance of this student is: ");
        console.log(system.viewBalance());
        main();
    }
    if (questions.choice === "Exit") {
        return;
    }
}
main();
