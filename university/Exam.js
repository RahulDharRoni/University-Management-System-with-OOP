const _id = Symbol("id");
const _name = Symbol("name");
const _passedMarks = Symbol("passedMarks");
const _subject = Symbol("subject");
class Exam {
  constructor(id, name, passedMarks, subject) {
    this[_id] = id;
    this[_name] = name;
    this[_passedMarks] = passedMarks || 0;
    this[_subject] = subject || null;
  }

  get name() {
    return this[_name];
  }
  set name(value) {
    this[_name] = value;
  }
  get passedMarks() {
    return this[_passedMarks];
  }
  set passedMarks(value) {
    this[_passedMarks] = value;
  }
  get subject() {
    return this[_subject];
  }
  set subject(value) {
    this[_subject] = value;
  }
  toString() {
    return `Exam: ${this.name}, Passed Marks: ${this.passedMarks}, Subject: ${this.subject}`;
  }
}

module.exports = Exam;
