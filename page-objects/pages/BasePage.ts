import { t } from 'testcafe'

class BasePage {
    
    async waitFor(milliseconds: any){
        await t.wait(milliseconds)
    }

    async setTestspeed(speedLevel: any){
        await t.setTestSpeed(speedLevel)
    }

}
export default BasePage