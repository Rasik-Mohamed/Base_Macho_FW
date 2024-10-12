const { test } = require('@playwright/test');
const { chromium } = require('playwright');

class BaseClass {
    constructor() {
        this.context = null;
        this.page = null;
    }

    async init({ browser }) {
       
        this.context = await browser.newContext({ viewport: null });
        //await this.context.clearCookies();
        this.page = await this.context.newPage();
    }

    async cleanup() {
        if (this.context) {
            await this.context.close();
        }
    }
}

// Create an instance of the BaseClass
const driver = new BaseClass();

// Define the global setup and teardown
test.beforeAll(async () => {
    const browser = await chromium.launch({
        headless: false,
        args: ["--start-maximized"],
    });

    await driver.init({ browser });
});

test.afterAll(async () => {
    await driver.cleanup();
});

module.exports = { driver, BaseClass };
