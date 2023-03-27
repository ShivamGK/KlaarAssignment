///<reference types ="Cypress"/>



describe('Login Page Tests', function(){
    this.beforeEach(function(){
        cy.viewport(1024,700)
})
    it('Admin Login',function(){
        var userField = "Samarth"
        cy.visit('https://dev.klaarhq.com/auth/sign_in');
        cy.get("#email-field").click().type('deepa.nayak@iota.klaar.team')
        cy.get("#password-field").click().type('Klaar2021')
        cy.get("#login-btn").click()
        cy.wait(7000)
        cy.get('[data-cy="settings-nav-menu-button"] ').click()
        cy.get('li [href="/settings/workspace/User-List"]').click()
        cy.get("[role='tab']").eq(2).click()
        cy.get(':nth-child(1) > :nth-child(2) > [data-cy="settings-user-fields-custom-field-name-text-area"]').click().type(userField)
        cy.get('[data-cy="settings-user-fields-custom-field-save-button"]').click()
  

        cy.get("[role='tab']").eq(0).click()
        cy.get(':nth-child(1) > [data-cy="user-list-user-email-field"]').click()
        cy.wait(6000)
        cy.get('[role="tab"]').eq(1).click()
        cy.get("nz-form-label label").last().should('include.text',userField)
  
    })
})

