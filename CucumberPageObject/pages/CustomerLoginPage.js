var PropertiesReader = require('properties-reader');
var or= PropertiesReader('./properties/or.properties');
module.exports= {

    elementsCustomerLoginPage:  {

        nameDropDown:element(by.model("custId")).$("[value='2']"),
        loginButton:element(by.xpath("//button[@type='submit']"))
    },


    selectCustomer:function(){
        var element =this.elementsCustomerLoginPage;
        element.nameDropDown.click();

    },

    doLogin:function(){
        var element =this.elementsCustomerLoginPage;
        element.loginButton.click();

    }


};