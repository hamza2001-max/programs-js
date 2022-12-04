const inquirer = require('inquirer');
let questions = [
    {
        type: 'checkbox',
        name: 'todo',
        choices: ['1.do dishes', '2.wash clothes', '3. study'],
        message: 'Complete your todos [press space to mark a task complete]:'
    }
];
interface todoInterface {
    todo:string
}
inquirer.prompt(questions).then((answers:todoInterface) => {
    let todos = answers.todo;
    if(todos.length <= 0){
        console.log("You have not completed any task.");
    }else{
        console.log("You have completed: ");
        console.log(...todos); 
    }
})