// TODO: Include packages needed for this application (defining variables) (inquier package, color) (Packages for node)
const inquirer = require('inquirer');
const colors = require("colors");
// TODO: Create an array of questions for user input (inquirer README docs website)
const questions = [];
const generateREADME = ({});

// TODO: Create a function to write README file (Need 'fs')
const fs = require("fs");
function writeToFile(fileName, data) {

  fs.writeFile('README.md', readMePageContent, (err) => {
    if (err) {
        console.error(`Error writing to ${fileName}: ${err}`);
        return;
    }
    console.log(`${fileName} has been created successfully.`);
});
}

// TODO: Create a function to initialize app (initialize inquier)
function init() {
  inquirer.prompt([
      {
        type: 'title',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
      },
      {
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?',
      },
      {
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
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
        message: 'Would you like to submit your Data?',
      },
]).then((answers) => {
  const readMePageContent = generateREADME(answers);

const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md!'))
    .catch((err) => console.error(err));
};
})

};
// Function call to initialize app
init();
