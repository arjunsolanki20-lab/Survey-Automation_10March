import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SurveyAddPage from "../pages/SurveyAddPage";
import SurveyPage from "../pages/CreateSurvayPage";
import SurveySchedulePage from "../pages/SurveySchedulePage";

const surveyAdd = new SurveyAddPage();
const surveyPage = new SurveyPage();
const ssp = new SurveySchedulePage();

When('User clicks on Add Question button', () => {
  surveyAdd.addQuestionButton();
});

When('User enters Survey Title and Description', function () {
  surveyAdd.surveyTitleAndDescription();
});

When('User selects {string} question type', (questionType) => {
  surveyAdd.selectQuestionType(questionType);
});

When('User selects {string} question type 2', (questionType) => {
  surveyAdd.selectQuestionType2(questionType);
});

When('User enters Question', () => {
  surveyAdd.enterQuestion1();
});

When('User enters Question 2', () => {
  surveyAdd.enterQuestion2();
});

When('User searches for {string} in General Settings', (settingName) => {
  surveyAdd.searchSetting(settingName);
});

When('User enters {string} in field {string} under section {string}',
  (value, fieldName, sectionName) => {
    surveyAdd.enterValueInField(sectionName, fieldName, value);
  });

When('User navigates to Preview tab', () => {
  surveyAdd.previewTabClick();
});

When('User uploads file {string} in preview', (fileName) => {
  surveyAdd.uploadFilePreview(fileName);
});

Then('User verifies Send For Review popup and confirms in Survey list', () => {
  surveyAdd.verifyAndSendForReviewSurveyList();
});

Then('survey list success message', () => {
  surveyAdd.verifyToastMessageSurveyList();
});

Then('survey list alert of Maximim File size', () => {
  surveyAdd.verifySurveyListAlertMaxFileSize();
});

When('User uploads file {string} in upload Image Picher', (fileName) => {
  surveyAdd.uploadImagePicher1(fileName);
});

When('User in field {string} under section {string}', (fieldName, sectionName) => {
  surveyAdd.verifyQuestion(sectionName, fieldName);
});

When('The user clicks on the checkbox field {string} under section {string}',
  (fieldName, sectionName) => {
    surveyAdd.clickCheckboxUnderSection(sectionName, fieldName);
  });

When('The user clicks on the checkbox Extra field {string} under section {string} and selects {string}', (fieldName, sectionName, radioValue) => {
  surveyAdd.selectRadioOptionUnderSection(sectionName, fieldName, radioValue);
});

Then('user able to delete click and conform delete file', () => {
  surveyAdd.deleteFiles();
});

Then('User should see {string} uploaded images visible in preview', (countString) => {
  const expectedCount = parseInt(countString, 10);
  surveyAdd.verifyUploadedImagesVisible(expectedCount);
});

Then('user able to verify mandatory symbol of asterisk', () => {
  surveyAdd.verifyQuestion1Asterisk();
});

When('User captures all rating numbers for question', () => {
  surveyAdd.captureRatingNumbers();
});

Then('User should see the same rating numbers in the review page', () => {
  surveyAdd.verifyRatingNumbersInReview();
});

Then('User decrese a rating number by 1', () => {
  surveyAdd.decreaseItemRatingButton();
});

Then('User selects question type {string} with sub option {string}', (mainType, subType) => {
  surveyAdd.selectQuestionTypeSubOptionsSurveyAdd(mainType, subType);
});

Then('user able to verify mandatory symbol of asterisk in Preview Page', () => {
  surveyAdd.verifyQuestion1AsteriskInPreview();
});

Then('user able to verify required response alert in Preview Page', () => {
  surveyAdd.verifyRequiredResponseAlert();
});

Then('The Rating Scale should display clickable buttons in preview', () => {
  surveyAdd.verifyRatingButtonsDisplayedInPreview();
});

When('the rating Scale should display dropdown options in preview', () => {
  surveyAdd.verifyRatingDropdownOptionsInPreview();
});


Then('the rating scale should display smiley icons correctly in review', () => {
  surveyAdd.verifySmileyRatingDisplayedInReview();
});

Then('the rating scale should display star icons correctly in review', () => {
  surveyAdd.verifyStarRatingDisplayedInReview();
});

Then('the rating scale should display Labels rating buttons correctly in review', () => {
  surveyAdd.verifyLabelDisplayedInReview();
});

Then('User add a ranking item by 1', () => {
  surveyAdd.addingItemRankingButton();
});

Then('User add a radio item by 1', () => {
  surveyAdd.addingRadioButton();
});

When('User captures ranking numbers for question', () => {
  surveyAdd.captureRankingNumbers();
});

Then('User verify ranking numbers for question in Review', () => {
  surveyAdd.verifyRankingNumbers();
});

Then('User add a checkbox item by 1', () => {
  surveyAdd.addingItemCheckboxButton();
});

Then('User add a dropdown item by 1', () => {
  surveyAdd.addingItemDropdown();
});

Then('User add a radio button item by 1', () => {
  surveyAdd.addingItemRadioButton();
});

When('User captures checkbox numbers for question', () => {
  surveyAdd.captureCheckboxNumbers();
});

When('User captures checkbox numbers for question By item names', () => {
  surveyAdd.captureCheckboxNumbersItemsNames();
});

When('User captures checkbox numbers for question 2 By item names', () => {
  surveyAdd.captureCheckboxNumbersItemsNames2();
});

Then('User verify checkbox numbers for question in Review', () => {
  surveyAdd.verifyCheckboxNumbers();
});

Then('User verify checkbox numbers for asceding question in Review', () => {
  surveyAdd.verifyCheckboxNumbersAscending();
});

Then('User verify checkbox numbers for random items in Review', () => {
  surveyAdd.verifyCheckboxNumbersRandom();
});

Then('User verify checkbox numbers for Copying Question items in Review', () => {
  surveyAdd.verifyCheckboxInPreviewOfCopyingQuestion();
});

Then('User verify checkbox numbers for descending question in Review', () => {
  surveyAdd.verifyCheckboxNumbersDescending();
});

When('The user clicks on the dropdown field {string} under section {string} and selects {string}', (fieldName, sectionName, dropdownValue) => {
  surveyAdd.selectDropdownOptionUnderSection(sectionName, fieldName, dropdownValue);
});

When('User verifies the {string} checkbox option accepts input', (optionLabel) => {
  surveyAdd.inputAcceptForCheckboxOption(optionLabel);
});

Then('The user verifies that checkbox field present in Preview', () => {
  surveyAdd.verifyCheckboxInPreview();
});

Then('User verifies dropdown options match entered texts', () => {
  surveyAdd.verifyDropdownOptionsMatchesExpected();
});

Then('Yes_No question should be added with toggle or button options', () => {
  surveyAdd.verifyYesNoToggle();
});

When('User captures dropdown wrap numbers for question By item names', () => {
  surveyAdd.captureWrapTextCombineItemsNames();
});

Then('User verify dropdown wrap numbers for question By item names', () => {
  surveyAdd.verifyWrapTextCombineItemsNames();
});

Then('User can view entered question', () => {
  surveyAdd.verifyWrapTextCombineItemsNames();
});

Then('User verify Question in preview', () => {
  surveyAdd.verifyQuestion1();
});

Then('Verify color question input field has valid color value', () => {
  surveyAdd.verifyColourQuestion();
});

Then('Verify color question input field has valid color value in Preview', () => {
  surveyAdd.verifyPreviewColour();
});

When('The user enter text on the field {string} under section {string}', (fieldName, sectionName) => {
  surveyAdd.enterTextUnderSection(sectionName, fieldName);
});

Then('User verify description Text', () => {
  surveyAdd.verifyDescriptionText();
});

Then('User verify description text in preview', () => {
  surveyAdd.verifyDescriptionTextPreview();
});

Then('User able to add question abd item text', () => {
  surveyAdd.addNewChoice();
});

Then('User able view verify Radio Button Options item text', () => {
  surveyAdd.verifyRadioButtonOptions();
});

Then('User able view verify Radio Button Options item text in preview', () => {
  surveyAdd.verifyRadioButtonOptionsPreview();
});

Then('User verify checkbox numbers for None question in Review', () => {
  surveyAdd.verifyCheckboxNumbersUnchanged();
});

When('User selects {string} option for {string} under {string} section', (option, field, section) => {
  surveyAdd.clickRadioOptionUnderSection(section, field, option);
});

Then('User verify question box state Locked in Review', () => {
  surveyAdd.verifyQuestionBoxStateLocked();
});

Then('User verify question box state collapsed in Review', () => {
  surveyAdd.verifyQuestionBoxStateCollapsed();
});

Then('User verify question options visible after expand in Review', () => {
  surveyAdd.verifyOptionsVisible();
});

When('User enters random text in field {string} under section {string}', (fieldName, sectionName) => {
  surveyAdd.enterRandomTextUnderSection(sectionName, fieldName);
});

When('User click on hide panel', () => {
  surveyAdd.clickHidePanelButton();
});

Then('User verify description Text Of Under The Input Field', () => {
  surveyAdd.verifyDescriptionTextOfUnderTheInputField();
});

Then('User verify description Text Of Under The Input Field in preview', () => {
  surveyAdd.verifyDescriptionTextPreviewOfUnderTheInputField();
});

Then('User verifies the inner indent {string} is applied correctly', (indentLevel) => {
  surveyAdd.verifyInnerIndent(indentLevel);
});

Then('User verifies the inner indent {string} is applied correctly in preview', (indentLevel) => {
  surveyAdd.verifyInnerIndentPreview(indentLevel);
});

When('User enters a random percentage under section {string} and field {string}', (sectionName, fieldName) => {
  surveyAdd.enterRandomPercentageUnderSection(sectionName, fieldName);
});

Then('User verifies the question width is applied correctly', () => {
  surveyAdd.verifyQuestionWidth();
});

Then('User verifies the question width is applied correctly in preview', () => {
  surveyAdd.verifyEnteredPercentageInPreview();
});

Then('User verifies column count as {string}', (columnCount) => {
  surveyAdd.verifyColumnCount(columnCount);
});

Then('User verifies column count in preview as {string}', (columnCount) => {
  surveyAdd.verifyPreviewColumnCount(columnCount);
});

Then('User delete All Images', () => {
  surveyAdd.deleteAllImages();
});

When('User uploads file {string} for Image Picker', (fileName) => {
  surveyAdd.uploadImageForPicker(fileName);
});

Then('User should see {string} uploaded images picker visible in preview', (expectedCount) => {
  const count = parseInt(expectedCount, 10);
  surveyAdd.verifyPreviewImageCount(count);
});

Then('User should see {string} uploaded video of image picker visible in preview', (expectedCount) => {
  const count = parseInt(expectedCount, 10);
  surveyAdd.verifyPreviewVideoCount(count);
});

When('User enters text in the input with field email {string}', (label) => {
  surveyAdd.enterTextInPlaceholderEmail(label);
});

When('User enters text in the input with field password name {string}', (label) => {
  surveyAdd.enterTextInPlaceholderPassword(label);
});

When('User verifies the email input value', () => {
  surveyAdd.verifyInputValueEmail();
});

When('User verifies the email input value in preview', () => {
  surveyAdd.verifyInputValueEmailPreview();
});

When('user enter min {string} and max {string}', (minValue, maxValue) => {
  surveyAdd.enterMinMaxValues(minValue, maxValue);
});

Then('User verifies number input in preview with value {string}', (numberValue) => {
  surveyAdd.verifyInputValueNumberPreview(numberValue);
});

Then('user able to verify required response alert number value in Preview Page', () => {
  surveyAdd.verifyRequiredResponseNumberValueAlert();
});

Then('user able to verify survey complete message', () => {
  surveyAdd.verifyCompleteSurveyMessage();
});

When('User verifies the password input value', () => {
  surveyAdd.verifyInputValuePassword();
});

When('User verifies the password input value in preview', () => {
  surveyAdd.verifyInputValuePasswordPreview();
});

When('User enters text in the input with field phone number area {string}', (label) => {
  surveyAdd.enterTextInPlaceholderPhoneNumber(label);
});

When('User verifies the phone number input value', () => {
  surveyAdd.verifyInputValuePhoneNumber();
});

When('User verifies the phone number input value in preview', () => {
  surveyAdd.verifyInputValuePhoneNumberPreview();
});

When('User enters text in the input with field Text {string}', (label) => {
  surveyAdd.enterTextInPlaceholderText(label);
});

When('User verifies the text input value', () => {
  surveyAdd.verifyInputValueText();
});

When('User verifies the text input value in preview', () => {
  surveyAdd.verifyInputValueTextPreview();
});

When('User enters URL in the input with field URL {string}', (label) => {
  surveyAdd.enterTextInPlaceholderURL(label);
});

When('User verifies the URL input value', () => {
  surveyAdd.verifyInputValueURL();
});

When('User verifies the URL input value in preview', () => {
  surveyAdd.verifyInputValueURLPreview();
});

When('User selects {string} as minimum week and {string} as maximum week', (minWeek, maxWeek) => {
  surveyAdd.selectMinAndMaxWeeks(minWeek, maxWeek);
});

When('User selects week {string}', (weekValue) => {
  surveyAdd.selectIntermediateWeek(weekValue);
});

When('User verifies week {string} is disabled', (weekValue) => {
  surveyAdd.verifyWeekIsDisabled(weekValue);
});

When('User enters long text question', () => {
  surveyAdd.enterLongTextQuestion();
});

Then('User verify enters long text question', () => {
  surveyAdd.verifyLongTextQuestion();
});

When('User searches for {string} question type in Left Panel', (questionType) => {
  surveyAdd.searchLeftPanelQuestionType(questionType);
});

When('User click on duplicate question button', () => {
  surveyAdd.duplicateButtonClick();
});

Then('User verify Duplicated Question', () => {
  surveyAdd.verifyDuplicatedQuestionUnique();
});

Then('User verify Duplicated Question in preview', () => {
  surveyAdd.verifyDuplicatedQuestionInPreview();
});

When('The user clicks on the uncCheckbox field {string} under section {string}', (fieldName, sectionName) => {
  surveyAdd.uncheckCheckboxUnderSection(sectionName, fieldName);
});

Then('User delete Question 2', () => {
  surveyAdd.deleteQuestion2Button();
});

Then('User verify Question2 Not Visible in preview', () => {
  surveyAdd.verifyQuestion2NotVisible();
});

When('User can editing Question2', () => {
  surveyAdd.editingQuestion2();
});

Then('User can verify Edited Question2 Visible in preview', () => {
  surveyAdd.verifyEditedQuestion2Visible();
});

When('User click on duplicate page button', () => {
  surveyAdd.duplicateButtonPageClick();
});

Then('User can verify duplicated page with question and type {string}', (expectedQuestionType) => {
  surveyAdd.verifyDuplicatedPageWithQuestionsAndType(expectedQuestionType);
});

Then('User can verify duplicated questions in preview', () => {
  surveyAdd.verifyDuplicatedQuestionsInPreview();
});

When('User selects {string} as minimum date and {string} as maximum date', (minDate, maxDate) => {
  surveyAdd.selectMinAndMaxDates(minDate, maxDate);
});

When('User selects date {string}', (dateValue) => {
  surveyAdd.selectIntermediateDate(dateValue);
});

When('User selects beyond date {string} and alert come', (dateValue) => {
  surveyAdd.selectBeyondDateAndAlert(dateValue);
});

When('User selects {string} as minimum datetime and {string} as maximum datetime', (minDateTime, maxDateTime) => {
  surveyAdd.selectMinAndMaxDateTime(minDateTime, maxDateTime);
});

When('User selects date time {string}', (dateTimeValue) => {
  surveyAdd.selectIntermediateDateTime(dateTimeValue);
});

When('User selects beyond date time {string} and alert come', (dateValue) => {
  surveyAdd.selectBeyondDateTimeAndAlert(dateValue);
});

When('User selects {string} as minimum month and {string} as maximum month', (minMonth, maxMonth) => {
  surveyAdd.selectMinAndMaxMonth(minMonth, maxMonth);
});

When('User selects month {string} in preview', (monthValue) => {
  surveyAdd.selectMonthInPreview(monthValue);
});

When('User selects beyond month {string} and alert comes', (monthValue) => {
  surveyAdd.selectBeyondMonthAndAlert(monthValue);
});

When('User selects {string} as minimum time and {string} as maximum time', (minTime, maxTime) => {
  surveyAdd.selectMinAndMaxTime(minTime, maxTime);
});

When('User selects time {string} in preview', (timeValue) => {
  surveyAdd.selectTimeInPreview(timeValue);
});

When('User selects beyond time {string} and alert comes', (timeValue) => {
  surveyAdd.selectBeyondTimeAndAlert(timeValue);
});

When('User can add Question Button on Page2', () => {
  surveyAdd.addQuestionButtonPage2();
});

Then('User can delete Page1', () => {
  surveyAdd.deleteButtonPage1();
});

Then('Page 1 should not be visible', () => {
  surveyAdd.question1Field();
});
Then('User can not visible question1 in preview', () => {
  surveyAdd.question1NotVisible();
});
Then('User can visible question2 in preview', () => {
  surveyAdd.question2Visible();
});

Then('User can verify question 2 under page 1 auto upgraded', () => {
  surveyAdd.page1Question2();
});

When('The user clicks on the dropdown field survey settings {string} under section {string} and selects {string}', (fieldName, sectionName, dropdownValue) => {
  surveyAdd.selectDropdownOptionUnderSectionSurveySettings(sectionName, fieldName, dropdownValue);
});

When('User selects {string} option for {string} under {string} section survey settings', (option, field, section) => {
  surveyAdd.clickRadioOptionUnderSectionSurveySettings(section, field, option);
});

Then('Verify that preview input field is readonly and not editable', () => {
  surveyAdd.verifyPreviewInputIsReadOnly();
});

Then('Verify that changing Survey Width Mode updates layout width for Auto, Static, and Responsive modes', () => {
  surveyAdd.verifyLayoutWidthForAllModes();
});

Then('Verify that changing Survey Width Mode under General Settings updates the question layout width in Preview for Auto, Static, and Responsive modes', () => {
  surveyAdd.verifyLayoutWidthForAllModesInPreview();
});

When('User uploads file {string} under Logo', (fileName) => {
  surveyAdd.uploadLogoFilePreview(fileName);
});

Then('User verifies logo is visible in Preview', () => {
  surveyAdd.verifyLogoInPreview();
});

When('User delete uploaded image', () => {
  surveyAdd.deleteLogo();
});

Then('User verifies logo is not visible in Preview', () => {
  surveyAdd.logoInvisible();
});

When('User verify question title should be aligned to Top', () => {
  surveyAdd.verifyQuestionAlignmentTop();
});

When('User verify question title should be aligned to Bottom', () => {
  surveyAdd.verifyQuestionAlignmentBottom();
});

When('User verify question title should be aligned to Left', () => {
  surveyAdd.verifyQuestionAlignmentLeft();
});

Then('Question title should be aligned to Top of input field in Preview', () => {
  surveyAdd.verifyPreviewAlignmentTop();
});

Then('Question title should be aligned to Bottom of input field in Preview', () => {
  surveyAdd.verifyPreviewAlignmentBottom();
});

Then('Question title should be aligned to Left of input field in Preview', () => {
  surveyAdd.verifyPreviewAlignmentLeft();
});

Then('User Add Page2 multiple questions', () => {
  surveyAdd.addingPage2Data();
});

Then('User should see the alert visually at the top', () => {
  surveyAdd.verifyAlertTop();
});

Then('User should see the alert visually at the bottom', () => {
  surveyAdd.verifyAlertBottom();
});

When('User can add a new page from pages setting', () => {
  surveyAdd.addNewPageSetting();
});

Then('New page with title Page 1 and description Description should be visible', () => {
  surveyAdd.verifyPageTitleAndDescriptionVisible();
});

Then('Page with title Page 1 and description Description should not be visible', () => {
  surveyAdd.verifyPageTitleAndDescriptionNotVisible();
});

Then('User verify page Visible with question1 in preview', () => {
  surveyAdd.verifyQuestion1HeaderVisibleInPreview();
});

Then('User verify page not Visible with question1 in preview', () => {
  surveyAdd.verifyQuestion1HeaderNotVisibleInPreview();
});

Then('User able to verify survey thankyou message', () => {
  surveyAdd.verifyThankyouSurveyMessage();
});

Then('User able to verify dark mode theme', () => {
  surveyAdd.verifyDarkMode();
});

Then('User able to verify light mode theme', () => {
  surveyAdd.verifyLightMode();
});

When('User navigates to Themes tab', () => {
  surveyAdd.themesTabClick();
});

When('User select dark mode theme', () => {
  surveyAdd.selectDarkModeTheme();
});

When('User select light mode theme', () => {
  surveyAdd.selectLightModeTheme();
});

When('User selects {string} option for {string} under {string} section theme settings', (option, field, section) => {
  surveyAdd.clickRadioOptionUnderSectionThemeSettings(section, field, option);
});

When('User enter text {string} in right panel theme setting', (value) => {
  surveyAdd.searchRightPanel(value);
});

Then('User able to verify orange colour border', () => {
  surveyAdd.verifyOrangeBorder();
});

When('User select bold font', () => {
  surveyAdd.boldRadioButton();
});

When('User verify changing title width changes', () => {
  surveyAdd.verifyChangingTitlewidthChanges();
});

When('User adding page1 multiple questions Radio Button', () => {
  surveyAdd.addingPage1MultipleQuestionsRadioButton();
});

When('User choose survey description font family {string}', (fontFamily) => {
  surveyAdd.descriptionFontFamilyDropdown(fontFamily);
});

When('User verify changing description width changes', () => {
  surveyAdd.verifyChangingDescriptionwidthChanges();
});

When('User verify changing description theme font size changes', () => {
  surveyAdd.verifyChangingDescriptionThemeFontSizeChanges();
});

When('User verify allignment setting and logo', () => {
  surveyAdd.verifyLogoAlignmentChange();
});

Then('User verify draft message', () => {
  surveyAdd.verifySaveAsDraftAlert();
});

Then('User Verify translation tab not available', () => {
  surveyAdd.transstionTabInvisible();
});

When("the user creates a new survey by filling all mandatory details Both Language", (dataTable) => {
  const surveyData = dataTable.rowsHash();
  surveyAdd.createSurveyAddMultiLanguage(surveyData);
});

When('User navigates to Translation tab', () => {
  surveyAdd.translationTabClick();
});

Then('Arabic Translation Entry {string} {string} {string} {string} {string} {string}', (title, description, question, item1, item2, item3) => {
  surveyAdd.enterArabicTranslations(title, description, question, item1, item2, item3);
});

When('User Arabic Translation clear', () => {
  surveyAdd.clearArabicTranslationColumn();
});

Then('survey add translates add error message', () => {
  surveyAdd.verifySureyTranslatesAddAlert();
});

Then('User verify survey send successful message', () => {
  surveyAdd.verifyAndSendForReviewSurveyList();
});

Then('User redirected to survey list page', () => {
  surveyAdd.verifySurveyListVisible();
});

When('User adding Page1 Question with radio button option', () => {
  surveyAdd.addingPage1QuestionRadioButton();
});

When('User navigates to Logic tab', () => {
  surveyAdd.logicTabClick();
});

Then('User verify add new logic and no logical rules', () => {
  surveyAdd.verifyLogicTab();
});

Then('User verify add new visible in Logic tab', () => {
  surveyAdd.verifyNewRuleVisible();
});

When('User select question {string} in Logic tab dropdown', (questionName) => {
  surveyAdd.selectLogicQuestion(questionName);
});

When('User select question condition {string} in Logic tab dropdown', (condition) => {
  surveyAdd.addConditionLogicQuestion(condition);
});

Then('User click and verify First Radio item in Logic tab', () => {
  surveyAdd.clickAndVerifyFirstRadio();
});

Then('User Verify Clicking on Add condtion functionality', () => {
  surveyAdd.verifyLogicConditionElements();
});

Then('User deletion should remove the entire condition rule AND, Select, Equals, delete icon', () => {
  surveyAdd.verifyLogicConditionsDelete();
});

Then('User verify that preview input field is editable', () => {
  surveyAdd.verifyFieldEditable();
});

Then('User Verify Clicking on Add condtion 1 functionality', () => {
  surveyAdd.verifyLogic1ConditionElements();
});

When('User select question of {string} in Logic tab dropdown', (questionName) => {
  surveyAdd.selectLogicQuestion2(questionName);
});

When('User select question 2 condition {string} in Logic tab dropdown', (condition) => {
  surveyAdd.addConditionLogicQuestion2(condition);
});

Then('User click and verify First Radio for 2nd item in Logic tab', () => {
  surveyAdd.clickAndVerifyFirstRadioForQuestion2();
});

Then('User click and verify First Radio item Question 1 in Logic tab', () => {
  surveyAdd.clickAndVerifyFirstRadioQuestion1();
});

Then('User click and verify First Radio item Question 2 in Logic tab', () => {
  surveyAdd.clickAndVerifyFirstRadioForQuestion2();
});

Then('User Verify Clicking on Add condtion 2 functionality', () => {
  surveyAdd.verifyLogic2ConditionElements();
});

When('User able to select actions for question2 {string}', (condition) => {
  surveyAdd.selectAction(condition);
});

When('User adding multiple pages with multiple questions Radio Button', () => {
  surveyAdd.addingMultiplePagesMultipleQuestionsRadioButton();
});

When('User select question page 2 {string} in Logic tab dropdown', (questionName) => {
  surveyAdd.selectLogicPage2Question(questionName);
});

Then('User able to see the questions after done logic', () => {
  surveyAdd.verifyQuestionsAfterDoneLogic();
});

Then('User able to edit rule functionality from question2 to {string}', (condition) => {
  surveyAdd.editRuleFunctionality(condition);
});

When('User aable to edit condition rule question2 {string}', (condition) => {
  surveyAdd.addConditionEditRuleQuestion2(condition);
});

Then('User able to see logic rule after edited question summary', () => {
  surveyAdd.verifyLogicRuleAfterEditedQuestionSummary();
});

Then('User able to delete rule functionality', () => {
  surveyAdd.deleteRuleFunctionality();
});

When('User click on Done', () => {
  surveyAdd.clickDone();
});

Then('User able to see existing summary on top', () => {
  surveyAdd.verifyExistingRuleOnTop();
});

Then('User able proceed with manual entry Option', () => {
  surveyAdd.verifyManualEntryOption();
});

When('User able to select actions for manual {string}', (condition) => {
  surveyAdd.selectActionManual(condition);
});

Then('User verify all questions logic', () => {
  surveyAdd.verifyAllQuestionsLogic();
});

When('User verify static external link', () => {
  surveyAdd.staticExternalLink();
});

When('User verify next and compalte', () => {
  surveyAdd.verifyNextAndCompalte();
});

Then('User verify notifier message Static URL', () => {
  surveyAdd.verifyNotifierMessageStaticURL();
});

Then('User verify notifier message Dynamic URL', () => {
  surveyAdd.verifyNotifierMessageDynamicURL();
});

Given("the user is on the Survey Dashboard page", () => {
  surveyPage.goToSurveyDashboard();
});

When('User navigate survey dashboard page', () => {
  surveyAdd.navigateSurveyDashboard();
});

Then('User able to see survey dashboard counts', () => {
  surveyAdd.getSurveyDashboardCounts();
});

When('User verify dynamic external link', () => {
  surveyAdd.staticDynamicLink();
});

Then('User verify survey language text in preview', () => {
  surveyAdd.verifySurveyLanguage();
});

When('User able to enter limit to one response input of {string}', (condition) => {
  surveyAdd.limitToOneResponseInput(condition);
});

Then('User add input options for radio button type question1 drag options order', () => {
  surveyAdd.itemOptionsRadioButtonQuestion1DragOrder();
});

Then('User drag question2 on top', () => {
  surveyAdd.dragQuesstion2ToQuestion1();
});

Then('User can see dragged questions in preview', () => {
  surveyAdd.verifyQuestionsInPreview();
});
