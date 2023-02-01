import { Selector, t } from 'testcafe'

class YourCartPage {

    checkoutButton: Selector = Selector('#checkout')
    productName1: Selector = Selector('div').withText('Sauce Labs Backpack')
    productName2: Selector = Selector('div').withText('Sauce Labs Bike Light')

    async clickOnCheckout(){
        await t.click(this.checkoutButton)

    }

    async verifyCartItems(){
        await t.expect(this.productName1.exists).ok()
        await t.expect(this.productName2.exists).ok()
        
    }
}export default YourCartPage