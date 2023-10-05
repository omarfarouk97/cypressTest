export class ShoppingPage{
     
    
    
    
    backpack='[data-test="add-to-cart-sauce-labs-backpack"]'
     fleeceJacket='[data-test="add-to-cart-sauce-labs-fleece-jacket"]'
     removeFleeceJ='[data-test="remove-sauce-labs-fleece-jacket"]'

     addProductsToCart(){
        cy.get(this.backpack).click()
        cy.get(this.fleeceJacket).click()
        cy.get(this.removeFleeceJ).should('exist')

     }
     removeProductsFromCart(){
        cy.get(this.removeFleeceJ).click()
        cy.get(this.fleeceJacket).should('exist')
     }
     proceedToCheckout(){
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Omar')
        cy.get('[data-test="lastName"]').type('Farouk')
        cy.get('[data-test="postalCode"]').type('01197')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('contain.text','Thank you for your order!')
     }
}