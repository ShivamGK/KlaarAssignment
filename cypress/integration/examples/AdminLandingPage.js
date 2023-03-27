///<reference types ="Cypress"/>

describe('Login Page Tests', function(){
    this.beforeEach(function(){
        cy.viewport(1024,700)
})
    it('Admin Login',function(){
        cy.visit('https://dev.klaarhq.com/auth/sign_in');
        cy.get("#email-field").click().type('deepa.nayak@iota.klaar.team')
        cy.get("#password-field").click().type('Klaar2021')
        cy.get("#login-btn").click()
        cy.wait(7000)
        cy.url().should('eq',"https://dev.klaarhq.com/profile")
        
    })
})

