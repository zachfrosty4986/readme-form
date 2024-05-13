// TODO: Include packages needed for this application (defining variables) (inquier package, color) (Packages for node)
const inquirer = require('inquirer');
const fs = require("fs");
const colors = require("colors");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input (inquirer README docs website)
const questions = [
  {
    type: 'title',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please breifly describe your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions to use your project',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Please selct from an MIT, Apache, or Boost license',
  },
  {
    type: 'input',
    name: 'features',
    message: 'Please add any additional features your project contains here',
  },
  {
    type: 'input',
    name: 'collaborators',
    message: 'Please list all collaborators for this project',
  },
  { 
    type: "list",
    message: "What color would you like to use?",
    name: "color",
    choices: ["red", "blue", "green", "yellow", "cyan", "magenta", "Black"],
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: 'Would you like to submit your data now?',
  },
];


// TODO: Create a function to write README file (Need 'fs')
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.error(`Error writing to ${fileName}: ${err}`);
        return;
    }
    console.log(`${fileName} has been created successfully.`);
});
}

// TODO: Create a function to initialize app (initialize inquier)
function init() {
  inquirer.prompt(questions).then((answers) => {
  writeToFile('New_README.md', generateMarkdown(answers))
  console.log('Successfully wrote to README.md!')
  })
};

// Function call to initialize app
init();
