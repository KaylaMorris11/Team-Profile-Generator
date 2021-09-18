const inquirer = require("inquirer");

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
        name:"id"
    },
    {
        type:"input",
        message:"What is your team manager's office number?",
        name:"id"
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
        name:"id"
    },
    {
        type:"input",
        message:"What is your intern's office number?",
        name:"id"
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
        name:"id"
    },
    {
        type:"input",
        message:"What is your engineer's office number?",
        name:"id"
    }
];
const whatsNextQuestions = [
    {
        type:"input",
        message:"Which type of team member would you like to add?",
        name:"list",
        choices: ["manager", "intern", "engineer"]
    }
];

const askforInternInfo = () => {
return inquirer
    .prompt(internQuestions)
    .then((internAnswers) => {
        //THEN we need to create a new Intern object with that data and
        //Push the new intern to the list of employees
        return askWhatsNext();
    })
}

const askWhatsNext = () => inquirer
    .prompt(whatsNextQuestions)
    .then((whatsnextAnswer) => {

        return askforInternInfo();
    });

//`inquirer.prompt()` the user for manager information using our `managerQuestions
inquirer    
    .prompt(managerQuestions)
    .then((managerAnswers) => {
        //ThEN we need to create a new Manager object with that data
        //const manager = new Manager(managerAnswers)
        //AND Then new to ask the users what they want to do next.(`inquirer.prompt()` with whatsnextquestions)
        //THEN to use their answer to decide what to do next

        return askWhatsNext();
        //RETURN MY PROMISES

    })

.then(() => {
    //User employee objects to create HTML page and write it to a file
})
    .catch((error)=>{
        if (error.isTtyError){
            //prompt couldnt be rendered in current environment
            else {
                
                //something else went wrong
        }
    });
  