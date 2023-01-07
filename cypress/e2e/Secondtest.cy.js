/// <reference types="cypress" />

describe('Second Test Suite',()=>
{
    it('My Second Test Case',()=>
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  // WebElement Checkbox      
        cy.get('#checkBoxOption3').check().should('be.checked').and('have.value','option3')
        cy.wait(1000)
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked')
        cy.wait(1000)
        cy.get("input[type='checkbox']").check(['option1','option2','option3'])
// Static Dropdown Handling 
        cy.get('Select').select('option2').should('have.value','option2')
  //Dynamic Dropdown Handling 
  cy.get('#autocomplete').type('Ind')
  cy.get('.ui-menu-item div').each(($e1,index,$lise)=>
  {
    if($e1.text()==='India')  
    {
       cy.wrap($e1).click()
    }
  })   
  cy.get('#autocomplete').should('have.value','India')
  // Handling visibility and invisiblity 
  cy.get('#displayed-text').should('be.visible')
  cy.get('#hide-textbox').click()
  cy.get('#displayed-text').should('not.be.visible')
  cy.get('#show-textbox').click()
  cy.get('#displayed-text').should('be.visible')
  // Handling Radio buttons
  //cy.get('[value="radio2"]').check().should('be.checked')
  cy.get('.radioButton').check().should('be.checked')
  

    })         
})