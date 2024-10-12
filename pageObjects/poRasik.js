const {test} = require('@playwright/test');
const { driver } = require('../Utils/BaseClass'); 

class poRasik{

    constructor(page){
        this.page = page;
        //this.searchpro = page.locator("input[title*='Search for products']");
        //this.searchclick = page.locator("button[type*='submit']")



    }

    async launchUrl(baseurl){
        
        try {
            //await driver.page.goto(baseurl)
            await this.page.goto(baseurl);
            //await this.page.goto("https://www.flipkart.com/");
            //console.log(this.page.title());
            await driver.page.title();
            
            console.log("URL '" + baseurl + "' is launched.");
        }
        catch (error) {
            console.error("Error navigating to URL:", error);

        }
    }

   /* async enproduct(){
        this.searchpro.fill("mnobile");
        this.searchclick.click();

    }*/

}



module.exports= {poRasik};