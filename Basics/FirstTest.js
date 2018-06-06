describe("Test entering into an inputbox",function(){
	//C:\Users\Poltu\AppData\Roaming\npm\node_modules\protractor\built
	it("Executing input box test",function()
	{
browser.get("https://www.angularjs.org");
element(by.model("yourName")).sendKeys("Poltu");
element(by.binding("yourName")).getText().then(function(text)
{
	console.log(text);
});

	});
	
	});