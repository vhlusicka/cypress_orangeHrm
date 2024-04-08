/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When('I click on Add button', () => {
    cy.get('button[type="button"]').contains('Add').click();
})

Then('I select {string} from {string} dropdown', (userRole, dropDown) => {
    cy.get('.oxd-form').contains(dropDown)
        .parent().parent().contains('Select').click();
    cy.get('[role="listbox"]').contains(userRole).click();
})

Then('I type {string} to Employee Name textbox and select it', (employeeName) => {
    // Write Employee name to the textbox
    cy.get('.oxd-form').contains('Employee Name')
        .parent().parent().find('[placeholder="Type for hints..."]')
        .type(employeeName);
    // Select from autocomplete
    cy.get('[role="listbox"]')
        .find('[role="option"]')
        // This is hardcoded because platform added one more whitespace between First Name and Last name
        .should('contain', 'Cosmo  Kramer')
        .click();
})

Then('I type {string} to Username textbox', (username) => {
    cy.get('.oxd-form').contains('Username')
        .parent().parent().find('input')
        .type(username);
})

Then('I type {string} to Password textbox', (password) => {
    cy.get('.oxd-form').contains('Password')
        .parent().parent().find('input')
        .type(password);
})

Then('I type {string} to Confirm Password textbox', (password) => {
    cy.get('.oxd-form').contains('Confirm Password')
        .parent().parent().find('input')
        .type(password);
})

Then('I click on the Save button to save the new Admin user', () => {
    // intercept of API endpoint starts here
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users').as('createAdmin');
    // get command is the action we are performing and which will trigger the API endpoint we are intercepting
    cy.get('[type="submit"]').contains('Save').click();
    cy.wait('@createAdmin').its('response.statusCode').should('eq', 200);
} )

// This needs to be finished when PIM to create an Employee is created