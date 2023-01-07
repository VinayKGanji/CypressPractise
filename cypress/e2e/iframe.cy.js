/// <reference types='cypress'/>
/// <reference types="cypress-iframe"/>

import 'cypress-iframe'

    it('iframe handling',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href='mentorship']").eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should('have.value',2)






    })