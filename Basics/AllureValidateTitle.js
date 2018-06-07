describe("Validate the title from home page",function()
{
//D:\Webstorm\ProtractorModules\ProtractorTest\Basics\allure-results
    //to
   // D:\Webstorm\ProtractorModules\ProtractorTest\node_modules\jasmine-allure-reporter\allure-results
    //https://stackoverflow.com/questions/42621567/generate-simple-html-based-on-jasmine-allure-reporter
    //mvn site -Dallure.results_pattern=allure-results
    beforeEach(function()
    {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        title= browser.getTitle()
    })

    it("Enter the correct title",function()
    {

        title.then(function (text) {
            expect(title).toEqual("Protractor practice website - Calculator")
        })
    })

    it("Enter the incorrect title",function()
    {

        title.then(function (text) {
            expect(title).toEqual("Protractor11 practice website - Calculator")
        })
    })
})