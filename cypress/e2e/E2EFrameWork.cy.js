/// <reference types ="cypress"/>
import HomePage from "./pageObject/homePage"

describe('Setting up hook', function()  {
  before(function()  {
    cy.fixture('example').then(function(data)
        {
       this.data=data
      })
    })
it('handling hook',function() { 
const homePage=new HomePage()
cy.visit("https://rahulshettyacademy.com/angularpractice/")
homePage.getUserName().type(this.data.name)
homePage.getUserEmail().type(this.data.email)
homePage.getPassword().type(this.data.password)
homePage.getGender().type(this.data.gender)
homePage.getDOB().type(this.data.Dob)
homePage.getCheckbox1().check().should('be.checked')
homePage.getEnterprenurradio().should('be.disabled')
homePage.getShop().click()
this.data.productName.forEach(function(element)
 {
   cy.item(element)
})
cy.contains('Checkout').click()
var sum=0;
cy.get('tr td:nth-child(4) strong').each(($e1,index,$list)=>{
    const amount=$e1.text()
    var res=amount.split(" ")
    var res=res[1].trim()
    sum=Number(res)+Number(sum)
  })
.then(function(){
  cy.log(sum)
})
cy.get('h3 strong').then(function(element){

    const amt=element.text()
    var total=amt.split(" ")
    var total=total[1].trim()
    expect(Number(total)).to.equal(sum)
})
cy.get(".btn.btn-success").click()
cy.get('#country').type('India')
cy.get('.suggestions').click()
cy.get("#checkbox2").click({force:true})
cy.contains("Purchase").click()
cy.get('.alert').then(function(element){
const text=element.text()
expect(text.includes("Sucess")).to.be.true

})
})
})

