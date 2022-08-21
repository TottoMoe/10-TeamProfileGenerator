const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(nameEmp, id, email, github) {
    super(nameEmp, id, email);
    this.github = github;
    this.role = "Engineer";
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;