var Objects = require('./Objects.json');
var using = require('jasmine-data-provider');

//npm i jasmine-data-provider

describe("Test Gmail",function(){

    beforeEach(function(){

        browser.ignoreSynchronization = true;
        browser.get(Objects.testsiteurl);
        console.log("Test site URL is : "+Objects.testsiteurl);

    }) ;

    function plusProvider(){

        return [

            {username:Objects.userdetails.username1,password:Objects.userdetails.password1},
            {username:Objects.userdetails.username2,password:Objects.userdetails.password2},
        ];


    }



    using(plusProvider,function(data){

        it("Validate user credentials",function(){

            element(by.xpath(Objects.locators.loginpage.username)).sendKeys(data.username);
            console.log(data.password);
            element(by.id(Objects.locators.loginpage.next)).click();

        });


    });


});
