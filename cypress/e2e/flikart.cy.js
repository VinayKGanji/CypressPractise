///<reference types='cypress'/>

describe('Flikart OrderPlacement', ()=>{


it('Flikart Login', ()=>{

    cy.visit('https://www.flipkart.com/')
    cy.get('._3704LK').type('Iphone 12 Pro Max')
    cy.get('.col-12-12 _1MRYA1').find('Iphone 12').click()






})

})