var {Given, When, Then} =require('cucumber');


Given('I go to {string}', function (site) {
     return browser.get(site);
  });