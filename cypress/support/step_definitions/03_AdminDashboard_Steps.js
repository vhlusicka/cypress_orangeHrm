/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://opensource-demo.orangehrmlive.com"


When('I click on Add button', () => {
    cy.get('button[type="button"]').contains('Add').click();
})

Then('I select {string} from {string} dropdown', (userRole, dropDown) => {
    cy.get('.oxd-form').contains(dropDown)
        .parent().parent().contains('Select').click();
    cy.get('[role="listbox"]').contains(userRole).click();
})

Then('I type {string} to {string} textbox', (employeeName, textBox) => {
    cy.get('.oxd-form').contains(textBox)
        .parent().parent().get('[placeholder="Type for hints..."]')
        .type(employeeName);
})

// This needs to be finished when PIM to create an Employee is created