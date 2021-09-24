const ManagerCard = require("./ManagerTemplate");
const InternCard = require("./InternTemplate");
const EngineerCard = require("./EngineerTemplate");

function generateHTML(teamArray) {
  console.log(teamArray);
  const teamTemplates = teamArray.map((teamMember) => {
    switch (teamMember.getRole()) {
      case "Manager":
        return ManagerCard(teamMember);

      case "Engineer":
        return EngineerCard(teamMember);

      case "Intern":
        return InternCard(teamMember);
    }
  });
  console.log(teamTemplates);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    <header class="myteamheader">
        My Team
    </header>
    <div class="card-container">
      ${teamTemplates.join()}
          <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" data-auto-replace-svg="nest"></script>
    </div>
          </body>
    </html>
    `;
}

module.exports = generateHTML;
