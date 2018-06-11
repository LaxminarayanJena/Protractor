
var SelectWrapper =require('../Util/select-wrapper.js');
var mySelect= new SelectWrapper(by.id("userSelect"));
var locator=require('../Util/customlocators.js');
var currency = new SelectWrapper(by.id("currency"));

describe("Automating BankManager Login Functionality",function()
{
    it("Login to the Bank Manger Account",function()
    {
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login")
        element(by.ngClick("manager()")).click();
    });

    it("Validate Add Customer",function()
    {

        element(by.ngClick("addCust()")).click();
        element(by.model("fName")).sendKeys("Sam");
        element(by.model("lName")).sendKeys("Mishra");
        element(by.model("postCd")).sendKeys("560019");
        element(by.css(".btn.btn-default")).click();
        browser.sleep(2000);
        var alertDialog=browser.switchTo().alert();
        alertDialog.getText().then(function (text) {
            console.log(text);

        })
        alertDialog.accept();
    });


    it("Validate Open Account",function(){

        element(by.ngClick("openAccount()")).click();
        mySelect.selectByText("Sam Mishra");
        currency.selectByText("Rupee");
        element(by.buttonText("Process")).click();
        browser.sleep(2000);
        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function(text){
            console.log(text);
        })

        alertDialog.accept();
        browser.sleep(2000);

    }) ;

    it("Validate Customer Existance",function(){
        element(by.buttonText("Customers")).click();
        element(by.model("searchCustomer")).sendKeys("Sam");
        browser.sleep(2000);
        var firstName = element(by.repeater("cust in Customers").row(0).column("cust.fName"));
        firstName.getText().then(function(text){
            console.log(text);
        });
        expect(firstName.getText()).toEqual("Sam");
        browser.sleep(2000);
    }) ;



})