var {Given, When, Then,After} =require('cucumber');
var chai =require('chai');
var chaiAsPromised=require('chai-as-promised');
var PropertiesReader = require('properties-reader');
var or= PropertiesReader('./properties/or.properties');

chai.use(chaiAsPromised);
var expect=chai.expect;

After(function(scenarioResult) {
    let self=this;
    if(scenarioResult.result.status === 'failed') {
        return browser.takeScreenshot()
            .then(function (screenshot){

           const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''),'base64') ;
           self.attach(decodedImage,'image/png');
           console.log("scenarioResult =",scenarioResult.result.status);
        });
    }
});

var base =require('../pages/BasePage.js');
Given('I go to {string}', function (site) {
   // return browser.get(site)
   // browser.get(site).then(callback);
    browser.waitForAngularEnabled(false);
    base.go(site);

});

When('I found the title as {string}', function (title) {
    var actualTitle= base.getTitle();
    return expect(actualTitle).to.eventually.equal(title);
});

   Then('I click on CustomerLogin Button', function () {
       //browser.waitForAngularEnabled(true);
       console.log("printing hello");

       element(by.buttonText("Customer Login")).click();
       console.log("poltuoooooooooooooooooooooo");
       element(by.model("custId")).$("[value='2']").click();
       console.log("sammmmmmmm");

       element(by.buttonText("Login")).click();
       //element(by.binding("user")).getText().then(function(text)
       element(by.xpath("//div/div[1]/strong/span")).getText().then(function(text)
       {
           console.log(text);
       });
       console.log("harrriiimmmm");
   });


var customerLoginPage =require('../pages/CustomerLoginPage.js');
    Then('I select the value as {string} from the list', function (string) {


    });



    Then('I click on Login', function () {







       // element(by.buttonText("Login")).click();
       // browser.sleep(8000);
       // return element(by.xpath("//button[@type='submit']")).click();
        //customerLoginPage.doLogin();
    });



    Then('Welcome Page should show login as {string}', function (string) {
       // return expect(element(by.binding('user')).getText()).to.eventually.equal(string);

        //ng-inspector for AngularJS chrome extension to find binding id
    });