describe("Validating the calculator app",function () {

    var title;
    beforeEach(function()
    {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        title= browser.getTitle()
    })

    it("validate  exact title",function () {

    title.then(function (text) {
        console.log(text);
        expect(title).toEqual("Protractor practice website - Calculator")
    })
    })

        it("validate   title should not match",function () {

            title.then(function (text) {
                console.log(text);
                expect(title).not.toEqual("Protractor practice website - Calculator")
            })
    })

        it("validate  partial title should  match",function () {

            title.then(function (text) {
                console.log(text);
                expect(title).toMatch("practice")
            })
        })

})
