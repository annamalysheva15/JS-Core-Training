const user = {
  firstName: "Alex",
  lastName: "Smith"
};

Object.defineProperty(user, "fullName", {
  get: () => this.firstName + " " + this.lastName,
  set: (value) => {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  }
});

// console.log(user.fullName = "John Jones");

const user2 = {
  name: "Max",
  age: 25,
  greet: () => console.log(`Hello ${user2.name}`)
};

// user2.greet();

const userCreator = (name, age, company) => {
  const newUser = {};

  newUser.name = name;
  newUser.age = age;
  newUser.company = company;
  newUser.greet = () => console.log(`${newUser.name}, welcome to ${newUser.company}!`);

  return newUser;
};

const user3 = userCreator("Alex", 26, "Epam");
const user4 = userCreator("Mike", 48, "Google");

// user3.greet();
// user4.greet();

const userCreator2 = (name, age, company) => {
  const newUser = Object.create(userActions);

  newUser.name = name;
  newUser.age = age;
  newUser.company = company;

  return newUser;
};

const userActions = {
  greet: function() {
    console.log(`${this.name}, welcome to ${this.company}!`)
  }
};

const user5 = userCreator2("Max", 28, "Epam");
// user5.greet();

function UserCreator (name, age, company) {
  this.name = name;
  this.age = age;
  this.company = company || "Epam";
}

UserCreator.prototype.greet = function () {
  console.log(`Hello ${this.name} welcome to ${this.company}`);
};

const user6 = new UserCreator("Max", 26);
// user6.greet();


const Class1 = function () {
  this.calc = function (a, b) {
    return a + b;
  }
};

const Class2 = function () {
  Class2.prototype.calc = function (a, b) {
    return a + b;
  }
};

const class1 = new Class1();
// console.log(class1.calc(1, 2));

const class2 = new Class2();
// console.log(class2.calc(3, 4));


function HeroCreator (name) {
  this.name = name;
}

HeroCreator.prototype.say = function (phrase) {
  console.log(this.name + " says: " + phrase);
}

const hero = new HeroCreator("Simon");

// hero.say("Hello friends");

function WitchCreator (name, school) {
  HeroCreator.call(this, name, school);
  this.school = school;
}

WitchCreator.prototype = Object.create(HeroCreator.prototype);

WitchCreator.prototype.castSpell = function (spell) {
  console.log(this.name + " casts spell: " + spell);
}

const witch = new WitchCreator("Simona", "Dark arts");

// console.log(witch);

// witch.say("Hello stranger");
// witch.castSpell("*something on Latin*");


class Programmer {
  constructor(name) {
    this.name = name;
  }

  code() {
    console.log(`${this.name} can code`);
  }
}

class Frontender extends Programmer {
  react() {
    console.log(`${this.name} can code on ReactJS`);
  }
}

// const programmer = new Programmer("Max");
// programmer.code();

// const frontender = new Frontender("John");
// frontender.code();
// frontender.react();

class Backender extends Programmer {
  nodejs() {
    console.log(`${this.name} can code on NodeJS`)
  }
}

// const backender = new Backender("Mike");
// backender.code();
// backender.nodejs();

class Fullstack extends Programmer {
  react() {
    console.log(`${this.name} can code on ReactJS`);
  }
  nodejs() {
    console.log(`${this.name} can code on NodeJS`)
  }
}

const createProgrammer = (name) => {
  const programmer = { name };
  return {
    ...programmer,
    ...canCode(programmer)
  }
};

const canCode = ({ name }) => {
  return {
    code: () => console.log(`${name} can code`)
  }
};

const programmer = createProgrammer("Alex");
programmer.code();

const canReact = ({ name }) => {
  return {
    react: () => console.log(`${name} can code on ReactJS`)
  }
};

const canNodejs = ({ name }) => {
  return {
    nodejs: () => console.log(`${name} can code on NodeJS`)
  }
};

const createFrontender = (name) => {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canReact(programmer)
  }
};

const createBackender = (name) => {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canNodejs(programmer)
  }
};

const frontender = createFrontender("Max");
frontender.code();
frontender.react();
const backender = createBackender("John");
backender.code();
backender.nodejs();

const createFullstack = (name) => {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canReact(programmer),
    ...canNodejs(programmer)
  }
};

const fullstack = createFullstack("Mike");
fullstack.code();
fullstack.react();
fullstack.nodejs();
