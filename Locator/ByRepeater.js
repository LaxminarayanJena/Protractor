describe("Locator testing By Repeator",function()
{
    it("Adding few records",function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        element(by.model("first")).sendKeys("1");
        element(by.model("second")).sendKeys("1");
        element(by.buttonText("Go!")).click();


        element(by.model("first")).sendKeys("4");
        element(by.model("second")).sendKeys("3");
        element(by.buttonText("Go!")).click();


        element(by.model("first")).sendKeys("7");
        element(by.model("second")).sendKeys("1");
        element(by.buttonText("Go!")).click();

    })


    it("Printing first row data",function () {

element(by.repeater("result in memory").row(0)).getText().then(function(text)
{
    console.log("Result is :"+text);
})

    })



    it("Printing first column data",function () {

        element.all(by.repeater("result in memory").column("result.timestamp | date:'mediumTime")).getText().then(function(text)
        //element.all will take it in an  array
        {
            console.log("printing first col data");
            console.log(text);
        })

    })

    it("Printing entire table data",function () {

        element.all(by.repeater("result in memory")).getText().then(function(text)
        {
            console.log("printing table data");
            console.log(text);
        })

    })

    it("Printing the Entire table data in new line",function(){


        console.log("Printing the Entire table data in new line")

        element.all(by.repeater("result in memory")).getText().then(function(rows){

            var noOfItems = rows.length;
            for(var i=0; i<noOfItems; i++){

                var table =  element(by.repeater("result in memory").row(i)).getText();

                table.then(function(text){

                    console.log(text);

                });
            }




        })

        browser.sleep(2000);
    }) ;




});