describe("Validating the calculator app",function () {

    beforeEach(function()
    {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        element(by.model("first")).sendKeys("1");
        element(by.model("second")).sendKeys("1");
        element(by.buttonText("Go!")).click();
        expected_text=element(by.binding("latest")).getText()
    })

    afterEach(function()
    {
        console.log("after it block");
        browser.sleep(3000);
    })

    it("validate  1+1=2",function () {

expected_text.then(function(text)
{
    console.log("Result is :" +text);
    expect(parseInt(text)).toBe(2);
});

    })


    it("validate  1+1!=3",function () {

        expected_text.then(function(text)
        {
            console.log("Result is :" +text);
            expect(parseInt(text)).not.toBe(3);
        });

    })
    
    it("validate  1+1=4",function () {

        expected_text.then(function(text)
        {
            console.log("Result is :" +text);
            expect(parseInt(text)).toBe(4);
        });

    })

})
