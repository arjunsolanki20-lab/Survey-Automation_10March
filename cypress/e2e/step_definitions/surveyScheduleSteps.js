import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SurveySchedulePage from "../pages/SurveySchedulePage";
import { userCredentials } from "../../support/usercreds";
import { faker } from "@faker-js/faker";

const ssp = new SurveySchedulePage();

When("User navigates to Survey Schedule page", () => {
  ssp.navigateToSurveySchedule();
});

When("User selects filter type as {string}", (type) => {
  ssp.selectType(type);
});

When("User selects filter operator {string}", (operator) => {
  cy.wrap(operator).as("operator");
  ssp.selectFilterOperator(operator);
});

When("User enters {string} in search field", (value) => {
  cy.wrap(value).as("value");
  ssp.enterSearchValue(value);
});

When("User clicks on Search button", () => {
  ssp.clickSearch();
});

Then("List should display {string} according to {string} condition", (value, operator) => {
  ssp.verifyFilteredTableResults(value, operator);
});

Then("I enter survey date as {string}", (date) => {
  ssp.enterDate();
});

When("User clicks on Reset button and table reloads", () => {
  ssp.resetFiltersAndVerify();
});

Then("User observes that Count per page at the bottom is {int}", (count) => {
  ssp.verifyElementByText(ssp.elements.countPerPageLabel, count)
});

When("User navigates to the header menu and changes total page count to {string}", (pageCount) => {
  ssp.selectDropdownOption(ssp.elements.totalPageDropdown, ssp.elements.totalPageOptions, pageCount);
});

Then("User observes that Count per page at the bottom is updated to {string}", (expectedCount) => {
  ssp.verifyElementByText(ssp.elements.countPerPageLabel, expectedCount);
});


When('click on the Add Survey Schedule add button', () => {
  ssp.clickAddButton();
});

When('click on the Language Dropdown', () => {
  ssp.clickLanguageDropdown();
});

When('select the languages {string} and {string}', (lang1, lang2) => {
  ssp.selectLanguages([lang1, lang2]);
});

Then('selected languages {string} and {string} should be displayed in the language field', (expected1, expected2) => {
  ssp.getSelectedLanguages().should('contain.text', expected1).and('contain.text', expected2);
});

When("User fill basic details of survey Schedule Dubai Timimngs", (dataTable) => {
  const surveyscheduledata = dataTable.rowsHash();
  ssp.addSurveyScheduleDubaiTimings(surveyscheduledata);
});

When("the user adds survey schedule details with default language as Arabic", (dataTable) => {
  const surveyscheduledata = dataTable.rowsHash();
  ssp.addSurveyScheduleByLanguage(surveyscheduledata);
});

When("the user adds survey schedule details with default language as Arabic and English", (dataTable) => {
  const surveyscheduledata = dataTable.rowsHash();
  ssp.addSurveyScheduleArabicEnglish(surveyscheduledata);
});

When('User selects languages of English and Arabic', () => {
  ssp.selectLanguages();
});

Then('The languages should be selected successfully', () => {
  ssp.verifySelectedLanguages();
});

When("add comment to survet Schedule", () => {
  ssp.addSurveyScheduleComment();
});

When('User uploads the file {string}', (fileName) => {
  ssp.uploadFile(fileName);
});

Then('User verifies Send For Review popup and confirms', () => {
  ssp.verifyAndSendForReview();
});

Then('User verifies valid file uploads', () => {
  ssp.verifyValidFileUploads();
});

Then('User verifies invalid file uploads', () => {
  ssp.verifyInvalidFileUploads();
});

Then('survey schedule success message', () => {
  ssp.verifyToastMessage();
});

Then('User redirected to Survey Schedule Page', () => {
  ssp.verifySurveySchedulePage();
});

Then('Survey scheduled status as {string}', (expectedStatus) => {
  ssp.verifySurveyScheduledStatus(expectedStatus);
});

Then('Survey scheduled language as {string}', (expectedStatus) => {
  ssp.verifySurveyScheduledLanguage(expectedStatus);
});

Then('Survey scheduled languages as {string} and {string}', (language1, language2) => {
  ssp.verifySurveyScheduledLanguages(language1, language2);
});

Then('the user deletes the survey schedule', () => {
  ssp.deleteSurveySchedule();
});

When("User clicks and is redirected to Puffin Dashboard page", () => {
  ssp.clickAndVerifyPuffinRedirect();
});

Then('the user approve the survey schedule', () => {
  ssp.approveSurveySchedule();
});

Then('the user reject the survey schedule', () => {
  ssp.rejectSurveySchedule();
});

When("the user wait and refresh", () => {
  ssp.clickResetButton();
});

Then('status of {string} visible', (expectedStatus) => {
  ssp.verifyStatusSurveySchedule(expectedStatus);
});

Then('User verifies Response Status column contains {string}', (expectedStatus) => {
  ssp.verifyResponseStatus(expectedStatus);
});

Then('User verify participant response detail panel {string}', (expectedStatus) => {
  ssp.verifyParticipantResponseDetailPanel(expectedStatus);
});

Then('User should see the participant response panel details verified', () => {
  ssp.verifyPanelDetailsField();
});

When("User fill basic details of survey Schedule", (dataTable) => {
  const surveyscheduledata = dataTable.rowsHash();
  ssp.addSurveyScheduleData(surveyscheduledata);
});

When('User selects languages of English', () => {
  ssp.selectLanguageEnglish();
});

Then('The languages should be selected successfully English', () => {
  ssp.verifySelectedLanguageEnglish();
});

Then('User verify the inReview Status', () => {
  ssp.verifySurveyScheduledInReviewStatus();
});

Then('User verify the Row data in page', () => {
  ssp.verifyAnyTableRowVisible();
});

When('User selects {string} as from date and {string} as to date', (fromDate, toDate) => {
  ssp.selectFromAndToDates(fromDate, toDate);
});
