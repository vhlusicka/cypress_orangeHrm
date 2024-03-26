@cleanup @regression
# This feature file can only be executed as part of @regression. Executing it separately will result in failed test.
Feature: OrangeHRM - Cleanup

    Background: Preconditions
        Given I navigate to the OrangeHRM Login page
        When I type "Admin" as a username
        And I type "admin123" as a password
        And I click on the "Login" button to confirm


    Scenario: Delete created employee
        Given I navigate to "PIM" dashboard
        And I enter Employee ID into Employee Id textbox
        And I click on the "Search" button to confirm
        And I click trash icon and confirm deletion of employee