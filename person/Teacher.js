const Employee = require("./Employee");

const _subject = Symbol("subject");
const _employeeId = Symbol("employeeId");
class Teacher extends Employee {
  constructor(id, name, subject, employeeId) {
    super(id, name);
    this[_subject] = subject;
    this[_employeeId] = employeeId;
  }
  get subject() {
    return this[_subject];
  }
  set subject(value) {
    this[_subject] = value;
  }
  get employeeId() {
    return this[_employeeId];
  }
  set employeeId(value) {
    this[_employeeId] = value;
  }

  toString() {
    return `${super.toString()}, subject: ${this[_subject]}`;
  }
}
module.exports = Teacher;
