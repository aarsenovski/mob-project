//Given requirements:
// product A = 1.5$ price
// product B = 2$ price
// If a sum calculation includes 5 of more products, then the total sum should include a 10% discount

//Possible test cases
// TC1: 1 product A
// TC2: 1 product B
// TC3: 5 products which includes A and B
// TC4: 6 products which includes A and B
// TC5: 4 products which includes A and B

const calculateTotalPrice = (products) => {
  const productA = 1.5
  const productB = 2
  let totalPrice = 0

  products.forEach((product) => {
    // product === 'A' ? totalPrice += productA : totalPrice += productB
    if (product === 'A') {
      totalPrice += productA
    } else if (product === 'B') {
      totalPrice += productB
    }
  })

  if (products.length >= 5) {
    return totalPrice * 0.9
  }

  return totalPrice
}

test('1 product A', () => {
  expect(calculateTotalPrice(['A'])).toBe(1.5)
})

test('1 product B', () => {
  expect(calculateTotalPrice(['B'])).toBe(2)
})

test('4 products which includes A and B', () => {
  expect(calculateTotalPrice(['A', 'A', 'B', 'B'])).toBe(7)
})

test('5 products which includes A and B', () => {
  expect(calculateTotalPrice(['A', 'B', 'A', 'B', 'B'])).toBe(8.1)
})

test('6 products which includes A and B', () => {
  expect(calculateTotalPrice(['A', 'B', 'A', 'B', 'B', 'B'])).toBe(9.9)
})
