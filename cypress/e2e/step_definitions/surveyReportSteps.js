
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SurveyReportPage from '../pages/SurveyReportPage'; // adjust path if needed\
import Api from "../pages/Api";
import SurveyPage from "../pages/CreateSurvayPage";

const surveyPage = new SurveyPage();
const api = new Api();

Given('the user is logged in as a Survey Maker', () => {
  const creds = userCredentials[role];
  cy.visit("https://twowayserver.future-club.com/PuffinUI/login", { timeout: 40000 });
  loginPage.enterUsername(creds.username);
  loginPage.enterPassword(creds.password);
  loginPage.clickLogin();
  loginPage.verifyLoginSuccess();
  cy.url({ timeout: 80000 }).should('include', '/PuffinUI/dashboard');
});

When('the user searches for a valid survey name in the Survey Report', () => {
  const surveyName = 'Test 1';
  SurveyReportPage.openSurveyReportAndSearch(surveyName), { timeout: 4000 };
});

Then('only the matching survey record should be displayed', () => {
  const expectedSurvey = 'Survey';
  cy.get('.table-header-cell', { timeout: 10000 })
    .should('be.visible')
    .and('contain.text', expectedSurvey);
});

When("the user click on survey", () => {
  SurveyReportPage.openSurveyReport()
});

Then('the user clicks on the Filter', () => {
  SurveyReportPage.clickOnFilterButton()
});

Then('the filter operator options should be displayed successfully', () => {
  SurveyReportPage.containFilterOption()
});

Then('Observe Count per page at bottom is 20', () => {
  SurveyReportPage.countPerPage()
});
Then('Navigate to header menu and change total page to 50', () => {
  SurveyReportPage.pageHeaderMenu()
  SurveyReportPage.FiftyOption()
});

Then('Observe Count per page at bottom is 50', () => {
  SurveyReportPage.countPerPage1()
});

Then('Navigation tab section should be visible', () => {
  SurveyReportPage.navigationPage()
});
Then('User click on onward navigation arrow', () => {
  SurveyReportPage.onwardRowNav()
});
Then('User click on return navigation arrow', () => {
  SurveyReportPage.returnRowNav()
});

Then('user click any listing item', () => {
  SurveyReportPage.clickAnyListingItem();
});

Then('Overview details should be visible', () => {
  SurveyReportPage.visibleOverviewText();
});

Then('Total Total Survey Recipient should be visible and have count', () => {
  SurveyReportPage.totalSurveyRecipient()
});

Then('user should be able to select the date range', () => {
  SurveyReportPage.datePicker();
});

Then('User notes the Total Participants, Submitted, Partially Completed counts from the grid and verifies that the "Not Taken" count is displayed correctly', () => {
  SurveyReportPage.observeNote()
});

Then('Verify  Participant Survey Response Details Panel for Partially Completed Status', () => {
  SurveyReportPage.participantSurvey()
});

When('the user clicks on the "Table" tab', () => {
  SurveyReportPage.tableTab()
});

Then('the answers should be visible in the Question table', () => {
  SurveyReportPage.checkItem1InTable()
});

Then('Click on CSV export button', () => {
  SurveyReportPage.csvExportButton()
});

Then('Click on PDF export button', () => {
  SurveyReportPage.pdfExportButton()
});

Then('Click on Excel export button', () => {
  SurveyReportPage.excelExportButton()
});

Then('User go to Participants Table', () => {
  SurveyReportPage.participantsTab()
});

Then('Response Status is "Submitted" or "Partially Completed"', () => {
  SurveyReportPage.responseStatusTab()
  SurveyReportPage.statusSubmitted()
});

Then('click on Reset Filter', () => {
  SurveyReportPage.resetFilter()
});

Then('Select Arebic Language from dropdown', () => {
  SurveyReportPage.selectArebicLanguage()
});

Then('User navigate to Summary Tab', () => {
  SurveyReportPage.navSummaryTab()
});

Then('observe all questions listed under Summary Tab', () => {
  SurveyReportPage.summaryQuestions()
});

Then('Click on Chart Type from dropdown', () => {
  SurveyReportPage.selectChartType()
});

Then('Bar, Vertical Bar, Pie and Doughnut types are visible in dropdown', () => {
  SurveyReportPage.chartType()
});

Then('Observe order dropdown enables and Default Order is selected', () => {
  SurveyReportPage.chartType()
});

Then('Select Bar, Vertical Bar, Pie and Doughnut sequentially', () => {
  SurveyReportPage.typeDropdown()
});
Then("response status should be submitted", () => {
  surveyPage.checkResponseStatus();
})
Then("user click on first listing item from Survey Name column", () => {
  SurveyReportPage.surveyNameCell();
});
Then("Check Submitted Stat available under overview Tab", () => {
  SurveyReportPage.submittedStats();
});
Then("Observe 'Partially completed' column value for the same survey report which we created", () => {
  SurveyReportPage.partiallySubmittedColumn1();
});
Then("Check Partially completed Stat available under overview Tab", () => {
  SurveyReportPage.partialComplete();
});
Then("Check Average time taken", () => {
  SurveyReportPage.averageTime1();
});
Then("Check Partiallycompleted Stat available under overview Tab", () => {
  SurveyReportPage.partialComplete();
})
