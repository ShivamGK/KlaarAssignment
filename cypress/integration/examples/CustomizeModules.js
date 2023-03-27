///<reference types ="Cypress"/>

describe('Customize Modules', function(){
    this.beforeEach(function(){
        cy.viewport(1024,700)
})

    it('My Strengths On',function(){
        var arr = []
        cy.visit('https://dev.klaarhq.com/auth/sign_in');
        cy.get("#email-field").click().type('deepa.nayak@iota.klaar.team')
        cy.get("#password-field").click().type('Klaar2021')
        cy.get("#login-btn").click()
        cy.get('[data-cy="settings-nav-menu-button"] ').click()
        cy.get('[href="/settings/workspace/customize-modules"]').click()
        cy.get('[data-cy="settings-customize-my-strength-module-switch-button"]').click()
        cy.wait(10000)
        cy.get('[data-cy="profile-nav-menu-button"]').click()
        cy.wait(10000)
        cy.get('.tab label').each((el)=>{
            arr.push(el.text())
        }).then(()=>{
            expect("My Strengths").to.be.oneOf(arr)
        })
    })

    it('My Skills On',function(){
        var arr = []
        cy.visit('https://dev.klaarhq.com/auth/sign_in');
        cy.get("#email-field").click().type('deepa.nayak@iota.klaar.team')
        cy.get("#password-field").click().type('Klaar2021')
        cy.get("#login-btn").click()
        cy.get('[data-cy="settings-nav-menu-button"] ').click()
        cy.get('[href="/settings/workspace/customize-modules"]').click()
        cy.get('[data-cy="settings-customize-my-skills-module-switch-button"] > .ant-switch').click()
        cy.wait(10000)
        cy.get('[data-cy="profile-nav-menu-button"]').click()
        cy.wait(10000)
        cy.get('[data-cy="profile-my-skills-module-title"]').should('be.visible')

    })

    

})