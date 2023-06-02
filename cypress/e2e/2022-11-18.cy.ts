import { getViewport } from '../support/preview'

getViewport(Cypress.env('VIEWPORT')).forEach((preview) => {
  describe(`${preview} this is another spec file`, () => {
    beforeEach(() => {
      cy.viewport(preview)
    })
    it('Cypress async', () => {
      cy.visit('https://www.google.com/?hl=fr')
      // cypress commands are `Promise like`
      // if cy.get() is resolved it yields its subject to the next command etc.

      // if we want to do something with the subject we can use .then() or .should()
      // this .then() is similar to the use with native Promises
      // with .should() there is automatic retry
      cy.get('input')
        .first()
        .should((el) => {
          console.log(el)
        })
    })
  })
})
