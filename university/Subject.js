const _id = Symbol("id");
const _name = Symbol("name");
const _credits = Symbol("credits");
class subject {
  constructor(id, name, credits) {
    this[_id] = id;
    this[_name] = name;
    this[_credits] = credits || 0;
  }

  get name() {
    return this[_name];
  }
  set name(value) {
    this[_name] = value;
  }
  get credits() {
    return this[_credits];
  }
  set credits(value) {
    this[_credits] = value;
  }

  toString() {
    return `Subject: ${this.name}, Credits: ${this.credits}`;
  }
}

module.exports = subject;
