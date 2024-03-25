/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


// The steps that are reusable are listed here

// Can be used for most of Save/Confirm/Update buttons, it's important it has type="submit" tag
When('I click on the {string} button to confirm', (confirmButton) => {
    cy.get('[type="submit"]').contains(confirmButton).click();
})

// Used for navigating through dashboards
When('I navigate to {string} dashboard', (dashboardName) => {
    cy.get('.oxd-sidepanel').contains(dashboardName).click();
})

// 
When('I logout from the OrangeHRM', () => {
    cy.get('.oxd-userdropdown-name').click();
    cy.get('[role="menuitem"]').contains('Logout').click();
})