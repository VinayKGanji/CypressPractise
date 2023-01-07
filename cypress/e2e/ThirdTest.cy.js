/// <reference types="cypress" />

describe('Third Test Suite',()=>
{
    it('My Third Test Case',()=>
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

// Handling alerts 

cy.get('#alertbtn').click()
cy.on('window:alert',(str)=>{

  expect(str).to.equal('Hello , share this practice page and share your knowledge')
 
  cy.get('#confirmbtn').click()
  cy.on('window:confirm',(abc)=>{

    expect(abc).to.equal('Hello , Are you sure you want to confirm?')


  })

})

})
})