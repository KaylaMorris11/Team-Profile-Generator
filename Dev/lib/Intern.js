const Employee = require("./Employee")

class Intern extends Employee {

constructor(id, name, email, school ) {

    super({id, name, email});
    this.role = "Intern"
    
    }
    getName() {
        return this.name;
      }
      getId(){
        return this.id;
      }
      getEmail() {
        return this.email;
      }
      getRole() {
          return "Intern";
      }
};

module.exports = Intern;