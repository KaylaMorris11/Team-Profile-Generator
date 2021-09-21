const Employee = require("./Employee")

class Engineer extends Employee {

constructor(id, name, email, github ) {

    super();
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = "Engineer"
    this.github = github;
    }

    getId(){
        return this.id;
      }
    getName() {
        return this.name;
      }
      getEmail() {
        return this.email;
      }
    getRole() { 
        return "Engineer";
    }
    getGithubID() { 
        return this.github;
    }
};

module.exports = Engineer;