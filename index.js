// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

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
        type: "list",
        message: "What license will you be using for this project?",
        name: "license",
        choices: ["MIT", "IBM", "Unlicense", "Perl", "Mozilla"],
      },
      {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
      },
      {
        type: "input",
        message: "What is the installation process?",
        name: "installation",
      },
      {
        type: "input",
        message: "What is the contribution guidelines?",
        name: "contribution",
      },
      {
        type: "input",
        message: "What is the test instructions?",
        name: "instructions",
      },
      {
        type: "input",
        message: "What is the use of this app?",
        name: "usage",
      },

      {
        type: "input",
        message: "Do you have any questions?",
        name: "questions",
      },
    ])
    .then((answers) => {
      console.log(generateMarkdown(answers));
      fs.writeFileSync(
        path.join(process.cwd(), "newReadMe.md"),
        generateMarkdown(answers)
      );
    });
}

// Function call to initialize app
init();
