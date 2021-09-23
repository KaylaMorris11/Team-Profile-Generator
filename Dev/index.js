const inquirer = require("inquirer");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const teamArr = [];



const managerQuestions = [
    {
        type:"input",
        message:"What is your team manager's name?",
        name:"name",
    },
    {
        type:"input",
        message:"What is your team manager's id?",
        name:"id"
    },
    {
        type:"input",
        message:"What is your team manager's email address?",
        name:"address"
    },
    {
        type:"input",
        message:"What is your team manager's office number?",
        name:"officenumber"
    }
];
const internQuestions = [
    {
        type:"input",
        message:"What is your intern's name?",
        name:"name",
    },
    {
        type:"input",
        message:"What is your intern's id?",
        name:"id"
    },
    {
        type:"input",
        message:"What is your intern's email address?",
        name:"email"
    },
    {
        type:"input",
        message:"What is the name of your intern's school?",
        name:"school"
    }
];
const engineerQuestions = [
    {
        type:"input",
        message:"What is your engineer's name?",
        name:"name",
    },
    {
        type:"input",
        message:"What is your engineer's id?",
        name:"id"
    },
    {
        type:"input",
        message:"What is your engineer's email address?",
        name:"address"
    },
    {
        type:"input",
        message:"What is your engineer's office number?",
        name:"number"
    }
];

const whatsNextQuestions = [
    {
        type:"input",
        message:"Which type of team member would you like to add?",
        name:"list",
        choices: ["Intern", "Engineer", "Manager", "None"]
    }
];

const askforInternInfo = () => {
return inquirer
    .prompt(internQuestions)
    .then((internAnswers) => {
        //THEN we need to create a new Intern object with that data and
        //Push the new intern to the list of employees
        const intern = new Intern() ` <div class="team-card-container">
        <div class="team-container">
          <div class="team-card">
            <h3 class="">${internAnswers.name}</h3>
            <h2>${internAnswers.choices}</h2>
            <p>${internAnswers.id}</p>
            <p>${internAnswers.email}</p>
            <p>${internAnswers.school}</p>
          </div>
        </div>
      </div>`;
        teamArr.push;
        return askWhatsNext();
    })
};

const askWhatsNext = () => inquirer
    .prompt(whatsNextQuestions)
    .then((whatsnextAnswer) => {

        return whatsnextAnswer;
    });

//`inquirer.prompt()` the user for manager information using our `managerQuestions
inquirer    
    .prompt(managerQuestions)
    .then((managerAnswers) => {
        //ThEN we need to create a new Manager object with that data
        const manager = new Manager(managerAnswers)
        teamArr.push(manager);
        //AND Then new to ask the users what they want to do next.(`inquirer.prompt()` with whatsnextquestions)
        //THEN to use their answer to decide what to do next

        return askWhatsNext();
        //RETURN MY PROMISES

    });

.then(() => {
    //User employee objects to create HTML page and write it to a file
});
    .catch((error)=>{
        if (error.isTtyError){
            //prompt couldnt be rendered in current environment
            else {
                
                //something else went wrong
        }
    });
  

    function writeToFile(fileName, data) {
        fs.writeFile(`./dist/${fileName}`, data, function(err){
            console.log(fileName);
            console.log(data);
         if(err){
             return console.log(err)
         } else {
             console.log("Success!")
         }
        });
    };

    // function init() {
    //     inquirer
    //         .prompt(questions)
    //         .then(function(data) {
    //             writeToFile("output.html", generateMarkdown(data))
    //             console.log(data)
    //         })
    //     };
    
    //     init();