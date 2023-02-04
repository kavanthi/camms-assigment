import { Selector, test } from 'testcafe';
import LoginPage from '../page-objects/pages/LoginPage';
import Navbar from '../page-objects/components/Navbar';
import ProductPage from '../page-objects/pages/ProductsPage';
import BasePage from '../page-objects/pages/BasePage';
import YourCartPage from '../page-objects/pages/YourCartPage';
import CheckoutPage from '../page-objects/pages/CheckoutPage';


const loginPage = new LoginPage()
const navBar = new Navbar() 
const { userVariables } = require('testcafe');
const productPage = new ProductPage()
const basePage= new BasePage()
const yourCartPage = new YourCartPage()
const checkoutPage = new CheckoutPage()

fixture('Verify product purchasing process')
    .page(userVariables.baseurl);

test.before(async t => {
        await t.maximizeWindow()
        await loginPage.waitFor(2000)
})
.after(async t => {
    await navBar.logout()
})
('Verify purchase product function', async t => {

    await basePage.setTestspeed(1)
    await loginPage.loginToApp(userVariables.userName, userVariables.password)
    await t.expect(navBar.productheaderTitle.exists).ok()
    await t.click(productPage.SauceLabsFleeceJacket)
    
    await t.expect(productPage.SauceLabsFleeceJacketPrice.exists).ok()
    await navBar.clickOnBackToProduct()
    await productPage.AddProductsToCart()
    await navBar.clickOnShoppingCart()
    await t.expect(yourCartPage.productName1.exists).ok()
    await t.expect(yourCartPage.productName2.exists).ok()
    await yourCartPage.clickOnCheckout()

    await checkoutPage.fillYourInformationForm()
    await checkoutPage.clickOnFinish()
    await checkoutPage.verifyCompleteHeader()

});
