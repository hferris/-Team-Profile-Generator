const Employee = require("./Employee");
class Engineer extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email, officeNumber);
        this.github = github;
        this.officeNumber = officeNumber;
    }

    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

// module.exports = Engineer;