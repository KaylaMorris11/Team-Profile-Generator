const Employee = require("./Employee")

class Intern extends Employee {

constructor(id, name, email, school ) {
    super();
    this.id = this.id;
    this.name = this.name;
    this.email = this.email;
    this.school = this.school;
    
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