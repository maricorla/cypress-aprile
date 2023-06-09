describe('Advanced search', () => {
  it('should open Home page', () => {
    cy.visit('https://staging.newestateonly.com/')
    cy.get('.cookies-policy-footer>h3').should('have.text', 'This website uses cookies')
    cy.get('.btn-primary').click()
   // cy.get('.WACWidget__textEllipsis').should('have.text', "Hi! I’m NEO's virtual assistant. How can I help you today?")
   
    cy.on('window:confirm', () => true)

    cy.get('#projectLocation').type('7325 Belle Meade Blvd, Miami, FL, USA')
    cy.get('form.ng-valid > :nth-child(1) > .btn').click()
    
  });
})
