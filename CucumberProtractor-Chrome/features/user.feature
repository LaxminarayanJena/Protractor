Feature: Automate the user management feature
  As an Automation Engr
  I need to automate way2automation.com
  So I can show my automation capabilities

  Background:
    Given user navigated to application url

  Scenario: Add a user and validate the user has been added to the table

    When  add new user with mandatory details
    Then  validate the user has been added to the table

  Scenario Outline: Delete user User Name: novak and validate user has been deleted
    When user click on "<username>" delete icon to delete the record
    Then  validate "<username>" has been deleted

    Examples:
      | username | 
      | novak    |
