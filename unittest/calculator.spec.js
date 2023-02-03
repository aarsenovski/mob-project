const calculator = require('./calculator')

test('should add 1+1', () => {
  expect(calculator.add(1, 1)).toBe(2)
})

test('should subtract 3-1', () => {
  expect(calculator.subtract(3, 1)).toBe(2)
})

test('should throw error when dividing by 0', () => {
  expect(() => calculator.divide(4, 0)).toThrow('Can not divide by zero')
})

test('should divide 10/5', () => {
  expect(calculator.divide(10, 5)).toBe(2)
})

test('should multiply 20*20', () => {
  expect(calculator.multiply(20, 20)).toBe(400)
})

test('crazy test for a=0', () => {
  expect(calculator.crazy(0, 5)).toBe(25)
})

test('crazy test for a=HI', () => {
  expect(calculator.crazy('HI', 2)).toBe('HIHI')
})

test('crazy test for a=5', () => {
  expect(calculator.crazy(5, 5)).toBe(29)
})
