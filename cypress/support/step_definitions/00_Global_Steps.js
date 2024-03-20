/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


// The steps that are reusable are listed here

When('I click on the {string} button to confirm', (confirmButton) => {
    cy.get('[type="submit"]').contains(confirmButton).click();
})

When('I navigate to {string} dashboard', (dashboardName) => {
    cy.get('.oxd-sidepanel').contains(dashboardName).click();
})