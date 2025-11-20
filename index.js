const { Guardian, Student, Teacher } = require("./person");
const { Contact, Address } = require("./contact");
const Department = require("./university/Department");
const subject = require("./university/Subject");
// guardian
const guardian = new Guardian(1, "Alice Smith", "Engineer", 75000);
guardian.blood = "A+";
guardian.contact = new Contact({
  id: 1,
  email: "aliceswith@gmail.com",
  phone: "3465345634563456",
});

guardian.contact.address = new Address({
  id: 1,
  roadNo: "123",
  city: "Metropolis",
  region: "NY",
  country: "USA",
  postalCode: "12345",
});

// student
const student = new Student(1, "Bob Smith", "10th001", guardian, 15000);
student.blood = "B+";
student.contact = new Contact({
  id: 2,
  email: "bobsmith@gmail.com",
  alternativePhone: student.guardian.contact.phone || null,
  phone: "1234567890",
  address: student.guardian.contact.address,
});

//department - o1
const department = new Department({
  id: 1,
  name: "Computer Science",
});

student.department = department;
department.subject = [
  new subject(1, "Data Structures", 3),
  new subject(2, "Algorithms", 3),
  new subject(3, "Operating Systems", 3),
];

const dean = new Teacher(1, "Dr. John Doe", department.subject[1]);
dean.blood = "O+";
dean.department = department;
dean.salary = 120000;
dean.employeeId = "EMP001";
dean.designation = "Dean of Computer Science";
dean.contact = new Contact({
  id: 3,
  email: "dr.johndoe@university.edu",
  phone: "9876543210",
  address: new Address({
    id: 3,
    roadNo: "456",
    city: "Metropolis",
    region: "NY",
    country: "USA",
    postalCode: "12345",
  }),
});
department.dean = dean;

const teacher1 = new Teacher(2, "Prof. Jane Smith", department.subject[1]);
teacher1.blood = "AB+";
teacher1.department = department;
teacher1.salary = 90000;
teacher1.employeeId = "EMP002";
teacher1.designation = "Professor";
teacher1.contact = new Contact({
  id: 4,
  email: "prof.janesmith@university.edu",
  phone: "8765432109",
  address: new Address({
    id: 4,
    roadNo: "789",
    city: "Metropolis",
    region: "NY",
    country: "USA",
    postalCode: "12345",
  }),
});
const teacher2 = new Teacher(3, "Prof. Emily Davis", department.subject[2]);
teacher2.blood = "A-";
teacher2.department = department;
teacher2.salary = 95000;
teacher2.employeeId = "EMP003";
teacher2.designation = "Associate Professor";
teacher2.contact = new Contact({
  id: 5,
  email: "prof.emilydavis@university.edu",
  phone: "7654321098",
  address: new Address({
    id: 5,
    roadNo: "101",
    city: "Metropolis",
    region: "NY",
    country: "USA",
    postalCode: "12345",
  }),
});

department.addTeacher(dean);
department.addTeacher(teacher1);
department.addTeacher(teacher2);

// console.log(student.toString());
//all teachers name

const teachersName = department.teachers.map((teacher) => teacher.name);
// console.log("Teachers in Department:", teachersName);

const studentAllCredits = department.subject.reduce(
  (total, subj) => total + subj.credits,
  0
);
// console.log("Total Credits in Department:", studentAllCredits);
console.log(dean.department);
