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
