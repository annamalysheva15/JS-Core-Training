class OldCalc {
  operations(p1, p2, operation) {
    switch (operation) {
      case "add": return p1 + p2
      case "sub": return p1 - p2
      default: return null
    }
  }
}

class NewCalc {
  add(p1, p2) {
    return p1 + p2
  }

  sub(p1, p2) {
    return p1 - p2
  }
}

class CalcAdapter {
  constructor() {
    this.calc = new NewCalc()
  }

  operations(p1, p2, operation) {
    switch (operation) {
      case "add": return this.calc.add(p1, p2)
      case "sub": return this.calc.sub(p1, p2)
      default: return NaN
    }
  }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operations(10, 15, "add"))

const newCalc = new NewCalc()
console.log(newCalc.add(10, 15))

const adapter = new CalcAdapter()
console.log(adapter.operations(10, 15, "add"))
