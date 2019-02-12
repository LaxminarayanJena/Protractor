var Objects = require('./Objects.json');

describe("Test Gmail",function(){

    beforeEach(function(){

        browser.ignoreSynchronization = true;
        browser.get(Objects.testsiteurl);
        console.log("Test site URL is : "+Objects.testsiteurl);

    }) ;


        it("Validate user credentials",function(){

            element(by.xpath(Objects.locators.loginpage.username)).sendKeys(Objects.userdetails.username1);
            console.log(Objects.userdetails.username1);
            element(by.xpath(Objects.locators.loginpage.next)).click();

        });


});
