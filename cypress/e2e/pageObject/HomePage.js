class HomePage
{
getUserName()
{
return cy.get(':nth-child(1) > .form-control')
}
getUserEmail()
{
    return cy.get("input[name='email']")
}
getPassword()
{
    return cy.get("#exampleInputPassword1")
}
getCheckbox1()
{
    return cy.get("#exampleCheck1")
}
getGender(){

return cy.get('select')

}
getDOB(){

    return cy.get("input[name='bday']")

}
getEnterprenurradio(){
    return cy.get('#inlineRadio3')
}
getSubmit(){

    return cy.get("input[value='Submit']")
}
getShop(){
    return cy.get("a[href*='/angularpractice/shop']")
}
}

export default HomePage;