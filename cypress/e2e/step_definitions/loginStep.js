import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { userCredentials } from "../../support/usercreds";
import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage();

let currentCreds;

Given('User logs in as {string}', (role) => {
    cy.log('User Login : ');
    const creds = userCredentials[role];
    cy.visit("https://twowayserver.future-club.com/PuffinUI/login", { timeout: 90000 });
    loginPage.enterUsername(creds.username, { timeout: 90000 });
    loginPage.enterPassword(creds.password, { timeout: 90000 });
    loginPage.clickLogin({ timeout: 90000 });
    loginPage.verifyLoginSuccess({ timeout: 90000 });
    cy.url({ timeout: 90000 }).should('include', '/PuffinUI/dashboard');
});

// When("click on logout", () => {
//     loginPage.profileMenuName().trigger('mouseover');
//     loginPage.profileDropdown().should('be.visible');
//     loginPage.clickOnlogout();
// });
When("click on logout", () => {
  loginPage.profileDropdown().invoke('show');
  loginPage.clickOnlogout();
});
Then("user is logged out successfully", () => {
  cy.url({ timeout: 60000 }).should('include', '/PuffinUI/login');
});




