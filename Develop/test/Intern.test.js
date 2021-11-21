const Intern = require("../lib/Intern")

describe('Intern', () => {


    describe("Initialization", () => {

        it('The new instance object of Intern class should be an object',() => {
            
            const intern = new Intern ('Meryem',29,"meryem@gmail.com","UNH");
            expect(typeof(intern)).toBe("object");
        });

        it('should create an object with a name, id , email and school',() => {

            const intern = new Intern ('Meryem',29,"meryem@gmail.com","UNH");
            // Verify that the new object has the correct properties
            expect(intern.name).toEqual("Meryem");
            expect(intern.id).toEqual(29);
            expect(intern.email).toEqual("meryem@gmail.com");
            expect(intern.school).toEqual("UNH");
        });
        
        it('should the data type of name is a string data type.',() => {

            const intern = new Intern ('Meryem',29,"meryem@gmail.com","UNH");
            // Verify that the new object is the correct data type
            expect(typeof(intern.name)).toEqual("string");

        });
        
        it('should the data type of id is a number data type.',() => {
            const intern = new Intern ('Meryem',29,"meryem@gmail.com","UNH");
            // Verify that the new object is the correct data type
            expect(typeof(intern.id)).toEqual("number");

        });

        it('should the data type of email is a number data type.',() => {
            const intern = new Intern ('Meryem',29,"meryem@gmail.com","UNH");
            // Verify that the new object is the correct data type
            expect(typeof(intern.email)).toEqual("string");

        });

        it('should the data type of school is a number data type.',() => {
            const intern = new Intern ('Meryem',29,"meryem@gmail.com","UNH");
            // Verify that the new object is the correct data type
            expect(typeof(intern.school)).toEqual("string");

        });

    });

    describe("getName", () => {
        
        it('should return the same name of the instance object',() => {

            const name ="Salma" 
            const internName = new Intern (name,22,"Salma@gmail.com","UNH").getName();
            // Verify that the new object has the correct properties
            expect(internName).toEqual(name);
        });
    });

    describe("getId", () => {
        
        it('should return the same id of the instance object',() => {

            const id = 6;
            const internId = new Intern ('Sarah',id,"Sarah@gmail.com","UNH").getId();
            // Verify that the new object has the correct properties
            expect(internId).toEqual(id);
        });
    });

    describe("getEmail", () => {
        
        it('should return the same email of the instance object',() => {

            const email = "Ali@gmail.com";
            const internEmail = new Intern ('Ali',5,email,"UNH").getEmail();
            // Verify that the new object has the correct properties
            expect(internEmail).toEqual(email);
        });
    });

    describe("getSchool", () => {
        
        it('should return the name of school of the instance object',() => {

            const schoolName = "UNH";
            const internSchool = new Intern ('Ali',5,"Ali@gmail.com",schoolName).getSchool();
            // Verify that the new object has the correct properties
            expect(internSchool).toEqual(schoolName);
        });
    });
    
    describe("getRole", () => {
        
        it('should return Manager for an instance object of class Manager ',() => {
            
            const intern = new Intern ('Anna',30,"Anna@gmail.com","UNH").getRole();
            // Verify that the new object has the correct properties
            expect(intern).toEqual("Intern");
        });
    });

  });
