var {Given, When, Then} =require('cucumber');
var chai =require('chai');
var chaiAsPromised=require('chai-as-promised');


chai.use(chaiAsPromised);
var expect=chai.expect;

Given('I go to {string}', function (site) {
    return browser.get(site)
});

When('I found the title as {string}', function (title) {
    var actualTitle= browser.getTitle();
    return expect(actualTitle).to.eventually.equal(title);
});

