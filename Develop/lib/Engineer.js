const Employee = require("./Employee");

class Enginneer extends Employee{

    constructor(github){
        super();
        this.github =github;
    }
    getGithub = () => this.getGithub;
    
    getRole(){}


}