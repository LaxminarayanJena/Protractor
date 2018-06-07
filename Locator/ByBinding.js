describe("Locator testing By Model",function()
{
    it("Automating user Reg form",function () {

        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login")
        element(by.model("Auth.user.name")).sendKeys("angular");
        element(by.model("Auth.user.password")).sendKeys("password");
        element(by.model("model[options.key]")).sendKeys("user1");
        element(by.buttonText("Login")).click();
        browser.sleep(3000);
        element(by.className("ng-scope")).getText().then(function(text)
        {
console.log(text);
expect(text).toContain("Home")
        })

    })
})
