const { test, expect } = require('@playwright/test');
const { driver } = require('../Utils/BaseClass');
const {baseTestData} = require('../Utils/baseTestData');
const {poTnpds} = require('../pageObjects/poTnpds')

baseTestData('Test Case 1: Navigate to TNPDS', async ({tdTnpds}) => {
    const Tnpds = new poTnpds(driver.page);
        
    await Tnpds.launchUrl(tdTnpds.url);
    const title = await driver.page.title();
    expect(title).toBe('Home - Public Distribution System');
    console.log(title);

});