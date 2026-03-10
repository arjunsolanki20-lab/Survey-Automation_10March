import "./commands"; 
import '@shelex/cypress-allure-plugin';
require('cypress-xpath');
import '@4tw/cypress-drag-drop'
import 'cypress-real-events';


Cypress.on('uncaught:exception', (err, runnable) => {
  // prevent Cypress from failing the test
  return false;
});
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Minified React error #418')) {
    return false; // ignore this error
  }
});

// cypress/support/e2e.js
Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("Minified React error #418")) {
    return false;  // ignore hydration error
  }
});
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes("showPicker")) {
    return false; // prevent Cypress from failing
  }
});
 
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Minified React error')) {
    return false;
  }
});
