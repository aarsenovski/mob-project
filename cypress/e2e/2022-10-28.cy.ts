import { getViewport, previewList } from '../support/preview'

previewList.forEach((preview) => {
  describe(`Cart  ${preview}`, () => {
    beforeEach(() => {
      cy.viewport(preview)
    })
    it('should log out dynamic values', () => {
      // const a and b are different ways how you can concatenate strings
      // we use the dynamic value for `preview` here which will be the used preset
      const a = `Cart  ${preview}`
      const b = 'Cart' + ' ' + preview

      cy.log(a, b)
    })
  })
})

describe(`Multiple viewports CI`, () => {
  beforeEach(() => {
    cy.viewport(getViewport(Cypress.env('VIEWPORT')))
  })
  it('should use custom command', () => {
    cy.visit('https://www.bing.com')

    // we don't need to import custom commands but can use them straight away with cy.methodName()
    cy.search('Frasers')
  })
})
