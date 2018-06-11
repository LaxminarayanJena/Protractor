describe("Test Login",function(){


    it("validate user credentials",function(){


        browser.get("http://gmail.com");
        element(by.xpath("//*[@id='Email']")).sendKeys("ramesh@gmail.com");
        element(by.css("#next")).click();

        element(by.id("Passwd")).sendKeys("skdfhsdf");
        element(by.css("#signIn")).click();

        element(by.css("#errormsg_0_Passwd")).getText().then(function(text){

            console.log(text);

        });


    });


});