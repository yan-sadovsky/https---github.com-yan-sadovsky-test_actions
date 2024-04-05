let urls = ["https://www.youtube.com/", "https://www.github.com/"]
describe('First test', () => {
  urls.forEach((el, index)=>{
    it(`Test test ${index + 1}`, () => {
      cy.visit(el)
      cy.url().should('contain', "www.youtube.com")
    })
  })
 
})