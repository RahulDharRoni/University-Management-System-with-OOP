const { Guardian } = require("./person");
const { Contact } = require("./contact");

const guardian = new Guardian(1, "Alice Smith", "Engineer", 75000);
guardian.blood = "A+";
guardian.contact = new Contact({
  id: 1,
  email: "aliceswith@gmail.com",
  phone: "3465345634563456",
});

console.log(guardian.toString());
