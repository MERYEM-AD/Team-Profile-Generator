const Employee = require("./Employee");

class Intern extends Employee{

    constructor(school){
        super();
        this.school =school;
    }
    getSchool = () => this.school;
    
    getRole(){}



}

