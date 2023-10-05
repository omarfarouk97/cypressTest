import { LoginPage } from "./Pages/loginPage"
const loginPage = new LoginPage()
describe('swag labs', () => {

beforeEach(()=>{
  cy.visit('https://www.saucedemo.com/')
})
  
it('failure login', () => {
     
    loginPage.failureLogin()
  })
  
  
  it('successful login', () => {
     
    loginPage.successfulLogin()
  })
})