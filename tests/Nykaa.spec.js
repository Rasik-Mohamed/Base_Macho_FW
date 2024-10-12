//Nykaa.spec.js

const {test} = require('@playwright/test');
const {baseTestData} = require('../Utils/baseTestData');
const {poNykaa} = require('../pageObjects/poNykaa');
const { chromium } = require('playwright');


baseTestData("Basic Nykaa", async ({browser, tdNykaa})=>{

   /* const browser = await chromium.launch({
        headless: false,
        args: ["--start-maximized"],
    });
    const context = await browser.newContext({ viewport: null });
    const page = await context.newPage();*/



    const context = await browser.newContext();
    const page  = await context.newPage();
    
    const Nykaa = new poNykaa(page);
    

    await Nykaa.launchUrl("https://www.nykaa.com/");
    //await Flipkart.enproduct;
    



});