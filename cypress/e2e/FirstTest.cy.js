/// <reference types="cypress" />

describe('Frist Test Suite',()=>
{
    it('My Frist Test Case',()=>
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('Ca')
        cy.wait(1000)
        cy.get('.products').as('AllProducts')
        cy.get('@AllProducts').find('.product').should('have.length','4')
        cy.get('@AllProducts').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('@AllProducts').find('.product').each(($e1,index,$list)=>
        {
            const veggi= $e1.find('h4.product-name').text()
            if(veggi.includes('Cashews'))
            {

               cy.wrap($e1).find('button').click()
            }
            cy.get('.brand.greenLogo').should('have.text','GREENKART')
            cy.get('.brand.greenLogo').then(function(logo)
            {

                cy.log(logo.text())
            })
            cy.wait(2000)
            cy.get('.cart-icon > img').click()
            cy.contains('PROCEED TO CHECKOUT').click()
            cy.contains('Place Order').click()

            })

            })   
        })      
   