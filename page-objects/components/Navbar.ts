import { Selector, t } from 'testcafe'

class Navbar {
    
    productheaderTitle: Selector = Selector('.title')
    hamburgerButton: Selector = Selector('#react-burger-menu-btn')
    logoutLink: Selector = Selector ('#logout_sidebar_link')
    backToProductButton: Selector = Selector('#back-to-products')
    shoppingcartLink: Selector = Selector('.shopping_cart_container')

    async clickOnBackToProduct(){
        await t
            .click(this.backToProductButton)
    }

    async clickOnShoppingCart(){
        await t.click(this.shoppingcartLink)

    }

    async logout(){
        await t
        .click(this.hamburgerButton)
        .click(this.logoutLink)
    }
}
export default Navbar