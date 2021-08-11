const person = {
  name: "Alex",
  init() {
    console.log(`My name is ${this.name}, I work at ${this.company}`)
  }
}

const personWithCompany = Object.create(person, {
  company: {
    value: "Epam"
  }
})

personWithCompany.init()

console.log(personWithCompany);
console.log(personWithCompany.__proto__ === person)
