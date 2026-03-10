import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Api from "../pages/Api";


const api = new Api();
When("generate link", () => {
  api.runApiFlow();
});

When("submit the survey", () => {
  api.SubmitSurvey();

});

When("submit the survey Arabic", () => {
  api.SubmitSurveyArabic();
});

When("user select and submit all questions", () => {
  api.userSelectAndSubmitAllQuestions();
});

Then("User select all questions item in generated link", () => {
  api.verifyAllQuestionsSeleted_Complete();
});

Then("User select partial questions item in generated link", () => {
  api.verifyPartialQuestionsSeleted_partialComplete();
});

Then("User submit the complete process", () => {
  api.clickCompleteTheSurvey_goBack();
});

When("submit the survey and redirect same link for verify non editable fields", () => {
  api.completeSurveyAndVerifyNonEditableOnRevisit();
});

When("submit the survey and redirect same link for verify partial completion", () => {
  api.completeSurveyAndVerifyPartialCompleteOnRevisit();
});