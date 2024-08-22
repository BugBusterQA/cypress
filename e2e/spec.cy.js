describe('template automation', () => {

  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Hello, World')
    cy.contains('Kitchen Sink')
  })

})