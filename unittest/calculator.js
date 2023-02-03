class Calculator {
  add(a, b) {
    return a + b
  }

  subtract(a, b) {
    return a - b
  }

  multiply(a, b) {
    return a * b
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Can not divide by zero')
    }
    return a / b
  }

  crazy(a, b) {
    switch (a) {
      case 0:
        return b * b + a
      case 'HI':
        return 'HI'.repeat(b)
      default:
        return a * b + 4
    }
  }
}

const calculator = new Calculator()

module.exports = calculator
