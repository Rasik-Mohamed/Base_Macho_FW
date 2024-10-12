const base = require('@playwright/test');

exports.baseTestData = base.test.extend(
    {
        tdPracticeLogin:{

            url: "https://rahulshettyacademy.com/loginpagePractise/",
            userName: "Rasik",
            password: "pass",
        },

        tdFlipkart:
        {
            url:"https://www.flipkart.com/",
            
        },
        tdNykaa:
        {
            url:"https://www.nykaa.com/",
            
        },
        tdExample:
        {
            url:"https://www.example.com/",
            
        },
        tdTnpds:
        {
            url:"https://www.tnpds.gov.in/",
            
        },
        

        


        



});