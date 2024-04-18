@regression @login
Feature: OrangeHRM - Login Page

    Background: Preconditions
        Given I navigate to the OrangeHRM Login page

    @smoke
    Scenario: Valid Login as Admin
        When I type "Admin" as a username
        And I type "admin123" as a password
        And I click on the "Login" button to confirm
        Then I should land on a dashboard screen

    Scenario: Invalid Login as Admin
        When I type "Admin" as a username
        And I type "admin123456" as a password
        And I click on the "Login" button to confirm
        Then I should be presented with "Invalid credentials" validation message

    @debug
    Scenario: Change language
        When I change the language to "en_US"