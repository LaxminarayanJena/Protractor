
var logger=require('D:\\Projects\\Protractor\\log.js');
//winston-basic.log will be generated
describe("Validating the calculator app",function () {

    var title;
    beforeEach(function()
    {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        logger.log('info','Navigating to the website ')
        title= browser.getTitle()
    })

    it("validate  exact title",function () {

    title.then(function (text) {
        console.log(text);
        expect(title).toEqual("Protractor practice website - Calculator")
    })
    })




})
