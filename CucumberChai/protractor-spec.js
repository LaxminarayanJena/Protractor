describe("Test entering into an inputbox",function(){

    it("Executing input box test",function()
    {
        browser.get("https://www.angularjs.org");
        element(by.model("yourName")).sendKeys("Poltu");
        element(by.binding("yourName")).getText().then(function(text)
        {
            console.log(text);
        });

    });

});