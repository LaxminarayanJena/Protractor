# Protractor
Protractor End to End testing framework for AngularJS Apps
![capture](https://user-images.githubusercontent.com/24494133/42014358-8fe1d846-7abf-11e8-9dab-b225666e26d7.PNG) </br>
Angular 8 was released on May 28, 2019</br>
Angular 9 was released on February 6, 2020. Version 9 moves all applications to use the Ivy compiler and runtime </br>
protractor 7.0 </br>
javascript is synchronous- ajax(),settimeout() shows aysnchronous nature </br>
asynchronous- multiple work at a time </br>
https://github.com/LaxminarayanJena/NIIT

npm init -creates package.json
npm --version <br>
npm install -g protractor <br>
protractor --version <br>
webdriver-manager update <br>
webdriver-manager start <br>
http://localhost:4444/wd/hub/static/resource/hub.html <br>

---------------------------
protractor conf.js <br>


-----------------------
C:\Program Files\nodejs\node_modules\npm\bin    in path settings

npm i npm@latest -g </br>

Download all the packages where package.json file is there </br>
npm install</br>
webstorm configuration
![webstorm configuration](https://user-images.githubusercontent.com/24494133/52033465-0ea54d80-254b-11e9-8c68-64e462adf8c1.PNG)

Every javascript return promises.promises resembles state of your step.1)pending 2)resolved 3)rejected 90% actions-protractor will not move forward unless promise is resolved If you want to retrieve anything from browser then that particular functionality related methods have no support of promise resolving
The promise fulfilled with its value will be returned.

The main difference between callbacks and promises is that with callbacks you tell the executing function what to do when the asynchronous task completes, whereas with promises the executing function returns a special object to you (the promise) and then you tell the promise what to do when the asynchronous task 
in call back we pass functions as parameters to other functions and call them inside the outer functions  </br>
```
function print(callback) { 
    callback();
}
```
```
describe('angularjs homepage', function() {
  it('should greet the named user', async function() {
    await browser.get('http://www.angularjs.org');

    await element(by.model('yourName')).sendKeys('Julie');

    var greeting = element(by.binding('yourName'));

    expect(await greeting.getText()).toEqual('Hello Julie!');
  });
 ```
#### Let vs Var vs Const:</br>
If you declare a variable using the “var” keyword, it will be in the global scope(accessible to the whole program) if declared outside all functions. It will have a local scope(accessible within the function only) if defined inside a function. If you declare a variable using the “let” keyword, it will be blocked scope, i.e., any variable declared using let, will be accessible with the surrounding curly brackets ({ }) only. If you declare a variable using the “const” keyword, you will not be able to change its value later on. As per scope, it will be the same as variables declared using the “let” keyword.

#### Locators:</br>
WaitForAngular ,By.Binding, By.repeater,By.textarea,By.model,WebElelement.all,WebElement.evaluate

```
Find all links
browser.get("https://google.com")
element.all(by.tagname("a")).count().then(function(allLinks){
	console.log("Number of links in page  : " +allLinks);
})

is selected
browser.get("https://google.com")
element(by.xpath("//input[@id='selected'] [value='Bangalore']")).isSelected().then(function(selectedFlag){
	console.log("Is element selected : "+selectedFlag);
})

move to element
browser.actions.moveToElement(menuElement).moveToElement(element(by.xpath("xpath-of-menu-item-element"))).click().perform()

xit("test description)

element(by.xpath("xpath of box")).getAttribute ("value")).then(function(textValue){
	console.log(textValue)
})

element(by.id("some")).getAttribute("title").then(function(tooltip){
	console.log(tooltip)
}


browser.actions().dragAndDrop(
	element(by.id("drag1")),
	element(by.id("div2"))
).perform();

let EC = ExpectedConditions;
let condition = EC.visibilityOf(element(by.id("hidden")))
browser.wait(condition, 30000)


```
