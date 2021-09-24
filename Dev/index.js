const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const teamArr = [];

const managerQuestions = [
  {
    type: "input",
    message: "What is your team manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your team manager's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your team manager's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your team manager's office number?",
    name: "officeNumber",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "What is your intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your intern's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your intern's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the name of your intern's school?",
    name: "school",
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "What is your engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your engineer's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your engineer's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your engineer's github username?",
    name: "username",
  },
];

const whatsNextQuestions = [
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "addTeamMember",
    choices: ["Intern", "Engineer", "Manager", "Finish"],
  },
];

inquirer.prompt(managerQuestions).then(({ id, name, email, officeNumber }) => {
  const manager = new Manager(id, name, email, officeNumber);
  console.log(manager);
  teamArr.push(manager);
  return askWhatsNext();
});

  // .then(() => {
  //   //User employee objects to create HTML page and write it to a file
  // })
  // .catch((error) => {
  //   if (error.isTtyError) {
  //     //prompt couldnt be rendered in current environment
  //   } else {
  //     //something else went wrong
  //   }
  // });

const askWhatsNext = () => {
  console.log(teamArr);
  inquirer.prompt(whatsNextQuestions).then((whatsNextAnswer) => {
 
    console.log(whatsNextAnswer.addTeamMember);
    switch (whatsNextAnswer.addTeamMember) {
      case "Intern":
        askforInternInfo();
        break;
      case "Manager":
          askForManager();
        break;
      case "Engineer":
          askforEngineerInfo();
        break;
      case "Finish":
        writeToFile("teamprofile.html", generateHTML(teamArr));
        break;
  
    }
  });
};

const askforInternInfo = () => {
  return inquirer.prompt(internQuestions).then(({id, name, email, school}) => {
    const intern = new Intern(id, name, email, school);
    teamArr.push(intern);
    return askWhatsNext();
  });
};

const askforEngineerInfo = () => {
    return inquirer.prompt(engineerQuestions).then(({id, name, email, github}) => {
      const engineer = new Engineer(id, name, email, github);
      teamArr.push(engineer);
      return askWhatsNext();
    });
  };
  
function writeToFile(fileName, data) {
  fs.writeFile(`./dist/${fileName}`, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("Success!");
    }
  });
}
