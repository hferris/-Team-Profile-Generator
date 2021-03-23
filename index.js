const inquirer = require("inquirer");
const fs = require('fs');
// const renderLicenseBadge = require("./utils/generateMarkdown");  //work on

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");



function teamName() {
    inquirer
    .prompt([
    
    {
        type: "input",
        name: "teamName",
        message: "What is the team's Name?",  
    },
    
    ]);
}
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
        const id = 1
        const email = data.email
        const officeNumber = data.officeNumber
        const teamMember = new Manager(name, id, email, officeNumber)
        finalTeamArray.push(teamMember)
        addTeamMembers();
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
        name: "managerId",
        message: "What is the Engineer's ID?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the Engineer's Email?",
    },
    {
        type: "input",
        name: "managerRole",
        message: "What is the Engineer's Github username?",
    
    }
    ])
    .then(function (data) {
        const name = data.name
        const id = finalTeamArray.length + 1
        const email = data.email
        const github = data.github
        const teamMember = new Engineer(name, id, email, github)
        finalTeamArray.push(teamMember)
        addTeamMembers()
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
        const id = finalTeamArray.length + 1
        const email = data.email
        const school = data.school
        const teamMember = new Intern(name, id, email, school)
        finalTeamArray.push(teamMember)
        addTeamMembers()
    });
}

    

