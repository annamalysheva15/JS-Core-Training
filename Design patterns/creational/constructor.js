function Person (name, age, company) {
  this.name = name
  this.age = age
  this.company = company
}

Person.prototype.greet = function () {
  console.log(`Hello! My name is ${this.name}, I'm ${this.age} and I work at ${this.company}`)
}

const alex = new Person("Alex", 26, "Epam")
alex.greet();

console.log(alex);

//ES6
class Vehicle {
  constructor(model, color) {
    this.model = model
    this.color = color
  }

  getSpecs() {
    console.log(`Model: ${this.model}, color: ${this.color}`)
  }
}

const i6 = new Vehicle("i6", "white")
i6.getSpecs();

console.log(i6)
