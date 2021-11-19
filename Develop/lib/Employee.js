class Employee {

    constructor(id,name,email){
        this.id=id;
        this.name=name;
        this.email=email;
    }

    getName = () => this.name; 

    getId = () => this.id;

    getEmail = () => this.email;

    getRole(){}

    
}

module.exports=Employee;