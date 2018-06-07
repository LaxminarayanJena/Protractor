

var SelectWrapper = require('./select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));

describe("Select Wrapper",function(){



    it("Handling the dropdown list",function(){


        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/customer");

       // mySelect.selectByText("Harry Potter");
        mySelect.selectByValue("3");
        browser.sleep(2000);

    }) ;


    it("Finding count and printing all dropdown items",function(){


      var dropoptions = mySelect.getOptions();
      dropoptions.then(function(options){
          console.log(options.length);


            for(var i=0; i<options.length-1;i++){


                element(by.repeater("cust in Customers").row(i)).getText().then(function(text){

                   console.log(text);

                });


            }


        });

        browser.sleep(2000);

    }) ;




});
