///<reference types ="Cypress"/>
///<reference types ="cypress-iframe"/>
import "cypress-iframe"
describe('Login Page Tests', function(){
    this.beforeEach(function(){
        cy.viewport(1024,700)
})
    it('Single user',function(){
        var email  = "shivakudtarkar@gmail.com"
        cy.visit('https://dev.klaarhq.com/auth/sign_in');
        cy.get("#email-field").click().type('deepa.nayak@iota.klaar.team')
        cy.get("#password-field").click().type('Klaar2021')
        cy.get("#login-btn").click()
        cy.get('[data-cy="settings-nav-menu-button"] > .tw-h-16').click()
        cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(3) > [data-cy="submenu-button"]').click().click()
        cy.wait(11000)
        cy.get(' [data-cy="settings-user-list-add-user-button"]').click()
        cy.get('[data-cy="settings-add-user-full-name-text-field"]').click().type("Shivam")
        cy.get('[data-cy="settings-add-user-email-text-field"]').click().type(email)
        cy.get('[data-cy="modal-submit-button"] > .ng-star-inserted').click()
        cy.wait(5000)
        cy.get('[data-cy="settings-edit-user-save-button"]').click()
        cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(3) > [data-cy="submenu-button"]').click()
        cy.get('.search-bar').type(email)
        cy.get('[data-cy="user-list-user-email-field"]').should("have.text",email)
    })

    // it('Single user',function(){
    //     const empFile = 'data.csv'
    //     var email  = "shivakudtarkar@gmail.com"
    //     cy.visit('https://dev.klaarhq.com/auth/sign_in');
    //     cy.get("#email-field").click().type('deepa.nayak@iota.klaar.team')
    //     cy.get("#password-field").click().type('Klaar2021')
    //     cy.get("#login-btn").click()
    //     cy.get('[data-cy="settings-nav-menu-button"] > .tw-h-16').click()
    //     cy.get('[data-cy="workspace-settings-nav-menu-button"] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(3) > [data-cy="submenu-button"]').click().click()
    //     cy.wait(11000)
    //     cy.get('#usecsv-custom-button > .ant-btn').click()
    //     cy.frameLoaded('#intercom-frame')
    //     cy.iframe().find('#next-step-btn').click()
    //     cy.get("[type = 'file']").attachFile()

    // })
})

