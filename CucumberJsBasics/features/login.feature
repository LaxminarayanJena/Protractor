Feature:Login
  In order to perform sucessfull Login
  As a user
  I want to enter correct username and password

  Scenario: In order to verify login to facebook
    Given user naviagtes to facebook website
    When user validates the homepage title
    Then user entered valid username
    Then user entered valid password
    Then user should be sucessfully logged in
