describe('Advanced search', () => {
    it('should open Home page', () => {
      cy.visit('https://staging.newestateonly.com/')
     // cy.get('.cookies-policy-footer>h3').should('have.text', 'This website uses cookies')
      cy.get('button.WACLauncherComplex__ContentButton > div').should('have.text', "Hi! I’m NEO's virtual assistant. How can I help you today?")
      cy.get('#projectLocation').type('7325 BELLE MEADE BLVD')
      cy.get('form.ng-valid > :nth-child(1) > .btn').click()
    
    });

    it('should check cookies banner', () => {
      
    });
})