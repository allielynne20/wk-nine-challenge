const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');
// array of questions for user
inquirer
const promptInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a description of your project.');
                    return false
                }
            }
        },
        // {
        //    Table of Contents goes here.  
        // }
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions or attach a helpful link/ file.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide installation instructions for your project.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions on how the project is meant to be used or attach a helpful link/ file.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide usage instructions for your project.');
                    return false
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license would you like your project covered under?',
            choices: ['MIT', 'ISC', 'Apache-License 2.0', 'BSD']
        },
        //Contribution section goes here.
        {
            type: 'input',
            name: 'test',
            message: 'Provide ways to test the project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide ways to test the project.');
                    return false
                }
            }
        },
        //Questions section goes here.
        {
            type: 'input',
            name: 'email',
            message: 'Provide your contact email.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your contact email.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'githubusername',
            message: 'Provide your GitHub username.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub username.');
                    return false
                }
            }
        }
    ])
};

promptInfo()
    .then(readmeData => {
        console.log(readmeData);
        const pageMD = generateMarkdown(readmeData);
        writeToFile('readme.md', pageMD);
    })

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

