it('cypress wait until test', () => {
  cy.visit('https://www.google.com')
  cy.waitUntil(() => {
    cy.get('Google')
  })
})

// while (timer < 10) {
//   timer++
//   console.log(timer)
// }

// let timer = 0
// cy.waitUntil(() => {
//   timer++
//   console.log(timer)
//   if (timer < 10) {
//     return false
//   }
//   return true
// }),
//   {
//     interval: 500,
//   }
