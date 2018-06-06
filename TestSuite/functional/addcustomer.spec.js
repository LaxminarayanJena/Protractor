
describe("Test Automation of a banking app",function(){

    it("validate customer login test",function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        element(by.buttonText("Customer Login")).click();
        console.log("Function: Executing Add Customer test");

    });



});