@regression @pimdashboard
Feature: OrangeHRM - Admin dashboard page

    Background: Preconditions
        Given I navigate to the OrangeHRM Login page
        When I type 'Admin' as a username
        And I type 'admin123' as a password
        And I click on the "Login" button to confirm

    Scenario: Create a new user
        Given I navigate to "PIM" dashboard
        When I click on Add button
        And I enter "Cosmo" as a First Name
        And I enter "Kramer" as a Last Name
        And I enter a random Employee Id
        And I upload a profile photo
        And I click on the "Save" button to confirm
        Then I intercept the endpoint to confirm user creation

    Scenario: Search for a newly created user
        Given I navigate to "PIM" dashboard
        And I enter Employee ID into Employee Id textbox
        And I click on the "Search" button to confirm
        Then I confirm that the new employee is visible on the filter list