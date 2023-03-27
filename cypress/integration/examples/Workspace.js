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
        cy.get('.ant-checkbox-input').click()
        cy.get('[href="/settings/workspace/customize-modules"]').click()
        cy.get('[class="title ant-col ant-col-lg-18 ant-col-xl-19"]').each((element,index)=>{
            
        })
    })

})

