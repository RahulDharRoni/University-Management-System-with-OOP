const Person = require("./person/Person");

const _subject = Symbol("subject");
class Teacher extends Person {
  constructor(name, email, subject, salary) {
    super(name, email);
    this._subject = subject;
    this._salary = salary;
  }
  get subject() {
    return this._subject;
  }
  get salary() {
    return this._salary;
  }

  set salary(value) {
    this._salary = value;
  }
  print() {
    super.print();
    console.log(`subject : ${this._subject}, salary: ${this._salary}`);
  }
}
module.exports = Teacher;
