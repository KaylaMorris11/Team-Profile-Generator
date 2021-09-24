const ManagerCard = require('./ManagerTemplate')

function generateHTML(teamArray) {
    console.log(teamArray)
    const teamTemplates = teamArray.map((teamMember) => {
        switch (teamMember.getRole()) {
            case "Manager":
                return ManagerCard(teamMember)
              break;
            case "Engineer":
              return EngineerCard(teamMember)
              break;
            case "Intern":
             return InternCard(teamMember)
              break;
            default:
          }
        }); 
        console.log(teamTemplates)

    return  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    <header class="myteamheader">"My Team"</header>
    ${teamTemplates.join()}
    </body>
    </html>
    `
};

module.exports = generateHTML;