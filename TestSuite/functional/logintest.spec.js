
describe("Test Automation of a banking app",function(){

    xit("validate customer login test",function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        element(by.buttonText("Customer Login")).click();
        console.log("Function: Executing login test");

    });

    it("validate title test",function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        element(by.buttonText("Customer Login")).click();
        console.log("Function: Executing title test");

    });



});