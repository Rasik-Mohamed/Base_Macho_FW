const {test} = require('@playwright/test');
const { driver } = require('../Utils/BaseClass'); 

class poTnpds{
    constructor(page){
        this.page=page;

    }

    async launchUrl(baseurl){
        
        try {
            await this.page.goto(baseurl);
            await driver.page.title();
            console.log("URL '" + baseurl + "' is launched.");
        }
        catch (error) {
            console.error("Error navigating to URL:", error);

        }
    }



}
module.exports= {poTnpds}