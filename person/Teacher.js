const Employee = require("./Employee");
const Person = require("./person/Person");

const _subject = Symbol("subject");
class Teacher extends Employee {
  constructor(id, name, subject) {
    super(name, email);
    this._subject = subject;
  }
  get subject() {
    return this._subject;
  }
  set subject(value) {
    this._subject = value;
  }
  toString() {
    return `${super.toString()}, subject: ${this._subject}`;
  }
}
module.exports = Teacher;
