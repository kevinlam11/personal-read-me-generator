// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
      },
    ])
    .then((answers) => console.log(answers));
}

// Function call to initialize app
init();
