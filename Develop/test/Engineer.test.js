const Engineer = require("../lib/Engineer")

describe('Engineer', () => {


    describe("Initialization", () => {

        it('The new instance object of Engineer class should be an object',() => {
            
            const enginneer = new Engineer('Meryem',29,"meryem@gmail.com","MERYEM-AD");
            expect(typeof(enginneer)).toBe("object");
        });



        it('should create an object with a name, id , email and github account',() => {

            const engineer = new Engineer('Meryem',29,"meryem@gmail.com","MERYEM-AD");
            // Verify that the new object has the correct properties
            expect(engineer.name).toEqual("Meryem");
            expect(engineer.id).toEqual(29);
            expect(engineer.email).toEqual("meryem@gmail.com");
            expect(engineer.github).toEqual("MERYEM-AD");
        });

        it('should the data type of name is a string data type.',() => {
            const engineer = new Engineer('Meryem',29,"meryem@gmail.com","MERYEM-AD");
            // Verify that the new object is the correct data type
            expect(typeof(engineer.name)).toEqual("string");

        });
        
        it('should the data type of id is a number data type.',() => {

            const engineer = new Engineer('Meryem',29,"meryem@gmail.com","MERYEM-AD");
            // Verify that the new object is the correct data type
            expect(typeof(engineer.id)).toEqual("number");

        });

        it('should the data type of email is a string data type.',() => {

            const engineer = new Engineer('Meryem',29,"meryem@gmail.com","MERYEM-AD");
            // Verify that the new object is the correct data type
            expect(typeof(engineer.email)).toEqual("string");

        });

        it('should the data type of github is a string data type.',() => {
            const engineer = new Engineer('Meryem',29,"meryem@gmail.com","MERYEM-AD");
            // Verify that the new object is the correct data type
            expect(typeof(engineer.github)).toEqual("string");

        });

    });

    describe("getName", () => {
        
        it('should return the same name of the instance object',() => {

            const name ="Salma" 
            const engineerName = new Engineer(name,22,"Salma@gmail.com","SALMA-FK").getName();
            // Verify that the new object has the correct properties
            expect(engineerName).toEqual(name);
        });
    });

    describe("getId", () => {
        
        it('should return the same id of the instance object',() => {

            const id = 6;
            const engineereId = new Engineer('Sarah',id,"Sarah@gmail.com","SARAH-QW").getId();
            // Verify that the new object has the correct properties
            expect(engineereId).toEqual(id);
        });
    });

    describe("getEmail", () => {
        
        it('should return the same email of the instance object',() => {

            const email = "Ali@gmail.com";
            const engineerEmail = new Engineer('Ali',5,email,"ALI-FH").getEmail();
            // Verify that the new object has the correct properties
            expect(engineerEmail).toEqual(email);
        });
    });

    describe("getGithub", () => {
        
        it('should return the Github account of the instance object',() => {

           const github = "ADAM-ER";
            const engineerGithub = new Engineer('Sarah',8,"Adam@gmail.com",github).getGithub();
            // Verify that the new object has the correct properties
            expect(engineerGithub).toEqual(github);
    
        });
    });

    
    describe("getRole", () => {
        
        it('should return Engineer for an instance object of class Engineer ',() => {
            
            const engineer = new Engineer('Anna',30,"Anna@gmail.com","ANNA-KI").getRole();
            // Verify that the new object has the correct properties
            expect(engineer).toEqual("Engineer");
        });
    });

  });
