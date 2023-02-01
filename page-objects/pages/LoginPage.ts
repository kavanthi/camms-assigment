import { Selector, t } from 'testcafe'
import BasePage from './BasePage';

class LoginPage extends BasePage{
    usernameInput: Selector = Selector('#user-name')
    passwordInput: Selector = Selector('#password')
    submitButton: Selector = Selector('#login-button')

    async loginToApp(username: any, password:any){
        await t
            .typeText(this.usernameInput, username,{paste: true, replace:true})
            .typeText(this.passwordInput, password,{paste: true, replace:true})
            .click(this.submitButton)
    }
}
export default LoginPage