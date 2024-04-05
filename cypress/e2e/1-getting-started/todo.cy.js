let urls = ["https://www.google.com/", "https://www.cypress.io/"]
describe('First test', () => {
  urls.forEach((el, index)=>{
    it(`Test test ${index + 1}`, () => {
      cy.visit(el)
    })
  })
 
})