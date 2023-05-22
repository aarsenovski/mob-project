export {}

declare global {
  namespace Cypress {
    interface Chainable {
      search(keyword: string)
      register(username: string, password: string)
    }
  }
}

Cypress.Commands.add('search', (keyword) => {
  cy.get('[data-testid="input-search-field"]').type('adidas')
})

Cypress.Commands.add('register', (username, password) => {
  cy.get('element').type(username)
  cy.get('.anotherElement').type(password)
})
