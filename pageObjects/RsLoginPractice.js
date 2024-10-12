const { test, expect } = require('@playwright/test');
class RsLoginPractice {

    constructor(page) {
        this.page = page;
        this.practiceUsername = page.locator('#username');
        this.practicePassword = page.locator("[name='password']");
        this.practiceSignin = page.locator("#signInBtn");
    }



    async launchUrl(baseurl) {
        try {
            await this.page.goto(baseurl);
            
            console.log("URL '" + baseurl + "' is launched.");
        }
        catch (error) {
            console.error("Error navigating to URL:", error);

        }

    }



    async enterUsername(username) {
        try {
            console.log("Input value :" + username);
            await expect(this.practiceUsername).toBeVisible();
            await this.practiceUsername.fill(username)
            const appName = await this.practiceUsername.inputValue();
            if(appName===username){
                 console.log("Data entered");
             }else{
                 console.log("Data not entered");
             }
        } catch (error) {
            console.error("Error navigating to URL:", error);
        }
        
    }

    async enterPassword(password) {
        try {
            console.log("Input value :" + password);
            await expect(this.practicePassword).toBeVisible();
            await this.practicePassword.fill(password)
            const appName = await this.practicePassword.inputValue();
            if(appName===password){
                 console.log("Data entered");
             }else{
                 console.log("Data not entered");
             }
        } catch (error) {
            console.error("Error navigating to URL:", error);
        }

        
    }

    async cliskSignin() {
        try{
            await this.practiceSignin.click();
            await this.page.waitForLoadState('networkidle');
            console.log("Signin button clicked.");

        }catch(error){

        }

        //await this.practiceSignin.click();
        //console.log("Signin button clicked.");


    }

}
module.exports = { RsLoginPractice };