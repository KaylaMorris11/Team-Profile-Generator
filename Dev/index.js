const inquirer = require("inquirer");

const managerQuestions = [
    {
        type:"input",
        message:"What is your team managers name?",
        name:"name",
    }

];
const internQuestions = [
    {
        type:"input",
        message:"",
        name:"",
    },
    {
        type:"input",
        message:"",
        name:"",
    }
];
const engineerQuestions = [
    {
        type:"input",
        message:"",
        name:"",
    },
];
const whatsNextQuestions = [
    {
        type:"input",
        message:"What type of team member would you like to add?",
        name:"list",
        options: []
    }
];
const askforInternInfo = () => {

}

const askWhatsNext = () => inquirer
    .prompt(whatsNextQuestions)
    .then((whatsnextAnswer) => {

    });

inquirer    
    .prompt(managerQuestions)
    .then(managerAnswers) => {



        return askWhatsNext();

    })

    .then(()=>{
        if (error.isTtyError){
            else {

            }
        }
    })
