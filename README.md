# Protractor
Protractor End to End testing framework for AngularJS Apps
![capture](https://user-images.githubusercontent.com/24494133/42014358-8fe1d846-7abf-11e8-9dab-b225666e26d7.PNG)



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

promiseobject is data returned by asynchronous function. It can be a resolveif the function returned successfully or a rejectif function returned an error.
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
