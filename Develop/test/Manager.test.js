const Manager = require("../lib/Manager")

describe('Manager', () => {


    describe("Initialization", () => {


        it('The new instance object of Manager class should be an object',() => {
            
            const manager = new Manager('Meryem',29,"meryem@gmail.com",6037896545);
            expect(typeof(manager)).toBe("object");
        });


        it('should create an object with a name, id , email and office Number',() => {

            const manager = new Manager ("Meryem",29,"meryem@gmail.com",603789654);
            // Verify that the new object has the correct properties
            expect(manager.name).toEqual("Meryem");
            expect(manager.id).toEqual(29);
            expect(manager.email).toEqual("meryem@gmail.com");
            expect(manager.officeNumber).toEqual(603789654);

        });

        it('should the data type of name is a string data type.',() => {

            const manager = new Manager ("Meryem",29,"meryem@gmail.com",603789654);
            // Verify that the new object is the correct data type
            expect(typeof(manager.name)).toEqual("string");

        });
        
        it('should the data type of id is a number data type.',() => {

            const manager = new Manager ("Meryem",29,"meryem@gmail.com",603789654);
            // Verify that the new object is the correct data type
            expect(typeof(manager.id)).toEqual("number");

        });

        it('should the data type of id is a number data type.',() => {

            const manager = new Manager ("Meryem",29,"meryem@gmail.com",603789654);
            // Verify that the new object is the correct data type
            expect(typeof(manager.officeNumber)).toEqual("number");

        });

        it('should the data type of id is a number data type.',() => {

            const manager = new Manager ("Meryem",29,"meryem@gmail.com",603789654);
            // Verify that the new object is the correct data type
            expect(typeof(manager.email)).toEqual("string");

        });
    });

    describe("getName", () => {
        
        it('should return the same name of the instance object',() => {

            const name ="Salma" 
            const managerName = new Manager(name,22,"Salma@gmail.com",578524589).getName();
            // Verify that the new object has the correct properties
            expect(managerName).toEqual(name);
        });
    });

    describe("getId", () => {
        
        it('should return the same id of the instance object',() => {

            const id = 6;
            const managerId = new Manager('Sarah',id,"Sarah@gmail.com",789658788).getId();
            // Verify that the new object has the correct properties
            expect(managerId).toEqual(id);
        });
    });

    describe("getEmail", () => {
        
        it('should return the same email of the instance object',() => {

            const email = "Ali@gmail.com";
            const managerEmail = new Manager('Ali',5,email,897456211).getEmail();
            // Verify that the new object has the correct properties
            expect(managerEmail).toEqual(email);
        });
    });

    describe("getOfficeNumber", () => {
        
        it('should return the same phone number of the instance object',() => {

            const phone = 897456211;
            const managerPhone = new Manager('Ali',5,"Ali@gmail.com",phone).getOfficeNumber();
            // Verify that the new object has the correct properties
            expect(managerPhone).toEqual(phone);
        });
    });
    
    describe("getRole", () => {
        
        it('should return Manager for an instance object of class Manager ',() => {
            
            const manager = new Manager('Anna',30,"Anna@gmail.com",478965288).getRole();
            // Verify that the new object has the correct properties
            expect(manager).toEqual("Manager");
        });
    });

  });
