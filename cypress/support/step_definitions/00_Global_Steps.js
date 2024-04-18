/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let cypressCookie;

// The steps that are reusable are listed here

// Can be used for most of Save/Confirm/Update buttons, it's important it has type="submit" tag
When('I click on the {string} button to confirm', (confirmButton) => {
    cy.get('[type="submit"]').contains(confirmButton).click();
})

// Used for navigating through dashboards
When('I navigate to {string} dashboard', (dashboardName) => {
    cy.get('.oxd-sidepanel').contains(dashboardName).click();
})

// Used to logout of platform
When('I logout from the OrangeHRM', () => {
    cy.get('.oxd-userdropdown-name').click();
    cy.get('[role="menuitem"]').contains('Logout').click();
})

When('I change the language to {string}', (language) => {

    // Validate request
    cy.request({
        method: 'POST',
        url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
        body: {
            "username": "Admin",
            "password": "admin123!"
        }
    }).then(response => {
        // Get the cookies
        cy.getCookies().then(cookies => {
            // Store the value of the first cookie
            cypressCookie = cookies[0].value;
            // Log the value of the cookie
            cy.log('cypressCookie: ' + cypressCookie);
        });
        cy.log('cypressCookie: ' + cypressCookie);
    });

    cy.log('cypressCookie: ' + cypressCookie);
    cy.pause();
    // Ovdje sam hardkodirao cookie
    cy.setCookie('orangehrm', cypressCookie);

    cy.pause();

    // Localization request
    cy.request({
        method: 'PUT',
        url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/localization',
        headers: {
            // "cookie": cypressCookie
        },
        body: {
            "language": language,
            "dateFormat": "Y-d-m"
        }
    });
    cy.pause();
});
