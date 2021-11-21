const Employee = require("./Employee");

class Enginneer extends Employee{

    constructor(name,id,email,github){
        super(name,id,email);
        this.github =github;
    }
    getGithub = () => this.github;
    
    getRole = () => "Engineer";


}

module.exports= Enginneer;