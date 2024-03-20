/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


// These are the variables used in the next steps
const profileImage = 'cypress/fixtures/images/cosmo_photo.jpg';
const employeeId = Math.floor(Math.random() * 2000) + 1000;

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
    cy.log(employeeId);
    cy.pause();
})

Then('I upload a profile photo', () => {
    cy.get('input[type=file]').selectFile(profileImage, { force: true });
})

Then('I intercept the endpoint to confirm user creation', () => {
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees').as('registerUser');
    cy.wait('@registerUser').then((interception) => {
      expect(interception.response.statusCode).to.equal(200); // Assert status code
    });
    cy.pause();
})
