import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DashboardPage from "../pages/DashboardPage";
import Api from "../pages/Api";

const dashboard = new DashboardPage();
const api = new Api();


When('User able to enter General Setting limit to one response input of {string}', (condition) => {
  dashboard.limitToOneResponseInput(condition);
});

Then('Survey List status as {string}', (expectedStatus) => {
  dashboard.verifySurveyListStatus(expectedStatus);
});

Then('User verify survey list in Checker', () => {
  dashboard.verifySurveyListInChecker();
});

Then('the user approve the survey List', () => {
  dashboard.approveSurveyList();
});

Then('User able to see total survey dashboard count', () => {
  dashboard.totalSurveyDashboardCount();
});

Then('User able to see total survey dashboard increment Count', () => {
  dashboard.verifyTotalSurveyCountIncrementedByOne();
});

Then('User able to see total survey schedule dashboard count', () => {
  dashboard.totalSurveyScheduleDashboardCount();
});

When("User fill basic details of survey Schedule E2E flow from Survey List", (dataTable) => {
  const surveyscheduledata = dataTable.rowsHash();
  dashboard.addSurveyScheduleE2EFlow(surveyscheduledata);
});

Then('User able to see total survey schedule active dashboard count', () => {
  dashboard.totalSurveyScheduleActiveDashboardCount();
});

Then('User able to verify Maker and Checker Active status same', () => {
  dashboard.verifyTotalSurveyScheduleActive();
});

Then('verify total Active counts in dashboard Pie chart and Survey Schedule Table {string}', (expectedStatus) => {
  dashboard.verifyTotalSurveyScheduleActiveCount(expectedStatus);
});

Then('verify total Completed counts in dashboard Pie chart and Survey Schedule Table {string}', (expectedStatus) => {
  dashboard.verifyTotalSurveyScheduleCompletedCount(expectedStatus);
});

Then('verify total Active counts in dashboard Pie chart and Survey Schedule Table present {string}', (expectedStatus) => {
  dashboard.verifyTotalSurveyScheduleActiveCount_NotPresent(expectedStatus);
});

Then('verify total Completed counts in dashboard Pie chart and Survey Schedule Table present {string}', (expectedStatus) => {
  dashboard.verifyTotalSurveyScheduleCompletedCount_NotPresent(expectedStatus);
});

When("open the survey", () => {
  surveyPage.openScheduledsurvey();
})
Then("response status should be submitted", () => {
  surveyPage.checkResponseStatus();
})

When('User navigate to survey dashboard page', () => {
  dashboard.navigateToSurveyDashboard();
});

When("User clicks and redirected to Puffin Dashboard page", () => {
  dashboard.verifyPuffinRedirect();
});

When('User add page1 multiple questions Radio Button', () => {
  dashboard.addPage1MultipleQuestionsRadioButton();
});

When('User navigates Preview tab', () => {
  dashboard.previewTabBtnClick();
});

When('User verify next and compalte process', () => {
  dashboard.verifyNextAndCompalteProcess();
});

Then('User verifies Send Review popup and confirms in Survey list', () => {
  dashboard.verifySendForReviewSurveyList();
});

Then('survey list success message visible', () => {
  dashboard.verifyToastSuccessMessageSurveyList();
});

When('User choose languages of English and Arabic', () => {
  dashboard.selectLanguagesOption();
});

Then('The languages should selected successfully', () => {
  dashboard.verifySelectedLanguagesOption();
});

When("add comment for survet Schedule", () => {
  dashboard.addSurveyScheduleCommentMessage();
});

When('User uploads file {string}', (fileName) => {
  dashboard.uploadFiles(fileName);
});

Then('User verify valid file uploads', () => {
  dashboard.verifyValidFileUploaded();
});

Then('User verifies Send For Review popup message and confirms', () => {
  dashboard.verifySendForReview();
});

Then('survey schedule success message visible', () => {
  dashboard.verifyToastMessageSuccess();
});

Then('User able to see total survey Schedule dashboard increment count', () => {
  dashboard.verifyTotalSurveyScheduleCountIncrementByOne();
});

Then('User able to see verify live and offline piecharts visible', () => {
  dashboard.verifyLiveAndOfflinePiechartsvisible();
});

Then('User verify latest updates dashboard', () => {
  dashboard.verifyLatestUpdatesDashboard();
});

Then('User verify all surveys of title department visibility and not empty in Latest Updates', () => {
  dashboard.verifyAllSurveysOfTitleDepartmentCount();
});

Then('User check total bar count in dashboard', () => {
  dashboard.getTotalBarCountInDashboard();
});

Then('User verify all bars with validations in dashboard', () => {
  dashboard.printAllBarsWithValidationDashboard();
});

Then('User verify bar count incremented for Response Rate and Response Time after survey complete', () => {
  dashboard.verifyBarCountIncremented();
});

Then('User verify only active survey present {string}', (expectedStatus) => {
  dashboard.verifyActiveStatusInDashboard(expectedStatus);
});

Then('User verify only completed survey present {string}', (expectedStatus) => {
  dashboard.verifyCompletedStatusInDashboard(expectedStatus);
});
