// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'please write your README title:'
    },
    {
      type: 'input',
      name: 'first_name',
      message: "What's your first name:",
    },
    {
      type: 'input',
      name: 'last_name',
      message: "What's your last name:",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a description of whatever it is you are using this for:'
      },
      {
          type: 'checkbox',
          name: 'license',
          message: 'which license do you want to use?',
          choices: [
              'MIT',
              'CreativeCommons',
              'Apache',
          ]
      }
    ]

// TODO: Create a function to write README file
function writeToFile(fakeReadme) {
    fs.writeFile('README.md', fakeReadme, (err) => {
        err ? console.error(err) : console.log('success')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));


        // make the fake string
        // gibe it to writeToFile(fakeReadme)
       const fake= generateMD(answers)
        writeToFile(fake)
      });
}

// Function call to initialize app
init();
