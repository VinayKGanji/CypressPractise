/// <reference types="cypress" />
describe('Webtable Suite',()=>
{
    it('Webtable',()=>
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each(($e1, index,$list)=>{
            const txt=$e1.text()
            if(txt.includes('Python Language')){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceText=price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})