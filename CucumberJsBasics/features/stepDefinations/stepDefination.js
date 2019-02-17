var {Given, When, Then} =require('cucumber');

Given('user naviagtes to facebook website', function () {
    return console.log("@Given--user navigates to facebook website");
});

When('user validates the homepage title', function () {
    return console.log("@Then-user validates the homepage title");
});

Then('user entered valid username', function () {
    return console.log("@Then-user entered valid username");
});

Then('user entered valid password', function () {
    return console.log("@Then-user entered valid password");
});

Then('user should be sucessfully logged in', function () {
    return console.log("@Then-user should be sucessfully logged in");
});