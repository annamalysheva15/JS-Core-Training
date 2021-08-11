function Cat(options) {
  this.sound = "Meow"
  this.name = options.name
}

function Dog(options) {
  this.sound = "Woof"
  this.name = options.name
}

//Animal factory
function AnimalFactory() {}

AnimalFactory.prototype.animalType = Cat
AnimalFactory.prototype.createAnimal = function (options) {
  switch (options.animalType) {
    case "cat":
      this.animalType = Cat
      break;
    case "dog":
      this.animalType = Dog
      break;
    default:
      this.animalType = Cat
      break;
  }
  return new this.animalType(options)
}

const animalFactory = new AnimalFactory()

const dog = animalFactory.createAnimal({
  animalType: "dog",
  name: "Sharik"
})

const barsik = animalFactory.createAnimal({
  name: "Barsik"
})

console.log(dog instanceof Dog)
console.log(dog);
console.log(barsik instanceof Cat)
console.log(barsik);
