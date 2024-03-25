@regression @pim
Feature: OrangeHRM - Admin dashboard page

    Background: Preconditions
        Given I navigate to the OrangeHRM Login page
        When I type "Admin" as a username
        And I type "admin123" as a password
        And I click on the "Login" button to confirm

    @smoke
    Scenario: Create a new user and add login details
        Given I navigate to "PIM" dashboard
        When I click on Add button
        And I upload a profile photo
        And I enter "Cosmo" as a First Name
        And I enter "Kramer" as a Last Name
        And I enter a random Employee Id
        And I click on Create Login Details to enable it
        And I type "cosmo.kramer" to the Username field
        And I type "cosmo123" to the Password and Confirm Password fields
        And I click on the "Save" button to confirm
        Then I intercept the endpoint to confirm user creation

    Scenario: Search for a newly created user
        Given I navigate to "PIM" dashboard
        And I enter Employee ID into Employee Id textbox
        And I click on the "Search" button to confirm
        Then I confirm that the new employee is visible on the filter list

    @debug
    Scenario: Login with a newly created user
        Given I logout from the OrangeHRM
        When I navigate to the OrangeHRM Login page
        And I type "cosmo.kramer" as a username
        And I type "cosmo123" as a password
        And I click on the "Login" button to confirm
        Then I should land on a dashboard screen