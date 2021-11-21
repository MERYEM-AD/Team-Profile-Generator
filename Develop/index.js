// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { FORMERR } = require('dns');

const file = [];  //store all sections of the Html into an array


// CkeckEmptyVal function check if the input varible passed by the User [MANAGER] is empty or not 
const CkeckEmptyVal = (value) =>{   
    const val = value.trim();
    if (val === "")return "Please , Tap a value :";
    return val;
 }

 //Stringdata function check if the input varible  includes / matches the value of the stringRule varible or not 
const Stringdata = (value) => {

    const stringRule = /^[0-9a-zA-Z\s]*$/;
    const val = CkeckEmptyVal(value);
     // The match() is a function in JavaScript used to  searches a string for a match against a regular expression
    if(val.match(stringRule)) return true; else return "Please , Try again and Enter only String and Numbers.";

} 
 //NameData function check if the input varible  includes / matches the value of the nameRule varible or not 
const NameData = (value) => {

    const nameRule = /^[a-zA-Z\s]*$/;
    const val = CkeckEmptyVal(value);
     // The match() is a function in JavaScript used to  searches a string for a match against a regular expression
    if(val.match(nameRule)) return true; else return "Please , Try again and Enter a validate name (No Numbers or Characteres).";

}
 //NumberData function check if the input varible  includes / matches the value of the numberRule varible or not 
const NumberData = (value) => {

    const numberRule = /^[0-9]*$/;
    const val = CkeckEmptyVal(value);
    if(val.match(numberRule)) return true; else return "Please , Try again and Enter only Numbers.";
}
 //EmailData function check if the input varible  includes / matches the value of the emailRule varible or not 
const EmailData = (value) => {

    const val = CkeckEmptyVal(value);
    const emailRule = /[@]/g;
    if(val.match(emailRule)) return true; else return "Please , Try again and Enter a valide email like Meryem@gmail.com.";

}


const managerQuestions = [ 

    {
        type: 'input',
        name: 'teamName',
        message: 'What is The Team'+" '"+' s name  ? ',
        validate : Stringdata


    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the Manager'+" '"+'s name  ? ',
        validate : NameData


    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the Manager'+" '"+'s id  ? ',
        validate :NumberData


    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Manager'+" '"+'s email  ?',
        validate : EmailData
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Manager'+" '"+'s office Number  ?',
        validate : NumberData
    }
];


const engineerQuestion= [ 
    {
        type: 'input',
        name: 'name',
        message: 'What is the Engineer'+" '"+'s name  ? ',
        validate : NameData


    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the Engineer'+" '"+'s id  ? ',
        validate : NumberData


    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Engineer'+" '"+'s email  ?',
        validate : EmailData
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the Engineer'+" '"+'s GitHub Account ?',
        validate : function(value){
            if (value)  return true ; else return 'Try again';
        }
    }
];


const internQuestion = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Intern'+" '"+'s name  ? ',
        validate : NameData


    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the Intern'+" '"+'s id  ? ',
        validate : NumberData


    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Intern'+" '"+'s email  ?',
        validate : EmailData
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the Intern'+" '"+'s School name ?',
        validate : NameData
    }
];

const teamOptions =[
    {
    type: 'list',
    name: 'role',
    message: 'What type of Team would you Like to Add ? ',
    choices : ['Engineer','Intern','I don t want to Add any more nember .'],
}];



// writeToFile is a function that write and generate an HTML file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('The HTML file generated Successfully !!') 
  );
}

// init is a function to initialize app
function init() {

    console.log("Please Build your Team ...");
    inquirer
    .prompt(managerQuestions)
    .then((answers) => {

    const manager = new Manager(answers.name,answers.id,answers.email,answers.officeNumber);
    manager.role =manager.getRole();

    file.push(Headerpage(manager,answers));



    TeamOptions();
    });
  

} 

// TeamOptions is a function that prompts a question to the User [Manager] and drives him into different ways depending on his answer.
function TeamOptions(){

    inquirer
    .prompt(teamOptions)
    .then((answers) => {

        switch(answers.role){

            case 'Engineer' : addEngineer();break;
            case 'Intern' : addIntern();break;
            default :file.push(FooterPage());
            //Transform my file as an array object to a string data using join 
            let data = file.join(" ")
            writeToFile("./dist/generateHtml.html",data);break;    
        }
    });
}

// Function call to initialize app
init();

// addEngineer is a function that create new Engineer
function addEngineer(){
    inquirer
    .prompt(engineerQuestion)
    .then((answers) => {
    const engineer = new Engineer(answers.name,answers.id,answers.email,answers.github);
    const engineerBlock =`<!-- Engineer bloc -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://www.bootdey.com/app/webroot/img/Content/avatar/avatar7.png" class="card-img-top" alt="...">
          <div class="card-body text-center cardBody">
            <div class=" row card-text">Name : ${engineer.getName()}</div>
            <div class=" row card-text">ID : ${engineer.getId()} </div>
            <div class=" row card-text"><i class="fas fa-at"></i><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></div>
            <div class=" row card-text"><i class="fab fa-github fa-lg"></i><a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></div>
            <h5 class="card-title mb-0 text-success"><i class="fas fa-tasks"></i>${engineer.getRole()}</h5>
        </div>
      </div>
    </div>`
    file.push(engineerBlock);
    TeamOptions();
    });
    
}

//addIntern is a function that create a new Intern
function addIntern(){

    inquirer
    .prompt(internQuestion)
    .then((answers) => {
    const intern = new Intern (answers.name,answers.id,answers.email,answers.school);
    const internBloc =`<!-- Intern bloc -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://www.bootdey.com/app/webroot/img/Content/avatar/avatar3.png" class="card-img-top" alt="...">
        <div class="card-body text-center cardBody">
        <div class=" row card-text">Name : ${intern.getName()}</div>
        <div class=" row card-text">ID : ${intern.getId()} </div>
        <div class=" row card-text"><i class="fas fa-at"></i> <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></div>
        <div class=" row card-text"><i class="fas fa-university"></i><a href="https://www.google.com/search?q=${intern.getSchool()}">${intern.getSchool()}</a> </div>
        <h5 class="card-title mb-0 text-warning"><i class="fas fa-user-graduate"></i>${intern.getRole()}</h5>
        </div>
      </div>
    </div>`
    file.push(internBloc);
    TeamOptions();
    }); 


   


}

// Headerpage is a function that return the Header of the html page
function Headerpage(object,data){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=M+PLUS+Code+Latin:wght@500&family=Pacifico&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css" />
    
        <title>TEAM PROFILE</title>

        <link rel="icon" href="../src/TeamLogo.png" type="image/icon type">
    </head>
    <body>
        <!-- Header -->
    <header class="text-center py-5 mb-4 Banner">
        <div class="container">
          <h1 class="fw-light Banner_Title"> ${data.teamName}</h1>
        </div>
      </header>
      
      <!-- Page Content -->
      <div class="container">
        <div class="row" style="justify-content: center;">
          <!-- Manager bloc -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow">
              <img src="https://www.bootdey.com/app/webroot/img/Content/avatar/avatar8.png" class="card-img-top" alt="Manager">
              <div class="card-body text-center cardBody">
                <div class=" row card-text">Name : ${object.getName()}</div>
                <div class=" row card-text">ID : ${object.getId()} </div>
                <div class=" row card-text"><i class="fas fa-at"></i><a href="mailto:${object.getEmail()}">${object.getEmail()}</a></div>
                <div class=" row card-text"><i class="fas fa-phone-alt"></i><a href="tel:+${object.getOfficeNumber()}">${object.getOfficeNumber()}</a></div>
                <h5 class="card-title mb-0 text-danger"><i class="fas fa-briefcase"></i>${object.getRole()}</h5>
              </div>
            </div>
          </div>
          </div>
          <div class="row">
          `

}


//FooterPage is a function that return the Footer of the html page
function FooterPage(){

    return `</div>  
    </div>
    </body>
    <script src="https://bootstrap.bundle.min.js"></script>
    </html>`;


}