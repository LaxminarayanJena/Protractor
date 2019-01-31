describe("Test Automation of  a banking app",function(){
	
		it("validate customer login test",function()
		{
	browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	element(by.buttonText("Customer Login")).click();
	browser.sleep(3000);
	
	expect(browser.getTitle()).toContain("Protractor practice website - Banking App")
	
	element.all(by.css("#userSelect option")).then(function(items)
			//option is tag name here
			{
		
		console.log("Total values in dropdown are :"+ items.length);
		
		console.log("------printing values from dropdown-------------");
		
		for(i=0;i<items.length;i++)
			{
			items[i].getText().then(function(text)
			{
				console.log(text);
			});
			}
			
		
console.log("------printing value attribute from dropdown list-------------");
		
		for(i=0;i<items.length;i++)
			{
			items[i].getAttribute("value").then(function(text)
			{
				console.log(text);
			});
			}
	
		//element(by.model("custId")).element(by.css("[value='2']")).click();
		element(by.model("custId")).$("[value='2']").click();
		browser.sleep(3000);
		element(by.buttonText("Login")).click();
		//element(by.binding("user")).getText().then(function(text)
        element(by.xpath("//div/div[1]/strong/span")).getText().then(function(text)
		{
			console.log(text);
		});
        
        expect(element(by.binding("user")).getText()).toEqual("Harry Potter");
        //binding we get from html source {{user}}
		});
		
		});
});