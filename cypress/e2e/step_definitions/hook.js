import { Before } from "@badeball/cypress-cucumber-preprocessor";
// Disable "Leave site?" confirmation popup for all tests
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
  win.addEventListener('beforeunload', (event) => {
    event.stopImmediatePropagation();
  });
});

beforeEach(() => {
  cy.window().then((win) => {
    win.onbeforeunload = null;
  });
});

