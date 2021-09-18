const Employee = require("./Employee")

class Manager extends Employee {

constructor(id, name, email, officeNumber ) {

    super();
    this.id = id;
    this.name = name;
    this.email = email;
    this.officeNumber = officeNumber;
    
    }
};