// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?'
    },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide a installation intruction for your project:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide a usage information of your project:'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide a contribution guidelines for your project:'
      },  
      {
        type: 'input',
        name: 'tests',
        message: 'Provide test intructions for your project:'
      }, 
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'None']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Provide your GitHub Profile:'
      },  
      {
        type: 'input',
        name: 'email',
        message: 'Provide your email:'
      },  
  
];

// TODO: Create a function to write the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md file has been generated!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();