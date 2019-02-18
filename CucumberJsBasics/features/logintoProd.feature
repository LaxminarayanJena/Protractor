Feature:LoginToProduction
  In order to perform sucessfull Login
  As a user
  I want to enter correct username and password

  Background:
    Given user navigates to facebook website
    When user validates the homepage title

  @prod
  Scenario: In order to verify login to facebook on Production

    Then user entered "username" username
    Then user entered "password" password
    Then user validates the captcha image
    |Country|Code|
    |India  |101 |
    |USA    |103 |
    Then user should  "loginstatus" sucessfully logged in


