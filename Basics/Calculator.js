describe("Validating the calculator app",function () {

    beforeEach(function()
    {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
    })

    afterEach(function()
    {
        console.log("after it block");
        browser.sleep(3000);
    })

    it("validate  1+1=2",function () {


        element(by.model("first")).sendKeys("1");
        element(by.model("second")).sendKeys("1");
        element(by.buttonText("Go!")).click();
        element(by.binding("latest")).getText().then(function(text)
        {
            console.log("Result is :"+text);
        })
    })


    it("validate  1+1=2",function () {


        element(by.model("first")).sendKeys("2");
        element(by.model("second")).sendKeys("2");
        element(by.buttonText("Go!")).click();
        element(by.binding("latest")).getText().then(function(text)
        {
            console.log("Result is :"+text);
        })
    })


    it("validate  3+3=6",function () {


        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("3");
        element(by.buttonText("Go!")).click();
        element(by.binding("latest")).getText().then(function(text)
        {
            console.log("Result is :"+text);
        })
    })

})
