/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://opensource-demo.orangehrmlive.com"

Given('I navigate to the OrangeHRM Login page', () => {
    cy.visit(url);
})

When('I type {string} as a username', (adminUsername) => {
    cy.get('[placeholder="Username"]').type(adminUsername);
})

When('I type {string} as a password', (adminPassword) => {
    cy.get('[placeholder="Password"]').type(adminPassword);
})

When('I click on the Login button', () => {
    cy.get('[type="submit"]').click();
})

Then('I should land on a dashboard screen', () => {
    cy.get('.oxd-topbar-header').should('contain', 'Dashboard');
})

Then('I should be presented with {string} validation message', (validationMessage) => {
    cy.get('body').should('contain', 'Invalid credentials');
})