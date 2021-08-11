// Base class
class Color {
  constructor(color) {
    this.color = color
  }
}

class RedLight extends Color {
  constructor() {
    super("red");
  }
  sign() {
    return "STOP"
  }
}

class YellowLight extends Color {
  constructor() {
    super("yellow");
  }

  sign() {
    return "GET READY"
  }
}

class GreenLight extends Color {
  constructor() {
    super("green");
  }

  sign() {
    return "GO"
  }
}

// State
class TrafficLight {
  constructor() {
    this.states = [
      new RedLight(),
      new YellowLight(),
      new GreenLight()
    ]
    this.current = this.states[0]
  }

  change() {
    const total = this.states.length
    let index = this.states.findIndex(light => light === this.current)
    if(index + 1 < total) {
      this.current = this.states[index + 1]
    } else {
      this.current = this.states[0]
    }
  }

  sign() {
    return this.current.sign()
  }
}

const trafficLight = new TrafficLight()

console.log(trafficLight.sign())
trafficLight.change()
console.log(trafficLight.sign())
trafficLight.change()
console.log(trafficLight.sign())