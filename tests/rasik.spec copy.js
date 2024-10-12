const { test, expect } = require('@playwright/test');
const { driver } = require('../Utils/BaseClass');
const { poRasik } = require('../pageObjects/poRasik');

test('Test Case 1: Navigate to Rasik', async () => {
    const rasik = new poRasik(driver.page);
    await rasik.launchUrl("https://www.nykaa.com/")
    const title = await driver.page.title();
    expect(title).toBe('Buy Cosmetics Products & Beauty Products Online in India at Best Price | Nykaa');
    console.log(title);

});

test('Test Case 2: Navigate to Example', async () => {
    const rasik = new poRasik(driver.page);
    await rasik.launchUrl("https://www.example.com/")
    const title = await driver.page.title();
    expect(title).toBe('Example Domain');
    console.log(title);

});