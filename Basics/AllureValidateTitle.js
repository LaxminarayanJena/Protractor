describe("Validate the title from home page",function()
{
/*
1)Write allure function in conf.js
2)go to project folder and type
npm i jasmine-allure-reporter

3)after running it will generate allure-results folder

4)copy the allure-results folder inside node_modules/jasmine-allure-reporter

5)In cmd mvn site -Dallure.results_pattern=allure-results
6) reports genearted in \node_modules\jasmine-allure-reporter\target\site\allure-maven-plugin\index.html

 */
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