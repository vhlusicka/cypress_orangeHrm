/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


// These are the variables used in the next steps
const profileImage = 'cypress/fixtures/images/cosmo_photo.jpg';
// const employeeId = Math.floor(Math.random() * 2000) + 1000;
const employeeId = Cypress.env('employeeId');
const employeeUsername = Cypress.env('employeeUsername');

Then('I enter {string} as a First Name', (firstName) => {
    cy.get('[placeholder="First Name"]').type(firstName);
})

Then('I enter {string} as a Last Name', (lastName) => {
    cy.get('[placeholder="Last Name"]').type(lastName);
})

Then('I enter a random Employee Id', () => {
    cy.contains('Employee Id').parent().parent()
        .find('input')
        .clear()
        .type(employeeId);
    // This cy.log is for debugging purposes
    cy.log(employeeId);
})

Then('I click on Create Login Details to enable it', () => {
    cy.contains('Create Login Details').parent()
        .find('input[type="checkbox"]')
        .click({ force: true });
})

Then('I type a username to the Username field', () => {
    // if username already exists, the test will fail. Better solution to be done additionally.
    cy.contains('Username').parent().parent()
        .find('input')
        .type(employeeUsername);
})

Then('I type {string} to the Password and Confirm Password fields', (password) => {
    cy.contains('Password').parent().parent()
        .find('[type="password"]')
        .type(password);
    cy.contains('Confirm Password').parent().parent()
        .find('[type="password"]')
        .type(password);
})

Then('I upload a profile photo', () => {
    cy.get('input[type=file]').selectFile(profileImage, { force: true });
})

When('I click on the Save button to save new employee', () => {
    // intercept of API endpoint starts here
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees').as('registerUser');
    // get command is the action we are performing and which will trigger the API endpoint we are intercepting
    cy.get('[type="submit"]').contains('Save').click();
    cy.wait('@registerUser').then((interception) => {
        expect(interception.response.statusCode).to.equal(200); // Assert status code
    });
    
})

Then('I enter Employee ID into Employee Id textbox', () => {
    cy.get('label').contains('Employee Id').parent().parent()
        .find('input').type(employeeId);
    cy.log(employeeId);
})

Then('I confirm that the new employee is visible on the filter list', () => {
    cy.get('.orangehrm-container').find('[role="cell"]').should('contain', employeeId);
})