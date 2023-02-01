import { Selector, t } from 'testcafe'
import { faker } from '@faker-js/faker';

const firstName = faker.name.firstName("male")
const lastName = faker.name.lastName("male")
const postalCode = faker.address.zipCode()

class CheckoutPage {
    
    firstNameInput: Selector = Selector('#first-name')
    lastNameInput: Selector = Selector('#last-name')
    postalCodeInput: Selector = Selector('#postal-code')
    continueButton: Selector = Selector('#continue')
    finishButton: Selector = Selector('#finish')
    completeHeader: Selector = Selector('.complete-header')

    async fillYourInformationForm(){

        await t
            .typeText(this.firstNameInput, firstName,{paste: true, replace:true})
            .typeText(this.lastNameInput, lastName,{paste: true, replace:true})
            .typeText(this.postalCodeInput, postalCode,{paste: true, replace:true})
            .click(this.continueButton)
    }

    async clickOnFinish(){
        await t.click(this.finishButton)
    }

    async verifyCompleteHeader(){
        await t.expect(this.completeHeader.exists).ok() 
    }
    
}export default CheckoutPage
