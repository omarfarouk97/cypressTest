import { LoginPage } from "./Pages/loginPage";
import { ShoppingPage } from "./Pages/shoppingPage";

const loginPage=new LoginPage()
const shoppingPage = new ShoppingPage()

describe('testing shopping',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
      })
      
      
      it('adding to cart and removing from it',()=>{
        loginPage.successfulLogin()
        shoppingPage.addProductsToCart()
        shoppingPage.removeProductsFromCart()
        shoppingPage.proceedToCheckout()
      })
})