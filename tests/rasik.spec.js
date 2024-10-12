const { test, expect } = require('@playwright/test');
const { driver } = require('../Utils/BaseClass');
const { poRasik } = require('../pageObjects/poRasik');
const {baseTestData} = require('../Utils/baseTestData');

baseTestData('Test Case 1: Navigate to Rasik', async ({tdNykaa}) => {
    const rasik = new poRasik(driver.page);
        
    await rasik.launchUrl(tdNykaa.url);
    const title = await driver.page.title();
    expect(title).toBe('Buy Cosmetics Products & Beauty Products Online in India at Best Price | Nykaa');
    console.log(title);

});

baseTestData('Test Case 2: Navigate to Example', async ({tdExample}) => {
    const rasik = new poRasik(driver.page);
    
    await rasik.launchUrl(tdExample.url)
    const title = await driver.page.title();
    expect(title).toBe('Example Domain');
    console.log(title);

});