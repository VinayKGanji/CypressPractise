/// <reference types="cypress" />
describe('Webtable Suite',()=>
{
    it('Webtable',()=>
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


       // cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
        // Handling of child window
        cy.get('#opentab').invoke('removeAttr','target').click()
       
    })
})