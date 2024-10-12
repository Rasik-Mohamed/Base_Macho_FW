const {test} = require('@playwright/test');
const {RsLoginPractice} = require('../pageObjects/RsLoginPractice')

const {baseTestData} = require('../Utils/baseTestData')


baseTestData("Test 1", async ({browser,tdPracticeLogin})=>{
    const context = await browser.newContext();
    const page  = await context.newPage();
    //await page.pause();
    const practiceLogin = new RsLoginPractice(page);
    await practiceLogin.launchUrl(tdPracticeLogin.url);
    await practiceLogin.enterUsername(tdPracticeLogin.userName);
    
    await practiceLogin.enterPassword(tdPracticeLogin.password);
    await practiceLogin.cliskSignin;

    

});