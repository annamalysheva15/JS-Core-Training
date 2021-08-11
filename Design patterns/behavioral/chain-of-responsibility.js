class Sum {
  constructor(initialValue = 5) {
    this.sum = initialValue
  }

  add(value) {
    this.sum += value
    return this
  }

  sub(value) {
    this.sum -= value
    return this
  }
}

const sum1 = new Sum()

console.log(sum1.add(15).sub(20).add(25))
