const inquirer = require('inquirer'); 
const fs = require('fs');
const Employee = require('./lib/Employee')

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter manager name.',
         validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a manager name.');
                    return false;
            }
        }
    },
    {
        name: 'id',
        message: 'What is your employee ID?',
        validate: idInput => {
             if (idInput) {
                return true;
            } else {
                    console.log('Enter your employee ID number.');
                return false;
             }
        }
    },
    {
         type: 'input',
         name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                 console.log('Enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter an office number.',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                 console.log('Enter an office number.');
                return false;
            }
        }
    },
];

const promptEmployees = employeeData => {
    if (!employeeData.employ) {
        employeeData.employ = [];
    }
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What employee did you want to add?',
            choices: ['Engineer, Intern, None']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('PLease enter your name!');
                    return false;
                }
            }
        },
    ])

}

function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log(data)
    })
}

init();