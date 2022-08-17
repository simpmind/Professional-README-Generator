// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your Github Username ",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project',
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo?',
    },
    {
        type: 'input',
        name: 'license',
        choices: ['Apache', 'GNU', 'MIT', 'Mozilla', 'ISC', 'none' ]
    }
   

];



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
  
    // fs.writeFile(fileName, generateMarkdown(data) , function (err) {
    //     if (err) {
    //         return console.log(err);
    //     }

    //     console.log("Generating README...");
    // })
// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response)=>{
     
        fs.writeFile('README.md', generateMarkdown(response) , function (err) {
            if (err) {
                return console.log(err);
            }
    
            console.log("Generating README...");
        })
        
       
    })
}

// Function call to initialize app
init();
