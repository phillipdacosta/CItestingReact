let cyEnv = Cypress.env();

Cypress.config('baseUrl', cyEnv.baseUrl);


  it('Loads the application', () => {


    cy.visit(cyEnv.baseUrl)
  
  })

 



  it('Tests the text on the header', () => {


    cy.get('#root > :nth-child(1)').should('have.text','Random Post')
    cy.get(':nth-child(1) > p').should('have.text','The world is green!')

  
  })

  it('Tests the text on the body', () => {


    cy.get('#root > :nth-child(2) > :nth-child(2) > h2').should('have.text','Sed porttitor lectus nibh')

  
  })