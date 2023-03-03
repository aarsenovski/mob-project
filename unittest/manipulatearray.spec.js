// Tip: Use map / filter / reduce

const manipulateArray = (numbers) => {
  const doubled = numbers.map((n) => n * 2)
  const even = numbers.filter((n) => n % 2 === 0)
  const sum = numbers.reduce((acc, n) => acc + n, 0)
  return {
    original: numbers,
    doubled: doubled,
    even: even,
    sum: sum,
  }
}

// possible test cases:
// check response for original, doubled, even and sum
// original array consists of 1,2,3,4,5,6
// doubled array consists of 2,4,6,8,10,12
// even array consists of 2,4,6
// sum of every item in original array is number

test('it should return correct properties', () => {
  const result = manipulateArray([1, 2, 3, 4, 5, 6])
  expect(result).toHaveProperty('original')
  expect(result).toHaveProperty('doubled')
  expect(result).toHaveProperty('even')
  expect(result).toHaveProperty('sum')
})

test('it should return original value', () => {
  const result = manipulateArray([1, 2, 3, 4, 5, 6])
  expect(result).toHaveProperty('original', [1, 2, 3, 4, 5, 6])
})

test('it should return doubled value', () => {
  const result = manipulateArray([1, 2, 3, 4, 5, 6])
  expect(result).toHaveProperty('doubled', [2, 4, 6, 8, 10, 12])
})

test('it should return even values', () => {
  const result = manipulateArray([1, 2, 3, 4, 5, 6])
  expect(result).toHaveProperty('even', [2, 4, 6])
})

test('it should return sum of values', () => {
  const result = manipulateArray([1, 2, 3, 4, 5, 6])
  expect(result).toHaveProperty('sum', 21)
})
