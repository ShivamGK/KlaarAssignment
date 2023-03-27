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
        cy.get('[data-cy="profile-settings-button"]').click()
        cy.get('[data-cy="profile-dropdown-user-email-field"]').should('include.text','deepa.nayak@iota.klaar.team')
        
    })
    it('Non-Admin Login',function(){
        cy.visit('https://dev.klaarhq.com/auth/sign_in');
        cy.get("#email-field").click().type('arya.mahato@iota.klaar.team')
        cy.get("#password-field").click().type('Klaar2021')
        cy.get("#login-btn").click()
        cy.wait(7000)
        cy.get('[data-cy="profile-settings-button"]').click()
        cy.get('[data-cy="profile-dropdown-user-email-field"]').should('include.text','arya.mahato@iota.klaar.team')

    })

        it('Remember me',function(){
        cy.visit('https://dev.klaarhq.com/auth/sign_in');
        cy.get("#email-field").click().type('deepa.nayak@iota.klaar.team')
        cy.get("#password-field").click().type('Klaar2021')
        cy.get('.ant-checkbox-input').click()
        cy.get("#login-btn").click()
        cy.wait(7000)
        cy.get('[data-cy="profile-settings-button"]').click()
        cy.get('[data-cy="profile-dropdown-user-email-field"]').should('include.text','deepa.nayak@iota.klaar.team')
        cy.get('[data-cy="logout-button"]').click() 
        cy.get("#login-btn").click()  
        cy.get('[data-cy="profile-settings-button"]').click()
        cy.get('[data-cy="profile-dropdown-user-email-field"]').should('include.text','deepa.nayak@iota.klaar.team')
    })

    it('Empty Fields login',function(){
        cy.visit('https://dev.klaarhq.com/auth/sign_in');
        cy.get("#login-btn").click()
        cy.url().should('eq','https://dev.klaarhq.com/auth/sign_in')
        cy.get('.ant-form-item-explain > .ng-tns-c149-0').should("include.text",'Please enter valid email or phone number')
        cy.get('.ant-form-item-explain > .ng-tns-c149-1').should("include.text","Please enter your password here")
 })

    it('Incorrect Email Correct Password',function(){
    cy.visit('https://dev.klaarhq.com/auth/sign_in');
    cy.get("#email-field").click().type('nayak@iota.klaar.team')
    cy.get("#password-field").click().type('Klaar2021')
    cy.get("#login-btn").click()
    cy.url().should('eq','https://dev.klaarhq.com/auth/sign_in')
    cy.get('.alert').should("include.text",'Oops! User does not exist.')
    
})

it('Correct Email Incorrect Password',function(){
    cy.visit('https://dev.klaarhq.com/auth/sign_in');
    cy.get("#email-field").click().type('deepa.nayak@iota.klaar.team')
    cy.get("#password-field").click().type('Klaar20200')
    cy.get("#login-btn").click()
    cy.url().should('eq','https://dev.klaarhq.com/auth/sign_in')
    cy.get('.alert').should("include.text",'Oops! Incorrect Email or Password')
    
})
it('Incorrect Email Incorrect Password',function(){
    cy.visit('https://dev.klaarhq.com/auth/sign_in');
    cy.get("#email-field").click().type('nayak@iota.klaar.team')
    cy.get("#password-field").click().type('Klaar20200')
    cy.get("#login-btn").click()
    cy.url().should('eq','https://dev.klaarhq.com/auth/sign_in')
    cy.get('.alert').should("include.text",'Oops! User does not exist.')
    
})
it('Enter Space in email field and password',function(){
    cy.visit('https://dev.klaarhq.com/auth/sign_in');
    cy.get("#email-field").click().type(' ')
    cy.get("#password-field").click().type(' ')
    cy.get("#login-btn").click()
    cy.url().should('eq','https://dev.klaarhq.com/auth/sign_in')
    cy.get('.ant-form-item-explain > .ng-tns-c149-0').should("include.text",'Please enter valid email or phone number')
    
})

})


