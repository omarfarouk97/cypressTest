export class LoginPage{
    
     username = 'standard_user'
     wrongUserName='wrongUserName'
     passwrod='secret_sauce'

     usernameWebElement='[data-test="username"]'
     passwordWebElement='[data-test="password"]'
     loginBtn='[data-test="login-button"]'
     errorMssge='[data-test="error"]'
     productsContainer='#inventory_container'

     enterUsername(){
        cy.get(this.usernameWebElement).type(this.username)
     }
     enterWrongUsername(){
        cy.get(this.usernameWebElement).type(this.wrongUserName)
     }
     login(){
        cy.get(this.passwordWebElement).type(this.passwrod)
        cy.get(this.loginBtn).click()
     }
     successfulLogin(){
        this.enterUsername()
        this.login()
        cy.get(this.productsContainer).should('exist')
     }
     failureLogin(){
        this.enterWrongUsername()
        this.login()
        cy.get(this.errorMssge).should('contain.text','Epic sadface')
     }
}