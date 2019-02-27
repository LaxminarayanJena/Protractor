var PropertiesReader = require('properties-reader');
var or= PropertiesReader('./properties/or.properties');
module.exports= {

    elementsHomePage:  {

       customerLoginButton:element(by.css(or.get('customerLoginButton')))
    },


    goToCustomerLogin:function(){
        var element =this.elementsHomePage;
        element.customerLoginButton.click();

    },

    goToBankManagerLogin:function(){

    },


};