import 'cypress-wait-until'
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
  cy.get('[id="L2AGLb"]').click()
  cy.get('[name="q"]').type(keyword)
  cy.get('.CcAdNb').click().type('{enter}')
})

Cypress.Commands.add('register', (username, password) => {
  cy.get('element').type(username)
  cy.get('.anotherElement').type(password)
})
