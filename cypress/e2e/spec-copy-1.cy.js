describe('Chas-Movies', () => {
  it('should load the homepage', () => {
    cy.visit('https://rodrigo-sebastian.github.io/chas-movies/') 
    cy.contains('Välkomen till Chas-movies!') 
  })
})
