const inquirer = require('inquirer'); 
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/page-template');
const {writeFile} = require('./src/generate-site.js');

const team = [];

const managerQuestion = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'manager',
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
        type: 'input',
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
    }
])
}

const specificQuestions = newEmployee => {
    return inquirer.prompt ([
    {
        type: 'list',
        name: 'role',
        message: 'What employee did you want to add?',
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter their name.',
         validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name.');
                    return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their ID number?',
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
        message: 'What is their email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                 console.log('Enter an email!');
                return false;
            }
        }
    },
    //Engineer
    {
        type: 'input',
        name: 'github',
        message: "What is their github username?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a github username");
                return false;
            }
        },
        when: function({role}){
            if(role === `Engineer`){
                return true
            } else{
                return false
            }
        } 
    },
    //Intern
    {
        type: 'input',
        name: 'school',
        message: "What is their school?",
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log("Enter their school.");
                return false;
            }
        },
        when: function({role}){
            if(role === `Intern`){
                return true
            } else{
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmNewEmployee',
        message: 'Would you like to enter another employee?',
        default: false
    }

])
.then(employeeData => {
    console.log(newEmployee);
    //newEmployee.person.push(employeeData);
    if (employeeData.confirmNewEmployee) {
        return specificQuestions(employeeData);
    } else {
        return employeeData;
    }
})
};


managerQuestion()
.then(specificQuestions)
.then(employeeData =>{
    const{name, id, email, officeNumber} = employeeData;
    console.log(employeeData);
       team.push(new Manager(name, id, email, officeNumber));
    if (employeeData.role === 'Engineer'){
       team.push(new Engineer(name, id, email, employeeData.github));
   } else if(employeeData.role === 'Intern'){
       team.push(new Intern(name, id, email, employeeData.school));
       console.log(team);
   }
})
.then (writeFile('./dist/index.html', generateHTML(team)))
// .then(specificQuestions)
// .then(newEmployee => {
//     return generateHTML(newEmployee);
// })
// .then(pageHTML => {
//     return writeFile(pageHTML);
// })
// .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
// })
// .then(copyFileResponse => {
//     console.log(copyFileResponse);
// })
// .catch(err => {
//     console.log(err);
// });