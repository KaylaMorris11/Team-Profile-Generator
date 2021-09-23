const Employee = require("./Employee")

class Engineer extends Employee {

constructor(id, name, email, github ) {

    super({id, name, email});
    this.github = github;
    this.role = "Engineer"

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
      getGithubID() { 
        return this.github;
    }
    getRole() { 
        return "Engineer";
    }
};

module.exports = Engineer;