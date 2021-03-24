const inquirer = require("inquirer");
const fs = require('fs');
// const renderLicenseBadge = require("./utils/generateMarkdown");  //work on

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const team = [];
gatherTeam();

function gatherTeam() {
    inquirer
    .prompt([
    
    {
        type: "list",
        name: "addWorker",
        message: "add worker or `complete`",  
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Complete",
        ]
    }
    ])
    .then(function(data){
        const employeeRole = data.addWorker;
        if (employeeRole === "Manager") {
            managerDetails();
        }
        else if (employeeRole === "Engineer") {
            engineerDetails();
        }
        else if (employeeRole === "Intern") {
            internDetails();
        }
        else if (employeeRole === "Complete") {
            giveTeam();
        }
    });
}

    function managerDetails() {
    inquirer
    .prompt([
    
    {
        type: "input",
        name: "managerName",
        message: "What is the Manager's Name?",
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the Manager's ID?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the Manager's Email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?",
    }

    ])

    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const officeNumber = data.officeNumber
        const manager = new Manager(name, id, email, officeNumber)
        team.push(manager);
        gatherTeam();
    });
}


    function engineerDetails() {
    inquirer
    .prompt([
    
    {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's Name?",
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the Engineer's ID?",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's Email?",
    },
    {
        type: "input",
        name: "engineerRole",
        message: "What is the Engineer's Github username?",
    
    }
    ])
    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const githubUser = data.githubUser
        const engineer = new Engineer(name, id, email, githubUser)
        team.push(engineer);
        gatherTeam();
    });

}
    
    function internDetails() {
    inquirer
    .prompt([

    {
        type: "input",
        name: "internName",
        message: "What is the intern's Name?",
    },
    {
        type: "input",
        name: "internId",
        message: "What is the intern's  ID?",
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the intern's Email?",
    },
    {
        type: "input",
        name: "enternEmail",
        message: "What is the intern's school name?",
    }

    ])
    .then(function (data) {
        const name = data.name
        const id = data.name
        const email = data.email
        const school = data.school
        const intern = new Intern(name, id, email, school)
        team.push(intern);
        gatherTeam();
    });
}

    

