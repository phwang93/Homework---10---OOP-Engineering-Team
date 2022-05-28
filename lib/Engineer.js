const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    const role = 'Engineer';
    super(name, id, email, role);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
