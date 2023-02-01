import { Selector, t } from 'testcafe'

class ProductsPage {
    
    SauceLabsFleeceJacket: Selector = Selector('#item_5_title_link')
    SauceLabsFleeceJacketPrice: Selector = Selector('.inventory_details_price')
    SauceLabsBackpackAddToCartButton: Selector = Selector('#add-to-cart-sauce-labs-backpack')
    SauceLabsBikeLightAddToCartButton: Selector = Selector('#add-to-cart-sauce-labs-bike-light')

    async AddProductsToCart(){

        await t.click(this.SauceLabsBackpackAddToCartButton)
        await t.click(this.SauceLabsBikeLightAddToCartButton)

    }
}
export default ProductsPage