const Employee = require("../lib/Employee");

describe('Employee', () => {


    describe("Initialization", () => {

        it('The new instance object of Employee class should be an object ',() => {
            
            const employee = new Employee('Meryem',29,"meryem@gmail.com");
            expect(typeof(employee)).toBe("object");
        });


        it('should create an object with a name, id and email.',() => {
            
            const employee = new Employee('Meryem',29,"meryem@gmail.com");
            // Verify that the new object has the correct properties
            expect(employee.name).toEqual("Meryem");
            expect(employee.id).toEqual(29);
            expect(employee.email).toEqual("meryem@gmail.com");
        });

        it('should the data type of name is a string data type.',() => {

            const employee = new Employee ("Meryem",29,"meryem@gmail.com");
            // Verify that the new object is the correct data type
            expect(typeof(employee.name)).toEqual("string");

        });
        
        it('should the data type of id is a number data type.',() => {

            const employee = new Employee ("Meryem",29,"meryem@gmail.com",603789654);
            // Verify that the new object is the correct data type
            expect(typeof(employee.id)).toEqual("number");

        });

        it('should the data type of id is a number data type.',() => {

            const employee = new Employee ("Meryem",29,"meryem@gmail.com");
            // Verify that the new object is the correct data type
            expect(typeof(employee.email)).toEqual("string");

        });
    });

    describe("getName", () => {
        
        it('should return the same name of the instance object',() => {

            const name ="Salma" 
            const employeeName = new Employee(name,22,"Salma@gmail.com").getName();
            // Verify that the new object has the correct properties
            expect(employeeName).toEqual(name);
        });
    });

    describe("getId", () => {
        
        it('should return the same id of the instance object',() => {

            const id = 6;
            const employeeId = new Employee('Sarah',id,"Sarah@gmail.com").getId();
            // Verify that the new object has the correct properties
            expect(employeeId).toEqual(id);
        });
    });

    describe("getEmail", () => {
        
        it('should return the same email of the instance object',() => {

            const email = "Ali@gmail.com";
            const employeeEmail = new Employee('Sarah',5,email).getEmail();
            // Verify that the new object has the correct properties
            expect(employeeEmail).toEqual(email);
        });
    });

    
    describe("getRole", () => {
        
        it('should return Employee for an instance object of class Employee ',() => {
            
            const employee = new Employee('Anna',30,"Anna@gmail.com").getRole();
            // Verify that the new object has the correct properties
            expect(employee).toEqual("Employee");
        });
    });

  });
