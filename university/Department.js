const _id = Symbol("id");
const _name = Symbol("name");
const _dean = Symbol("dean");
const _teachers = Symbol("teachers");
const _subject = Symbol("subject");

class Department {
  constructor({ id, name, subject, dean, teachers }) {
    this[_id] = id;
    this[_name] = name;
    this[_dean] = dean;
    this[_teachers] = teachers || [];
    this[_subject] = subject || [];
  }
  get name() {
    return this[_name];
  }

  set name(value) {
    this[_name] = value;
  }

  get dean() {
    return this[_dean];
  }

  set dean(value) {
    this[_dean] = value;
  }

  get teachers() {
    return this[_teachers];
  }

  set teachers(value) {
    this[_teachers] = value;
  }

  get subject() {
    return this[_subject];
  }

  set subject(value) {
    this[_subject] = value;
  }

  addTeacher(teacher) {
    this[_teachers].push(teacher);
  }

  toString() {
    return `Department: ${this.name}, Dean: ${this.dean}, Teachers: ${this.teachers.length}, Subjects: ${this.subject.length}`;
  }
}

module.exports = Department;
