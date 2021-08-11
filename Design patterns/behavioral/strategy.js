class Vehicle {
  travelTime() {
    return this.timeTaken
  }
}

class Bus extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 20
  }
}

class Taxi extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 10
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 5
  }
}

class Integration {
  travel(transport) {
    return transport.travelTime()
  }
}

const integration = new Integration()

console.log(integration.travel(new Bus()))
console.log(integration.travel(new Car()))