

  it('Loads the application', () => {


    cy.visit('http://localhost:8081')
  
  })


  it('Tests the text on the page', () => {


    cy.get('#root > :nth-child(1)').should('have.text','Random Post')
    cy.get(':nth-child(1) > p').should('have.text','The world is green!')

  
  })