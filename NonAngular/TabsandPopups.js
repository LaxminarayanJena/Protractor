describe("Handling Tabs and Popups",function(){


    it("Handling Tabs and Popups",function(){


        browser.get("http://www.hdfcbank.com/");
        element(by.id("loginsubmit")).click();


        browser.getAllWindowHandles().then(function(handles){

            browser.switchTo().window(handles[1]).then(function(){

                element(by.linkText("Apply now")).click();
                browser.sleep(5000);

                browser.getAllWindowHandles().then(function(handles){

                    browser.switchTo().window(handles[2]).then(function(){

                        element(by.id("eForm_form_applicantPlaceHolder_residenceCity_value")).sendKeys("Noida");
                        browser.sleep(5000);

                    })

                    browser.switchTo().window(handles[1]).then(function(){


                     browser.getTitle().then(function(title){


                         console.log(title);
                     })

                    })

                });

            })


        });






    });


});