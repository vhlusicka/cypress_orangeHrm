@admindashboard
Feature: OrangeHRM - Admin dashboard page

    Background: Preconditions
        Given I navigate to the OrangeHRM Login page
        When I type 'Admin' as a username
        And I type 'admin123' as a password
        And I click on the "Login" button to confirm

    Scenario: Create a new user
        Given I navigate to "Admin" dashboard
        When I click on Add button
        And I select "Admin" from "User Role" dropdown
        And I select "Enabled" from "Status" dropdown
        And I type "Cosmo Kramer" to "Employee Name" textbox
        # And I type "cosmok" to Username textbox
        # And I type <cosmo123> to Password textbox
        # And I type <cosmo123> to Confirm Password textbox
        # And I click the Save button