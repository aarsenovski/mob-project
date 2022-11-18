import { previewList } from '../support/preview'
// import previewList from '../support/preview'

// console.log(previewList)
previewList.forEach((preview) => {
  describe(`Cart  ${preview}`, () => {
    beforeEach(() => {
      cy.viewport(preview)
    })
    it('should go to Google', () => {
      cy.visit('https://www.google.com')
      //cy.get('#L2AGLb > .QS5gu').then((el) => {
      //el.click()
      const tempbutton = cy.get('#L2AGLb > .QS5gu')
      tempbutton.click()
      console.log(tempbutton)
    })
  })
})

// it('should register a user', () => {
//   cy.visit('https://www.google.com')

//   cy.get('#L2AGLb > .QS5gu').should((el) => {
//     el.click()
//   })

// const nameSimi = "Simi"
// nameSimi.then() - will not work

//this is the same cy.get('#L2AGLb > .QS5gu').click()
//with should, it's retried, with .then it's not
//.then is only used on a promise -> cy.get is a promise, all cypress com

//Example template literal
// const a = `Cart  ${preview}`
// const b = 'Cart' + ' ' + preview
