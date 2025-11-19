const Person = require("./Person");
const UniPerson = require("./uniPerson");

const _studentId = Symbol("studentId");
const _guardian = Symbol("guardian");
const _fee = Symbol("fee");
const _exam = Symbol("exam");

class Student extends UniPerson {
  constructor(id, name, studentId, guardian, fee) {
    super(id, name);
    this[_studentId] = studentId;
    this[_guardian] = guardian;
    this[_fee] = fee;
    this[_exam] = [];
  }
  get studentId() {
    return this[_studentId];
  }

  get guardian() {
    return this[_guardian];
  }

  get fee() {
    return this[_fee];
  }

  set fee(value) {
    this[_fee] = value;
  }
  get exam() {
    return this[_exam];
  }
  addExam(exam) {
    this[_exam].push(exam);
  }
  toString() {
    return `${super.toString()}, studentId: ${this[_studentId]}, guardian: ${
      this[_guardian]
    }, fee: ${this[_fee]}, exam: ${this[_exam].join("; ")}`;
  }
}
module.exports = Student;
