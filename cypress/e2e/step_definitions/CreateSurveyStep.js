import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// import SurveyPage from "../pages/CreateSurvayPage";
import SurveyPage from "../pages/CreateSurvayPage";
//import { userCredentials } from "../../support/usercreds";

const surveyPage = new SurveyPage();

Given("the user is on the Survey List page", () => {
    surveyPage.goToSurveyList();
});

When("click on + New Survey button at the top of the survey list", () => {
    surveyPage.clickOnnewSurvey();
    cy.url({ timeout: 90000 }).should('eq', 'https://twowayserver.future-club.com/SurveyUI/surveys/add');
});

When("the user creates a new survey by filling all mandatory details", (dataTable) => {
    const surveyData = dataTable.rowsHash();
    surveyPage.createSurvey(surveyData);
});

When("click on save as draft option", () => {
    surveyPage.clickOnSaveAsDraft();
});

Then("the survey configuration page should be displayed", () => {
    surveyPage.verifyDesignerTab();
});
Then("the survey configuration page of arabic should be displayed", () => {
    surveyPage.verifyDesignerTabarabic();
});
When("click on send for review button without adding any question or survey", () => {
    surveyPage.sendReview();
});
Then('an error message "Please add question to send survey for review!" should be displayed', () => {
    surveyPage.verifyNoquestionAdded();
});
When("the user adds a new question with radio button type", (dataTable) => {
    const questionData = dataTable.rowsHash();
    surveyPage.addQuestionwithRadiobutton(questionData);
});
When("the user adds a new arabic question with radio button type", (dataTable) => {
    const questionData = dataTable.rowsHash();
    surveyPage.addQuestionwithRadiobuttonArabic(questionData);
});

When("the user adds a new question with rating scale type", (dataTable) => {
    const data = dataTable.rowsHash();
    surveyPage.addQuestionwithRatingScale({
        Title2: data.Title,
        Type2: data.Type,
        Options2: data.Options
    });
});
When("previews the survey", () => {
    surveyPage.previewSurvey();
});

When("submits the survey for review", () => {
    surveyPage.sendSurveyForReview();
});
Then('a success message {string} should be displayed', (message) => {
    surveyPage.verifySurveySentSuccess(message);
});

When("Back to dashboard and click on logout", () => {
    surveyPage.backTopuffin();
    surveyPage.clickOnlogout();
});
When("select the question grid", () => {
    surveyPage.selectQuestionGrid();
})

When("click on general settings", () => {
    surveyPage.clickOngeneralsettings();

})
When("user is on survey schedule", () => {
    surveyPage.goTosurveySchedule();
});
// When("click on logout", () => {
//     surveyPage.clickOnlogout();
//     cy.url().should('include', '/PuffinUI/login');
// });
When("click on three dot menu of survey schedule",(scheduleSurveyName)=>{
    surveyPage.threeDotmenusurveySchedule(scheduleSurveyName);
})

When("select the in review status", () => {
    surveyPage.selectSchedulereview();
})

When("go to survey schedule and add basic details", (dataTable) => {
    const surveyscheduledata = dataTable.rowsHash();
    surveyPage.scheduleSurvey(); 
    surveyPage.addSurveySchedule(surveyscheduledata);
})
When("go to general settings and update the question", () => {
    surveyPage.clickOngeneralsettings();
})
Then('a success message "Survey approved successfully" should be displayed', () => {
    surveyPage.verifySurveyapprovedSuccess();
});
When("click on 3 dot menu of added survey name and approve the request", (surveyName) => {
    surveyPage.threeDotmenuClick(surveyName);
});
When("add channel details", () => {
    surveyPage.addChannel();
});
Then("upload file to upload participants", () => {
    surveyPage.uploadParticipants();
});
When("go to survey schedule list", () => {
    surveyPage.scheduleSurvey();
});
Then("approve the request", () => {
    surveyPage.approveSchedule();
});
When("click on general settings and uncheck the visible check box selection", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.clickOnvisibleUncheck();
})
When("click on general settings and click on visible checkbox", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.clickOnvisibleCheckbox();
})
When("click on general settings and check the read only check box", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.clickOnreadOnly();

})
When("click on general settings and uncheck the read only check box", () => {
    surveyPage.clickOnuncheckReadonly();
})
When("click on general settings and check the required checkbox", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.clickOnrequiredCheckbox();
})
When("click on general settings and uncheck the required checkbox", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.clickOnrequiredUncheck();
})
When("click on general settings and check the Add a comment checkbox", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.clickAddCommentCheckbox();
})
When("click on general settings and uncheck the Add a comment", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.clickAddcommentUncheck();
})
When("go to question choice option settings", () => {
    surveyPage.checkChoiceoption();
})
When("edit all radio button and update the details", () => {
    surveyPage.updateAllradioOptions();
})
When("remove any radio button option", () => {
    surveyPage.removeRadiobuttonOption();
})
When("click on clear icon", () => {
    surveyPage.clearAllradioOption();
})
When("update single radio option", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.updateSingleradioOption();
})
When("update the question name", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.updateQuestion();
})
When("update the question title", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.updateQuestionTitle();
})
When("select checkbox other option", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.choiceOtherenable();
})
When("select checkbox none option", () => {
    surveyPage.choiceNoneenable();
})
When("select layout settings", () => {
    surveyPage.addOnemoreQuestion();
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.selectLayoutsetting();
})
When("uncheck checkbox Display the question on new line option", () => {
    // surveyPage.hidePanel();
    surveyPage.layoutDisplayquestionEnable();
})
When("check the hide the question number", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.selectLayoutsetting();
    surveyPage.layoutHidequestionNumber();
})
When("select question alignment to bottom", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.selectLayoutsetting();
    surveyPage.bottomQuestionalignment();
})
When("select question alignment to top", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.selectLayoutsetting();
    surveyPage.topQuestionalignment();
})
When("select question alignment to inherit", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.selectLayoutsetting();
    surveyPage.inheritQuestionalignment();
})
When("Select choice order = none", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.selectLayoutsetting();
    surveyPage.selectChoiceorderNone();
})
When("drag and swap the options", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.dragSwapchoices();
})
When("select question alignment to hidden", () => {
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.selectLayoutsetting();
    surveyPage.hiddenQuestionalignment();
})
When("select Error Message Alignment is Inherit", () => {
    surveyPage.errorAlignmentinherit();
})
When("user selects the radio button question type", () => {
    surveyPage.clickOnaddquestionBtn();
    
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.selectLayoutsetting();
})
When("select Error Message Alignment is Top", () => {
    surveyPage.errorAlignmenttop();
})
When("select Error Message Alignment is Bottom", () => {
    surveyPage.errorAlignmentbottom();
})
When("drag the option 'No' above 'Yes'", () => {
    surveyPage.dragDropSurveyanswers();
})
When("enter Minimum question width in px value",()=>{
    surveyPage.showPanelandGeneralquestionGrid();
    surveyPage.selectLayoutsetting();
    surveyPage.questionWidthpx();
    // surveyPage.hideQuestionpanel();
})
// When('User selects {string} question type', (questionType) => {
//     surveyPage.selectQuestionType(questionType); 
// });
// When('User clicks on Add Question button', () => {
//   surveyPage.addQuestionButton();
// });
// When('User enters Survey Title and Description', function () {
//   surveyPage.surveyTitleAndDescription();
// });
When("Select checkbox Store file content in JSON result as text",()=>{
    surveyPage.checkedStorefileContent();
});
When("survey description is displayed below survey title in design and preview",()=>{
    surveyPage.verifySurveydescription();
});
When("enable title and description visible checkbox in general settings",()=>{
    surveyPage.enableTitleandDescription();
})
When("user selects navigation settings",()=>{
    surveyPage.addOnemoreQuestion();
    surveyPage.clickOnsurveySettings();
    surveyPage.clickOnnavigationSettings();
})
When("set navigation button placement to bottom",()=>{
    surveyPage.setNavigationButtonPlacementToBottom();
})

// When("User navigates to Survey Schedule page", () => {
//   surveyPage.navigateToSurveySchedule();
// });
// When("the user approve the survey schedule", () => {  
//     surveyPage.approveSurveySchedule();
// });
When("set navigation button placement to top",()=>{
      surveyPage.addOnemoreQuestion();
    surveyPage.clickOnsurveySettings();
    surveyPage.clickOnnavigationSettings();
    surveyPage.setNavigationButtonPlacementToTop();
})
When("enable show previous page button checkbox",()=>{
     surveyPage.addOnemoreQuestion();
    surveyPage.clickOnsurveySettings();
    surveyPage.clickOnnavigationSettings();
    surveyPage.enableShowpreviouspagecheckbox();
})
When("previous button text changed to back",()=>{
     surveyPage.addOnemoreQuestion();
    surveyPage.clickOnsurveySettings();
    surveyPage.clickOnnavigationSettings();
    surveyPage.enterPreviousPageButtonText();
    surveyPage.hideQuestionpanel();
})
When("add more question",()=>{
    surveyPage.clickOnaddMorequestion();
})
Then("previous button should show custom text back",()=>{
    surveyPage.clickOnpreviewNextbtn();
})
When("Next button text changed to continue",()=>{
    surveyPage.clickOnsurveySettings();
    surveyPage.clickOnnavigationSettings();
    surveyPage.enterNextPageButtonText();
    surveyPage.hideQuestionpanel();
})
Then("next button should show custom text continue",()=>{
    surveyPage.checkOnpreviewContinuebtn();
})
When("complete button text changed to Finish survey",()=>{
surveyPage.clickOnsurveySettings();
surveyPage.clickOnnavigationSettings();
surveyPage.enterCompletepageButtontext();
surveyPage.hideQuestionpanel();
})
Then("complete button should show custom text Finish survey",()=>{
    surveyPage.checkOnpreviewCompletebtn();
})
When("select question setting",()=>{
    surveyPage.clickOnaddMorequestion();
    surveyPage.clickOnaddMorequestion();
    surveyPage.clickOnsurveySettings();
    surveyPage.selectQuestionsetting();

})
When("select question numbering to auto-numbering",()=>{
    surveyPage.selectQuestionnumbering();
});
When("select question order original",()=>
{
    surveyPage.selectQuestionorder();
})
When("Set Question Description Alignment Under field input",()=>{
 surveyPage.clickOngeneralsettings();
     surveyPage.questionDescription();
    surveyPage.selectLayoutsetting();
    surveyPage.selectQuestiondescriptionAlignmentunderInput();
})
When("Set Question Description Alignment Under question title",()=>{
    surveyPage.clickOngeneralsettings();
     surveyPage.questionDescription();
    surveyPage.selectLayoutsetting();
    surveyPage.selectQuestiondescriptionAlignmentunderTitle();
    
})
When("click on participants tab",()=>{
    surveyPage.clickOnparticipants();
})
When("open the scheduled survey",()=>{
    surveyPage.openScheduledsurvey();
})
Then("survey response status should be submitted",()=>{
    surveyPage.checkResponseStatus();
})
// Then('User selects question type {string} with sub option {string}', (mainType, subType) => {
//   surveyPage.selectQuestionTypeSubOptionsSurveyAdd(mainType, subType);
// });
// When('User enters Question', () => {
//   surveyPage.enterQuestion1();
// });
// Then('User decrese a rating number by 1', () => {
//   surveyPage.decreaseItemRatingButton();
// });
// When('User captures all rating numbers for question', () => {
//   surveyPage.captureRatingNumbers();
// });
// When('User selects {string} question type', (questionType) => {
//   surveyPage.selectQuestionType(questionType);
// });

// When("click on three dot menu of survey schedule page",(scheduleSurveyName)=>{
//     surveyPage.threeDotmenusurveySchedulePage(scheduleSurveyName);
// })

When("click on survey schedule approve process",(scheduleSurveyName)=>{
    surveyPage.surveyScheduleApproveProcess(scheduleSurveyName);
})


// When('User can add Question Button on Page2', () => {
//   surveyPage.addQuestionButtonPage2();
// });

When('User adding page1 multiple questions options', () => {
  surveyPage.addingPage1MultipleQuestionsOptions();
});

When("the user adds survey Add details with default language as Arabic and English", (dataTable) => {
  const surveyAdddata = dataTable.rowsHash();
  surveyPage.addSurveyAddArabicEnglish(surveyAdddata);
});

When('User transalte English to Arabic language multi questions', () => {
  surveyPage.transalteEnglishToArabicLanguageMultiQuestions();
});

When('The user clicks dropdown field survey settings {string} under section {string} and selects {string}', (fieldName, sectionName, dropdownValue) => {
  surveyPage.selectDropdownUnderSectionSurveySettings(sectionName, fieldName, dropdownValue);
});

When('User click and hide survey Setting', () => {
  surveyPage.UserClickAndHideSurveySetting();
});

When('User modify questions with arabic text', () => {
  surveyPage.userModifyQuestionWithArabic();
});

When('User verify questions with arabic text in translate tab', () => {
  surveyPage.userVerifyQuestionsWithArabicTextInTranslatePage();
});

When('User Add arabic text to all fields in arabic column Transalte Tab', () => {
  surveyPage.addingArabicTextInArabicColumnTransateTab();
});

When('User Add arabic text to all fields of both pages in arabic column Transalte Tab', () => {
  surveyPage.addingArabicTextInArabicColumnTransateTabForBothPages();
});

When("go to survey schedule and add basic details all", (dataTable) => {
    const surveyscheduledata = dataTable.rowsHash();
    surveyPage.scheduleSurvey(); 
    surveyPage.addSurveyScheduleAllDeatils(surveyscheduledata);
})

When('User adding page2 multiple questions options', () => {
  surveyPage.addingPage2MultipleQuestions();
});







































