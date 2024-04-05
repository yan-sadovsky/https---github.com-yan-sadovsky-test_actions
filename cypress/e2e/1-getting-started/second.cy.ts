let url : string[] = ["https://www.youtube.com/", "https://www.github.com/"]

describe('First test', () => {
  url.forEach((el, index)=>{
    it(`Test test ${index + 1}`, () => {
      cy.visit(el)
      cy.url().should('contain', "www.youtube.com")
    })
  })
 
})