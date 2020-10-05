
//How to run a sample

const wdio = require("webdriverio");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    app: "C:\\Users\\docto\\Downloads\\RedReader-limpia.apk"
    //avd: "Nexus_5X_API_27",
  },
};

async function main() {
  const client = await wdio.remote(opts);

  console.log("Here");
  
  let message = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView')

  console.log(await message.getText())

  console.log("Here 2");
  let selector = 'android=new UiSelector().resourceId("android:id/button2")'
  let anotherMessage = await client.$(selector)

  await anotherMessage.click()

  console.log(await anotherMessage.getText());

  await client.deleteSession();
}

main();
