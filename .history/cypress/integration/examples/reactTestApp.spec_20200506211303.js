

  it('Loads the application', () => {


    cy.visit(wait-on,'http://localhost:8081')
  
  })

 



  it('Tests the text on the header', () => {


    cy.get('#root > :nth-child(1)').should('have.text','Random Post')
    cy.get(':nth-child(1) > p').should('have.text','The world is green!')

  
  })

  it('Tests the text on the body', () => {


    cy.get('#root > :nth-child(2) > :nth-child(2) > h2').should('have.text','Sed porttitor lectus nibh')

  
  })