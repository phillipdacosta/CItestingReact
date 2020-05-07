

  it('Loads the application', () => {


    cy.visit('http://localhost:8081')
  
  })


  it('Tests the text on the page', () => {


    cy.get('#root > :nth-child(1)').should('have.text','Random Post')

  
  })