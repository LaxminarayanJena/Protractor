var {Given, When, Then} =require('cucumber');

Then('user validates the captcha image', function (table) {
    var data=table.hashes()[1];
    return console.log("@Then-user  validates the captcha image and country name :" +data['Country'] + " and the code :" +data['Code']);
});