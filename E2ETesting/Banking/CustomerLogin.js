
var SelectWrapper =require('./select-wrapper.js');
var mySelect= new SelectWrapper(by.id("userSelect"));
describe("Automating Customer Login Functionality",function()
{
    it("Login to the Account",function()
    {
       browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login")
        element(By.buttonText("Customer Login")).click();
       mySelect.selectByText("Harry Potter");
       element(By.buttonText("Login")).click();
    });

    it("Validate Deposit",function()
    {
        element(By.buttonText("Deposit")).click();
       element(By.model("amount")).sendKeys("1000");
       element(by.css(".btn.btn-default")).click();
       element(by.binding("message")).getText().then(function (text) {
           console.log(text);

       })
        expect(element(by.binding("message")).getText()).toEqual("Deposit Successful");

    });


    it("Validate Withdrawl",function()
    {
        element(By.buttonText("Withdrawl")).click();
        element(By.model("amount")).sendKeys("1000");
        element(by.css(".btn.btn-default")).click();
        element(by.binding("message")).getText().then(function (text) {
            console.log(text);

        })
        expect(element(by.binding("message")).getText()).toEqual("Transaction successful");

    });
})