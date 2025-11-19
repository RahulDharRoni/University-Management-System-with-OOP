const Person = require("./person/Person");
const Teacher = require("./Teacher");
const Student = require("./person/Student");

// const p1 = new Person("rahul", "rahul@gmail.com");
const t1 = new Teacher("rahul", "rahul@gmail.com", "csc", "4000");
const s1 = new Student(
  "rahul",
  "rahul@gmail.com",
  ["math", "english", "cse"],
  "2000000"
);

// console.log(p1);
// console.log(t1);
// console.log(s1);

console.log(t1);

t1.print();
