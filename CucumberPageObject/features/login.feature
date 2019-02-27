Feature:Banking
  In order to perform sucessfull Login
  As a user
  I select customer Login

 Scenario:In order to verify login to  Banking App on Production
   Given I go to "http://www.way2automation.com/angularjs-protractor/banking/#/login"
   When I found the title as "Protractor practice website - Banking App"

   Then I click on CustomerLogin Button
   Then I select the value as "Harry Potter" from the list
   Then I click on Login
   Then Welcome Page should show login as "Harry Potter"

