/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


// These steps are used to do a cleanup after testing


Then('I click trash icon and confirm deletion of employee', () => {
    cy.get('[type="button"]').find('.bi-trash').click();
    cy.get('.orangehrm-dialog-popup').find('button').contains('Yes, Delete').click();
})

