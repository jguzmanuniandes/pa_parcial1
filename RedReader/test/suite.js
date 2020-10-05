const { expect } = require("chai");
const wdio = require("webdriverio");

describe('suite de regresion para RedReader', () => {

    let client
    let fs = 'android=new UiSelector().resourceId("'
    let ss = '")'

    before(async () => {
        const opts = {
            path: '/wd/hub',
            port: 4723,
            logLevel: 'warn',
            capabilities: {
              platformName: "Android",
              app: "C:\\Users\\docto\\Downloads\\RedReader-limpia.apk",
              avd: "Nexus_5X_API_27",
            },
        };
        client = await wdio.remote(opts);
    })

    it('Mensaje de entrada', async () => {
        //XPath
        let message = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView')
        expect(await message.getText()).contain('Accounts')
    })

    it('Ver Subreddits', async () => {
        //let subreddits = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.support.v7.widget.RecyclerView/android.widget.TextView')
        let subreddits = await client.$('fs + "org.quantumbadger.redreader:id/scrollbar_recyclerview_recyclerview" + ss')
        console.log(subreddits)
        expect(await subreddits.getText()).contain('Subreddits')
    })
    
    it('Ver popup de cuentas', async () => {
        //XPath
        let button = await client.$(fs + "android:id/button2" + ss+'.className("android.widget.Button")')
        await button.click()
        let dots = await client.$('//android.widget.ImageView[@content-desc="More options"]')
        await dots.click()

        await client.touchAction({
            action: 'tap',
            x: 685,
            y: 140
          })

        let titleAccount = await client.$('android:id/alertTitle')
        expect(await titleAccount.getText()).contain('Accounts')
    })

})