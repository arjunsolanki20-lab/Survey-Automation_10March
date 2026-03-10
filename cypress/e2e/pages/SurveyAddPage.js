import { faker } from "@faker-js/faker";
import Messages from "./Messages";
import 'cypress-wait-until';
import '@4tw/cypress-drag-drop';
import "cypress-real-events/support";


class SurveyAddPage {
  surveyTitle = '';
  indentStyleVariable = '--sv-element-add-padding-left';

  elements = {
    surveyTitle: () => cy.get('span[aria-label="Survey Title"]', { timeout: 30000 }),
    previewTab: () => cy.get('span.svc-tabbed-menu-item__text').contains('Preview', { timeout: 30000 }),
    addQuestionButton: () => cy.get('.svc-element__add-new-question.svc-btn', { timeout: 30000 }).eq(0),
    surveyTitleDescription: () => cy.get('span[contenteditable="true"][aria-label="Description"]', { timeout: 30000 }).eq(0),
    questionTypeDropdownButton: () => cy.get('.svc-survey-element-toolbar__item--with-text[title="Single-Line Input"]', { timeout: 30000 }),
    inputFieldNearLabel: (fieldName) => cy.contains('span.sv-string-viewer', fieldName).parents('.spg-question').find('input.spg-input'),
    selectFileLabel: () => cy.get('label[aria-label="Select File"]', { timeout: 30000 }),
    sendForReviewButton: () => cy.xpath("//button[@type='button' and contains(@class,'button_form-primary_button') and normalize-space(text())='Send For Review']", { timeout: 30000 }),
    container: () => cy.xpath("//div[contains(@class,'alertDialogContent')]", { timeout: 30000 }),
    continueEditingButton: () => cy.xpath("//button[@title='Continue Editing' and contains(@class,'button_form-submit_cancel')]", { timeout: 30000 }),
    sendButton: () => cy.xpath("//button[@title='Send' and contains(@class,'button_form-submit_main')]", { timeout: 30000 }),
    surveyListMessageToast: () => cy.get('.Toastify__toast-body, .toast, [class*="toast"]', { timeout: 30000 }),
    surveyListAlertMaxFileSize: () => cy.get('div[role="alert"].sd-error .sv-string-viewer', { timeout: 30000 }),
    deleteButton: () => cy.get('button[title="Clear"]', { timeout: 30000 }),
    cancelButton: () => cy.get('button[title="Cancel"]', { timeout: 30000 }),
    oKButton: () => cy.get('button[title="OK"]', { timeout: 30000 }),
    diologueBox: () => cy.get("div[class='sv-popup sv-popup--confirm-delete sv-popup--modal'] div[class='sv-popup__body-content']", { timeout: 30000 }),
    question1Tab: () => cy.get('h5.sd-title.sd-element__title.sd-question__title', { timeout: 30000 }),
    question1TabPreview: () => cy.get('h5.sd-question__title.sd-question__title--required', { timeout: 30000 }),
    removeItemRatingButton: () => cy.get('span.svc-item-value-controls__button.svc-item-value-controls__remove[aria-label="Click to remove the item..."]', { timeout: 30000 }),
    completeButton: () => cy.get('input[title="Complete"]', { timeout: 30000 }),
    // responseRequiredError: () => cy.get('div.sd-error.sd-question__erbox', { timeout: 30000 }),
    // responseRequiredError: () => cy.get('.sd-error', { timeout: 30000 }),
    ratingContainer: () => cy.get('div.sd-element__content div.sd-rating', { timeout: 30000 }),
    ratingFixedButtons: () => cy.get('label.sd-rating__item--fixed-size', { timeout: 30000 }),
    sdRating: () => ({ selector: '.sd-rating', timeout: 30000 }),
    sdRatingSmiley: () => ({ selector: 'label.sd-rating__item-smiley', timeout: 30000 }),
    sdRatingSmileySvgTitle: () => ({ selector: 'label.sd-rating__item-smiley svg title', timeout: 30000 }),
    sdRatingStar: () => ({ selector: 'label.sd-rating__item-star', timeout: 30000 }),
    sdRatingStarSvgTitle: () => ({ selector: 'label.sd-rating__item-star svg title', timeout: 15000 }),
    sdRatingFixedSize: () => ({ selector: 'label.sd-rating__item--fixed-size', timeout: 30000 }),
    sdRatingTextLabel: () => ({ selector: '.sd-rating__item-text .sv-string-editor', timeout: 30000 }),
    ratingDropdownContainer: () => cy.get('div.sd-element__content div.sd-selectbase', { timeout: 30000 }),
    ratingDropdownTrigger: () => cy.get('div.sd-dropdown[role="textbox"]', { timeout: 30000 }),
    ratingDropdownOptions: () => cy.get('div.sv-popup__container:visible ul.sv-list[role="listbox"] li', { timeout: 30000 }),
    sdRatings: () => cy.get('.sd-rating', { timeout: 30000 }),
    sdRatingSmileys: () => cy.get('label.sd-rating__item-smiley', { timeout: 30000 }),
    sdRatingStars: () => cy.get('label.sd-rating__item-star', { timeout: 30000 }),
    sdRatingLabelSizes: () => cy.get('label.sd-rating__item--fixed-size', { timeout: 30000 }),
    addingItemRankingButton: () => cy.get('span[aria-label="Click to add an item..."]', { timeout: 30000 }),
    addingRadioButton: () => cy.get('span[aria-label="Click to add an item..."]', { timeout: 30000 }).eq(0),
    addingItemCheckboxButton: () => cy.get('span[aria-label="Click to add an item..."]', { timeout: 30000 }).eq(1),
    addingItemDropdown: () => cy.get('span[aria-label="Click to add an item..."]', { timeout: 30000 }).eq(0),
    addingItemRadioButton: () => cy.get('span[aria-label="Click to add an item..."]', { timeout: 30000 }).eq(0),
    sdRankingContainer: () => cy.get('.sv-ranking', { timeout: 30000 }),
    sdRankingItemWrapper: () => cy.get('.svc-item-value-wrapper', { timeout: 30000 }),
    sdRankingRemoveButton: () => cy.get('.svc-item-value-controls__remove svg title', { timeout: 30000 }),
    sdRankingReviewContainer: () => cy.get('.sv-ranking', { timeout: 30000 }),
    sdRankingItemsInReview: () => cy.get('.sv-ranking-item .sv-string-viewer', { timeout: 30000 }),
    sdCheckboxContainer: () => cy.get('.sd-selectbase', { timeout: 30000 }),
    sdCheckboxContainer2: () => cy.get('.sd-selectbase', { timeout: 30000 }).eq(1),
    sdCheckboxItemWrapper: () => cy.get('.svc-item-value-wrapper', { timeout: 30000 }),
    sdCheckboxRemoveButton: () => cy.get('.svc-item-value-controls__remove svg title', { timeout: 30000 }),
    sdCheckboxReviewContainer: () => cy.get('.sd-selectbase', { timeout: 30000 }),
    sdCheckboxReviewContainer2: () => cy.get('.sd-selectbase', { timeout: 30000 }).eq(1),
    sdCheckboxItemsInReview: () => cy.get('.sd-selectbase__item .sv-string-viewer', { timeout: 30000 }),
    sdCheckboxItemsInReviewQuestion2: () => cy.get('div[data-name="question2"] .sd-selectbase__item .sv-string-viewer', { timeout: 30000 }),
    sdQuestionContainer: () => cy.get('div.sd-question__content', { timeout: 30000 }),
    sdBooleanLabel: () => cy.get('label.sd-boolean', { timeout: 30000 }),
    sdYesNoLabels: () => cy.get('.sv-string-viewer', { timeout: 30000 }),
    sdToggleInput: () => cy.get('input.sd-boolean__control', { timeout: 30000 }),
    sdToggleSwitch: () => cy.get('div.sd-boolean__switch', { timeout: 30000 }),
    sdBooleanButtons: () => cy.get('.sd-boolean__thumb-ghost', { timeout: 30000 }),
    sdDropdownInput: () => cy.get('div.sd-input.sd-dropdown', { timeout: 30000 }),
    svPopupBodyContent: () => cy.get('.sv-popup__body-content:visible', { timeout: 30000 }),
    svList: () => cy.get('ul.sv-list', { timeout: 30000 }),
    svStringViewer: () => cy.get('span.sv-string-viewer', { timeout: 30000 }),
    colorSelector: () => cy.get('input[type="color"].sd-input.sd-text', { timeout: 30000 }),
    surveyQuestionDescription: () => cy.get('div.sd-question__header div.sd-description.sd-question__description span.sv-string-editor[contenteditable="true"]', { timeout: 30000 }).eq(0),
    questionDescriptionPreview: () => cy.get('div.sd-question__header div.sd-description.sd-question__description span.sv-string-viewer.sv-string-viewer--multiline', { timeout: 30000 }),
    addButton: () => cy.get('button[title="Add new choice"]', { timeout: 30000 }),
    tableRows: () => cy.get('tbody tr.spg-table__row', { timeout: 30000 }),
    radioButtonOptions: () => cy.get('div.svc-item-value-wrapper .sv-string-editor[contenteditable="true"]', { timeout: 30000 }),
    radioButtonOptionsPreview: () => cy.get('fieldset.sd-selectbase .sv-string-viewer', { timeout: 30000 }),
    designerTab: () => cy.get('span.svc-tabbed-menu-item__text').contains('Designer', { timeout: 30000 }),
    selectQuestionTypeDropdown: () => cy.get('div[data-key="question10"]', { timeout: 30000 }),
    selectQuestionType2Dropdown: () => cy.get('button.svc-survey-element-toolbar__item[title="Single-Line Input"]', { timeout: 30000 }),
    question1PlaceHolder: () => cy.xpath('//span[contains(@class,"svc-string-editor__content")]//span[@class="sv-string-editor" and @role="textbox"]', { timeout: 15000 }),
    questionTypeOptions: () => cy.get('.sv-list__item-body', { timeout: 30000 }),
    showPanelButton: () => cy.contains('svg.sv-svg-icon[role="img"] title', 'Show Panel', { timeout: 30000 }).parent(),
    question1PlaceholderVerify: () => cy.get('h5.sd-title.sd-element__title.sd-question__title span.sv-string-viewer', { timeout: 30000 }),
    itemRemoveIcon: () => cy.get('[aria-label="Click to remove the item..."]', { timeout: 30000 }),
    questionBoxExpandIcon: () => cy.get('svg.sv-svg-icon.sd-element__title-expandable-svg[role="img"]', { timeout: 30000 }),
    showPanelIcon: () => cy.get('svg.sv-svg-icon[role="img"] title', { timeout: 30000 }).contains('Show Panel'),
    fieldLabel: (fieldName) => cy.contains('span.sv-string-viewer', fieldName, { timeout: 30000 }),
    sectionTitle: (sectionName) => cy.xpath(`//h4[contains(@class,"spg-title")]//span[normalize-space(text())="${sectionName}"]`, { timeout: 30000 }),
    fieldLabelRawWithContains: (fieldName) => `span.sv-string-viewer:contains("${fieldName}")`,
    radioOptionByText: (fieldName, optionText) => cy.contains('span.sv-string-viewer', fieldName, { timeout: 30000 }).parents('.spg-question').find('.spg-button-group label[role="radio"]', { timeout: 30000 }).contains(optionText, { timeout: 30000 }),
    fieldTextarea: (fieldName) => cy.contains('span.sv-string-viewer', fieldName, { timeout: 30000 }).parents('.spg-question').find('textarea.spg-input.spg-comment', { timeout: 30000 }),
    hidePanelButton: () => cy.get('button.sv-action-bar-item[title="Hide Panel"]', { timeout: 30000 }),
    questionDescriptionUnderInputField: () => cy.get('div.sd-description.sd-question__description span.sv-string-editor[contenteditable="true"]', { timeout: 30000 }).eq(0),
    questionDescriptionUnderInputFieldPreview: () => cy.get('div.sd-description.sd-question__description span.sv-string-viewer', { timeout: 30000 }).eq(0),
    sectionHeaderTitle: (sectionName) => cy.contains('h4.spg-title', sectionName, { timeout: 30000 }),
    checkboxUnderField: (fieldName) => cy.contains('span.sv-string-viewer', fieldName, { timeout: 30000 }).parents('.spg-question').find('input[type="checkbox"]', { timeout: 30000 }),
    questionTextEditor: () => cy.get('span.sv-string-editor', { timeout: 15000 }),
    fieldLabelByName: (fieldName) => cy.contains('span.sv-string-viewer', fieldName, { timeout: 30000 }),
    fieldContainerByName: (fieldName) => cy.contains('span.sv-string-viewer', fieldName, { timeout: 30000 }).parents('.spg-question'),
    fieldLabelTextInContainer: ($container) => cy.wrap($container).find('span.sv-string-viewer', { timeout: 30000 }).invoke('text'),
    sectionHeaderByName: (sectionName) => cy.xpath(`//h4[contains(@class, "spg-title")]//span[normalize-space(text())="${sectionName}"]`, { timeout: 30000 }).parents('h4'),
    radioButtonByValue: (radioValue) => cy.xpath(`//label[contains(@class, "spg-button-group__item")]//span[contains(@class, "sv-string-viewer") and normalize-space(text())="${radioValue}"]`, { timeout: 30000 }),
    uploadedFilePreviewDivs: () => cy.get('.sd-file__preview-item > div', { timeout: 90000 }),
    uploadedFilePreviewImages: () => cy.get('img[alt="File preview"]', { timeout: 90000 }),
    uploadedFilePreviewImageInsideDiv: (div) => cy.wrap(div).find('img[alt="File preview"]', { timeout: 90000 }),
    surveyScheduleDeleteAlertHeader: (messageText) => cy.contains('div.sv-popup__body-header', messageText, { timeout: 30000 }),
    hiddenFileInput: () => cy.get('input[type="file"].sd-visuallyhidden', { timeout: 30000 }),
    mainTypeListItem: (mainType) => cy.contains('.sv-list__item-body', mainType, { timeout: 30000 }),
    popupContainer: () => cy.get('.sv-popup__container', { timeout: 30000 }),
    itemValueWrappers: () => cy.get('div.svc-item-value-wrapper', { timeout: 30000 }),
    questionByDataName: () => cy.get('div[data-name="question2"]', { timeout: 30000 }),
    dropdownInputByField: (fieldName) => cy.xpath(`//div[@aria-label="${fieldName}"]//input[contains(@class,"spg-dropdown__filter-string-input")]`, { timeout: 30000 }),
    popupListContainer: () => cy.get('.sv-popup.spg-dropdown-popup ul.sv-list', { timeout: 30000 }),
    popupListItemByValue: (dropdownValue) => cy.get('span.sv-string-viewer').filter((index, el) => el.innerText.trim() === dropdownValue, { timeout: 30000 }),
    selectedDropdownText: (fieldName) => cy.xpath(`//div[@aria-label="${fieldName}"]//span[@data-bind="text: model.filterString"]`, { timeout: 8000 }),
    selectedListItem: () => cy.get('ul.sv-list li[aria-selected="true"] span.sv-string-viewer', { timeout: 8000 }),
    itemValueWrapperByOption: (optionLabel) => cy.get('div.svc-item-value-wrapper', { timeout: 30000 }).contains('span.sv-string-editor', optionLabel).should('be.visible').parents('div.svc-item-value-wrapper'),
    removeButtonInsideOptionWrapper: (wrapperAlias) => cy.get(wrapperAlias).find('span.svc-item-value-controls__button.svc-item-value-controls__remove', { timeout: 30000 }).should('be.visible').and('have.attr', 'aria-label', 'Click to remove the item...'),
    editableInputInsideOptionWrapper: (wrapperAlias) => cy.get(wrapperAlias).find('span.sv-string-editor[contenteditable="true"]', { timeout: 30000 }).should('be.visible'),
    checkboxItemContainer: () => cy.get('div.sd-item.sd-checkbox', { timeout: 30000 }).should('exist').and('have.length.at.least', 1),
    checkboxLabelByText: (expectedText) => cy.contains('span.sv-string-viewer', expectedText, { matchCase: false, timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible'),
    selectedQuestionElement: () => cy.get('.svc-question__content--selected', { timeout: 30000 }).find('.sd-question'),
    allQuestionElements: () => cy.get('div[id^="sq_"]', { timeout: 30000 }),
    fieldInputNearLabel_New: (fieldName) => cy.contains('span.sv-string-viewer', fieldName, { timeout: 30000 }).parents('.spg-question').find('input.spg-input-container__input, textarea.spg-input-container__input', { timeout: 30000 }),
    questionContainer: () => cy.get('div[data-key="question10"]', { timeout: 30000 }),
    columnContainer: () => cy.get('.sd-selectbase', { timeout: 30000 }),
    columnByCount: (count) => cy.get(`.sd-selectbase__column.sv-q-column-${count}`),
    previewQuestionContainer: () => cy.get('.sd-selectbase--multi-column'),
    previewColumnByCount: (count) => cy.get(`.sd-selectbase__column.sv-q-column-${count}`),
    filterText: (fieldName) => cy.xpath(`//div[@aria-label="${fieldName}"]//span[@data-bind="text: model.filterString"]`, { timeout: 30000 }),
    selectedDropdownItem: () => cy.get('ul.sv-list li[aria-selected="true"] span.sv-string-viewer', { timeout: 30000 }),
    selectFileLabel1: () => cy.get('span.svc-context-button.svc-image-item-value-controls__add', { timeout: 30000 }),
    hiddenFileInput1: () => cy.get('input[type="file"].svc-choose-file-input', { timeout: 30000 }).eq(1),
    previewImages: () => cy.get('fieldset.sd-selectbase.sd-imagepicker img.sd-imagepicker__image', { timeout: 30000 }),
    imageDeleteButtons: () => cy.get('fieldset.sd-selectbase.sd-imagepicker').find('span.svc-context-button--danger', { timeout: 30000 }),
    previewVideo: () => cy.get('fieldset.sd-selectbase.sd-imagepicker').find('img.sd-imagepicker__image, video.sd-imagepicker__video', { timeout: 30000 }),
    placeholderInputLabel: (label) => cy.contains('span.sv-string-viewer', label, { timeout: 30000 }),
    placeholderInputField: (label) => cy.contains('span.sv-string-viewer', label).parents('.spg-question__header').siblings('.spg-question__content').find('input.spg-input', { timeout: 30000 }),
    inputFieldByLabelEmail: () => cy.get('input.sd-input.sd-text[type="email"]', { timeout: 30000 }),
    previewEmailInput: () => cy.get('div.sd-text__content input.sd-input.sd-text[type="email"]', { timeout: 30000 }),
    previewNumberInput: () => cy.get('div.sd-text__content input.sd-input.sd-text[type="number"]', { timeout: 30000 }),
    surveyCompleteMessage: () => cy.get('.sd-body.sd-completedpage h3', { timeout: 30000 }),
    inputFieldByLabelPassword: () => cy.get('input.sd-input.sd-text[type="password"]', { timeout: 30000 }),
    previewPasswordInput: () => cy.get('div.sd-text__content input.sd-input.sd-text[type="password"]', { timeout: 30000 }),
    inputFieldByLabelPhoneNumber: () => cy.get('input.sd-input.sd-text[type="tel"]', { timeout: 30000 }),
    previewPhoneNumberInput: () => cy.get('div.sd-text__content input.sd-input.sd-text[type="tel"]', { timeout: 30000 }),
    inputFieldByLabelText: () => cy.get('input.sd-input.sd-text[type="text"]', { timeout: 30000 }),
    previewTextInput: () => cy.get('div.sd-text__content input.sd-input.sd-text[type="text"]', { timeout: 30000 }),
    inputFieldByLabelURL: () => cy.get('input.sd-input.sd-text[type="URL"]', { timeout: 30000 }),
    previewURLInput: () => cy.get('div.sd-text__content input.sd-input.sd-text[type="URL"]', { timeout: 30000 }),
    minWeekInput: () => cy.xpath('//div[@data-key="min0"]//input[@type="week"]', { timeout: 30000 }),
    maxWeekInput: () => cy.xpath('//div[@data-key="max-1"]//input[@type="week"]', { timeout: 30000 }),
    weekInputPreview: () => cy.get('input.sd-input.sd-text[type="week"]', { timeout: 30000 }),
    longTextQuestionContainer: () => cy.get('div.sd-question__header', { timeout: 30000 }),
    longTextQuestionSpan: () => cy.get('.sv-string-viewer.sv-string-viewer--multiline', { timeout: 30000 }),
    leftPanelSearchInput: () => cy.get('.svc-toolbox--searchable .svc-search__input', { timeout: 30000 }),
    leftPanelQuestionItems: () => cy.get('.svc-toolbox--searchable .svc-toolbox__item-title', { timeout: 30000 }),
    duplicateQuestionButton: () => cy.get('button[title="Duplicate"]', { timeout: 30000 }),
    getQuestionTitles: () => cy.get('.sd-question__title .sv-string-editor[role="textbox"]'),
    allQuestionTextBoxes: () => cy.get('.sd-question__title .sv-string-editor[role="textbox"]'),
    fallbackQuestionPlaceholder: () => cy.get('.sd-question__title .sv-string-editor[role="textbox"]'),
    questionRows: () => cy.get('div.sd-page__row > div[data-key]'),
    questionText: (question) => question.find('.sv-string-viewer.sv-string-viewer--multiline').first(),
    deleteQuestionButton: () => cy.get('button[title="Delete"]', { timeout: 30000 }),
    question2PlaceholderVerify: () => cy.get('h5.sd-title.sd-element__title.sd-question__title span.sv-string-viewer', { timeout: 30000 }).eq(1),
    pageContainer: () => cy.get('div.svc-page', { timeout: 30000 }),
    questionTitleSpan: () => cy.get('span.sv-string-editor', { timeout: 30000 }),
    questionTypeButton: () => cy.get('button.svc-survey-element-toolbar__item--with-text', { timeout: 30000 }),
    nextButton: () => cy.get('input.sd-btn.sd-navigation__next-btn[title="Next"][value="Next"]', { timeout: 30000 }),
    previewQuestionTitle: () => cy.get('div.sd-question__header h5.sd-title span.sv-string-viewer', { timeout: 30000 }),
    minDateInput: () => cy.get('div[data-key="min0"] input[type="date"]', { timeout: 30000 }),
    maxDateInput: () => cy.get('div[data-key="max-1"] input[type="date"]', { timeout: 30000 }),
    dateInputPreview: () => cy.get('input.sd-input.sd-text[type="date"]', { timeout: 30000 }),
    minDateTimeInput: () => cy.get('div[data-key="min0"] input[type="datetime-local"]', { timeout: 30000 }),
    maxDateTimeInput: () => cy.get('div[data-key="max-1"] input[type="datetime-local"]', { timeout: 30000 }),
    dateTimeInputPreview: () => cy.get('input.sd-input.sd-text[type="datetime-local"]', { timeout: 30000 }),
    minMonthInput: () => cy.get('div[data-key="min0"] input[type="month"]', { timeout: 30000 }),
    maxMonthInput: () => cy.get('div[data-key="max-1"] input[type="month"]', { timeout: 30000 }),
    monthInputPreview: () => cy.get('input.sd-input.sd-text[type="month"]', { timeout: 30000 }),
    minTimeInput: () => cy.get('div[data-key="min0"] input[type="time"]', { timeout: 30000 }),
    maxTimeInput: () => cy.get('div[data-key="max-1"] input[type="time"]', { timeout: 30000 }),
    timeInputPreview: () => cy.get('input.sd-input.sd-text[type="time"]', { timeout: 30000 }),
    addQuestionButtonPage2: () => cy.get('.svc-element__add-new-question.svc-btn', { timeout: 30000 }).eq(1),
    deleteButtonPage1: () => cy.get('div[data-sv-drop-target-survey-page="page1"] #delete button', { timeout: 30000 }).eq(0),
    page1Title: () => cy.get('.sd-page .sv-string-editor[aria-label="Page 1"]', { timeout: 3000 }),
    page2Title: () => cy.get('.sd-page .sv-string-editor[aria-label="Page 2"]', { timeout: 3000 }).eq(0),
    page1Question2: () => cy.get('div.sd-page:has(span[aria-label="Page 1"]) div[data-sv-drop-target-survey-element="question2"] span[aria-label="content editable"]', { timeout: 30000 }).eq(0),
    question1Field: () => cy.get('div[data-name="question1"]', { timeout: 30000 }),
    question2Field: () => cy.get('div[data-name="question2"]', { timeout: 30000 }),
    surveySettingsIcon: () => cy.get('svg.sv-svg-icon[role="img"] title', { timeout: 30000 }).contains('Survey settings'),
    surveySettingsButton: () => cy.get('button[title="Survey settings"]', { timeout: 30000 }),
    previewInputField: () => cy.get('input.sd-input.sd-input--readonly', { timeout: 30000 }),
    previewInputFieldEditable: () => cy.get('input.sd-input.sd-text[type="text"]', { timeout: 30000 }),
    questionHeader: () => cy.get('div.sd-question__header', { timeout: 30000 }),
    autoWidthOption: () => cy.get('input[value="auto"]', { timeout: 30000 }),
    staticWidthOption: () => cy.get('input[value="static"]', { timeout: 30000 }),
    responsiveWidthOption: () => cy.get('input[value="responsive"]', { timeout: 30000 }),
    previewQuestionHeader: () => cy.get('div.sd-question__header', { timeout: 30000 }),
    logoFileInput: () => cy.get('input.svc-choose-file-input[type="file"]', { timeout: 30000 }),
    logoPlaceholder: () => cy.get('.svc-logo-image-placeholder', { timeout: 30000 }),
    logoInPreview: () => cy.get('div.sd-logo.sv-logo--right img.sd-logo__image', { timeout: 30000 }),
    deleteLogoButton: () => cy.get('span.svc-context-button.svc-context-button--danger', { timeout: 30000 }),
    questionTitle: () => cy.get('#sq_416 .sd-question__header'),
    questionInput: () => cy.get('#sq_416 input.sd-input'),
    previewAlignmentTop: () => cy.get('div.sd-question--title-top', { timeout: 30000 }),
    previewAlignmentBottom: () => cy.get('div.sd-question--title-bottom', { timeout: 30000 }),
    previewAlignmentLeft: () => cy.get('div.sd-question--left', { timeout: 30000 }),
    previewAlignmentHeader: () => cy.get('.sd-question__header', { timeout: 30000 }),
    previewAlignmentInput: () => cy.get('input.sd-input', { timeout: 30000 }),
    addQuestionBtnAdditional: () => cy.get('.svc-page[data-sv-drop-target-page="page2"] .svc-element__add-new-question', { timeout: 30000 }),
    alertTopContainer: () => cy.get('div.sd-question--error-top', { timeout: 30000 }),
    alertBottomContainer: () => cy.get('div.sd-question--error-bottom', { timeout: 30000 }),
    alertRole: (container) => container.find('[role="alert"]'),
    questionInputContainer: (container) => container.find('fieldset'),
    pagesSetting: () => cy.get('h4.spg-title.spg-panel__title[aria-label="Pages"]', { timeout: 30000 }),
    addNewPage: () => cy.get('div#add-item button.spg-action-button[title="Add new page"]', { timeout: 30000 }),
    pageTitle: () => cy.get('span[aria-label="Page 1"]', { timeout: 30000 }),
    pageDescription: () => cy.get('span[aria-label="Description"]', { timeout: 30000 }),
    question1Header: () => cy.get('div[data-name="question1"] .sv-string-viewer', { timeout: 30000 }),
    weightContainer: () => cy.get('.spg-button-group', { timeout: 30000 }),
    surveyContainer: () => cy.get('.svd-simulator-content', { timeout: 30000 }),
    themesTab: () => cy.get('span.svc-tabbed-menu-item__text').contains('Themes', { timeout: 30000 }),
    themeSettingsButton: () => cy.contains('svg.sv-svg-icon[role="img"] title', 'Theme settings', { timeout: 30000 }).parent(),
    darkModeRadio: () => cy.get('label[title="Dark"]', { timeout: 30000 }),
    lightModeRadio: () => cy.get('label[title="Light"]', { timeout: 30000 }),
    pageRoot: () => cy.get('.sd-root-modern.sd-progress--pages', { timeout: 30000 }),
    selectedWeightOption: (options = {}) => cy.get('.spg-button-group__item--selected', options, { timeout: 30000 }),
    searchInput: () => cy.get('.svc-search__input', { timeout: 30000 }),
    headerSessionTheme: () => cy.contains('span.sv-string-viewer.sv-string-viewer--multiline', 'Header', { timeout: 30000 }),
    boldRadioButton: () => cy.get('label[title="Bold"]', { timeout: 30000 }).eq(0),
    heavyRadioButton: () => cy.get('label[title="Heavy"]', { timeout: 30000 }).eq(0),
    semiboldRadioButton: () => cy.get('label[title="Semi-bold"]', { timeout: 30000 }).eq(0),
    titleThemeLocation: () => cy.get('h3.sd-title span.sv-string-viewer', { timeout: 30000 }).eq(0),
    descriptionThemeLocation: () => cy.get('.sd-description span.sv-string-viewer', { timeout: 30000 }).eq(0),
    fontFamilyDescriptionDropdown: () => cy.get('.sd-dropdown[aria-label="Font family"]', { timeout: 30000 }).eq(1),
    heavyRadioButtonDescription: () => cy.get('label[title="Heavy"]', { timeout: 30000 }).eq(1),
    boldRadioButtonDescription: () => cy.get('label[title="Bold"]', { timeout: 30000 }).eq(1),
    semiboldRadioButtonDescription: () => cy.get('label[title="Semi-bold"]', { timeout: 30000 }).eq(1),
    fontFamilyDropdownOption: (fontFamily, options) => cy.get(`.sv-list__item-body[title="${fontFamily}"]`, options),
    dropdownPopup: () => cy.get('.sv-popup.spg-dropdown-popup', { timeout: 30000 }),
    sureveyDescriptionTheme: () => cy.get('.sd-description .sv-string-viewer', { timeout: 30000 }),
    sureveyDescriptionThemeUpArrow: () => cy.get('button.spg-input__edit-button', { timeout: 30000 }).eq(3),
    sureveyDescriptionThemeDownArrow: () => cy.get('button.spg-input__edit-button', { timeout: 30000 }).eq(2),
    sureveyDescriptionPreview: () => cy.get('.sd-description .sv-string-viewer', { timeout: 30000 }),
    logoContainer: () => cy.get('div.sd-logo', { timeout: 30000 }),
    logoLeftButton: () => cy.get('label[role="radio"].spg-button-group__item').eq(2),
    saveAsDraftButton: () => cy.contains('button', 'Save As Draft', { timeout: 30000 }),
    responseRequiredSuccess: () => cy.get('div.toast-success', { timeout: 30000 }),
    translationsTab: () => cy.get('span.svc-tabbed-menu-item__text').contains('Translations', { timeout: 30000 }),
    logicTab: () => cy.get('span.svc-tabbed-menu-item__text').contains('Logic', { timeout: 30000 }),
    addSurvey: () => cy.get('[class="table-action-icon-container02"] div', { timeout: 30000 }),
    surveyName: () => cy.get('input[name="surveyName"]', { timeout: 60000 }),
    surveyDepartmentDropdown: () => cy.xpath('//label[text()="Department"]/following::div[@class="input_select-form"]', { timeout: 30000 }),
    dropdownOptions: () => cy.get('[class="input_select-form_option-container"] li', { timeout: 30000 }),
    languageDropdown: () => cy.get('[class*="input_select-form_Languages"]', { timeout: 30000 }),
    expiryDate: () => cy.get('input[type="date"]', { timeout: 30000 }),
    resendWaitPeriod: () => cy.get('input[name="resendWaitPeriod"]', { timeout: 30000 }),
    description: () => cy.get('textarea.form_input-field_container_field', { timeout: 30000 }),
    nextBtn: () => cy.get('button.button_form-primary_button').contains('Next', { timeout: 30000 }),
    surveyTitleTranslates: () => cy.get('#sq_1007i', { timeout: 30000 }),
    surveyDescriptionTranslates: () => cy.get('#sq_851i', { timeout: 30000 }),
    question1TitleTranslates: () => cy.get('#sq_857i', { timeout: 30000 }),
    responseRequiredError: () => cy.get('.toast.toast-error', { timeout: 30000 }),
    surveyListPage: () => cy.get('.custom-breadcrumb .second-link', { timeout: 30000 }),
    question1TranslatesItem1: () => cy.get('#sq_859i', { timeout: 30000 }),
    question1TranslatesItem2: () => cy.get('#sq_861i ', { timeout: 30000 }),
    question1TranslatesItem3: () => cy.get('#sq_863i', { timeout: 30000 }),
    addNewRuleBtn: () => cy.contains('span.svc-btn__text', 'Add New Rule', { timeout: 30000 }),
    logicPlaceholderText: () => cy.get('.svc-surface-placeholder__text', { timeout: 30000 }),
    newRuleBtn: () => cy.contains('span.svc-link__button', 'New rule', { timeout: 30000 }),
    selectlogicQuestionDropdown: () => cy.contains('.sl-dropdown.svc-logic-operator', 'Select...', { timeout: 30000 }),
    conditionQuestionDropdown: () => cy.contains('.sl-dropdown.svc-logic-operator', 'Equals', { timeout: 30000 }),
    logicQuestionOption: (questionText) => cy.contains('li.sv-list__item', questionText, { timeout: 30000 }),
    question1Logic: () => cy.get('.sd-question__title .sv-string-viewer', { timeout: 30000 }),
    radioItems: () => cy.xpath('//*[@id="sq_861"]/div[2]/fieldset/div[1]/label', { timeout: 30000 }),
    radioItemsCheched: () => cy.xpath('//*[@id="sq_861"]/div[2]/fieldset/div[1]', { timeout: 30000 }),
    addPanelButton: () => cy.contains('button', 'Add Condition', { timeout: 30000 }),
    andLogic: () => cy.get('#sq_862i .sl-dropdown__value span', { timeout: 30000 }),
    selectLogic: () => cy.get('#sq_863i .sl-dropdown__value div', { timeout: 30000 }),
    equalLogic: () => cy.get('#sq_864i', { timeout: 30000 }),
    deleteLogic: () => cy.get('#sq_865 svg.sv-svg-icon', { timeout: 30000 }),
    logicQuestion2Input: () => cy.get('input.sv-list__input[placeholder="Type to search..."]', { timeout: 30000 }).eq(1),
    dropdownQuestion2Option: (text) => cy.get('div.sv-popup.sv-single-select-list.sv-popup--show-pointer', text, { timeout: 20000 }),
    logicQuestion2SortedOption: () => cy.get('ul#sq_1565i_list li', { timeout: 30000 }).eq(1),
    radio1Items: () => cy.xpath('//*[@id="sq_1563"]/div[2]/fieldset/div[1]/label', { timeout: 30000 }),
    radio1ItemsCheched: () => cy.xpath('//*[@id="sq_1563"]/div[2]/fieldset/div[1]', { timeout: 30000 }),
    and1Logic: () => cy.get('#sq_1564i .sl-dropdown__value span', { timeout: 30000 }),
    select1Logic: () => cy.get('#sq_1565i .sl-dropdown__value div', { timeout: 30000 }),
    equal1Logic: () => cy.get('#sq_1566i', { timeout: 30000 }), 
    delete1Logic: () => cy.get('#sq_1567 svg.sv-svg-icon', { timeout: 30000 }),
    radioItemsQuestion2: () => cy.xpath('//*[@id="sq_1571"]/div[2]/fieldset/div[2]/label', { timeout: 30000 }),
    radioItemsQuestion2Cheched: () => cy.xpath('//*[@id="sq_1571"]/div[2]/fieldset/div[2]', { timeout: 30000 }),
    selectAction: () => cy.get('#sq_1549i', { timeout: 30000 }),
    and2Logic: () => cy.get('#sq_1104i .sl-dropdown__value span', { timeout: 30000 }),
    select2Logic: () => cy.get('#sq_1105i .sl-dropdown__value div', { timeout: 30000 }),
    equal2Logic: () => cy.get('#sq_1106i', { timeout: 30000 }),
    delete2Logic: () => cy.get('#sq_1107 svg.sv-svg-icon', { timeout: 30000 }),
    selectlogicPage2QuestionDropdown: () => cy.contains('#sq_1551i .sl-dropdown__value div', 'Select a question...', { timeout: 30000 }),
    logicQuestionPage2Input: () => cy.xpath('//*[@id="sq_1551"]/div/div/div/div[2]/div/div/div/div/div/div/div[1]/input', { timeout: 30000 }),
    logicQuestionPage2SortedOption: () => cy.get('ul#sq_1551i_list li', { timeout: 30000 }).eq(2),
    doneButton: () => cy.get('button[title="Done"]', { timeout: 30000 }),
    logicRuleSummary: () => cy.get('span.svc-link__button.svc-link-value-button', { timeout: 30000 }),
    logicRuleSummaryBox: () => cy.get('textarea.svc-logic-question-text-editor', { timeout: 30000 }),
    editRule: () => cy.get('button[title="Edit"]', { timeout: 30000 }),
    editRukeQuestion2: () => cy.contains('div.sl-dropdown.svc-logic-operator--question', 'question2', { timeout: 30000 }),
    editRukeQuestion2SortedOption: () => cy.get('ul#sq_1565i_list li', { timeout: 30000 }),
    deleteRule: () => cy.get('button[title="Remove"]', { timeout: 30000 }),
    manualEntryBtn: () => cy.get('button[title="Manual Entry"]', { timeout: 30000 }),
    manualEntryRuleExpressionField: () => cy.get('textarea[placeholder="Type expression here..."]', { timeout: 30000 }),
    saveDetailPanel: () => cy.xpath('//*[@id="saveDetailPanel"]/div/button', { timeout: 30000 }),
    allQuestionsBtn: () => cy.get('button[title="All Questions"]', { timeout: 30000 }),
    allQuestionsDropdownItems: () => cy.get('ul.sv-list li.sv-list__item div.sv-list__item-body span.sv-string-viewer'),
    thankYoupagesSetting: () => cy.contains('h4.spg-title.spg-panel__title', '"Thank You" Page', { timeout: 30000 }),
    redirectStaticUrlInput: () => cy.contains('span.sv-string-viewer', 'Redirect to an external link after submission').parents('.spg-question').find('input.spg-input.spg-text'),
    redirectDynamicUrlInput: () => cy.contains('span.sv-string-viewer', 'Redirect to an external link after submission').parents('.spg-question').find('input.spg-input.spg-text'),
    previewRadioOptionItem: () => cy.get('label.sd-selectbase__label span.sd-radio__decorator', { timeout: 30000 }),
    notifiereMessage: () => cy.get('div.svc-notifier.svc-notifier--info', { timeout: 30000 }),
    surveyMenuButton: () => cy.get('[class="nav-item false"] span', { timeout: 30000 }),
    surveydashboard: () => cy.contains("a.nav-item", "Survey Dashboard", { timeout: 30000 }),
    totalSurveyCount: () => cy.get('.count-details-container_total-surveys .count', { timeout: 30000 }),
    scheduledCount: () => cy.get('.count-details-container_scheduled .count', { timeout: 30000 }),
    eventBasedCount: () => cy.get('.count-details-container_sent-directly .count', { timeout: 30000 }),
    pieChartLabels: () => cy.get('.recharts-layer.recharts-pie-labels text', { timeout: 30000 }),
    surveyDashboadHeadings: () => cy.get('header.container-header .container-title', { timeout: 30000 }),
    liveFeedHeader: () => cy.get('.live-feed-title .title', { timeout: 30000 }),
    feedElements: () => cy.get('.feed-element-container', { timeout: 30000 }),
    responseRequiredErrorAlert: () => cy.get('.sd-error', { timeout: 30000 }),
    surveyTitleDescriptionHolder: () => cy.get('div.sd-description', { timeout: 30000 }).eq(0),
    surveyLanguageClearSymbol: () => cy.get('.sd-dropdown_clean-button', { timeout: 30000 }),
    limitToOneResponseInput: () => cy.contains('span.sv-string-viewer', 'Limit to one response', { timeout: 30000 }).closest('.spg-question').find('input.spg-input.spg-text'),
    addNewURLDynamicButton: () => cy.get('div#add-item button[title="Add new URL"]', { timeout: 30000 }),
    expressionInputDynamicURL: () => cy.get('td.spg-table__cell[title="expression"] input.spg-input', { timeout: 30000 }),
    dynamicURLink: () => cy.get('td.spg-table__cell[title="URL"] input.spg-input', { timeout: 30000 }),
    questionContainerBody: () => cy.get('.svc-question__drag-area', { timeout: 30000 }),
    arabicTextInputPlaceHolder: () => cy.get('textarea.st-comment', { timeout: 30000 }),
    responseRequiredErrorPlaceHolder: () => cy.get('.sd-error', { timeout: 30000 }),
    minimumInputSelector: () => cy.xpath("//input[contains(@class,'spg-input') and @type='number']", { timeout: 30000 }).eq(0),
    maximumInputSelector: () => cy.xpath("//input[contains(@class,'spg-input') and @type='number']", { timeout: 30000 }).eq(1)
  }

  expectedOptions = [
    "Show/hide page",
    "Enable/disable page",
    "Make page required",
    "Show/hide question",
    "Enable/disable question",
    "Make question required",
    "Reset question value",
    "Set question value",
    "Complete survey",
    "Set answer",
    "Copy answer",
    "Skip to question",
    "Run expression",
    'Set "Thank You" page markup'
  ];

  allQuestions = ['question1', 'question2', 'question3'];
  staticURL = "https://google.com";
  dynamicURL = "https://google.com";
  surveyResponseCompletion = "Survey Response & Completion Insights";
questionBoxExpandIconSelector = 'svg.sv-svg-icon.sd-element__title-expandable-svg[role="img"]';

addQuestionButton() {
  this.elements.addQuestionButton().scrollIntoView({ ensureScrollable: false }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      cy.log("Add Question button is visible and clicked successfully");
      console.log("Add Question button is visible and clicked successfully");
    } else {
      const msg = "Add Question button is not visible or not clickable";
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    }
  });
}

surveyTitleAndDescription(title) {
  this.surveyTitle = title || (faker.word.words(2) + ' Title');
  this.elements.surveyTitle({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
    if ($el.is(':visible') && !$el.is(':disabled')) {
      cy.wrap($el).scrollIntoView({ ensureScrollable: false }).click().clear().type(this.surveyTitle);
      cy.wrap(this.surveyTitle).as('surveyTitle');
      cy.log("Survey title entered successfully");
      console.log("Survey title entered successfully");
    } else {
      const msg = "Survey title field is not visible or disabled";
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    }
  });

  const description = "Sample survey description";
  this.elements.surveyTitleDescription({ timeout: 30000 }).then($el => {
    if ($el.is(':visible') && !$el.is(':disabled')) {
      cy.wrap($el).scrollIntoView({ ensureScrollable: false }).click().clear().type(description);
      cy.wrap(description).as('titleSurveyDescription');
      cy.log("Survey description entered successfully");
      console.log("Survey description entered successfully");
    } else {
      const msg = "Survey description field is not visible or disabled";
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    }
  });
}

selectQuestionType(type) {
  this.elements.selectQuestionTypeDropdown().scrollIntoView({ ensureScrollable: false }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).trigger('mouseover');
      cy.log("Hovered over Question Type dropdown");
      console.log("Hovered over Question Type dropdown");
    } else {
      const msg = "Question Type dropdown is not visible";
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    }
  });
this.elements.questionTypeDropdownButton().scrollIntoView({ ensureScrollable: false }).then($el => {
  if ($el.is(':enabled') && !$el.is(':disabled')) {
    cy.wrap($el).click({ force: true });
    cy.log("Clicked on Question Type dropdown button");
    console.log("Clicked on Question Type dropdown button");
  } else {
    const msg = "Question Type dropdown button is not clickable (disabled or not interactable)";
    cy.log(msg).then(() => {
      console.error(msg);
      throw new Error(msg);
    });
  }
});
  this.elements.questionTypeOptions().contains(type).then($el => {
     if (!$el.is(':disabled')) {
      cy.wrap($el).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      cy.log(`Question type "${type}" selected successfully`);
      console.log(`Question type "${type}" selected successfully`);
    } else {
      const msg = `Question type option "${type}" is not visible`;
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    }
  });
}

selectQuestionType2(type) {
  this.elements.selectQuestionType2Dropdown().scrollIntoView({ ensureScrollable: false }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).scrollIntoView({ ensureScrollable: false }).trigger('mouseover');
      cy.log("Hovered over Question Type 2 dropdown");
      console.log("Hovered over Question Type 2 dropdown");
    } else {
      const msg = "Question Type 2 dropdown is not visible";
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    }
  });
  this.elements.questionTypeDropdownButton().scrollIntoView({ ensureScrollable: false }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).scrollIntoView({ ensureScrollable: false }).click();
      cy.log("Clicked on Question Type dropdown button");
      console.log("Clicked on Question Type dropdown button");
    } else {
      const msg = "Question Type dropdown button is not visible";
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    }
  });
  this.elements.questionTypeOptions().contains(type).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).scrollIntoView({ ensureScrollable: false }).click();
      cy.log(`Selected question type: "${type}"`);
      console.log(`Selected question type: "${type}"`);
    } else {
      const msg = `Question type option "${type}" is not visible`;
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    }
  });
}

verifyQuestion1Asterisk() {
  this.elements.question1Tab().scrollIntoView({ ensureScrollable: false }).should('be.visible').within(() => {
    cy.get('span').contains('*').then($span => {
      if ($span.length > 0) {
        cy.log('Asterisk symbol visible on Question');
        console.log('Asterisk symbol visible on Question');
      } else {
        const msg = 'Asterisk symbol not found on Question';
        cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
      }
    });
  });
}

enterQuestion1() {
  const titleWord = faker.word.noun();
  const questionText = `How do you experience about ${titleWord}`;
  this.elements.questionTextEditor().then($els => {
    const match = [...$els].find(el => el.textContent.trim() === 'question1');
    const target = match ? cy.wrap(match) : this.elements.question1PlaceHolder().eq(4);
    cy.log(match ? 'Using matched element for enterQuestion1' : 'Using fallback selector for enterQuestion1');
    target.scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true }).clear({ force: true }).type(questionText, { force: true }).then(() => {
        if (target) {
          cy.log(`Question 1 entered successfully: "${questionText}"`);
          console.log(`Question 1 entered successfully: "${questionText}"`);
        } else {
          const msg = `Failed to enter Question 1: "${questionText}"`;
          cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
      });
  });
  cy.wrap(questionText).as('enteredQuestion1');
}

enterQuestion2() {
  const titleWord = faker.word.noun();
  const questionText2 = `How do you experience about ${titleWord}`;
  cy.log('Looking for "question2" in the DOM');
  this.elements.questionTextEditor().then($els => {
    const match = [...$els].find(el => el.textContent.trim() === 'question2');
    if (match) {
      cy.log('"question2" found, entering text');
      cy.wrap(match).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true }).clear({ force: true }).type(questionText2, { force: true });
      cy.log(`Question 2 entered successfully: "${questionText2}"`);
      console.log(`Question 2 entered successfully: "${questionText2}"`);
    } else {
      const msg = '"question2" span not found in the DOM';
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    }
  });
  cy.wrap(questionText2).as('enteredQuestion2');
}

enterValueInField(sectionName, fieldName, value) {
  cy.log(`Expanding panel to find field "${fieldName}"`);
  this.elements.showPanelButton().should('be.visible').click({ force: true });
  this.elements.fieldLabelByName(fieldName, { timeout: 30000 }).scrollIntoView({ ensureScrollable: false, timeout: 30000 }).should('exist').then($field => {
    if ($field.is(':visible')) {
      cy.log(`Field "${fieldName}" is visible`);
      console.log(`Field "${fieldName}" is visible`);
    } else {
      const msg = `Field "${fieldName}" not visible, expanding section "${sectionName}"`;
      cy.log(msg).then(() => { console.error(msg); this.elements.sectionHeaderTitle(sectionName, { timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true }); });
    }
  });
  this.elements.inputFieldNearLabel(fieldName).scrollIntoView({ ensureScrollable: false }).then($input => {
    if ($input.is(':visible')) {
      cy.wrap($input).clear({ force: true }).type(value, { force: true });
      cy.log(`Value "${value}" entered successfully in field "${fieldName}"`);
      console.log(`Value "${value}" entered successfully in field "${fieldName}"`);
    } else {
      const msg = `Cannot enter value: field "${fieldName}" not visible`;
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    }
  });
}

verifyQuestion(sectionName, fieldName) {
  cy.log(`Starting verification for field "${fieldName}" in section "${sectionName}"`);
  this.elements.showPanelButton().should('be.visible').click({ force: true });
  cy.log(`Clicked to expand panel for field "${fieldName}"`);
  this.elements.fieldLabelByName(fieldName, { timeout: 30000 }).scrollIntoView({ ensureScrollable: false, timeout: 30000 }).should('exist').then($field => {
    if ($field.is(':visible')) {
      cy.log(`Field "${fieldName}" is visible`);
      console.log(`Field "${fieldName}" is visible`);
    } else {
      const msg = `Field "${fieldName}" not visible, expanding section "${sectionName}"`;
      cy.log(msg).then(() => { console.error(msg); this.elements.sectionHeaderTitle(sectionName, { timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true }); });
    }
  });
  cy.get('@enteredQuestion1').then(expectedValue => {
    this.elements.fieldContainerByName(fieldName).then($container => {
      const $input = $container.find('input, textarea');
      if ($input.length) {
        cy.wrap($input).invoke('val').then(actualValue => {
          const cleanVal = actualValue.trim();
          cy.log(`Actual Value: "${cleanVal}"`);
          cy.log(`Expected Value: "${expectedValue}"`);
          if (cleanVal === expectedValue) {
            cy.log(`Verification passed for field "${fieldName}"`);
            console.log(`Verification passed for field "${fieldName}"`);
          } else {
            const msg = `Verification failed for field "${fieldName}"`;
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
          }
        });
      } else {
        this.elements.fieldLabelTextInContainer($container).then(actualText => {
          const cleanText = actualText.trim();
          cy.log(`Actual Text: "${cleanText}"`);
          cy.log(`Expected Value: "${expectedValue}"`);
          if (cleanText === expectedValue) {
            cy.log(`Verification passed for field "${fieldName}"`);
            console.log(`Verification passed for field "${fieldName}"`);
          } else {
            const msg = `Verification failed for field "${fieldName}"`;
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
          }
        });
      }
    });
  });
}

clickCheckboxUnderSection(sectionName, fieldName) {
  cy.log(`Starting process to ensure checkbox "${fieldName}" under section "${sectionName}" is checked`);
  this.elements.showPanelButton().should('be.visible').click({ force: true });
  cy.log(`Clicked to show panel for section "${sectionName}"`);
  this.elements.fieldLabel(fieldName).scrollIntoView({ ensureScrollable: false }).should('exist').then($field => {
    if ($field.is(':visible')) {
      cy.log(`Field "${fieldName}" is visible`);
      console.log(`Field "${fieldName}" is visible`);
    } else {
      const msg = `Field "${fieldName}" not visible, expanding section "${sectionName}"`;
      cy.log(msg).then(() => { console.error(msg); this.elements.sectionHeaderTitle(sectionName).scrollIntoView({ ensureScrollable: false }).click({ force: true }); });
    }
  });
  this.elements.checkboxUnderField(fieldName).should('exist').then($checkbox => {
    if (!$checkbox.length) {
      const msg = `Checkbox "${fieldName}" not found under section "${sectionName}"`;
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    } else if (!$checkbox.prop('checked')) {
      cy.log(`Checkbox "${fieldName}" is not checked, checking it now`);
      cy.wrap($checkbox).scrollIntoView({ ensureScrollable: false }).check({ force: true }).should('be.checked');
      cy.log(`Checkbox "${fieldName}" is now checked`);
      console.log(`Checkbox "${fieldName}" is now checked`);
    } else {
      cy.log(`Checkbox "${fieldName}" was already checked`);
      console.log(`Checkbox "${fieldName}" was already checked`);
    }
  });
}

selectRadioOptionUnderSection(sectionName, fieldName, radioValue) {
  cy.log(`Starting process to select radio option "${radioValue}" under section "${sectionName}"`);
  this.elements.showPanelButton().should('be.visible').click({ force: true });
  cy.log(`Clicked to show panel for section "${sectionName}"`);
  cy.get('body').then($body => {
    if ($body.find(`span.sv-string-viewer:contains("${fieldName}")`).length > 0) {
      this.elements.fieldLabelByName(fieldName, { timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
        if ($el.is(':visible')) {
          cy.log(`Field "${fieldName}" is visible`);
          console.log(`Field "${fieldName}" is visible`);
        } else {
          const msg = `Field "${fieldName}" not visible, expanding section "${sectionName}"`;
          cy.log(msg).then(() => { console.error(msg); this.elements.sectionHeaderByName(sectionName).click({ force: true }); });
        }
      });
    } else {
      const msg = `Field "${fieldName}" not found, expanding section "${sectionName}"`;
      cy.log(msg).then(() => { console.error(msg); this.elements.sectionHeaderByName(sectionName).click({ force: true }); });
    }
  });
  this.elements.fieldLabelByName(fieldName, { timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible');
  cy.log(`Selecting radio option "${radioValue}" under field "${fieldName}"`);
  this.elements.radioButtonByValue(radioValue).scrollIntoView({ ensureScrollable: false }).should('be.visible').then($radio => {
    if (!$radio.length) {
      const msg = `Radio button "${radioValue}" not found under field "${fieldName}"`;
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    } else {
      cy.wrap($radio).click({ force: true });
      cy.log(`Radio option "${radioValue}" selected successfully under "${fieldName}"`);
      console.log(`Radio option "${radioValue}" selected successfully under "${fieldName}"`);
    }
  });
  cy.log(`Completed selecting radio option "${radioValue}" under section "${sectionName}"`);
}

verifyUploadedImagesVisible(expectedCount) {
  cy.log(`Start verifying uploaded images, expected count = ${expectedCount}`);
  this.elements.uploadedFilePreviewDivs().then(($divs) => {
    const fileDivs = $divs.filter((_, div) => Cypress.$(div).find('img[alt="File preview"]').length > 0);
    const actualCount = fileDivs.length;
    if (actualCount === expectedCount) {
      cy.log("Uploaded image count matches expected count");
    } else {
      const msg = `Count mismatch. Expected ${expectedCount}, got ${actualCount}`;
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    }
    Cypress._.each(fileDivs, (div, index) => {
      cy.wrap(div).within(() => {
        this.elements.uploadedFilePreviewImageInsideDiv(div).then(($img) => {
          if ($img.length && $img.is(':visible')) {
            const src = $img.attr('src');
            cy.log(`Image ${index + 1} visible: ${src}`);
            console.log(`Image ${index + 1} visible: ${src}`);
          } else {
            const msg = `Image ${index + 1} is not visible`;
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
          }
        });
      });
    });
    cy.log("All images processed successfully");
  });
  cy.log("Completed image verification");
}

deleteFiles() {
    cy.log("START: Delete files process");
    this.elements.deleteButton().scrollIntoView({ ensureScrollable: false }).then(($btn) => {
        if ($btn.is(':visible')) {
            cy.wrap($btn).scrollIntoView({ ensureScrollable: false }).click({ force: true });
            cy.log("Clicked on Delete button");
        } else {
            const msg = "Delete button not visible, cannot delete files";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
    this.elements.diologueBox().scrollIntoView({ ensureScrollable: false }).then(($dialog) => {
        if ($dialog.is(':visible')) {
            cy.wrap($dialog).within(() => {
                this.elements.surveyScheduleDeleteAlertHeader(Messages.getMessage("SURVEY_SCHEDULE_DELETE_ALERT")).then(($header) => {
                    if ($header.is(':visible')) {
                        cy.log("Alert header is visible");
                    } else {
                        const msg = "Alert header not visible in delete dialog";
                        cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                    }
                });
                this.elements.cancelButton().scrollIntoView({ ensureScrollable: false }).then(($cancel) => {
                    if ($cancel.is(':visible')) {
                        cy.log("Cancel button is visible");
                    } else {
                        const msg = "Cancel button not visible in delete dialog";
                        cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                    }
                });
                this.elements.oKButton().scrollIntoView({ ensureScrollable: false }).then(($okBtn) => {
                    if ($okBtn.is(':visible')) {
                        cy.wrap($okBtn).click({ force: true });
                        cy.log("Clicked OK button to confirm delete");
                    } else {
                        const msg = "OK button not visible in delete dialog";
                        cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                    }
                });
            });
        } else {
            const msg = "Delete dialogue box not visible";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
    cy.log("Completed delete files process");
}

previewTabClick() {
  cy.log("Clicking Preview tab");
  this.elements.previewTab({ timeout: 90000 }).then($el => {
    if ($el && $el.length > 0 && $el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log("Preview tab clicked successfully");
    } else {
      const errorMsg = "Failed: Preview tab not visible";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

uploadFilePreview(fileName) {
    this.elements.selectFileLabel().scrollIntoView({ ensureScrollable: false }).then($label => {
        if ($label.is(':visible')) {
            cy.wrap($label).click({ force: true });
            cy.log("Select File label clicked");
            this.elements.hiddenFileInput().scrollIntoView({ ensureScrollable: false }).then($input => {
                if ($input.length) {
                    cy.wrap($input).attachFile(fileName, { force: true });
                    cy.log(`File ${fileName} attached`);
                    const el = $input[0];
                    el.dispatchEvent(new Event('focus', { bubbles: true }));
                    el.dispatchEvent(new Event('input', { bubbles: true }));
                    el.dispatchEvent(new Event('change', { bubbles: true }));
                    el.dispatchEvent(new Event('blur', { bubbles: true }));
                    cy.log("Dispatched focus/input/change/blur events");
                    cy.wait(500);
                    cy.log("Waited 500ms after file upload");
                } else {
                    const msg = "Hidden file input not found, cannot attach file";
                    cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                }
            });
        } else {
            const msg = "Select File label not visible, cannot click";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
}

verifyAndSendForReviewSurveyList() {
    this.elements.sendForReviewButton().scrollIntoView({ ensureScrollable: false }).then($btn => {
        if ($btn.is(':visible')) {
            cy.wrap($btn).click({ force: true });
            cy.log("Send For Review button clicked");
        } else {
            const msg = "Send For Review button not visible, cannot click";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
    this.elements.container().scrollIntoView({ ensureScrollable: false }).then($container => {
        if ($container.is(':visible')) {
            cy.log("Confirmation container is visible");
        } else {
            const msg = "Confirmation container not visible";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
    this.elements.container().scrollIntoView({ ensureScrollable: false }).then($container => {
        if ($container.text().includes('Send For Review') && 
            $container.text().includes('Are you sure you want to send this survey for review?')) {
            cy.log("Confirmation text verified");
        } else {
            const msg = "Confirmation text missing or incorrect";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
    this.elements.continueEditingButton().scrollIntoView({ ensureScrollable: false }).then($btn => {
        if ($btn.is(':visible')) {
            cy.log("Continue Editing button visible");
        } else {
            const msg = "Continue Editing button not visible";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
    this.elements.sendButton().scrollIntoView({ ensureScrollable: false }).then($btn => {
        if ($btn.is(':visible')) {
            cy.wrap($btn).click({ force: true });
            cy.log("Send button clicked successfully");
        } else {
            const msg = "Send button not visible, cannot click";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
}

verifyToastMessageSurveyList() {
    const expected = Messages.getMessage("SURVEY_LIST_SUCCESS");
    this.elements.surveyListMessageToast().scrollIntoView({ ensureScrollable: false }).then($el => {
        if ($el.length && $el.is(':visible')) {
            const actual = $el.text().trim();
            if (actual === expected) {
                cy.log(`  Toast message matched: "${actual}"`);
                console.log(`Toast message matched: "${actual}"`);
            } else {
                const msg = ` Toast message mismatch | Expected: "${expected}" | Actual: "${actual}"`;
                cy.log(msg).then(() => { console.error(msg); });
            }
            expect(actual).to.equal(expected);
        } else {
            const msg = ` Toast element not visible or not found`;
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
}

verifySurveyListAlertMaxFileSize() {
    cy.log("Checking Max File Size alert visibility and text");
    this.elements.surveyListAlertMaxFileSize().scrollIntoView({ ensureScrollable: false }).then($el => {
        if ($el.length && $el.is(':visible')) {
            const actualText = $el.text().trim();
            const expectedText = Messages.getMessage("SURVEY_LIST_FILE_MAX_SIZE");
            if (actualText === expectedText) {
                cy.log(`  Max File Size alert verified: "${actualText}"`);
                console.log(`Max File Size alert verified: "${actualText}"`);
            } else {
                const msg = `Max File Size alert mismatch | Expected: "${expectedText}" | Actual: "${actualText}"`;
                cy.log(msg).then(() => { console.error(msg); });
            }
            expect(actualText).to.equal(expectedText);
        } else {
            const msg = `Max File Size alert element not visible or not found`;
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
}

verifyQuestion1AsteriskInPreview() {
    cy.log("Verifying asterisk symbol on Question 1 in preview");
    this.elements.question1TabPreview().scrollIntoView({ ensureScrollable: false }).then($tab => {
        if ($tab.length && $tab.is(':visible')) {
            cy.wrap($tab)
                .scrollIntoView({ ensureScrollable: false })
                .within(() => {
                    cy.get('span').then($spans => {
                        const hasAsterisk = [...$spans].some(span => span.innerText.includes('*'));
                        if (hasAsterisk) {
                            cy.log('Asterisk symbol visible on Question in preview');
                            console.log('Asterisk verified in preview');
                        } else {
                            const msg = 'Asterisk is missing on Question in preview';
                            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                        }
                    });
                });
        } else {
            const msg = 'Question 1 preview tab not visible';
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
}

captureRatingNumbers() {
    cy.log("Capturing rating numbers from survey question");
    cy.get(this.elements.sdRating().selector, { timeout: this.elements.sdRating().timeout })
      .should('be.visible')
      .then($els => {
          let numbers = [];
          if ($els.find(this.elements.sdRatingSmiley().selector).length) {
              numbers = Array.from($els.find(this.elements.sdRatingSmileySvgTitle().selector))
                             .map(el => el.textContent.trim());
              cy.log(`Detected smiley ratings: ${numbers.join(', ')}`);
          } else if ($els.find(this.elements.sdRatingStar().selector).length) {
              numbers = Array.from($els.find(this.elements.sdRatingStarSvgTitle().selector))
                             .map(el => el.textContent.trim())
                             .filter(Boolean);
              numbers = [...new Set(numbers)];
              cy.log(`Detected star ratings: ${numbers.join(', ')}`);
          } else if ($els.find(this.elements.sdRatingFixedSize().selector).length) {
              numbers = Array.from($els.find(this.elements.sdRatingFixedSize().selector))
                             .map(el => el.querySelector('svg title') ? el.querySelector('svg title').textContent.trim() : el.textContent.trim())
                             .filter(Boolean);
              numbers = [...new Set(numbers)];
              cy.log(`Detected fixed size ratings: ${numbers.join(', ')}`);
          } else if ($els.find(this.elements.sdRatingTextLabel().selector).length) {
              numbers = Array.from($els.find(this.elements.sdRatingTextLabel().selector))
                             .map(el => el.textContent.trim())
                             .filter(Boolean);
              cy.log(`Detected text label ratings: ${numbers.join(', ')}`);
          } else {
              const msg = "No rating numbers found for this survey question";
              cy.log(msg).then(() => { 
                  console.error(msg); 
                  throw new Error(msg); 
              });
          }
          cy.wrap(numbers).as('expectedRatingNumbers');
          cy.log("Rating numbers captured successfully");
      });
}

verifyRatingNumbersInReview() {
    cy.log("Verifying captured rating numbers in review");
    cy.get('@expectedRatingNumbers').then(expectedNumbers => {
        cy.get(this.elements.sdRating().selector, { timeout: this.elements.sdRating().timeout })
          .should('exist')
          .should('be.visible')
          .then($rating => {
              let itemSelector = '';
              if ($rating.find(this.elements.sdRatingSmiley().selector).length) {
                  itemSelector = this.elements.sdRatingSmiley().selector;
                  cy.log("Smiley rating detected");
              } else if ($rating.find(this.elements.sdRatingStar().selector).length) {
                  itemSelector = this.elements.sdRatingStar().selector;
                  cy.log("Star rating detected");
              } else if ($rating.find(this.elements.sdRatingFixedSize().selector).length) {
                  itemSelector = this.elements.sdRatingFixedSize().selector;
                  cy.log("Fixed Size rating detected");
              } else if ($rating.find(this.elements.sdRatingTextLabel().selector).length) {
                  itemSelector = this.elements.sdRatingTextLabel().selector;
                  cy.log("Text Label rating detected");
              } else {
                  const msg = "No rating numbers found in review";
                  cy.log(msg).then(() => { 
                      console.error(msg); 
                      throw new Error(msg); 
                  });
              }
              cy.get(`${this.elements.sdRating().selector} ${itemSelector}`, { timeout: 15000 })
                .should('have.length.at.least', 1)
                .then($labels => {
                    const actualNumbers = Array.from($labels)
                                              .map(label => label.querySelector('svg title') 
                                                     ? label.querySelector('svg title').textContent.trim() 
                                                     : label.textContent.trim())
                                              .filter(Boolean);
                    const uniqueActualNumbers = [...new Set(actualNumbers)];

                    cy.log(`Expected Ratings: ${expectedNumbers.join(', ')}`);
                    cy.log(`Actual Ratings: ${uniqueActualNumbers.join(', ')}`);

                    if (uniqueActualNumbers.length === 0) {
                        const msg = "No rating numbers found to compare";
                        cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                    } else {
                        expect(uniqueActualNumbers, 'Mismatch between expected and actual rating numbers')
                            .to.deep.equal(expectedNumbers);
                        cy.log("  Rating numbers verified successfully");
                    }
                });
          });
    });
}

decreaseItemRatingButton() {
    cy.log("Clicking on Decrease Item Rating button");
    this.elements.removeItemRatingButton({ timeout: 20000 })
        .then($btn => {
            if ($btn.length && $btn.is(':visible')) {
                cy.wrap($btn)
                    .click({ force: true })
                    .then(() => {
                        cy.log("  Decrease Item Rating button clicked successfully");
                        console.log("Decrease Item Rating button clicked successfully");
                    });
            } else {
                const msg = "Decrease Item Rating button not visible or not found";
                cy.log(msg).then(() => { 
                    console.error(msg); 
                    throw new Error(msg); 
                });
            }
        });
}

  selectQuestionTypeSubOptionsSurveyAdd(mainType, subType) {
    cy.log(`Hovering over Question Type dropdown`);
    this.elements.selectQuestionTypeDropdown().realHover({ position: 'center' });
    cy.log(`Clicking on Question Type dropdown button`);
    this.elements.questionTypeDropdownButton().should('be.visible').click();
    cy.log(`Hovering on main type: "${mainType}"`);
    this.elements.mainTypeListItem(mainType).should('be.visible').realHover({ position: 'center' });
    cy.log(`Looking for sub-option: "${subType}"`);
    this.elements.popupContainer({ timeout: 30000 }).should('exist').then(($containers) => {
        let found = false;
        cy.wrap($containers).each(($popup) => {
            if ($popup.is(':visible')) {
                cy.wrap($popup).find('.sv-list__item-body').contains(subType, { matchCase: false }).then(($el) => {
                    if ($el.length > 0) {
                        cy.wrap($el).click({ force: true });
                        found = true;
                        cy.log(`Sub-option "${subType}" clicked successfully`);
                    }
                });
            }
        }).then(() => {
            if (!found) {
                cy.log(` Sub-option "${subType}" not found after selecting "${mainType}"`);
                throw new Error(`Sub-option "${subType}" not found after selecting "${mainType}"`);
            }
        });
    });
}

verifyRequiredResponseAlert() {
    const expected = Messages.getMessage("SURVEY_LIST_REQUIRED_ALERT");
    this.elements.completeButton().scrollIntoView({ ensureScrollable: false }).then($el => {
        if ($el.is(':visible')) {
            cy.wrap($el).click({ force: true });
            cy.log("Clicked Complete button");
            console.log("Clicked Complete button");
        } else {
            const msg = "Complete button not visible, cannot click";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
    this.elements.responseRequiredErrorAlert({ timeout: 30000 }).then($el => {
        if ($el.is(':visible')) {
            const actual = $el.text().trim();
            if (actual.includes(expected)) {
                cy.log(`Alert message matched: ${actual}`);
                console.log(`Alert message matched: ${actual}`);
            } else {
                const msg = `Alert message mismatch | Expected: ${expected} | Actual: ${actual}`;
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
            }
        } else {
            const msg = "Response required alert not visible";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
}

verifyRatingButtonsDisplayedInPreview() {
    cy.log("START: Verifying rating buttons are displayed");
    this.elements.ratingContainer().scrollIntoView({ ensureScrollable: false }).then($container => {
        if ($container.is(':visible')) {
            cy.log("Rating container is visible");
            console.log("Rating container is visible");
            this.elements.ratingFixedButtons().then($buttons => {
                if ($buttons.length > 1) {
                    $buttons.each((i, btn) => {
                        cy.log(`Rating button ${i + 1} is visible`);
                        console.log(`Rating button ${i + 1} is visible`);
                    });
                } else {
                    const msg = "Rating buttons not found or less than 2";
                    cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                }
            });
        } else {
            const msg = "Rating container not visible";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
    cy.log("END: verifyRatingButtonsDisplayedInPreview");
}

  verifyRatingDropdownOptionsInPreview() {
    this.elements.ratingDropdownContainer().should('be.visible')
      .within(() => {
        this.elements.ratingDropdownTrigger().should('exist').and('be.visible').click({ force: true }).should('have.attr', 'aria-expanded', 'true');
        this.elements.ratingDropdownOptions().should('have.length.greaterThan', 0)
          .then(($options) => {
            const dropdownOptions = [...$options].map((el) => el.innerText.trim());
            cy.log(`Found ${dropdownOptions.length} dropdown options:`);
            dropdownOptions.forEach((opt, i) => {
              cy.log(`Option ${i + 1}: ${opt}`);
            });
          });
      });
  }

verifyLabelDisplayedInReview() {
    cy.log("START: Verifying label rating buttons in review");
    this.elements.sdRatings().scrollIntoView({ ensureScrollable: false }).then($ratingArea => {
        if ($ratingArea.is(':visible')) {
            cy.log("Rating area is visible");
            console.log("Rating area is visible");
            this.elements.sdRatingLabelSizes({ timeout: 30000 }).then($labels => {
                if ($labels.length >= 1) {
                    $labels.each((index, label) => {
                        cy.log(`Label rating button ${index + 1} is visible`);
                        console.log(`Label rating button ${index + 1} is visible`);
                    });
                } else {
                    const msg = "No label rating buttons found";
                    cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                }
            });
        } else {
            const msg = "Rating area not visible";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
    cy.log("END: verifyLabelDisplayedInReview");
}

verifySmileyRatingDisplayedInReview() {
    cy.log("START: Verifying smiley rating icons in review");
    this.elements.sdRatings().scrollIntoView({ ensureScrollable: false }).then($ratingArea => {
        if ($ratingArea.is(':visible')) {
            cy.log("Rating container is visible");
            console.log("Rating container is visible");
            this.elements.sdRatingSmileys({ timeout: 30000 }).then($smileys => {
                if ($smileys.length >= 1) {
                    $smileys.each((index, smiley) => {
                        cy.log(`Smiley icon ${index + 1} is visible`);
                        console.log(`Smiley icon ${index + 1} is visible`);
                    });
                } else {
                    const msg = "No smiley rating icons found";
                    cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                }
            });
        } else {
            const msg = "Rating container not visible";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
    cy.log("END: verifySmileyRatingDisplayedInReview");
}

verifyStarRatingDisplayedInReview() {
    cy.log("START: Verifying star rating icons in review");
    this.elements.sdRatings().scrollIntoView({ ensureScrollable: false }).then($ratingArea => {
        if ($ratingArea.is(':visible')) {
            cy.log("Rating container is visible");
            console.log("Rating container is visible");
            this.elements.sdRatingStars({ timeout: 30000 }).then($stars => {
                if ($stars.length >= 1) {
                    $stars.each((index, star) => {
                        cy.log(`Star icon ${index + 1} is visible`);
                        console.log(`Star icon ${index + 1} is visible`);
                    });
                } else {
                    const msg = "No star rating icons found";
                    cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                }
            });
        } else {
            const msg = "Rating container not visible";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
    cy.log("END: verifyStarRatingDisplayedInReview");
}

addingItemRankingButton() {
    cy.log("START: Clicking add item ranking button");
    this.elements.addingItemRankingButton({ timeout: 30000 }).then($btn => {
        if ($btn.is(':visible')) {
            cy.wrap($btn).click({ force: true });
            cy.log("Clicked adding item ranking button successfully");
            console.log("Clicked adding item ranking button successfully");
        } else {
            const msg = "Adding item ranking button not visible, cannot click";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
    cy.log("END: addingItemRankingButton");
}

captureRankingNumbers() {
    cy.log("START: Capturing ranking numbers")
    this.elements.sdRankingContainer().scrollIntoView({ ensureScrollable: false }).then($container => {
        if ($container.is(':visible')) {
            cy.log("Ranking container is visible")
            this.elements.sdRankingItemWrapper({ timeout: 30000 }).then($items => {
                if ($items.length >= 1) {
                    cy.log(`${$items.length} ranking items found`)
                    this.elements.sdRankingRemoveButton({ timeout: 30000 }).then($titles => {
                        const selected = Array.from($titles)
                            .filter(title => title.textContent.trim() === 'Click to remove the item...')
                            .map((_, index) => `Item ${index + 1}`)
                        cy.wrap(selected).as('expectedRankingNumbers')
                        cy.log(`${selected.length} item(s) captured for ranking`)
                    })
                } else {
                    const msg = "No ranking items found"
                    cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
                }
            })
        } else {
            const msg = "Ranking container not visible"
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
        }
    })
    cy.log("END: captureRankingNumbers")
}

verifyRankingNumbers() {
    cy.log("START: Verifying ranking numbers in review")
    this.elements.sdRankingReviewContainer().scrollIntoView({ ensureScrollable: false }).then($container => {
        if ($container.is(':visible')) {
            cy.get('@expectedRankingNumbers').then(expectedNumbers => {
                this.elements.sdRankingItemsInReview().then($items => {
                    if ($items.length >= 1) {
                        const actualNumbers = Array.from($items).map(el => el.textContent.trim())
                        cy.log(`Expected: ${expectedNumbers.join(', ')}`)
                        cy.log(`Actual: ${actualNumbers.join(', ')}`)
                        expect(actualNumbers).to.deep.equal(expectedNumbers)
                        cy.log("Ranking numbers verified successfully")
                    } else {
                        const msg = "No ranking items found in review"
                        cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
                    }
                })
            })
        } else {
            const msg = "Ranking review container not visible"
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
        }
    })
    cy.log("END: verifyRankingNumbers")
}

addingItemCheckboxButton() {
    cy.log("START: Clicking adding item checkbox button")
    this.elements.addingItemCheckboxButton({ timeout: 30000 }).then($btn => {
        if ($btn.is(':visible')) {
            cy.wrap($btn).click({ force: true })
            cy.log("Clicked adding item checkbox button successfully")
        } else {
            const msg = "Adding item checkbox button not visible, cannot click"
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
        }
    })
    cy.log("END: addingItemCheckboxButton")
}

captureCheckboxNumbers() {
    cy.log("START: Capturing checkbox numbers")
    this.elements.sdCheckboxContainer().scrollIntoView({ ensureScrollable: false }).then($container => {
        if ($container.is(':visible')) {
            this.elements.sdCheckboxItemWrapper({ timeout: 30000 }).then($items => {
                if ($items.length >= 1) {
                    this.elements.sdCheckboxRemoveButton({ timeout: 30000 }).then($titles => {
                        const selected = Array.from($titles)
                            .filter(title => title.textContent.trim() === 'Click to remove the item...')
                            .map((_, index) => `Item ${index + 1}`)
                        cy.wrap(selected).as('expectedCheckboxNumbers')
                        cy.log(`${selected.length} checkbox item(s) captured`)
                    })
                } else {
                    const msg = "No checkbox items found"
                    cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
                }
            })
        } else {
            const msg = "Checkbox container not visible"
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
        }
    })
    cy.log("END: captureCheckboxNumbers")
}

captureCheckboxNumbersItemsNames() {
    cy.log("START: Capturing and updating checkbox item names")
    this.elements.sdCheckboxContainer().scrollIntoView({ ensureScrollable: false }).then($container => {
        if ($container.is(':visible')) {
            const enteredTexts = []
            this.elements.itemValueWrappers().each(($wrapper, index) => {
                const $editable = $wrapper.find('.sv-string-editor[contenteditable="true"]')
                if ($editable.length > 0) {
                    const randomText = faker.string.alpha({ length: 5, casing: 'upper' })
                    cy.wrap($editable).click().clear({ force: true }).type(randomText, { force: true })
                    enteredTexts.push(randomText)
                    cy.log(`Entered text for Item ${index + 1}: ${randomText}`)
                }
            }).then(() => {
                cy.wrap(enteredTexts).as('enteredCheckboxTexts')
                cy.log(`${enteredTexts.length} items updated successfully`)
            })
        } else {
            const msg = "Checkbox container not visible"
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
        }
    })
    cy.log("END: captureCheckboxNumbersItemsNames")
}

addingItemRadioButton() {
    cy.log("START: Clicking adding item radio button")
    this.elements.addingItemRadioButton({ timeout: 30000 }).then($btn => {
        if ($btn.is(':visible')) {
            cy.wrap($btn).click({ force: true })
            cy.log("Clicked adding item radio button successfully")
        } else {
            const msg = "Adding item radio button not visible, cannot click"
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
        }
    })
    cy.log("END: addingItemRadioButton")
}

captureCheckboxNumbersItemsNames2() {
    cy.log("START: Capturing checkbox item names for Question 2")
    this.elements.questionByDataName().should('be.visible').within(() => {
        this.elements.itemValueWrappers().then($wrappers => {
            if ($wrappers.length === 0) {
                const msg = "No editable checkbox items found for Question 2"
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
            } else {
                const enteredTexts = []
                $wrappers.each((index, wrapper) => {
                    const $editable = wrapper.querySelector('.sv-string-editor[contenteditable="true"]')
                    if ($editable) {
                        const randomText = faker.string.alpha({ length: 5, casing: 'upper' })
                        cy.wrap($editable).click({ force: true }).clear({ force: true }).type(randomText, { force: true })
                        enteredTexts.push(randomText)
                        cy.log(`Entered text for Question 2 - Item ${index + 1}: ${randomText}`)
                    }
                })
                cy.wrap(enteredTexts).as('enteredCheckboxTexts_Q2')
                cy.log(`Total ${enteredTexts.length} items updated for Question 2`)
            }
        })
    })
}

verifyCheckboxNumbers() {
    cy.log("START: Verifying checkbox numbers in review")
    cy.get('@expectedCheckboxNumbers').then(expectedNumbers => {
        this.elements.sdCheckboxItemsInReview().then($items => {
            if ($items.length === 0) {
                const msg = "No checkbox items found in review"
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
            } else {
                const actualNumbers = Array.from($items).map(el => el.textContent.trim())
                cy.log(`Expected Checkbox Numbers: ${expectedNumbers.join(', ')}`)
                cy.log(`Actual Checkbox Numbers: ${actualNumbers.join(', ')}`)
                expect(actualNumbers, 'Mismatch between expected and actual checkbox items').to.deep.equal(expectedNumbers)
            }
        })
    })
}

addingItemDropdown() {
    cy.log("START: Clicking adding item dropdown button")
    this.elements.addingItemDropdown({ timeout: 30000 }).then($btn => {
        if ($btn.is(':visible')) {
            cy.wrap($btn).click({ force: true })
            cy.log("Clicked adding item dropdown button successfully")
        } else {
            const msg = "Adding item dropdown button not visible, cannot click"
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
        }
    })
}

verifyCheckboxNumbersAscending() {
    cy.log("START: Verifying checkbox numbers ascending")

    this.elements.sdCheckboxReviewContainer().scrollIntoView({ ensureScrollable: false }).then($container => {
        if ($container.is(':visible')) cy.log("Checkbox review container visible")
        else {
            const msg = "Checkbox review container not visible"
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
        }
    })
    cy.get('@enteredCheckboxTexts').then(enteredTexts => {
        if (!enteredTexts || enteredTexts.length === 0) {
            const msg = "No entered checkbox texts found for verification"
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
        }
        cy.log(`Entered Checkbox Texts: ${enteredTexts.join(', ')}`)
        const expectedSortedTexts = [...enteredTexts].sort((a, b) => a.localeCompare(b))
        cy.log(`Expected Sorted (Ascending): ${expectedSortedTexts.join(', ')}`)

        this.elements.sdCheckboxItemsInReview().then($items => {
            if ($items.length === 0) {
                const msg = "No checkbox items found in review"
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
            }

            const actualTexts = Array.from($items).map(el => el.textContent.trim()).filter(Boolean)
            cy.log(`Actual Checkbox Texts in Review: ${actualTexts.join(', ')}`)

            if (JSON.stringify(actualTexts) === JSON.stringify(expectedSortedTexts)) cy.log("Checkbox numbers verified in ascending order")
            else {
                const msg = "Checkbox numbers are not in ascending order"
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
            }
        })
    })
}

verifyCheckboxNumbersDescending() {
    cy.log("START: Verifying checkbox numbers descending")
    this.elements.sdCheckboxReviewContainer().scrollIntoView({ ensureScrollable: false }).then($container => {
        if ($container.is(':visible')) cy.log("Checkbox review container visible")
        else {
            const msg = "Checkbox review container not visible"
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
        }
    })
    cy.get('@enteredCheckboxTexts').then(enteredTexts => {
        if (!enteredTexts || enteredTexts.length === 0) {
            const msg = "No entered checkbox texts found for verification"
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
        }
        cy.log(`Entered Checkbox Texts: ${enteredTexts.join(', ')}`)
        const expectedSortedTexts = [...enteredTexts].sort((a, b) => b.localeCompare(a))
        cy.log(`Expected Sorted (Descending): ${expectedSortedTexts.join(', ')}`)

        this.elements.sdCheckboxItemsInReview().then($items => {
            if ($items.length === 0) {
                const msg = "No checkbox items found in review"
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
            }
            const actualTexts = Array.from($items).map(el => el.textContent.trim()).filter(Boolean)
            cy.log(`Actual Checkbox Texts in Review: ${actualTexts.join(', ')}`)
            if (JSON.stringify(actualTexts) === JSON.stringify(expectedSortedTexts)) cy.log("Checkbox numbers verified in descending order")
            else {
                const msg = "Checkbox numbers are not in descending order"
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg) })
            }
        })
    })
}

  selectDropdownOptionUnderSection(sectionName, fieldName, dropdownValue) {
    this.elements.showPanelIcon().then(($icon) => {
      if ($icon.length > 0) {
        this.elements.showPanelButton().should('be.visible').click({ force: true });
        cy.wait(800);
      }
    });
    cy.get('body').then(($body) => {
      const rawSelector = this.elements.fieldLabelRawWithContains(fieldName);
      if ($body.find(rawSelector).length === 0) {
        this.elements.sectionTitle(sectionName).scrollIntoView({ ensureScrollable: false }).click({ force: true });
        cy.wait(800);
      }
    });

    this.elements.fieldLabelByName(fieldName)
      .scrollIntoView({ ensureScrollable: false, timeout: 30000 })
      .should('be.visible');
    this.elements.dropdownInputByField(fieldName).should('exist').scrollIntoView({ ensureScrollable: false }).click({ force: true });
    cy.wait(600);
    cy.get('body').then(($body) => {
      const isHidden = $body.find('.sv-popup.spg-dropdown-popup[style*="display: none"]').length > 0;
      if (isHidden) {
        this.elements.dropdownInputByField(fieldName).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      }
    });
    this.elements.popupListContainer().should('be.visible').within(() => {
      this.elements.popupListItemByValue(dropdownValue).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true });
    });
    this.elements.selectedDropdownText(fieldName).invoke('text').then((text) => {
      if (text.trim() !== dropdownValue) {
        this.elements.selectedListItem().should('contain.text', dropdownValue);
      }
    });
    const verifySelection = () => {
      this.elements.filterText(fieldName).invoke('text').then((text) => {
        if (text.trim() !== dropdownValue) {
          this.elements.selectedDropdownItem().should('contain.text', dropdownValue);
        }
      });
    };
    verifySelection();
  }

inputAcceptForCheckboxOption(optionLabel) {
    cy.log(`  Accept input for checkbox option "${optionLabel}"`);
    this.elements.itemValueWrapperByOption(optionLabel).as('targetOptionWrapper');
    this.elements.removeButtonInsideOptionWrapper('@targetOptionWrapper').then($btn => {
        if ($btn.length) {
            cy.log("  Remove button checked/processed");
            console.log("Remove button checked/processed");
        } else {
            const msg = `Remove button not found for option "${optionLabel}"`;
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
    const randomInputText = faker.string.alpha(5);
    cy.wrap(randomInputText).as('expectedItemText');
    this.elements.editableInputInsideOptionWrapper('@targetOptionWrapper').then($input => {
        if ($input.length) {
            cy.wrap($input).clear({ force: true }).type(randomInputText, { delay: 100, force: true });
            cy.log(`  Typed input: ${randomInputText}`);
            console.log(`Typed input: ${randomInputText}`);
        } else {
            const msg = `Editable input not found for option "${optionLabel}"`;
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });

    this.elements.editableInputInsideOptionWrapper('@targetOptionWrapper')
        .invoke('text')
        .then(text => {
            if (text === randomInputText) {
                cy.log(`  Verified input equals: ${randomInputText}`);
                console.log(`Verified input equals: ${randomInputText}`);
            } else {
                const msg = `Input value mismatch for option "${optionLabel}"`;
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
            }
        });
}

verifyCheckboxInPreview() {
    cy.log("  Verifying checkbox value in preview");
    cy.get('@expectedItemText').then(expectedText => {
        this.elements.checkboxItemContainer();
        this.elements.checkboxLabelByText(expectedText).then($el => {
            if ($el.length) {
                cy.log(`  Verified: Other value "${expectedText}" is displayed in Preview`);
                console.log(`Verified: Other value "${expectedText}" is displayed in Preview`);
            } else {
                const msg = `Checkbox value "${expectedText}" not found in Preview`;
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
            }
        });
    });
}

verifyDropdownOptionsMatchesExpected() {
    cy.log("  Verifying dropdown options match expected values");
    this.elements.sdDropdownInput().scrollIntoView({ ensureScrollable: false }).first().then($input => {
        if ($input.length) {
            cy.wrap($input).scrollIntoView().click({ force: true });
            cy.wrap($input).scrollIntoView().click({ force: true });
            cy.log("  Dropdown opened");
            console.log("Dropdown opened");
        } else {
            const msg = "Dropdown input not found";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
    cy.wait(600);
    this.elements.svPopupBodyContent().last().should('be.visible').within(() => {
        cy.get('ul.sv-list').find('span.sv-string-viewer').then($options => {
            const actualOptions = [...$options].map(el => el.innerText.trim());
            cy.log(`Actual dropdown options: ${JSON.stringify(actualOptions)}`);
            cy.get('@enteredCheckboxTexts').then(expectedOptions => {
                if (expectedOptions.every(opt => actualOptions.includes(opt))) {
                    cy.log("  Dropdown options successfully matched expected values");
                    console.log("Dropdown options successfully matched expected values");
                } else {
                    const msg = "Dropdown options do not match expected values";
                    cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                }
            });
        });
    });
}

verifyYesNoToggle() {
    cy.log("  Verifying Yes/No toggle");
    this.elements.sdQuestionContainer().should('be.visible');
    this.elements.sdYesNoLabels().then($labels => {
        const labelsText = $labels.text();
        const condition = labelsText.includes('Yes') && labelsText.includes('No');
        if (!condition) {
            const msg = "Yes/No labels not found";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        } else {
            cy.log("  Yes/No labels are visible");
            console.log("Yes/No labels are visible");
        }
    });
    this.elements.sdToggleSwitch().scrollIntoView({ ensureScrollable: false }).then($switch => {
        if ($switch.is(':visible')) {
            this.elements.sdToggleInput().should('exist').click({ force: true }).should('be.checked');
            cy.log("  Toggle switched to checked");
            console.log("Toggle switched to checked");
        } else {
            this.elements.sdBooleanButtons().should('exist').and('have.length.at.least', 2);
            cy.log("  Boolean buttons visible");
            console.log("Boolean buttons visible");
        }
    });
}

captureWrapTextCombineItemsNames() {
    cy.log("  Capturing and updating wrap text combine items names");
    this.elements.sdCheckboxContainer().should('be.visible');
    const enteredTexts = [];
    this.elements.itemValueWrappers().each(($wrapper, index) => {
        this.elements.itemRemoveIcon().its('length').then(len => {
            if (len > 0) {
                const $editable = $wrapper.find('.sv-string-editor[contenteditable="true"]');
                if ($editable.length > 0) {
                    const randomText = Array.from({ length: 15 })
                        .map(() => faker.string.alpha({ length: 4, casing: 'upper' }))
                        .join(' ');
                    cy.wrap($editable).click({ force: true }).clear({ force: true }).type(randomText, { force: true });
                    enteredTexts.push(randomText);
                    cy.log(`  Entered text for Item ${index + 1}: ${randomText}`);
                    console.log(`Entered text for Item ${index + 1}: ${randomText}`);
                }
            }
        });
    }).then(() => {
        if (enteredTexts.length === 0) {
            const msg = "No editable wrap text combine items found";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        } else {
            cy.log(`  Total ${enteredTexts.length} items updated`);
            console.log("Entered texts:", enteredTexts);
            cy.wrap(enteredTexts).as('wrapTextCombineTexts');
        }
    });
}

verifyWrapTextCombineItemsNames() {
    cy.log("START: Verifying wrap text combined items in dropdown");
    cy.then(() => {
        this.elements.sdDropdownInput().first().scrollIntoView().click({ force: true });
        cy.log("Dropdown opened");
        cy.wait(600);
        cy.get('body').then($body => {
            if ($body.find('div.sv-popup__body-content:visible').length === 0) {
                cy.log('Reopening dropdown...');
                this.elements.sdDropdownInput().first().click({ force: true }).then(() => cy.log("Dropdown reopened"));
            }
        });
        this.elements.svPopupBodyContent().last().should('be.visible').within(() => {
            this.elements.svList().should('be.visible').find('span.sv-string-viewer').should('exist').then($options => {
                const actualOptions = [...$options].map(el => el.innerText.trim());
                cy.log(`Actual dropdown options: ${JSON.stringify(actualOptions)}`);
                cy.get('@wrapTextCombineTexts').then(expectedOptions => {
                    cy.log(`Expected options: ${JSON.stringify(expectedOptions)}`);
                    expect(actualOptions).to.include.members(expectedOptions);
                    cy.log('Dropdown options successfully matched expected values');
                    cy.wrap($options).each($el => {
                        const ws = getComputedStyle($el[0]).whiteSpace;
                        const h = $el[0].clientHeight;
                        if (ws !== 'nowrap' || h > 25) {
                            cy.log(`Wrapped correctly: "${$el.text().slice(0, 40)}..."`);
                        } else {
                            const msg = `Not wrapped: "${$el.text().slice(0, 40)}..."`;
                            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                        }
                    });
                });
            });
        });
    });
}

verifyQuestion1() {
    cy.log("Verifying Question 1 text");
    cy.get('@enteredQuestion1').then(expectedQuestion => {
        this.elements.question1PlaceholderVerify().should('be.visible').invoke('text').then(actualText => {
                const trimmedActual = actualText.trim();
                const trimmedExpected = expectedQuestion.trim();
                if (trimmedActual === trimmedExpected) {
                    cy.log(`Verified Question 1 text matches: "${trimmedActual}"`);
                    console.log(`Verified Question 1 text matches: "${trimmedActual}"`);
                } else {
                    const msg = `FAILED: Expected "${trimmedExpected}" but found "${trimmedActual}"`;
                    cy.log(msg);
                    console.error(msg);
                    throw new Error(msg);
                }
            });
    });
}

verifyColourQuestion() {
    cy.log("START: Verifying colour input for question");
    this.elements.colorSelector().should('be.visible').should('have.attr', 'type', 'color').invoke('val').then(colorValue => {
            cy.log(`Extracted color value: ${colorValue}`);
            console.log(`Extracted color value: ${colorValue}`);
            const validHex = /^#[0-9A-Fa-f]{6}$/;
            if (colorValue && validHex.test(colorValue)) {
                cy.log("Colour input verified successfully");
                console.log("Colour input verified successfully");
            } else {
                const msg = `FAILED: Invalid color value: "${colorValue}"`;
                cy.log(msg);
                console.error(msg);
                throw new Error(msg);
            }
        });
}

verifyPreviewColour() {
    cy.log("START: Verifying colour preview input");
    this.elements.colorSelector().should('exist').should('be.visible').should('have.attr', 'type', 'color').invoke('val').then(colorValue => {
            cy.log(`Extracted preview color value: ${colorValue}`);
            console.log(`Extracted preview color value: ${colorValue}`);
            const validHex = /^#[0-9A-Fa-f]{6}$/;
            if (colorValue && validHex.test(colorValue)) {
                cy.log("Preview colour value verified");
                console.log("Preview colour value verified");
                this.elements.colorSelector().click({ force: true });
                cy.log("Clicked preview color selector");
            } else {
                const msg = `FAILED: Invalid preview color value: "${colorValue}"`;
                cy.log(msg);
                console.error(msg);
                throw new Error(msg);
            }
        });
}

enterTextUnderSection(sectionName, fieldName) {
    cy.log(`START: Entering text under field "${fieldName}" in section "${sectionName}"`);

    cy.then(() => {
        this.elements.showPanelButton().should('be.visible').click({ force: true }).then(() => cy.log("Panel expanded"));
        this.elements.fieldLabel(fieldName).scrollIntoView({ ensureScrollable: false }).should('exist').then($field => {
            if (!$field.is(':visible')) {
                cy.log(`Field "${fieldName}" not visible, expanding section "${sectionName}"`);
                this.elements.sectionHeaderTitle(sectionName).scrollIntoView({ ensureScrollable: false }).click({ force: true }).then(() => cy.log(`Section "${sectionName}" expanded`));
            }
        });
        this.elements.fieldTextarea(fieldName).should('exist').then($textarea => {
            const randomDescription = `Description - ${faker.lorem.sentence()}`;
            cy.log(`Generated random description: ${randomDescription}`);
            cy.wrap($textarea).scrollIntoView({ ensureScrollable: false }).clear({ force: true }).type(randomDescription, { force: true }).should('have.value', randomDescription).then(() => {
                cy.log(`Text entered successfully in "${fieldName}"`);
                cy.wrap(randomDescription).as('expectedDescription');
            });
            this.elements.fieldTextarea(fieldName).should('have.value', randomDescription).then(() => {
                cy.log(`  Successfully entered text in "${fieldName}" in section "${sectionName}"`);
            }).then(() => {
                cy.wrap($textarea).then($el => {
                    if ($el.val() === randomDescription) {
                        cy.log(`  Successfully entered text in "${fieldName}"`);
                    } else {
                        const msg = `Failed to enter text under field "${fieldName}" in section "${sectionName}"`;
                        cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                    }
                });
            });
        });
    });
}

verifyDescriptionText() {
    cy.log("START: Verifying description text");
    cy.get('@expectedDescription').then(expectedDescription => {
        cy.log(`Expected description: "${expectedDescription}"`);
        this.elements.surveyQuestionDescription({ timeout: 15000 })
            .should('exist').scrollIntoView({ ensureScrollable: false }).should('be.visible')
            .then($el => {
                const actualText = $el.text().trim();
                cy.log(`Actual description: "${actualText}"`);
                if (actualText === expectedDescription) {
                    cy.log(`Description matches expected: "${actualText}"`);
                } else {
                    const msg = `Description mismatch: Expected = "${expectedDescription}", Actual = "${actualText}"`;
                    cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                }
                expect(actualText).to.eq(expectedDescription);
            });
    });
}


verifyDescriptionTextPreview() {
    cy.log("START: Verifying description text in Preview");

    cy.get('@expectedDescription').then(expectedDescription => {
        this.elements.questionDescriptionPreview()
            .should('be.visible', { timeout: 15000 })
            .then($el => {
                const actualText = $el.text().trim();
                cy.log(`Expected: "${expectedDescription}", Actual: "${actualText}"`);

                if (actualText !== expectedDescription) {
                    const msg = `Description preview mismatch: Expected = "${expectedDescription}", Actual = "${actualText}"`;
                    cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                }

                cy.log(`Description preview matches expected: "${actualText}"`);
                expect(actualText).to.eq(expectedDescription);
            });
    });

    cy.log("END: verifyDescriptionTextPreview");
}

addingRadioButton() {
    cy.wrap(null).then(() => {
        cy.log("START: Adding radio button");

        this.elements.addingRadioButton({ timeout: 30000 })
            .then($el => {
                if ($el.is(':visible')) {
                    cy.wrap($el).click({ force: true });
                    cy.log('  Radio button added');
                    console.log('Radio button added');
                } else {
                    const msg = "Radio button not visible, cannot click";
                    cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                }
            });

        cy.log("END: addingRadioButton");
    });
}

addNewChoice() {
    cy.log("START: Adding new choice");
    
    this.elements.showPanelButton().scrollIntoView({ ensureScrollable: false }).then($el => {
        if ($el.is(':visible')) {
            cy.wrap($el).click({ force: true });
            cy.log("Panel expanded");
        } else {
            const msg = "Panel button not visible";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });

    cy.get('tbody').scrollIntoView({ ensureScrollable: false }).then(() => {
        this.elements.tableRows().then($rowsBefore => {
            const initialCount = $rowsBefore.length;

            this.elements.addButton().scrollIntoView({ ensureScrollable: false }).then($btn => {
                if ($btn.is(':visible')) {
                    cy.wrap($btn).click({ force: true });
                    cy.wait(2000);

                    this.elements.tableRows().should('have.length', initialCount + 1).then(() => {
                        const addButtonText = faker.string.alpha({ length: 5 });
                        cy.get('tbody tr.spg-table__row').last().scrollIntoView({ ensureScrollable: false })
                            .find('input[aria-label*="column Value"]').type(addButtonText, { force: true });
                        cy.wrap(addButtonText).as('addButtonText').then(() => cy.log(`  Added new choice: ${addButtonText}`));
                    });
                } else {
                    const msg = "Add button not visible, cannot click";
                    cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                }
            });
        });
    });

    cy.log("END: addNewChoice");
}

verifyRadioButtonOptions() {
    cy.log("START: Verifying radio button options");

    this.elements.designerTab().then($el => {
        if ($el.is(':visible')) {
            cy.wrap($el).click({ force: true });
            cy.log(` Designer tab vidible and clicked `);
            cy.get('@addButtonText').then(addedText => {
                this.elements.radioButtonOptions().then($options => {
                    const optionsText = $options.text();
                    if (optionsText.includes(addedText)) {
                        cy.log(`  Radio button option verified: ${addedText}`);
                    } else {
                        const msg = `Radio button option "${addedText}" not found in options`;
                        cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                    }
                });
            });
        } else {
            const msg = "Designer tab not visible";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });

    cy.log("END: verifyRadioButtonOptions");
}

verifyRadioButtonOptionsPreview() {
    cy.log("START: Verifying radio button options in Preview");

    cy.get('@addButtonText').then(addedText => {
        this.elements.radioButtonOptionsPreview().then($options => {
            const optionsText = $options.text();
            if (optionsText.includes(addedText)) {
                cy.log(`  Radio button option preview verified: ${addedText}`);
            } else {
                const msg = `Radio button option preview "${addedText}" not found`;
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
            }
        });
    });
}

verifyCheckboxNumbersRandom() {
    cy.log("  START: Verifying checkbox numbers in Random order");

    this.elements.sdCheckboxReviewContainer().then($el => {
        if ($el.is(':visible')) {
            cy.log("  Checkbox review container visible");
        } else {
            const msg = "Checkbox review container not visible";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });

    cy.get('@enteredCheckboxTexts').then(enteredTexts => {
        cy.log(`Entered Checkbox Texts (Random): ${enteredTexts.join(', ')}`);

        this.elements.sdCheckboxItemsInReview()
            .should('exist')
            .and('have.length', enteredTexts.length)
            .then($items => {
                const actualTexts = [...$items].map(el => el.textContent.trim()).filter(Boolean);
                cy.log(`Actual Checkbox Texts in Review: ${actualTexts.join(', ')}`);
                if (actualTexts.sort().toString() === [...enteredTexts].sort().toString()) {
                    cy.log("  Checkbox numbers successfully verified in Random order");
                } else {
                    const msg = "Checkbox numbers do not match the entered texts in random order";
                    cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                }
            });
    });
}

verifyCheckboxInPreviewOfCopyingQuestion() {
    cy.log("  START: Verifying checkbox preview for copied question");
    this.elements.sdCheckboxReviewContainer2().scrollIntoView({ ensureScrollable: false }).then($el => {
        if ($el.is(':visible')) {
            cy.log("  Checkbox review container for copied question visible");
        } else {
            const msg = "Checkbox review container for copied question not visible";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });

    cy.get('@enteredCheckboxTexts').then(enteredTexts => {
        this.elements.sdCheckboxItemsInReviewQuestion2()
            .should('exist')
            .then($items => {
                const actualTexts = [...$items].map(el => el.textContent.trim()).filter(Boolean);
                cy.log(`Entered: ${enteredTexts.join(', ')}, Preview: ${actualTexts.join(', ')}`);
                let allMatched = true;
                enteredTexts.forEach(text => {
                    if (!actualTexts.some(a => a.includes(text))) {
                        allMatched = false;
                        const msg = `Expected preview to include: "${text}" but not found.`;
                        cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                    }
                });

                if (allMatched) {
                    cy.log("  Verified: Checkbox In Preview Of Copying Question");
                }
            });
    });
}

verifyCheckboxNumbersUnchanged() {
    cy.log("  START: Verifying checkbox numbers are unchanged");

    this.elements.sdCheckboxReviewContainer().then($el => {
        if ($el.is(':visible')) {
            cy.log("  Checkbox review container visible");
        } else {
            const msg = "  Checkbox review container not visible";
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });

    cy.get('@enteredCheckboxTexts').then(enteredTexts => {
        cy.log(`Entered Checkbox Texts: ${enteredTexts.join(', ')}`);

        this.elements.sdCheckboxItemsInReview()
            .should('exist')
            .and('have.length.at.least', 1)
            .then($items => {
                const actualTexts = Array.from($items).map(el => el.textContent.trim()).filter(Boolean);
                cy.log(`Actual Checkbox Texts in Review: ${actualTexts.join(', ')}`);
                if (actualTexts.toString() === enteredTexts.toString()) {
                    cy.log("  Checkbox numbers verified unchanged");
                } else {
                    const msg = "  Checkbox numbers have changed";
                    cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                }
            });
    });
}

  clickRadioOptionUnderSection(sectionName, fieldName, optionText) {
    cy.log(`Selecting "${optionText}" for field "${fieldName}" under section "${sectionName}"`);
    this.elements.showPanelIcon().then(($icon) => {
      if ($icon.length > 0) {
        this.elements.showPanelButton().should('be.visible').click({ force: true });
        cy.wait(800);
      }
    });
    cy.get('body').then(($body) => {
      const rawSelector = this.elements.fieldLabelRawWithContains(fieldName);
      if ($body.find(rawSelector).length === 0) {
        this.elements.sectionTitle(sectionName).scrollIntoView({ ensureScrollable: false }).click({ force: true });
        cy.wait(800);
      }
    });
    this.elements.radioOptionByText(fieldName, optionText).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true });
    cy.log(`Selected radio option: "${optionText}"`);
  }

verifyInnerIndentPreview(indentLevel) {
  cy.log("Starting verifyInnerIndentPreview");

  const level = parseInt(indentLevel);
  const expectedPadding = `${level * 20}px`;
  const requirePadding = level > 0;

  cy.log(`Indent level: ${level}`);
  cy.log(`Expected padding: ${requirePadding ? expectedPadding : "No padding"}`);

  this.elements.allQuestionElements().each(($el, index) => {
    const styleAttr = $el.attr('style') || '';
    cy.log(`Checking question ${index + 1}`);
    cy.log(`Found styles: "${styleAttr}"`);
    if (requirePadding) {
      const expected = `${this.indentStyleVariable}: ${expectedPadding}`;
      if (!styleAttr.includes(expected)) {
        const errorMsg = `Error: Expected padding "${expectedPadding}" was not applied on question ${index + 1}`;
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
      cy.log(`Padding applied correctly: ${expectedPadding}`);
    } else {
      if (styleAttr.includes(this.indentStyleVariable)) {
        const errorMsg = `Error: Padding was applied on question ${index + 1} when indent level is 0`;
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
      cy.log("No padding applied as expected for indent level 0");
    }
  });
}

verifyQuestionBoxStateCollapsed() {
    cy.log("Verifying that the question box is collapsed");
    this.elements.questionBoxExpandIcon().then($el => {
        if ($el.is(':visible')) {
            cy.log("Question box is collapsed (expand icon visible)");
            console.log("Question box is collapsed (expand icon visible)");
        } else {
            const msg = "Question box is not collapsed (expand icon is not visible)";
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
    });
}

verifyOptionsVisible() {
    cy.log("Verifying checkbox options visibility");
    this.elements.sdCheckboxItemsInReview().should('exist').then(($options) => {
        const count = $options.length;
        cy.log(`Found ${count} checkbox option(s)`);
        if (count > 0) {
            cy.wrap($options).each(($option, index) => {
                cy.log(`Checking visibility of Option ${index + 1}`);
                if ($option.is(':visible')) {
                    cy.log(`Option ${index + 1} is visible`);
                } else {
                    const msg = `Option ${index + 1} is NOT visible`;
                    cy.log(msg);
                    console.error(msg);
                    throw new Error(msg);
                }
            });
        } else {
            const msg = "No checkbox options found!";
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
        cy.log("Completed verifying checkbox options visibility");
    });
}

clickHidePanelButton() {
    cy.log("Clicking Hide Panel button");
    this.elements.hidePanelButton({ timeout: 30000 }).should('be.visible').then(($btn) => {
        if ($btn.length > 0) {
            cy.wrap($btn).click({ force: true });
            cy.log("Hide panel button clicked");
            console.log("Hide panel button clicked");
        } else {
            const msg = "Hide panel button is not visible";
            cy.log(msg); console.error(msg); throw new Error(msg);
        }
    });
}

verifyDescriptionTextPreviewOfUnderTheInputField() {
    cy.log("Verifying description text preview under the input field");
    cy.get('@expectedDescription').then(expectedDescription => {
        this.elements.questionDescriptionUnderInputFieldPreview()
            .scrollIntoView({ ensureScrollable: false })
            .should('exist')
            .invoke('text')
            .then(actualText => {
                const trimmedText = actualText.trim();
                if (trimmedText === expectedDescription) {
                    cy.log(`Verified description preview under input field: "${trimmedText}"`);
                    console.log(`Verified description preview under input field: "${trimmedText}"`);
                } else {
                    const msg = `Description preview under input field does not match. Expected: "${expectedDescription}", but got: "${trimmedText}"`;
                    cy.log(msg);
                    console.error(msg);
                    throw new Error(msg);
                }
            });
    });
}

question1NotVisible() {
  cy.log("Checking that Page 1 Question 1 is NOT visible");

  cy.document().then(doc => {
    const el = doc.querySelector('div[data-name="question1"]');

    if (!el) {
      cy.log("Page 1 Question 1 is not visible in preview");
      console.log("Page 1 Question 1 is not visible in preview");
    } else {
      const errorMsg = "Page 1 Question 1 IS VISIBLE (Expected NOT visible)";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

enterRandomTextUnderSection(sectionName, fieldName) {
    cy.log(`Entering random text under "${fieldName}" in section "${sectionName}"`);
    this.elements.showPanelIcon().scrollIntoView({ ensureScrollable: false }).then($icon => {
        if ($icon.length) {
            this.elements.showPanelButton().should('be.visible').click({ force: true });
            cy.wait(800);
            cy.log("Show panel button clicked");
        } else { 
            cy.log("Show panel icon not found, skipping panel opening");
        }
    });
    cy.get('body').then($body => {
        const selector = this.elements.fieldLabelRawWithContains(fieldName);
        if ($body.find(selector).length === 0) { 
            this.elements.sectionTitle(sectionName)
                .scrollIntoView({ ensureScrollable: false })
                .click({ force: true });
            cy.wait(800);
            cy.log("Section clicked to display field");
        } else { 
            cy.log(`Field "${fieldName}" is already visible.`);
        }
    });
    this.elements.fieldTextarea(fieldName)
        .should('exist')
        .then($textarea => {
            if ($textarea.length) { 
                const randomDescription = `Description - ${faker.lorem.sentence()}`;
                cy.wrap($textarea)
                    .scrollIntoView({ ensureScrollable: false })
                    .clear({ force: true })
                    .type(randomDescription, { force: true })
                    .should('have.value', randomDescription)
                    .then(() => {
                        cy.wrap(randomDescription).as('expectedDescription');
                        cy.log(`  Entered random description: "${randomDescription}"`);
                    });
            } else { 
                const msg = `  Textarea for field "${fieldName}" not found`;
                cy.log(msg);
                console.error(msg);
                throw new Error(msg);
            }
        });
}

verifyDescriptionTextOfUnderTheInputField() {
    cy.get('@expectedDescription').then(expectedDescription => {
        this.elements.questionDescriptionUnderInputField({ timeout: 15000 }).should('exist')
        .scrollIntoView({ ensureScrollable: false }).should('be.visible').invoke('text').then(actualText => {
                const trimmedText = actualText.trim();
                if (trimmedText === expectedDescription) {
                    cy.log(`Verified description under input field: "${trimmedText}"`);
                    console.log(`Verified description under input field: "${trimmedText}"`);
                } else {
                    const msg = `Description text mismatch. Expected: "${expectedDescription}", Found: "${trimmedText}"`;
                    cy.log(msg);
                    console.error(msg);
                    throw new Error(msg);
                }
            });

    });
}

verifyInnerIndent(indentLevel) {
    cy.log(`Verifying inner indent level: ${indentLevel}`);
    this.elements.selectedQuestionElement()
        .invoke('attr', 'style')
        .then(styleValue => {
            if (styleValue) { 
                cy.log('Style attribute:', styleValue);
                const match = styleValue.match(new RegExp(`${this.indentStyleVariable}:\\s*(\\d+)px`));
                if (match) { 
                    const actualIndent = parseInt(match[1]);
                    const expectedIndent = indentLevel * 20;

                    if (actualIndent === expectedIndent) {
                        cy.log(`  Indent verified: expected = ${expectedIndent}px, actual = ${actualIndent}px`);
                    } else { 
                        const msg = `  Indent mismatch: expected ${expectedIndent}px but got ${actualIndent}px`;
                        cy.log(msg);
                        console.error(msg);
                        throw new Error(msg);
                    }
                } else { 
                    const msg = `  Indent style attribute not found in style: ${styleValue}`;
                    cy.log(msg);
                    console.error(msg);
                    throw new Error(msg);
                }
            } else { 
                const msg = "  'style' attribute not found on selected question element.";
                cy.log(msg);
                console.error(msg);
                throw new Error(msg);
            }
        });
}

enterRandomPercentageUnderSection(sectionName, fieldName) {
    cy.log(`Entering random percentage under "${fieldName}" in section "${sectionName}"`);
    this.elements.showPanelIcon().then($icon => {
        if ($icon.length) {
            this.elements.showPanelButton().should('be.visible').click({ force: true });
            cy.wait(800);
        }
    });
    cy.get('body').then($body => {
        const selector = this.elements.fieldLabelRawWithContains(fieldName);
        if ($body.find(selector).length === 0) {
            this.elements.sectionTitle(sectionName)
                .scrollIntoView({ ensureScrollable: false })
                .click({ force: true });
            cy.wait(800);
        }
    });
    this.elements.fieldInputNearLabel_New(fieldName)
        .should('exist')
        .then($input => {
            if ($input.length) {
                const randomPercentage = `${faker.number.int({ min: 1, max: 100 })}%`;
                cy.wrap($input)
                    .scrollIntoView({ offset: { top: -100, left: 0 } })
                    .clear({ force: true })
                    .type(randomPercentage, { force: true })
                    .should('have.value', randomPercentage);
                cy.wrap(randomPercentage).as('enteredPercentage');
                cy.log(`Entered random percentage: ${randomPercentage}`);
            } else {
                const msg = `Failed to find input field for "${fieldName}"`;
                cy.log(msg);
                console.error(msg);
                throw new Error(msg);
            }
        });
}

verifyQuestionWidth() {
    cy.get('@enteredPercentage').then(enteredPercentage => {
        const expectedValue = enteredPercentage.replace('%', '').trim();
        cy.log(`Verifying question width: expected = ${expectedValue}%`);
        this.elements.questionContainer()
            .should('be.visible')
            .invoke('attr', 'style')
            .then(styleValue => {
                if (styleValue) {
                    const regex = /max-width:\s*([\d.]+)%/;
                    const match = styleValue.match(regex);
                    if (match && match[1]) {
                        const actualWidth = match[1].trim();
                        cy.log(`Actual max-width value: ${actualWidth}%`);
                        expect(actualWidth).to.eq(expectedValue);
                        cy.log('Question width verified successfully');
                    } else {
                        const msg = `max-width not found in style attribute: ${styleValue}`;
                        cy.log(msg);
                        console.error(msg);
                        throw new Error(msg);
                    }
                } else {
                    const msg = `Style attribute not found on question container`;
                    cy.log(msg);
                    console.error(msg);
                    throw new Error(msg);
                }
            });
    });
}

verifyEnteredPercentageInPreview() {
    cy.get('@enteredPercentage').then(expectedPercentage => {
        cy.log(`Verifying entered percentage in Preview: ${expectedPercentage}`);
        this.elements.questionContainer()
            .should('be.visible')
            .invoke('attr', 'style')
            .then(styleAttr => {
                if (styleAttr) {
                    cy.log(`Preview question style: ${styleAttr}`);
                    expect(styleAttr).to.include(`max-width: ${expectedPercentage}`);
                    cy.log('Entered percentage in preview verified successfully');
                } else {
                    const msg = 'Preview style attribute not found';
                    cy.log(msg);
                    console.error(msg);
                    throw new Error(msg);
                }
            });
    });
}

verifyColumnCount(expectedCount) {
    cy.log(`Verifying column count: ${expectedCount}`);
    this.elements.columnContainer().should('exist').within(() => {
        this.elements.columnByCount(expectedCount)
            .should('exist')
            .then($cols => {
                if ($cols.length === Number(expectedCount)) {
                    cy.log(`Column count verified: ${$cols.length}`);
                } else {
                    const msg = `Column count mismatch: expected ${expectedCount}, found ${$cols.length}`;
                    cy.log(msg);
                    console.error(msg);
                    throw new Error(msg);
                }
            });
    });
}

verifyPreviewColumnCount(expectedCount) {
    cy.log(`Verifying column count in Preview: ${expectedCount}`);
    this.elements.previewQuestionContainer().should('exist').within(() => {
        this.elements.previewColumnByCount(expectedCount)
            .should('exist')
            .then($cols => {
                if ($cols.length === Number(expectedCount)) {
                    cy.log('Preview column count verified successfully');
                } else {
                    const msg = `Preview column count mismatch: expected ${expectedCount}, found ${$cols.length}`;
                    cy.log(msg);
                    console.error(msg);
                    throw new Error(msg);
                }
            });
    });
}

deleteAllImages() {
    cy.log('Deleting all images');
    this.elements.imageDeleteButtons().then($buttons => {
        const total = $buttons.length;
        if (total > 0) {
            cy.log(`Found ${total} images to delete`);
            for (let i = 0; i < total; i++) {
                this.elements.imageDeleteButtons().first().click({ force: true });
                cy.wait(500);
            }
            cy.log('All images deleted');
        } else {
            const msg = 'No images found to delete';
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
    });
}

uploadImageForPicker(fileName) {
    cy.log(`Uploading image: ${fileName}`);
    this.elements.selectFileLabel1().should('be.visible').click({ force: true });
    this.elements.hiddenFileInput1().should('exist').then($input => {
        if ($input.length) {
            cy.wrap($input).attachFile(fileName, { force: true });
            const el = $input[0];
            ['focus', 'input', 'change', 'blur'].forEach(evt =>
                el.dispatchEvent(new Event(evt, { bubbles: true }))
            );
            cy.wait(1000);
            cy.log(`Uploaded image: ${fileName}`);
        } else {
            const msg = `Failed to find hidden file input for image upload`;
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
    });
}

verifyPreviewImageCount(expectedCount) {
    cy.log(`Verifying ${expectedCount} preview image(s) are visible`);

    this.elements.previewImages().then($images => {
        const actualCount = $images.length;

        if (actualCount === expectedCount) {
            cy.log(`  Verified ${actualCount} preview image(s) are visible`);
            $images.each((i, img) => {
                cy.wrap(img).should('be.visible');
            });
        } else {
            const msg = `  Failed to verify preview images. Expected: ${expectedCount}, Found: ${actualCount}`;
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
    });
}


verifyPreviewVideoCount(expectedCount) {
    cy.log(`Verifying ${expectedCount} preview video(s) are visible`);
    cy.wait(5000);
    this.elements.previewVideo({ timeout: 90000 }).scrollIntoView({ ensureScrollable: false }).then($videos => {
        const actualCount = $videos.length;

        if (actualCount === expectedCount) {
            cy.log(`  Verified ${actualCount} preview video(s) are visible`);
            $videos.each((i, video) => {
                cy.wrap(video).should('be.visible');
            });

        } else {
            const msg = `  Failed to verify preview videos. Expected: ${expectedCount}, Found: ${actualCount}`;
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
    });
}


enterTextInPlaceholderEmail(label) {
    cy.log(`Entering random email text in placeholder: ${label}`);

    this.elements.placeholderInputField(label).then($input => {

        if ($input.length > 0 && $input.is(':visible')) {
            const randomText = `text_${Cypress._.random(1000, 9999)}`;

            cy.wrap($input).clear({ force: true }).type(randomText, { force: true });

            this.elements.inputFieldByLabelEmail()
                .should('be.visible')
                .clear({ force: true })
                .type(randomText, { force: true });

            cy.wrap(randomText).as('enteredText');
            cy.log(`  Entered random email text: ${randomText}`);

        } else {
            const msg = `  Failed to enter email text in placeholder: ${label}`;
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }

    });
}

enterTextInPlaceholderPassword(label) {
    cy.log(`Entering random password text in placeholder: ${label}`);

    this.elements.placeholderInputField(label).then($input => {
        if ($input.length > 0 && $input.is(':visible')) {
            const randomText = `text_${Cypress._.random(1000, 9999)}`;

            cy.wrap($input).clear({ force: true }).type(randomText, { force: true });

            this.elements.inputFieldByLabelPassword()
                .should('be.visible')
                .clear({ force: true })
                .type(randomText, { force: true });

            cy.wrap(randomText).as('enteredText');
            cy.log(`  Entered random password text: ${randomText}`);
        } else {
            const msg = `  Failed to enter password text in placeholder: ${label}`;
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
    });
}


verifyInputValueEmail(label) {
    cy.get('@enteredText').then(enteredText => {
        this.elements.inputFieldByLabelEmail()
            .should('exist')
            .scrollIntoView()
            .then($input => {
                if ($input.val() === enteredText) {
                    cy.log(`Verified email input value matches entered text: ${enteredText}`);
                } else {
                    const msg = `Email input value does not match entered text. Expected: ${enteredText}, but got: ${$input.val()}`;
                    cy.log(msg);
                    console.error(msg);
                    throw new Error(msg);
                }
            });
    });
}

verifyInputValueEmailPreview() {
  cy.get('@enteredText').then(expectedEmail => {
    this.elements.previewEmailInput().then($input => {
      if ($input && $input.length > 0 && $input.is(':visible')) {

        const placeholder = $input.attr('placeholder');
        cy.log(`Current placeholder: ${placeholder}`);

        const randomEmail = faker.internet.email('emailedited');

        cy.wrap($input)
          .clear({ force: true })
          .type(randomEmail, { force: true });

        cy.wrap(randomEmail).as('enteredEmail');
        cy.log(`Entered email in preview: ${randomEmail}`);
        console.log(`Entered email in preview: ${randomEmail}`);

      } else {
        const errorMsg = 'Failed to enter email in preview input';
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    });
  });
}

enterMinMaxValues(minValue, maxValue) {
    cy.log(`Entering min value: ${minValue}, max value: ${maxValue}`);
    this.elements.minimumInputSelector()
        .clear({ force: true })
        .type(`${minValue}`, { force: true })
        .should('have.value', `${minValue}`);
    this.elements.maximumInputSelector()
        .clear({ force: true })
        .type(`${maxValue}`, { force: true })
        .should('have.value', `${maxValue}`);
    cy.log(`Entered min/max values: min=${minValue}, max=${maxValue}`);
}

verifyInputValueNumberPreview(numberValue) {
    cy.log(`Verifying entered number in preview: ${numberValue}`);
    this.elements.previewNumberInput().then($input => {
        if ($input.length > 0 && $input.is(':visible')) {
            const placeholder = $input.attr('placeholder');
            cy.log(`Current placeholder: ${placeholder}`);
            cy.wrap($input).clear({ force: true }).type(numberValue, { force: true });
            cy.wrap(numberValue).as('enteredNumber');
            cy.log(`Entered number in preview: ${numberValue}`);
        } else {
            const msg = `Failed to enter number in preview: ${numberValue}`;
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
    });
}

verifyRequiredResponseNumberValueAlert() {
    cy.log('Verifying required number alert is displayed');
    this.elements.completeButton().should('be.visible').click({ force: true });

    this.elements.responseRequiredErrorPlaceHolder({ timeout: 30000 }).then($el => {
        if ($el.length > 0 && $el.is(':visible') && $el.text().includes(Messages.getMessage("SURVEY_ADD_REQUIRED_NUMBER_ALERT"))) {
            cy.log('  Verified required number alert is displayed');
        } else {
            const msg = '  Failed to verify required number alert';
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
    });
}

verifyCompleteSurveyMessage() {
    const expected = Messages.getMessage("SURVEY_COMPLETE_MESSAGE");
    this.elements.completeButton().scrollIntoView({ ensureScrollable: false })
        .should('be.visible')
        .click({ force: true });

    this.elements.surveyCompleteMessage({ timeout: 30000 }).then($el => {
        const actual = $el.text().trim();
        if (actual.includes(expected)) {
            cy.log(`  Complete Survey Message matched: ${actual}`);
        } else {
            const msg = `  Not matched | Expected: ${expected} | Actual: ${actual}`;
            cy.log(msg);
            console.error(msg);
            throw new Error(`Complete Survey Message mismatch`);
        }
        expect(actual).to.include(expected);
    });
}

verifyInputValuePassword(label) {
    this.elements.inputFieldByLabelPassword().should('exist').scrollIntoView().then($input => {
        cy.get('@enteredText').then(enteredText => {
            if ($input.val() === enteredText) {
                cy.log(`  Verified password input matches entered text`);
            } else {
                const msg = `  Password input value mismatch. Expected: ${enteredText}, but got: ${$input.val()}`;
                cy.log(msg);
                console.error(msg);
                throw new Error(msg);
            }
        });
    });
}

verifyInputValuePasswordPreview() {
    this.elements.previewPasswordInput().should('be.visible').then($input => {
        if ($input.length > 0 && $input.is(':visible')) {
            cy.wrap($input).clear({ force: true });
            const randomPassword = faker.internet.password(10, false, /[A-Za-z0-9]/, 'pwdEdited');
            cy.wrap($input).type(randomPassword, { force: true });
            cy.wrap(randomPassword).as('enteredPassword');
            cy.wrap($input).should('have.attr', 'type', 'password');
            cy.log('  Entered password in preview (encrypted display)');
        } else {
            const msg = '  Failed to enter/verify password in preview';
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
    });
}

enterTextInPlaceholderPhoneNumber(label) {
    this.elements.placeholderInputField(label).then($input => {
        if ($input.length > 0 && $input.is(':visible')) {
            const randomPhone = `${Cypress._.random(1000000000, 9999999999)}`;
            cy.wrap($input).clear({ force: true }).type(randomPhone, { force: true });
            this.elements.inputFieldByLabelPhoneNumber()
                .should('be.visible')
                .clear({ force: true })
                .type(randomPhone, { force: true });
            cy.wrap(randomPhone).as('enteredText');
            cy.log(`  Entered phone number: ${randomPhone}`);
        } else {
            const msg = `  Failed to enter phone number for label: ${label}`;
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
    });
}

verifyInputValuePhoneNumber(label) {
    this.elements.inputFieldByLabelPhoneNumber().should('exist').scrollIntoView().then($input => {
        cy.get('@enteredText').then(enteredText => {
            if ($input.val() === enteredText) {
                cy.log(`  Verified phone number input matches entered text`);
            } else {
                const msg = `  Phone number input value mismatch. Expected: ${enteredText}, but got: ${$input.val()}`;
                cy.log(msg);
                console.error(msg);
                throw new Error(msg);
            }
        });
    });
}

verifyInputValuePhoneNumberPreview() {
    this.elements.previewPhoneNumberInput().then($input => {
        if ($input.length > 0 && $input.is(':visible')) {
            cy.wrap($input).clear({ force: true });
            const randomPhone = `${Math.floor(1000000000 + Math.random() * 9000000000)}`;
            cy.wrap($input).type(randomPhone, { force: true });
            cy.wrap(randomPhone).as('enteredPhoneNumber');
            cy.wrap($input).invoke('val').then(val => {
                if (/^\d{10}$/.test(val)) {
                    cy.log(`  Entered phone number in preview: ${val}`);
                } else {
                    const msg = `  Phone number format is invalid. Expected 10 digits, but got: ${val}`;
                    cy.log(msg);
                    console.error(msg);
                    throw new Error(msg);
                }
            });
        } else {
            const msg = '  Failed to verify phone number in preview';
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
    });
}

enterTextInPlaceholderText(label) {
    this.elements.placeholderInputField(label).then($input => {
        if ($input.length > 0 && $input.is(':visible')) {
            const randomText = `text_${Cypress._.random(1000, 9999)}`;
            cy.wrap($input).clear({ force: true }).type(randomText, { force: true });
            this.elements.inputFieldByLabelText()
                .should('be.visible')
                .clear({ force: true })
                .type(randomText, { force: true });
            cy.wrap(randomText).as('enteredText');
            cy.log(`  Entered text: ${randomText}`);
        } else {
            const msg = `  Failed to enter text for label: ${label}`;
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
    });
}

verifyInputValueText(label) {
    this.elements.inputFieldByLabelText().then($input => {
        cy.get('@enteredText').then(enteredText => {
            if ($input.val() === enteredText) {
                cy.log(`  Verified text input matches entered text`);
            } else {
                const msg = `  Text input value mismatch. Expected: ${enteredText}, but got: ${$input.val()}`;
                cy.log(msg);
                console.error(msg);
                throw new Error(msg);
            }
        });
    });
}

verifyInputValueTextPreview() {
    this.elements.previewTextInput().then($input => {
        if ($input.length > 0 && $input.is(':visible')) {
            cy.wrap($input).clear({ force: true });
            const randomText = faker.internet.email('emailedited');
            cy.wrap($input).type(randomText, { force: true });
            cy.wrap(randomText).as('enteredTexts');
            cy.log(`  Entered text in preview: ${randomText}`);
        } else {
            const msg = '  Failed to verify text input in preview';
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
    });
}

enterTextInPlaceholderURL(label) {
    this.elements.placeholderInputField(label).then($input => {
        if ($input.length > 0 && $input.is(':visible')) {
            const randomUrl = faker.internet.url();
            cy.wrap($input).clear({ force: true }).type(randomUrl, { force: true });
            this.elements.inputFieldByLabelURL()
                .should('be.visible')
                .clear({ force: true })
                .type(randomUrl, { force: true });
            cy.wrap(randomUrl).as('enteredText');
            cy.log(`  Entered URL: ${randomUrl}`);
        } else {
            const msg = `  Failed to enter URL for label: ${label}`;
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
    });
}

verifyInputValueURL(label) {
    this.elements.inputFieldByLabelURL().then($input => {
        cy.get('@enteredText').then(enteredText => {
            if ($input.val() === enteredText) {
                cy.log(`  Verified URL input matches entered URL`);
            } else {
                const msg = `  URL input value mismatch. Expected: ${enteredText}, but got: ${$input.val()}`;
                cy.log(msg);
                console.error(msg);
                throw new Error(msg);
            }
        });
    });
}

verifyInputValueURLPreview() {
    this.elements.previewURLInput().then($input => {
        if ($input.length > 0 && $input.is(':visible')) {
            cy.wrap($input).clear({ force: true });
            const randomUrl = faker.internet.url();
            cy.wrap($input).type(randomUrl, { force: true });
            cy.wrap(randomUrl).as('enteredUrl');
            cy.wrap($input).invoke('val').then(val => {
                if (/^https?:\/\/[^\s$.?#].[^\s]*$/.test(val)) {
                    cy.log(`  Entered URL in preview: ${val}`);
                } else {
                    const msg = `  URL format is invalid. Expected valid URL, but got: ${val}`;
                    cy.log(msg);
                    console.error(msg);
                    throw new Error(msg);
                }
            });
        } else {
            const msg = '  Failed to verify URL input in preview';
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        }
    });
}

selectMinAndMaxWeeks(minWeek, maxWeek) {
    this.elements.minWeekInput()
        .then($input => {

            if ($input && $input.length > 0) {
                cy.wrap($input)
                    .should('be.visible')
                    .clear({ force: true })
                    .type(minWeek, { force: true });
                this.elements.maxWeekInput().then($max => {
                    if ($max && $max.length > 0) {
                        cy.wrap($max)
                            .should('be.visible')
                            .clear({ force: true })
                            .type(maxWeek, { force: true });
                        cy.log(`  Selected min week: ${minWeek}, max week: ${maxWeek}`);
                    } else {
                        const msg = `  Failed to select max week: ${maxWeek}`;
                        cy.log(msg);
                        console.error(msg);
                        throw new Error(msg);
                    }
                });

            } else {
                const msg = `  Failed to select min week: ${minWeek}`;
                cy.log(msg);
                console.error(msg);
                throw new Error(msg);
            }

        });
}

verifyWeekIsDisabled(weekValue) {
  const getWeekNumber = (weekStr) => {
    const match = weekStr.match(/W(\d+)/);
    return match ? parseInt(match[1]) : null;
  };
  cy.log(`Checking if week ${weekValue} is disabled`);
  this.elements.weekInputPreview().then($input => {
    if ($input && $input.length > 0 && $input.is(':visible')) {
      cy.log("Week input found and visible");
      const min = $input.attr('min');
      const max = $input.attr('max');
      const minNum = getWeekNumber(min);
      const maxNum = getWeekNumber(max);
      const currentNum = getWeekNumber(weekValue);
      cy.log(`Week input range: ${min} - ${max}`);
      cy.log(`Setting week value to: ${weekValue}`);
      cy.wrap($input)
        .scrollIntoView({ ensureScrollable: false })
        .clear({ force: true })
        .type(weekValue, { force: true });
      cy.wrap($input).then($el => {
        const validity = $el[0].validity;
        const isInvalid = !validity.valid;
        if (currentNum < minNum || currentNum > maxNum) {
          cy.log(`Week ${weekValue} is outside allowed range`);
          expect(isInvalid, `Week ${weekValue} should be invalid`).to.be.true;
        } else {
          cy.log(`Week ${weekValue} is within allowed range`);
          expect(isInvalid, `Week ${weekValue} should be valid`).to.be.false;
        }
      });

    } else {
      const errorMsg = "Failed: Week input not found or not visible";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

selectIntermediateWeek(weekValue) {
  this.elements.weekInputPreview()
    .should('be.visible')
    .invoke('attr', 'min')
    .then(min => {
      if (min) {
        cy.log(`Min week: ${min}`);
      } else {
        const msg = `  Failed to get min week attribute`;
        cy.log(msg);
        console.error(msg);
        throw new Error(msg);
      }
    });

  this.elements.weekInputPreview()
    .invoke('attr', 'max')
    .then(max => {
      if (max) {
        cy.log(`Max week: ${max}`);
      } else {
        const msg = `  Failed to get max week attribute`;
        cy.log(msg);
        console.error(msg);
        throw new Error(msg);
      }
    });

  this.elements.weekInputPreview()
    .then($el => {
      if ($el && $el.length > 0) {
        cy.wrap($el)
          .clear({ force: true })
          .type(weekValue, { force: true })
          .should('have.value', weekValue);
        cy.log(`  Selected intermediate week: ${weekValue}`);
      } else {
        const msg = `  Failed to select intermediate week: ${weekValue}`;
        cy.log(msg);
        console.error(msg);
        throw new Error(msg);
      }
    });
}

enterLongTextQuestion() {
    const questionText = faker.lorem.paragraph();

    this.elements.questionTextEditor().then($els => {
        const match = [...$els].find(el => el.textContent.trim() === 'question1');
        const target = match ? cy.wrap(match) : this.elements.question1PlaceHolder().eq(4);

        target.scrollIntoView({ ensureScrollable: false })
            .should('be.visible')
            .click({ force: true })
            .clear({ force: true })
            .type(questionText, { force: true })
            .then(() => {
                if (target) {
                    cy.log(`  Entered long text question`);
                    console.log(`  Entered long text question`);
                } else {
                    const msg = '  Long text question input not found';
                    cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                }
            });
    });

    cy.wrap(questionText).as('enteredLongTextQuestion');
}


verifyLongTextQuestion() {
    cy.get('@enteredLongTextQuestion').then(enteredText => {
        this.elements.longTextQuestionContainer().within(() => {
            this.elements.longTextQuestionSpan()
                .should('be.visible')
                .invoke('text')
                .then(renderedText => {
                    const trimmedRendered = renderedText.replace(/\s+/g, ' ').trim();
                    const trimmedEntered = enteredText.replace(/\s+/g, ' ').trim();

                    if (trimmedRendered === trimmedEntered) {
                        cy.log('  Long text question verified successfully');
                    } else {
                        const msg = `  Mismatch! Rendered: "${trimmedRendered}", Expected: "${trimmedEntered}"`;
                        cy.log(msg);
                        console.error(msg);
                        throw new Error(msg);
                    }

                    expect(trimmedRendered).to.eq(trimmedEntered);
                });
        });
    });
}

searchLeftPanelQuestionType(questionType) {
  cy.wait(5000);
  cy.viewport(1920, 1080);
  this.elements.leftPanelSearchInput({ timeout: 30000 })
        .scrollIntoView({ ensureScrollable: false })
        .should('be.visible')
        .clear({ force: true })
        .type(questionType, { force: true });
        this.elements.leftPanelQuestionItems()
        .then($items => {
                const match = [...$items].find(el => el.textContent.trim().includes(questionType));
                if (match) {
                cy.wrap(match)
                    .scrollIntoView({ ensureScrollable: false })
                    .should('be.visible');
          cy.log(`  Question Type "${questionType}" found in Left Panel`);
            } else {
                const msg = `  Question Type "${questionType}" not found in Left Panel`;
                cy.log(msg);
                console.error(msg);
                throw new Error(msg);
            }
        });

    cy.document().then(doc => { doc.body.style.zoom = "1"; });
}

duplicateButtonClick() {
    this.elements.duplicateQuestionButton().then($buttons => {
        const btn = $buttons.eq(1);
        if (btn && btn.length > 0) {
            cy.wrap(btn)
                .scrollIntoView({ ensureScrollable: false })
                .should('be.visible')
                .click({ force: true });
            cy.log('  Clicked duplicate question button');

        } else {
            const msg = '  Failed to click duplicate question button';
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
}


verifyDuplicatedQuestionUnique() {
    cy.wait(2000);
    this.elements.allQuestionTextBoxes().should('have.length.gte', 2).then($questions => {
        const original = cy.wrap($questions[0]);
        const duplicated = cy.wrap($questions[1]);
        [original, duplicated].forEach(q => q.scrollIntoView({ ensureScrollable: false }).should('be.visible'));
        duplicated.invoke('text').then(text => {
            cy.get('@enteredQuestion1').then(expectedText => {
                if (text.trim() === expectedText) {
                    cy.log(`  Duplicated question verified: ${text.trim()}`);
                } else {
                    const msg = `  Duplicated question mismatch! Expected: ${expectedText}, Got: ${text.trim()}`;
                    cy.log(msg);
                    console.error(msg);
                    throw new Error(msg);
                }
                expect(text.trim()).to.eq(expectedText);
            });
        });
    });
}

verifyDuplicatedQuestionInPreview() {
    cy.wait(2000);
    this.elements.questionRows().should('have.length.gte', 2).then($questions => {
        const original = cy.wrap($questions[0]);
        const duplicated = cy.wrap($questions[1]);

        [original, duplicated].forEach(q => q.scrollIntoView({ ensureScrollable: false }).should('be.visible'));

        this.elements.questionText(duplicated).invoke('text').then(dupText => {
            cy.get('@enteredQuestion1').then(expectedText => {
                if (dupText.trim() === expectedText) {
                    cy.log(`  Duplicated question verified in preview: ${dupText.trim()}`);
                } else {
                    const msg = `  Duplicated question mismatch in preview! Expected: ${expectedText}, Got: ${dupText.trim()}`;
                    cy.log(msg);
                    console.error(msg);
                    throw new Error(msg);
                }
                expect(dupText.trim()).to.eq(expectedText);
            });
        });
    });
}

uncheckCheckboxUnderSection(sectionName, fieldName) {
    cy.wait(2000);
    cy.log(`Ensuring checkbox "${fieldName}" under section "${sectionName}" is unchecked`);

    this.elements.showPanelButton().should('be.visible').click({ force: true });

    this.elements.fieldLabel(fieldName)
        .scrollIntoView({ ensureScrollable: false })
        .should('exist')
        .then($field => {
            if (!$field.is(':visible')) {
                cy.log(`Field "${fieldName}" not visible, expanding section "${sectionName}"`);
                this.elements.sectionHeaderTitle(sectionName)
                    .scrollIntoView({ ensureScrollable: false })
                    .click({ force: true });
            }
        });

    this.elements.checkboxUnderField(fieldName)
        .should('exist')
        .then($checkbox => {
            if ($checkbox.prop('checked')) {
                cy.log(`Checkbox "${fieldName}" is checked, unchecking now`);
                cy.wrap($checkbox)
                    .scrollIntoView({ ensureScrollable: false })
                    .uncheck({ force: true })
                    .should('not.be.checked');
            } else {
                const msg = `  Checkbox "${fieldName}" is already unchecked`;
                cy.log(msg);
                console.error(msg);
                throw new Error(msg);
            }
        });
}

deleteQuestion2Button() {
    this.elements.deleteQuestionButton({ timeout: 30000 }).then($buttons => {
        const btn = $buttons.eq(2);
        if (btn && btn.length > 0) {
            cy.wrap(btn)
                .scrollIntoView({ ensureScrollable: false })
                .should('be.visible')
                .click({ force: true });
            cy.log('  Clicked Delete Question 2 button');
        } else {
            const msg = '  Failed to click Delete Question 2 button';
            cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
        }
    });
}

verifyQuestion2NotVisible() {
  cy.get('@enteredQuestion2').then(expectedQuestion => {
    cy.document().then(doc => {
      const $els = doc.querySelectorAll(this.question2PlaceholderVerifySelector);
      const found = Array.from($els).some(el => el.textContent.trim() === expectedQuestion);
      if (!found) {
        cy.log(`  Question "${expectedQuestion}" is successfully deleted`);
        console.log(`  Question "${expectedQuestion}" is successfully deleted`);
      } else {
        const msg = `  Question "${expectedQuestion}" is still visible`;
        cy.log(msg);
        console.error(msg);
        throw new Error(msg);
      }
    });
  });
}

editingQuestion2() {
    const titleWord = faker.word.noun();
    const updatedQuestion2 = `How do you feel about ${titleWord}?`;
    cy.get('@enteredQuestion2').then(previousQuestion2 => {
        this.elements.questionTextEditor().then($els => {
            const match = [...$els].find(el => el.textContent.trim() === previousQuestion2);
            if (!match) {
                const msg = `"${previousQuestion2}" not found in the DOM`;
                cy.log(msg);
                console.error(msg);
                throw new Error(msg);
            }
            cy.wrap(match)
                .scrollIntoView({ ensureScrollable: false })
                .should('be.visible')
                .click({ force: true })
                .clear({ force: true })
                .type(updatedQuestion2, { force: true });
            cy.wait(2000);
            cy.contains(updatedQuestion2, { timeout: 5000 }).then($found => {
                if ($found && $found.length > 0) {
                    cy.log(`  Edited question text is visible: "${updatedQuestion2}"`);
                    console.log(`  Edited question text is visible: "${updatedQuestion2}"`);
                } else {
                    const msg = `  Edited question text not visible: "${updatedQuestion2}"`;
                    console.error(msg);
                    throw new Error(msg);
                }
            });
        });
        cy.wrap(updatedQuestion2).as('editedQuestion2');
    });
}

verifyEditedQuestion2Visible() {
  cy.get('@editedQuestion2').then(expectedQuestion => {
    this.elements.question2PlaceholderVerify()
      .contains(expectedQuestion, { timeout: 10000 })
      .then($el => {
        if ($el && $el.length > 0) {
          cy.wrap($el)
            .scrollIntoView({ ensureScrollable: false })
            .should('be.visible');
          cy.log(`  Question 2: "${expectedQuestion}" is visible on the page`);
        } else {
          const msg = `  Question 2: "${expectedQuestion}" not visible on the page`;
          cy.log(msg);
          console.error(msg);
          throw new Error(msg);
        }
      });
  });
}

duplicateButtonPageClick() {
    this.elements.duplicateQuestionButton({ timeout: 30000 })
        .eq(0)
        .click({ force: true })
        .then(() => {
            cy.log('  Clicked Duplicate Page button');
        }, () => {
            const msg = '  Failed to click Duplicate Page button';
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
        });
}

verifyDuplicatedPageWithQuestionsAndType(expectedQuestionType) {
  cy.wait(2000);
  this.elements.pageContainer()
    .should('have.length.gte', 2)
    .then($pages => {
      cy.log(`Found ${$pages.length} pages after duplication`);
      cy.wrap($pages.eq(1))
        .scrollIntoView({ ensureScrollable: false })
        .should('be.visible');
    });

  cy.wait(2000);
  cy.get('@enteredQuestion1').then(questionText => {
    cy.log(`Verifying duplicated question: "${questionText}" and type: "${expectedQuestionType}"`);
    this.elements.pageContainer().eq(1).within(() => {
      this.elements.questionTitleSpan()
        .filter((i, el) => el.textContent.trim().includes(questionText))
        .first()
        .then($question => {
          if ($question && $question.length > 0) {
            cy.wrap($question)
              .scrollIntoView({ ensureScrollable: false })
              .should('be.visible')
              .click({ force: true })
              .trigger('mouseover', { force: true });
            cy.wait(1000);
            this.elements.questionTypeButton()
              .then($btn => {
                if ($btn && $btn.text().includes(expectedQuestionType)) {
                  cy.wrap($btn).should('be.visible');
                  cy.log(`  Verified question type "${expectedQuestionType}" on duplicated page`);
                } else {
                  const msg = `  Failed to verify question type "${expectedQuestionType}" on duplicated page`;
                  cy.log(msg);
                  console.error(msg);
                  throw new Error(msg);
                }
              });
          } else {
            const msg = `  Duplicated question "${questionText}" not found on page`;
            cy.log(msg);
            console.error(msg);
            throw new Error(msg);
          }
        });
    });
  });
}

selectBeyondDateTimeAndAlert(dateTimeValue) {
  cy.log("Starting selectBeyondDateTimeAndAlert");
  this.elements.dateTimeInputPreview().should('be.visible');
  cy.log("Datetime input is visible");
  this.elements.dateTimeInputPreview()
    .invoke('attr', 'min')
    .then((min) => {
      if (min) {
        cy.log(`Min datetime: ${min}`);
      } else {
        const msg = "  Failed to retrieve min datetime attribute";
        cy.log(msg);
        console.error(msg);
        throw new Error(msg);
      }
    });

  this.elements.dateTimeInputPreview()
    .invoke('attr', 'max')
    .then((max) => {
      if (max) {
        cy.log(`Max datetime: ${max}`);
      } else {
        const msg = "  Failed to retrieve max datetime attribute";
        cy.log(msg);
        console.error(msg);
        throw new Error(msg);
      }
    });

  this.elements.dateTimeInputPreview().clear({ force: true });
  cy.log("Cleared existing datetime input");

  this.elements.dateTimeInputPreview().type(dateTimeValue, { force: true });
  cy.log(`Typed datetime value: ${dateTimeValue}`);
  this.elements.dateTimeInputPreview().should('have.value', dateTimeValue);
  cy.log("Datetime value verified successfully");
  this.elements.completeButton().should('be.visible').click({ force: true });
  cy.log("Clicked complete button");
  this.elements.responseRequiredErrorAlert({ timeout: 30000 })
    .should('be.visible')
    .invoke('text')
    .then((alertText) => {
      if (alertText) {
        cy.log(`Alert text received: ${alertText}`);
        
        const regex = /(The value should not be greater than|The value should not be less than)/;
        
        if (regex.test(alertText)) {
          cy.log("Alert text validated successfully");
        } else {
          const errorMsg = "  Unexpected alert text. Validation message missing.";
          cy.log(errorMsg);
          throw new Error(errorMsg);
        }
      } else {
        const msg = "  No alert text received";
        cy.log(msg);
        console.error(msg);
        throw new Error(msg);
      }
    });

  cy.log("Completed selectBeyondDateTimeAndAlert");
}


selectMinAndMaxMonth(minMonth, maxMonth) {
  cy.log('  START: Setting Min and Max Month');
  cy.log(`STEP 1: Setting Min Month to: ${minMonth}`);
  this.elements.minMonthInput().should('be.visible').clear({ force: true }).type(minMonth, { force: true });

  this.elements.minMonthInput().then(($input) => {
    if ($input.val() === minMonth) {
      cy.log(`  Min Month set to: ${minMonth}`);
    } else {
      const errorMsg = `  Failed to set Min Month to: ${minMonth}`;
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
  cy.log(`STEP 2: Setting Max Month to: ${maxMonth}`);
  this.elements.maxMonthInput().should('be.visible').clear({ force: true }).type(maxMonth, { force: true });
  this.elements.maxMonthInput().then(($input) => {
    if ($input.val() === maxMonth) {
      cy.log(`  Max Month set to: ${maxMonth}`);
    } else {
      const errorMsg = `  Failed to set Max Month to: ${maxMonth}`;
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  cy.log('  END: selectMinAndMaxMonth');
}

selectMonthInPreview(monthValue) {
  this.elements.monthInputPreview().should('be.visible')
    .invoke('attr', 'min')
    .then((min) => {
      if (min) {
        cy.log(`Min month: ${min}`);
      } else {
        const errorMsg = '  Failed to retrieve Min month attribute';
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    });

  this.elements.monthInputPreview().invoke('attr', 'max')
    .then((max) => {
      if (max) {
        cy.log(`Max month: ${max}`);
      } else {
        const errorMsg = '  Failed to retrieve Max month attribute';
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    });
  cy.log(`Setting Month value to : ${monthValue}`);
  this.elements.monthInputPreview().clear({ force: true }).type(monthValue, { force: true });
  this.elements.monthInputPreview().should('have.value', monthValue).then(($input) => {
    if ($input.val() === monthValue) {
      cy.log(`  Month value ${monthValue} is visible in the container`);
    } else {
      const errorMsg = `  Failed to set Month value to: ${monthValue}`;
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

selectBeyondMonthAndAlert(monthValue) {
  cy.log("Checking Month input preview existence");

  this.elements.monthInputPreview().then($el => {
    if ($el && $el.length > 0 && $el.is(':visible')) {

      cy.log("Month input preview found and visible");

      cy.wrap($el).invoke('attr', 'min').then(min => cy.log(`Min month: ${min}`));
      cy.wrap($el).invoke('attr', 'max').then(max => cy.log(`Max month: ${max}`));

      cy.log(`Scrolling Month input into view`);
      cy.wrap($el).scrollIntoView({ ensureScrollable: false });

      cy.log(`Clearing Month input`);
      cy.wrap($el).clear({ force: true });

      cy.log(`Typing Month value: ${monthValue}`);
      cy.wrap($el).type(monthValue, { force: true });

      cy.log(`Verifying Month input has value: ${monthValue}`);
      cy.wrap($el).should('have.value', monthValue);

      cy.log(`Month value set successfully`);

    } else {
      const errorMsg = "Failed: Month input not found or not visible";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  cy.log("Checking Complete button existence");
  this.elements.completeButton().then($btn => {
    if ($btn && $btn.length > 0 && $btn.is(':visible')) {

      cy.log("Complete button found and visible");
      cy.log("Scrolling Complete button into view");
      cy.wrap($btn).scrollIntoView({ ensureScrollable: false });

      cy.log("Clicking Complete button");
      cy.wrap($btn).click({ force: true });
      cy.log("Complete button clicked");

    } else {
      const errorMsg = "Failed: Complete button not found or not visible";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  cy.log("Checking Response Required alert existence");
  this.elements.responseRequiredErrorAlert({ timeout: 30000 }).then($alert => {
    if ($alert && $alert.length > 0 && $alert.is(':visible')) {

      cy.log("Response Required alert is visible");
      cy.wrap($alert).invoke('text').then(alertText => {
        cy.log(`Alert text: ${alertText}`);
        expect(alertText, "Alert should contain expected text")
          .to.match(/The value should not be greater than|The value should not be less than/);
        cy.log("Alert validation passed");
      });

    } else {
      const errorMsg = "Failed: Response required alert not visible";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

selectMinAndMaxTime(minTime, maxTime) {
  cy.log('  START: Setting Min and Max Time');
  cy.log(`STEP 1: Setting Min Time to: ${minTime}`);
  this.elements.minTimeInput()
    .should('be.visible')
    .clear({ force: true })
    .type(minTime, { force: true })
    .then(($input) => {
      if ($input.val() === minTime) {
        cy.log(`  Min Time set to: ${minTime}`);
      } else {
        const errorMsg = `  Failed to set Min Time to: ${minTime}`;
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    });
  cy.log(`STEP 2: Setting Max Time to: ${maxTime}`);
  this.elements.maxTimeInput()
    .should('be.visible')
    .clear({ force: true })
    .type(maxTime, { force: true })
    .then(($input) => {
      if ($input.val() === maxTime) {
        cy.log(`  Max Time set to: ${maxTime}`);
      } else {
        const errorMsg = `  Failed to set Max Time to: ${maxTime}`;
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    });

  cy.log('  END: selectMinAndMaxTime');
}

selectTimeInPreview(timeValue) {
  this.elements.timeInputPreview()
    .should('be.visible')
    .invoke('attr', 'min')
    .then(min => {
      if (min) {
        cy.log(`Min time: ${min}`);
      } else {
        const errorMsg = '  Failed to retrieve Min time attribute';
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    });

  this.elements.timeInputPreview()
    .invoke('attr', 'max')
    .then(max => {
      if (max) {
        cy.log(`Max time: ${max}`);
      } else {
        const errorMsg = '  Failed to retrieve Max time attribute';
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    });

  cy.log(`Setting Time value to: ${timeValue}`);
  this.elements.timeInputPreview()
    .clear({ force: true })
    .type(timeValue, { force: true })
    .should('have.value', timeValue)
    .then(($input) => {
      if ($input.val() === timeValue) {
        cy.log(`  Time value ${timeValue} is visible in the container`);
      } else {
        const errorMsg = `  Failed to set Time value to: ${timeValue}`;
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    });
}

selectBeyondTimeAndAlert(timeValue) {
  cy.log("Checking Time input preview existence");

  this.elements.timeInputPreview().then($el => {
    if ($el && $el.length > 0 && $el.is(':visible')) {

      cy.log("Time input preview found and visible");

      cy.wrap($el).invoke('attr', 'min').then(min => cy.log(`Min time: ${min}`));
      cy.wrap($el).invoke('attr', 'max').then(max => cy.log(`Max time: ${max}`));

      cy.log("Scrolling Time input into view");
      cy.wrap($el).scrollIntoView({ ensureScrollable: false });

      cy.log(`Clearing Time input`);
      cy.wrap($el).clear({ force: true });

      cy.log(`Typing Time value: ${timeValue}`);
      cy.wrap($el).type(timeValue, { force: true });

      cy.log(`Verifying Time input has value: ${timeValue}`);
      cy.wrap($el).should('have.value', timeValue);
      cy.log("Time value set successfully");

    } else {
      const errorMsg = "Failed: Time input preview not found or not visible";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  cy.log("Checking Complete button existence");
  this.elements.completeButton().then($btn => {
    if ($btn && $btn.length > 0 && $btn.is(':visible')) {

      cy.log("Complete button found and visible");
      cy.log("Scrolling Complete button into view");
      cy.wrap($btn).scrollIntoView({ ensureScrollable: false });

      cy.log("Clicking Complete button");
      cy.wrap($btn).click({ force: true });
      cy.log("Complete button clicked");

    } else {
      const errorMsg = "Failed: Complete button not found or not visible";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  cy.log("Checking Response Required alert existence");
  this.elements.responseRequiredErrorAlert({ timeout: 30000 }).then($alert => {
    if ($alert && $alert.length > 0 && $alert.is(':visible')) {

      cy.log("Response Required alert is visible");
      cy.wrap($alert).invoke('text').then(alertText => {
        cy.log(`Alert text: ${alertText}`);
        expect(alertText, "Alert should contain expected text")
          .to.match(/The value should not be greater than|The value should not be less than/);
        cy.log("Alert validation passed");
      });

    } else {
      const errorMsg = "Failed: Response required alert not visible";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

addQuestionButtonPage2() {
    cy.log("Checking Add Question button on Page 2");

    this.elements.addQuestionButtonPage2().then($el => {

        if ($el.length > 0) {

            cy.log("Button exists — forcing scroll");
            cy.wrap($el).scrollIntoView({ ensureScrollable: true, offset: { top: -200 } });

            cy.wait(300);

            cy.log("Clicking Add Question button with force");
            cy.wrap($el).click({ force: true });

            cy.log("Add Question button clicked");

        } else {
            const errorMsg = 'Add Question button not found or not visible on Page 2';
            cy.log(errorMsg);
            throw new Error(errorMsg);
        }
    });
}

deleteButtonPage1() {
  cy.log("Checking Delete Button for Page 1");

  this.elements.deleteButtonPage1().then($btns => {

    if ($btns && $btns.length > 0) {
      const $button = cy.wrap($btns.eq(0));
      cy.log("Hovering page area to reveal delete button");
      cy.wait(200); 
      cy.log("Clicking Delete Button (force)");
      $button.click({ force: true });
      cy.log("Deleted Page 1 Successfully");
      console.log("Deleted Page 1 Successfully");
    } else {
      const msg = 'ERROR: "Delete Button Page 1" not found';
      cy.log(msg);
      console.error(msg);
      throw new Error('Failed: Could not delete Page 1');
    }
  });
}

question2Visible() {
  cy.log("Checking that Page 2 - Question 2 is visible");
  this.elements.question2Field({ timeout: 30000 }).then($el => {
    if ($el && $el.length > 0 && $el.is(':visible')) {
      cy.log("Page 2 Question 2 is visible in preview");
      console.log("Page 2 Question 2 is visible in preview");
    } else {
      const errorMsg = 'Page 2 Question 2 is NOT visible in preview';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }

  });
}

page1Question2() {
  cy.log("Checking Page 1 - Question 2 visibility");
  this.elements.surveyTitleDescription().click({ timeout: 30000 });
  this.elements.page1Question2({ timeout: 30000 }).then($el => {
    if ($el && $el.length > 0 && $el.is(':visible')) {
      cy.wrap($el)
        .scrollIntoView({ ensureScrollable: false });
      cy.log("Page 1 - Question 2 is visible");
      console.log("Page 1 - Question 2 is visible");
    } else {
      const errorMsg = 'Page 1 - Question 2 is NOT visible or NOT found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

verifyDuplicatedQuestionsInPreview() {
  cy.get('@enteredQuestion1').then((questionText) => {
    cy.log(`Verifying in Preview: "${questionText}"`);
    this.elements.previewQuestionTitle().first().invoke('text').then((text) => {
      const cleanedText = text.replace(/^\d+\.\s*/, '').trim();
      if (cleanedText === questionText) {
        cy.log('  Matched first duplicated question in preview');
      } else {
        const errorMsg = `  The first duplicated question did not match: "${cleanedText}"`;
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    });
    this.elements.nextButton().scrollIntoView({ ensureScrollable: false }).click({ force: true });
    cy.log('  Next button clicked');
    cy.wait(1000);
    this.elements.previewQuestionTitle().first().invoke('text').then((text) => {
      const cleanedText = text.replace(/^\d+\.\s*/, '').trim();
      if (cleanedText === questionText) {
        cy.log('  Matched second duplicated question in preview');
      } else {
        const errorMsg = `  The second duplicated question did not match: "${cleanedText}"`;
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    });
  });
  cy.log('  Verified duplicated questions in preview with all settings');
}

selectMinAndMaxDates(minDate, maxDate) {
  cy.log(`Setting Min Date to: ${minDate}`);
  this.elements.minDateInput().then($el => {
    if ($el && $el.length > 0) {
      cy.wrap($el)
        .scrollIntoView({ ensureScrollable: false })
        .clear({ force: true })
        .type(minDate, { force: true });
      cy.log(`Min Date set to: ${minDate}`);
    } else {
      const errorMsg = "Failed: Could not set Min Date — input not found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  cy.log(`Setting Max Date to: ${maxDate}`);
  this.elements.maxDateInput().then($el => {
    if ($el && $el.length > 0) {
      cy.wrap($el)
        .scrollIntoView({ ensureScrollable: false })
        .clear({ force: true })
        .type(maxDate, { force: true });
      cy.log(`Max Date set to: ${maxDate}`);
    } else {
      const errorMsg = "Failed: Could not set Max Date — input not found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

selectIntermediateDate(dateValue) {
  cy.log(`Getting min and max dates for intermediate date`);

  this.elements.dateInputPreview().then($el => {
    if ($el && $el.length > 0) {

      cy.wrap($el)
        .invoke('attr', 'min')
        .then(min => cy.log(`Min date: ${min}`));

      cy.wrap($el)
        .invoke('attr', 'max')
        .then(max => cy.log(`Max date: ${max}`));

      cy.log(`Setting Date to: ${dateValue}`);
      cy.wrap($el)
        .scrollIntoView({ ensureScrollable: false })
        .clear({ force: true })
        .type(dateValue, { force: true });

      cy.wrap($el).should('have.value', dateValue);
      cy.log(`Date set to ${dateValue} successfully`);

    } else {
      const errorMsg = 'Failed: Date input preview not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

selectBeyondDateAndAlert(dateValue) {
  cy.log("Getting min and max dates for date input");

  this.elements.dateInputPreview().then($el => {
    if ($el && $el.length > 0) {

      cy.wrap($el)
        .invoke('attr', 'min')
        .then(min => cy.log(`Min date: ${min}`));

      cy.wrap($el)
        .invoke('attr', 'max')
        .then(max => cy.log(`Max date: ${max}`));

      cy.log(`Setting date to: ${dateValue}`);
      cy.wrap($el)
        .scrollIntoView({ ensureScrollable: false })
        .clear({ force: true })
        .type(dateValue, { force: true });

      cy.wrap($el).should('have.value', dateValue);
      cy.log(`Date set to ${dateValue} successfully`);

    } else {
      const errorMsg = "Failed: Date input preview not found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  cy.log("Clicking Complete button");
  this.elements.completeButton().then($btn => {
    if ($btn && $btn.length > 0) {
      cy.wrap($btn)
        .scrollIntoView({ ensureScrollable: false })
        .click({ force: true });
      cy.log("Complete button clicked");
    } else {
      const errorMsg = "Failed: Complete button not found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  cy.log("Checking for response required error alert");
  this.elements.responseRequiredErrorAlert({ timeout: 30000 }).then($alert => {
    if ($alert && $alert.length > 0 && $alert.is(':visible')) {
      cy.wrap($alert).invoke('text').then(alertText => {
        cy.log(`Alert text: ${alertText}`);
        expect(alertText, "Alert should contain expected text")
          .to.match(/The value should not be greater than|The value should not be less than/);
      });
    } else {
      const errorMsg = "Failed: Response required alert not visible";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

selectMinAndMaxDateTime(minDateTime, maxDateTime) {
  cy.log(`Setting Min DateTime to: ${minDateTime}`);

  this.elements.minDateTimeInput().then($el => {
    if ($el && $el.length > 0) {
      cy.wrap($el)
        .scrollIntoView({ ensureScrollable: false })
        .clear({ force: true })
        .type(minDateTime, { force: true });
      cy.log(`Min DateTime set to: ${minDateTime}`);
    } else {
      const errorMsg = "Failed: Min DateTime input not found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  cy.log(`Setting Max DateTime to: ${maxDateTime}`);

  this.elements.maxDateTimeInput().then($el => {
    if ($el && $el.length > 0) {
      cy.wrap($el)
        .scrollIntoView({ ensureScrollable: false })
        .clear({ force: true })
        .type(maxDateTime, { force: true });
      cy.log(`Max DateTime set to: ${maxDateTime}`);
    } else {
      const errorMsg = "Failed: Max DateTime input not found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

selectIntermediateDateTime(dateTimeValue) {
  cy.log("Checking DateTime input preview");
  this.elements.dateTimeInputPreview().then($el => {
    if ($el && $el.length > 0 && $el.is(':visible')) {
      cy.log("DateTime input found and visible");
      cy.wrap($el).invoke('attr', 'min').then(min => cy.log(`Min datetime: ${min}`));
      cy.wrap($el).invoke('attr', 'max').then(max => cy.log(`Max datetime: ${max}`));
      cy.wrap($el).scrollIntoView({ ensureScrollable: false });
      cy.log(`Clearing DateTime input`);
      cy.wrap($el).clear({ force: true });
      cy.log(`Typing DateTime value: ${dateTimeValue}`);
      cy.wrap($el).type(dateTimeValue, { force: true });
      cy.wrap($el).should('have.value', dateTimeValue);
      cy.log(`DateTime value set successfully: ${dateTimeValue}`);
    } else {
      const errorMsg = "Failed: DateTime input preview not found or not visible";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

  verifyLayoutWidthForAllModes() {
    let beforeWidth, afterWidth;
    this.elements.surveySettingsButton({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true, scrollBehavior: false });
    this.elements.questionHeader({ timeout: 30000 }).then(($header) => {
      const beforeWidth = $header.width();
      cy.log(`Before changing width mode: ${beforeWidth.toFixed(2)} px`);
    });

    this.elements.autoWidthOption({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).click({ force: true });
    cy.wait(1000);
    this.elements.questionHeader({ timeout: 30000 }).then(($header) => {
      const afterAuto = $header.width();
      cy.log(`After selecting Auto mode: ${afterAuto.toFixed(2)} px`);
    });

    this.elements.staticWidthOption({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).click({ force: true });
    cy.wait(1000);
    this.elements.questionHeader({ timeout: 30000 }).then(($header) => {
      const afterStatic = $header.width();
      cy.log(`After selecting Static mode: ${afterStatic.toFixed(2)} px`);
    });

    this.elements.responsiveWidthOption({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).click({ force: true });
    cy.wait(1000);
    this.elements.questionHeader({ timeout: 30000 }).then(($header) => {
      const afterResponsive = $header.width();
      cy.log(`After selecting Responsive mode: ${afterResponsive.toFixed(2)} px`);
    });
  }

    selectDropdownOptionUnderSectionSurveySettings(sectionName, fieldName, dropdownValue) {
    this.elements.surveySettingsIcon().then(($icon) => {
      if ($icon.length > 0) {
        this.elements.surveySettingsButton().should('be.visible').click({ force: true });
        cy.wait(800);
        cy.log('  Survey settings opened');
      }
    });
    cy.get('body').then(($body) => {
      const rawSelector = this.elements.fieldLabelRawWithContains(fieldName);
      if ($body.find(rawSelector).length === 0) {
        this.elements.sectionTitle(sectionName).scrollIntoView({ ensureScrollable: false }).click({ force: true });
        cy.wait(800);
        cy.log(`  Expanded section: "${sectionName}"`);
      }
    });

    this.elements.fieldLabelByName(fieldName)
      .scrollIntoView({ ensureScrollable: false, timeout: 30000 })
      .should('be.visible');

    this.elements.dropdownInputByField(fieldName).should('exist').scrollIntoView({ ensureScrollable: false }).click({ force: true });
    cy.wait(600);
    cy.get('body').then(($body) => {
      const isHidden = $body.find('.sv-popup.spg-dropdown-popup[style*="display: none"]').length > 0;
      if (isHidden) {
        this.elements.dropdownInputByField(fieldName).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      }
    });

    this.elements.popupListContainer().should('be.visible').within(() => {
      this.elements.popupListItemByValue(dropdownValue).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true });
    });

    this.elements.selectedDropdownText(fieldName).invoke('text').then((text) => {
      if (text.trim() !== dropdownValue) {
        this.elements.selectedListItem().should('contain.text', dropdownValue);
        cy.log(`  Selected dropdown value: "${dropdownValue}"`);
      }
    });

    const verifySelection = () => {
      this.elements.filterText(fieldName).invoke('text').then((text) => {
        if (text.trim() !== dropdownValue) {
          this.elements.selectedDropdownItem().should('contain.text', dropdownValue);
          cy.log(`Verified  Selected dropdown value: "${dropdownValue}"`);
        }
      });
    };
    verifySelection();
  }

clickRadioOptionUnderSectionSurveySettings(sectionName, fieldName, optionText) {
  cy.log(`Selecting radio option "${optionText}" for field "${fieldName}" under section "${sectionName}"`);

  this.elements.surveySettingsIcon().then($icon => {
    if ($icon && $icon.length > 0) {
      cy.log("Survey settings icon found");
      this.elements.surveySettingsButton().should('be.visible').click({ force: true });
      cy.wait(800);
      cy.log("Survey settings opened");
    } else {
      const errorMsg = "Survey settings icon not found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  cy.get('body').then($body => {
    const selector = this.elements.fieldLabelRawWithContains(fieldName);
    if ($body.find(selector).length > 0) {
      cy.log(`Field "${fieldName}" is already visible`);
    } else {
      cy.log(`Field "${fieldName}" not visible → expanding section "${sectionName}"`);
      this.elements.sectionTitle(sectionName).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      cy.wait(800);
      cy.log(`Expanded section "${sectionName}"`);
    }
  });

  this.elements.radioOptionByText(fieldName, optionText).then($radio => {
    if ($radio && $radio.length > 0) {
      cy.log(`Radio option "${optionText}" found`);
      cy.wrap($radio).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true });
      cy.log(`Selected radio option "${optionText}"`);
    } else {
      const errorMsg = `Radio option "${optionText}" not found for field "${fieldName}"`;
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

verifyPreviewInputIsReadOnly() {
  cy.log("Checking preview input field");

  this.elements.previewInputField().then($el => {
    if ($el && $el.length > 0) {
      cy.log("Preview input field found");
      cy.wrap($el).should('have.attr', 'readonly');
      cy.log("Readonly attribute verified");
      cy.wrap($el).should('have.class', 'sd-input--readonly');
      cy.log("Readonly class verified");
      cy.log("Preview input field is readonly and not editable");
    } else {
      const errorMsg = "Preview input field not found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

verifyFieldEditable() {
  const message = faker.word.words(2) + ' Title';
  cy.log('Checking if preview input field exists');
  this.elements.previewInputFieldEditable().then($el => {
    if ($el && $el.length > 0) {
      cy.log('Preview input field found');
      this.elements.previewInputFieldEditable().should('exist').should('be.visible').should('not.have.attr', 'readonly');
      cy.log('Preview input field is visible and editable');
      this.elements.previewInputFieldEditable().clear({ force: true }).type(message, { force: true }).should('have.value', message);
      cy.log(`Verified editable field with value: "${message}"`);
    } else {
      const errorMsg = 'Preview input field NOT found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}


verifyLayoutWidthForAllModesInPreview() {

  cy.log("Checking and clicking Survey Settings button");
  this.elements.surveySettingsButton({ timeout: 30000 }).then($btn => {
    if ($btn.length > 0 && $btn.is(':visible')) {
      cy.wrap($btn).scrollIntoView({ ensureScrollable: false }).click({ force: true, scrollBehavior: false });
      cy.log("Survey Settings button clicked");
    } else {
      const msg = "Survey Settings button not found";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.log("Navigating to Preview tab");
  this.elements.previewTab({ timeout: 30000 }).then($tab => {
    if ($tab.length > 0) {
      cy.wrap($tab).scrollIntoView({ ensureScrollable: false }).click({ force: true, scrollBehavior: false });
      cy.log("Preview tab opened");
    } else {
      const msg = "Preview tab not found";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.log("Getting initial preview width");
  this.elements.previewQuestionHeader({ timeout: 30000 }).then($header => {
    if ($header.length > 0) {
      const beforeWidth = $header.width();
      cy.log(`Before changing width mode (Preview): ${beforeWidth.toFixed(2)} px`);
    } else {
      const msg = "Preview question header not found";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.log("Switching to Designer tab");
  this.elements.designerTab({ timeout: 30000 }).then($tab => {
    if ($tab.length > 0) {
      cy.wrap($tab).scrollIntoView({ ensureScrollable: false }).click({ force: true, scrollBehavior: false });
      cy.log("Designer tab opened");
    } else {
      const msg = "Designer tab not found";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.log("Selecting Auto Width option");
  this.elements.autoWidthOption({ timeout: 30000 }).then($opt => {
    if ($opt.length > 0) {
      cy.wrap($opt).scrollIntoView({ ensureScrollable: false }).click({ force: true, scrollBehavior: false });
      cy.log("Auto Width selected");
    } else {
      const msg = "Auto Width option not found";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.wait(1000);

  cy.log("Switching to Preview tab to capture Auto width");
  this.elements.previewTab({ timeout: 30000 }).then($tab => {
    if ($tab.length > 0) {
      cy.wrap($tab).scrollIntoView({ ensureScrollable: false }).click({ force: true, scrollBehavior: false });
      cy.log("Preview tab opened for Auto mode");
    } else {
      const msg = "Preview tab not found";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  this.elements.previewQuestionHeader({ timeout: 30000 }).then($header => {
    if ($header.length > 0) {
      const autoWidth = $header.width();
      cy.log(`After selecting Auto mode (Preview): ${autoWidth.toFixed(2)} px`);
    } else {
      const msg = "Preview question header not found for Auto mode";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.log("Switching to Designer tab");
  this.elements.designerTab({ timeout: 30000 }).then($tab => {
    if ($tab.length > 0) {
      cy.wrap($tab).scrollIntoView({ ensureScrollable: false }).click({ force: true, scrollBehavior: false });
      cy.log("Designer tab opened again");
    } else {
      const msg = "Designer tab not found";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.log("Selecting Static Width option");
  this.elements.staticWidthOption({ timeout: 30000 }).then($opt => {
    if ($opt.length > 0) {
      cy.wrap($opt).scrollIntoView({ ensureScrollable: false }).click({ force: true, scrollBehavior: false });
      cy.log("Static Width selected");
    } else {
      const msg = "Static Width option not found";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.wait(1000);

  cy.log("Switching to Preview tab to capture Static width");
  this.elements.previewTab({ timeout: 30000 }).then($tab => {
    if ($tab.length > 0) {
      cy.wrap($tab).scrollIntoView({ ensureScrollable: false }).click({ force: true, scrollBehavior: false });
      cy.log("Preview tab opened for Static mode");
    } else {
      const msg = "Preview tab not found";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  this.elements.previewQuestionHeader({ timeout: 30000 }).then($header => {
    if ($header.length > 0) {
      const staticWidth = $header.width();
      cy.log(`After selecting Static mode (Preview): ${staticWidth.toFixed(2)} px`);
    } else {
      const msg = "Preview question header not found for Static mode";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.log("Switching to Designer tab");
  this.elements.designerTab({ timeout: 30000 }).then($tab => {
    if ($tab.length > 0) {
      cy.wrap($tab).scrollIntoView({ ensureScrollable: false }).click({ force: true, scrollBehavior: false });
      cy.log("Designer tab opened again");
    } else {
      const msg = "Designer tab not found";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.log("Selecting Responsive Width option");
  this.elements.responsiveWidthOption({ timeout: 30000 }).then($opt => {
    if ($opt.length > 0) {
      cy.wrap($opt).scrollIntoView({ ensureScrollable: false }).click({ force: true, scrollBehavior: false });
      cy.log("Responsive Width selected");
    } else {
      const msg = "Responsive Width option not found";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.wait(1000);

  cy.log("Switching to Preview tab to capture Responsive width");
  this.elements.previewTab({ timeout: 30000 }).then($tab => {
    if ($tab.length > 0) {
      cy.wrap($tab).scrollIntoView({ ensureScrollable: false }).click({ force: true, scrollBehavior: false });
      cy.log("Preview tab opened for Responsive mode");
    } else {
      const msg = "Preview tab not found";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  this.elements.previewQuestionHeader({ timeout: 30000 }).then($header => {
    if ($header.length > 0) {
      const responsiveWidth = $header.width();
      cy.log(`After selecting Responsive mode (Preview): ${responsiveWidth.toFixed(2)} px`);
    } else {
      const msg = "Preview question header not found for Responsive mode";
      cy.log(msg);
      throw new Error(msg);
    }
  });
}

verifyQuestionAlignmentTop() {
  cy.log("Waiting before checking question alignment");
  cy.wait(2000);

  cy.log("Checking if question title exists");
  this.elements.questionTitle().then($title => {
    if ($title.length === 0) {
      const msg = "Question title not found";
      cy.log(msg);
      throw new Error(msg);
    }

    cy.log("Checking if question input exists");
    this.elements.questionInput().then($input => {
      if ($input.length === 0) {
        const msg = "Question input field not found";
        cy.log(msg);
        throw new Error(msg);
      }

      cy.log("Comparing positions of title and input");
      const titleRect = $title[0].getBoundingClientRect();
      const inputRect = $input[0].getBoundingClientRect();

      cy.log(`Title bottom: ${titleRect.bottom}, Input top: ${inputRect.top}`);

      expect(titleRect.bottom).to.be.lessThan(inputRect.top + 2);

      cy.log("Verifying title has TOP alignment class");
      cy.wrap($title).should('have.class', 'sd-question__header--location-top');

      cy.log("Question title is aligned TOP of input field successfully");
    });
  });
}

verifyQuestionAlignmentBottom() {
  cy.log("Waiting before checking bottom alignment");
  cy.wait(2000);
  this.elements.questionTitle().then($title => {
    if ($title.length === 0) {
      const msg = "Question title not found for bottom alignment";
      cy.log(msg);
      throw new Error(msg);
    }
    this.elements.questionInput().then($input => {
      if ($input.length === 0) {
        const msg = "Question input field not found for bottom alignment";
        cy.log(msg);
        throw new Error(msg);
      }
      const titleRect = $title[0].getBoundingClientRect();
      const inputRect = $input[0].getBoundingClientRect();
      expect(titleRect.top).to.be.greaterThan(inputRect.bottom - 2);
      cy.wrap($title).should('have.class', 'sd-question__header--location--bottom');
      cy.log("Question Title is aligned BOTTOM of input field successfully");
    });
  });
}

verifyQuestionAlignmentLeft() {
  cy.log("Waiting before checking left alignment");
  cy.wait(2000);
  this.elements.questionTitle().then($title => {
    if ($title.length === 0) {
      const msg = "Question title not found for left alignment";
      cy.log(msg);
      throw new Error(msg);
    }
    this.elements.questionInput().then($input => {
      if ($input.length === 0) {
        const msg = "Question input field not found for left alignment";
        cy.log(msg);
        throw new Error(msg);
      }
      const titleRect = $title[0].getBoundingClientRect();
      const inputRect = $input[0].getBoundingClientRect();
      expect(titleRect.right).to.be.lessThan(inputRect.left + 2);
      cy.wrap($title).should('have.class', 'sd-question__header--location--left');
      cy.log("Question Title is aligned LEFT of input field successfully");
    });
  });
}

verifyPreviewAlignmentTop() {
  cy.log("Waiting before checking preview TOP alignment");
  cy.wait(2000);
  this.elements.previewAlignmentTop().first().within(() => {
    this.elements.previewAlignmentHeader().then($title => {
      if ($title.length === 0) {
        const msg = "Preview title not found for TOP alignment";
        cy.log(msg);
        throw new Error(msg);
      }
      this.elements.previewAlignmentInput().then($input => {
        if ($input.length === 0) {
          const msg = "Preview input not found for TOP alignment";
          cy.log(msg);
          throw new Error(msg);
        }
        const titleRect = $title[0].getBoundingClientRect();
        const inputRect = $input[0].getBoundingClientRect();
        expect(titleRect.bottom).to.be.lessThan(inputRect.top + 2);
        cy.wrap($title).should('have.class', 'sd-question__header--location-top');
        cy.log("Preview Title is aligned TOP of input field successfully");
      });
    });
  });
}

verifyPreviewAlignmentBottom() {
  cy.log("Waiting before checking preview BOTTOM alignment");
  cy.wait(2000);
  this.elements.previewAlignmentBottom().first().within(() => {
    this.elements.previewAlignmentHeader().then($title => {
      if ($title.length === 0) {
        const msg = "Preview title not found for BOTTOM alignment";
        cy.log(msg);
        throw new Error(msg);
      }
      this.elements.previewAlignmentInput().then($input => {
        if ($input.length === 0) {
          const msg = "Preview input not found for BOTTOM alignment";
          cy.log(msg);
          throw new Error(msg);
        }
        const titleRect = $title[0].getBoundingClientRect();
        const inputRect = $input[0].getBoundingClientRect();
        expect(titleRect.top).to.be.greaterThan(inputRect.bottom - 2);
        cy.wrap($title).should('have.class', 'sd-question__header--location--bottom');
        cy.log("Preview Title is aligned BOTTOM of input field successfully");
      });
    });
  });
}

verifyPreviewAlignmentLeft() {
  cy.log("Waiting before checking preview LEFT alignment");
  cy.wait(2000);
  this.elements.previewAlignmentLeft().first().within(() => {
    this.elements.previewAlignmentHeader().then($title => {
      if ($title.length === 0) {
        const msg = "Preview title not found for LEFT alignment";
        cy.log(msg);
        throw new Error(msg);
      }
      this.elements.previewAlignmentInput().then($input => {
        if ($input.length === 0) {
          const msg = "Preview input not found for LEFT alignment";
          cy.log(msg);
          throw new Error(msg);
        }
        const titleRect = $title[0].getBoundingClientRect();
        const inputRect = $input[0].getBoundingClientRect();
        expect(titleRect.right).to.be.lessThan(inputRect.left + 2);
        cy.wrap($title).should('have.class', 'sd-question__header--location--left');
        cy.log("Preview Title is aligned LEFT of input field successfully");
      });
    });
  });
}

addingPage2Data() {
  cy.log("Adding first question on Page 2");
  this.elements.addQuestionBtnAdditional().scrollIntoView({ ensureScrollable: false }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      cy.log("Add Question button is visible and clicked successfully for Page 2");
      console.log("Add Question button is visible and clicked successfully for Page 2");
    } else {
      const msg = "Add Question button is not visible or not clickable for Page 2";
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    }
  });

  this.elements.selectQuestionType2Dropdown().scrollIntoView({ ensureScrollable: false }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).scrollIntoView({ ensureScrollable: false }).trigger('mouseover');
      cy.log("Hovered over Question Type 2 dropdown");
      console.log("Hovered over Question Type 2 dropdown");
    } else {
      const msg = "Question Type 2 dropdown is not visible";
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    }
  });

  this.elements.questionTypeDropdownButton().scrollIntoView({ ensureScrollable: false }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).scrollIntoView({ ensureScrollable: false }).click();
      cy.log("Clicked on Question Type dropdown button");
      console.log("Clicked on Question Type dropdown button");
    } else {
      const msg = "Question Type dropdown button is not visible";
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    }
  });

  this.elements.questionTypeOptions().contains('Radio Button Group').then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).scrollIntoView({ ensureScrollable: false }).click();
      cy.log(`Selected question type: Radio Button Group`);
      console.log(`Selected question type: Radio Button Group`);
    } else {
      const msg = `Question type option Radio Button Group is not visible`;
      cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
    }
  });

  cy.log("Adding second question on Page 2");
  this.elements.addQuestionBtnAdditional({ timeout: 30000 }).then($btn => {
    if ($btn.length > 0 && $btn.is(':visible')) {
      cy.wrap($btn).scrollIntoView({ ensureScrollable: false }).click({ force: true });
    } else {
      const msg = "Add Question button not found for second question";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.log("Selecting question type for second question");
  this.elements.questionTypeDropdownButton().then($dropdown => {
    if ($dropdown.length > 0 && $dropdown.is(':visible')) {
      cy.wrap($dropdown).scrollIntoView({ ensureScrollable: false }).click();
      this.elements.questionTypeOptions().contains('Radio Button Group').scrollIntoView({ ensureScrollable: false }).click();
    } else {
      const msg = "Question type dropdown not found for second question";
      cy.log(msg);
      throw new Error(msg);
    }
  });
}

uploadLogoFilePreview(fileName) {
  cy.log(`Clicking on logo placeholder to upload file`);
  this.elements.logoPlaceholder().then($placeholder => {
    if ($placeholder.length > 0) {
      cy.wrap($placeholder).click({ force: true });
      cy.log(`Logo placeholder clicked`);
    } else {
      const msg = 'Logo placeholder not found';
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.log(`Uploading file: ${fileName}`);
  this.elements.logoFileInput().then($input => {
    if ($input.length > 0) {
      cy.wrap($input).attachFile(fileName, { force: true });
      cy.log(`File attached to input`);
      const el = $input[0];
      el.dispatchEvent(new Event('focus', { bubbles: true }));
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
      el.dispatchEvent(new Event('blur', { bubbles: true }));
      cy.log(`Dispatched focus/input/change/blur events for logo input`);
    } else {
      const msg = 'Logo file input not found';
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.wait(1000);
  cy.log(`Logo upload process completed`);
}

verifyLogoInPreview() {
  cy.log("Checking if logo in preview exists");
  this.elements.logoInPreview({ timeout: 30000 }).then($el => {
    if ($el.length > 0) {
      cy.log("Logo element found, scrolling into view");
      cy.wrap($el).scrollIntoView({ ensureScrollable: false });
      cy.log("Checking if logo is visible");
      cy.wrap($el).should('be.visible');
      cy.log("Checking if logo has 'src' attribute");
      cy.wrap($el).should('have.attr', 'src');
      cy.log("Validating logo source contains base64 image");
      cy.wrap($el).should('have.attr', 'src').and('include', 'data:image/jpeg;base64');
      cy.log("Logo validation completed successfully");
    } else {
      const msg = "Logo in preview not found";
      cy.log(msg);
      throw new Error(msg);
    }
  });
}

deleteLogo() {
  cy.log("Checking if delete logo button exists");
  this.elements.deleteLogoButton({ timeout: 30000 }).then($el => {
    if ($el.length > 0) {
      cy.log("Delete logo button found, scrolling into view");
      cy.wrap($el).scrollIntoView({ ensureScrollable: false });
      cy.log("Clicking delete logo button");
      cy.wrap($el).click({ force: true });
      cy.log("Logo delete action completed successfully");
    } else {
      const msg = "Delete logo button not found";
      cy.log(msg);
      throw new Error(msg);
    }
  });
}

logoInvisible() {
  cy.log("Checking that Logo is NOT visible in preview");

  cy.document().then(doc => {
    const el = doc.querySelector('img[src^="data:image"]');

    if (!el) {
      cy.log("Logo is not visible in preview");
      console.log("Logo is not visible in preview");
    } else {
      const errorMsg = "Logo IS VISIBLE in preview (Expected NOT visible)";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

addNewPageSetting() {
  cy.log('Clicking Survey Settings button');
  this.elements.surveySettingsButton({ timeout: 30000 })
    .scrollIntoView({ ensureScrollable: false })
    .should('be.visible')
    .click({ force: true, scrollBehavior: false });

  cy.log('Clicking Pages Settings option');
  this.elements.pagesSetting({ timeout: 30000 })
    .scrollIntoView({ ensureScrollable: false })
    .should('be.visible')
    .click({ force: true, scrollBehavior: false });

  cy.log('Clicking Add New Page button');
  this.elements.addNewPage({ timeout: 30000 })
    .scrollIntoView({ ensureScrollable: false })
    .should('be.visible')
    .click({ force: true, scrollBehavior: false });

  cy.log('New page added successfully from Pages Settings');
}

verifyAlertTop() {
  cy.log('Clicking Next button to trigger top alert');
  cy.wait(3000);
  this.elements.nextButton({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).click({ force: true });
  cy.log('Clicked Next button');
  this.elements.alertTopContainer({ timeout: 30000 }).then($alertContainer => {
    if ($alertContainer && $alertContainer.length > 0) {
      cy.log('Alert top container found');
      cy.wrap($alertContainer).scrollIntoView({ ensureScrollable: false }).within(() => {
        this.elements.alertRole(cy.root()).then($alertRole => {
          if ($alertRole && $alertRole.length > 0) {
            cy.log('Alert role found');
            this.elements.questionInputContainer(cy.root()).then($input => {
              if ($input && $input.length > 0) {
                cy.log('Question input container found');
                const alertRect = $alertRole[0].getBoundingClientRect();
                const inputRect = $input[0].getBoundingClientRect();
                expect(alertRect.bottom).to.be.lessThan(inputRect.top + 2);
                cy.wrap($alertRole).should('be.visible').and('contain.text', Messages.getMessage("SURVEY_LIST_REQUIRED_ALERT"));
                cy.log('Alert is displayed at the TOP of the question input');
              } else {
                const errorMsg = 'Question input container not found';
                cy.log(errorMsg);
                throw new Error(errorMsg);
              }
            });
          } else {
            const errorMsg = 'Alert role not found';
            cy.log(errorMsg);
            throw new Error(errorMsg);
          }
        });
      });
    } else {
      const errorMsg = 'Alert top container not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}


verifyAlertBottom() {
  cy.log('Clicking Next button to trigger bottom alert');
  this.elements.nextButton().scrollIntoView({ ensureScrollable: false }).click({ force: true });
  this.elements.alertBottomContainer({ timeout: 30000 }).then($alertContainer => {
    if ($alertContainer && $alertContainer.length > 0) {
      cy.log('Alert bottom container found');
      cy.wrap($alertContainer).scrollIntoView({ ensureScrollable: false }).within(() => {
        this.elements.alertRole(cy.root()).then($alertRole => {
          if ($alertRole && $alertRole.length > 0) {
            cy.log('Alert role found');
            this.elements.questionInputContainer(cy.root()).then($input => {
              if ($input && $input.length > 0) {
                cy.log('Question input container found');
                const alertRect = $alertRole[0].getBoundingClientRect();
                const inputRect = $input[0].getBoundingClientRect();
                expect(alertRect.top).to.be.greaterThan(inputRect.bottom - 2);
                cy.wrap($alertRole).should('be.visible').and('contain.text', Messages.getMessage("SURVEY_LIST_REQUIRED_ALERT"));
                cy.log('Alert is displayed at the BOTTOM of the question input');
              } else {
                const errorMsg = 'Question input container not found';
                cy.log(errorMsg);
                throw new Error(errorMsg);
              }
            });
          } else {
            const errorMsg = 'Alert role not found';
            cy.log(errorMsg);
            throw new Error(errorMsg);
          }
        });
      });
    } else {
      const errorMsg = 'Alert bottom container not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}


verifyPageTitleAndDescriptionVisible() {
  cy.log('Verifying Page Title and Description visibility');

  this.elements.pageTitle().then($el => {
    if ($el.length > 0) {
      cy.log(`Page Title: Found ${$el.text().trim()}`);
    } else {
      const errorMsg = 'Page Title not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  this.elements.pageDescription().then($el => {
    if ($el.length > 0) {
      cy.log(`Page Description: Found ${$el.text().trim()}`);
    } else {
      const errorMsg = 'Page Description not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}



verifyPageTitleAndDescriptionNotVisible() {
  cy.log('📄 Verifying Page Title and Description are NOT visible');
  if (this.elements.pageTitle().length === 0) {
    cy.log('  Page Title not visible');
  } else {
    const errorMsg = '  Page Title still visible';
    cy.log(errorMsg);
    throw new Error(errorMsg);
  }

  if (this.elements.pageDescription().length === 0) {
    cy.log('  Page Description not visible');
  } else {
    const errorMsg = '  Page Description still visible';
    cy.log(errorMsg);
    throw new Error(errorMsg);
  }
}

verifyQuestion1HeaderVisibleInPreview() {
  cy.log('Verifying Question 1 header is visible in Preview');

  this.elements.question1Header().then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el)
        .scrollIntoView({ ensureScrollable: false })
        .then(() => {
          cy.log('Question 1 header visible');
        });
    } else {
      const errorMsg = 'Question 1 header not found in Preview';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

verifyQuestion1HeaderNotVisibleInPreview() {
  cy.log('Verifying Question 1 header is NOT visible in Preview');

  cy.document().then(doc => {
    const el = doc.querySelector('span[aria-label="Question 1"]'); 

    if (!el) {
      cy.log('Question 1 header is not visible in Preview');
      console.log('Question 1 header is not visible in Preview');
    } else {
      const errorMsg = 'Question 1 header still visible';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

verifyThankyouSurveyMessage() {
  cy.log('Completing survey to verify Thank You message');

  this.elements.completeButton().then($btn => {
    if ($btn.length > 0) {
      cy.wrap($btn)
        .scrollIntoView({ ensureScrollable: false })
        .click({ force: true });
      cy.log('Complete button clicked');
    } else {
      const errorMsg = 'Complete button not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  this.elements.surveyCompleteMessage({ timeout: 30000 }).then($msg => {
    if ($msg.length > 0) {
      cy.wrap($msg)
        .scrollIntoView({ ensureScrollable: false })
        .should('contain.text', Messages.getMessage('SURVEY_COMPLETE_MESSAGE'));
      cy.log('Survey Complete message verified');
    } else {
      const errorMsg = 'Survey Complete message not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

verifyDarkMode() {
  cy.log('Enabling Dark Mode');

  this.elements.hidePanelButton({ timeout: 30000 }).then($btn => {
    if ($btn.length > 0) {
      cy.wrap($btn)
        .should('be.visible')
        .click({ force: true });
      cy.log('Hide Panel button clicked');
    } else {
      const errorMsg = 'Hide Panel button not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  cy.wait(3000);

  this.elements.pageRoot({ timeout: 30000 }).then($el => {
    if ($el.length > 0) {
      cy.wrap($el)
        .should('be.visible')
        .then($root => {
          const bgVar = getComputedStyle($root[0])
            .getPropertyValue('--sjs-general-backcolor')
            .trim();
          expect(bgVar).to.eq('rgba(48, 48, 48, 1)');
        });
      cy.log('Dark Mode verified');
    } else {
      const errorMsg = 'Page root element not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

verifyLightMode() {
  cy.log('🌞 Verifying Light Mode');

  this.elements.hidePanelButton({ timeout: 30000 }).then($btn => {
    if ($btn.length > 0) {
      cy.wrap($btn).should('be.visible').click({ force: true });
      cy.log('Hide Panel button clicked');
      cy.wait(3000);

      this.elements.pageRoot({ timeout: 30000 }).then($root => {
        if ($root.length > 0) {
          cy.wrap($root).should('be.visible').then($el => {
            const bg = getComputedStyle($el[0])
              .getPropertyValue('--sjs-general-backcolor')
              .trim();
            cy.log(`Background Color: ${bg}`);
            expect(bg).to.eq('rgba(255, 255, 255, 1)');
          });
          cy.log('Light Mode verified');
        } else {
          const errorMsg = 'Page root element not found'; cy.log(errorMsg); throw new Error(errorMsg);
        }
      });
    } else {
      const errorMsg = 'Hide Panel button not found'; cy.log(errorMsg); throw new Error(errorMsg);
    }
  });
}

themesTabClick() {
  cy.log('🎨 Clicking Themes Tab');

  this.elements.themesTab({ timeout: 30000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Themes Tab clicked');
    } else {
      const errorMsg = 'Themes Tab not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

clickRadioOptionUnderSectionThemeSettings(sectionName, fieldName, optionText) {
  cy.log(`🎯 Selecting "${optionText}" for field "${fieldName}" under section "${sectionName}"`);

  if (this.elements.themeSettingsButton({ timeout: 30000 }).length > 0) {
    this.elements.themeSettingsButton({ timeout: 30000 }).click({ force: true });
    cy.log('  Theme Settings button clicked');

    cy.get('body').then($body => {
      const rawSelector = this.elements.fieldLabelRawWithContains(fieldName);
      if ($body.find(rawSelector).length === 0) {
        if (this.elements.sectionTitle(sectionName).length > 0) {
          this.elements.sectionTitle(sectionName).scrollIntoView({ ensureScrollable: false }).click({ force: true });
          cy.log(`  Section "${sectionName}" expanded`);
          cy.wait(800);
        } else {
          const errorMsg = `  Section "${sectionName}" not found`;
          cy.log(errorMsg);
          throw new Error(errorMsg);
        }
      }
    });

    if (this.elements.radioOptionByText(fieldName, optionText).length > 0) {
      this.elements.radioOptionByText(fieldName, optionText).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      cy.log(`  Selected radio option: "${optionText}"`);
    } else {
      const errorMsg = `  Radio option "${optionText}" not found for field "${fieldName}"`;
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  } else {
    const errorMsg = '  Theme Settings button not found';
    cy.log(errorMsg);
    throw new Error(errorMsg);
  }
}

selectDarkModeTheme() {
  cy.log('Selecting Dark Mode Theme');

  this.elements.themeSettingsButton({ timeout: 30000 }).then($btn => {
    if ($btn.length > 0) {
      cy.wrap($btn).click({ force: true });
      cy.log('Theme Settings button clicked');
    } else {
      const errorMsg = 'Theme Settings button not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  this.elements.darkModeRadio({ timeout: 30000 }).then($radio => {
    if ($radio.length > 0) {
      cy.wrap($radio)
        .scrollIntoView({ ensureScrollable: false })
        .click({ force: true });
      cy.log('Dark Mode radio option selected');
    } else {
      const errorMsg = 'Dark Mode radio option not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

selectLightModeTheme() {
  cy.log('Selecting Light Mode Theme');

  this.elements.themeSettingsButton({ timeout: 30000 }).then($btn => {
    if ($btn.length > 0) {
      cy.wrap($btn).click({ force: true });
      cy.log('Theme Settings button clicked');
    } else {
      const errorMsg = 'Theme Settings button not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  this.elements.lightModeRadio({ timeout: 30000 }).then($radio => {
    if ($radio.length > 0) {
      cy.wrap($radio)
        .scrollIntoView({ ensureScrollable: false })
        .click({ force: true });
      cy.log('Light Mode radio option selected');
    } else {
      const errorMsg = 'Light Mode radio option not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

searchRightPanel(value) {
  cy.log(`  Searching in Theme Settings: "${value}"`);

  this.elements.themeSettingsButton({ timeout: 30000 }).then($btn => {
    if ($btn.length > 0) {
      cy.wrap($btn).click({ force: true });
      cy.log('Theme Settings button clicked');
    } else {
      const errorMsg = 'Theme Settings button not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  this.elements.searchInput().then($input => {
    if ($input.length > 0) {
      cy.wrap($input)
        .scrollIntoView({ ensureScrollable: false })
        .should('be.visible')
        .clear({ force: true })
        .type(value, { force: true });
      cy.log(`Typed "${value}" in search input`);
    } else {
      const errorMsg = 'Search input not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}


verifyOrangeBorder() {
  cy.log('🟧 Verifying orange border on weight container');

  if (this.elements.weightContainer({ timeout: 10000 }).length > 0) {
    this.elements.weightContainer({ timeout: 10000 }).should('be.visible').then($el => {
      const style = getComputedStyle($el[0]);
      const borderColor = style.getPropertyValue('border-color').trim();
      cy.log(`Detected border color: ${borderColor}`);
      expect(borderColor).to.eq('rgb(255, 152, 20)');
      cy.log('  Orange border verified');
    });
  } else {
    const errorMsg = '  Weight container not found';
    cy.log(errorMsg);
    throw new Error(errorMsg);
  }
}

verifyChangingTitlewidthChanges() {
  cy.log(' Verifying title font weight changes');

  cy.log('  Checking Title Theme Location');
  this.elements.titleThemeLocation({ timeout: 30000 }).then($title => {
    if ($title.length > 0) {
      const defaultBold = parseInt(window.getComputedStyle($title[0]).fontWeight);
      cy.log(`Default Font Weight: ${defaultBold}`);

      cy.log('  Checking Theme Settings button');
      this.elements.themeSettingsButton({ timeout: 30000 }).then($themeBtn => {
        if ($themeBtn.length > 0) {
          cy.wrap($themeBtn)
            .scrollIntoView({ ensureScrollable: false })
            .click({ force: true });
          cy.log('Theme Settings button clicked');

          cy.log('  Checking Header Session Theme');
          this.elements.headerSessionTheme({ timeout: 30000 }).then($header => {
            if ($header.length > 0) {
              cy.wrap($header)
                .scrollIntoView({ ensureScrollable: false })
                .click({ force: true });
              cy.log('Header Session Theme clicked');

              cy.log('  Selecting Heavy font weight');
              this.elements.heavyRadioButton({ timeout: 30000 }).then($heavy => {
                if ($heavy.length > 0) {
                  cy.wrap($heavy)
                    .scrollIntoView({ ensureScrollable: false })
                    .click({ force: true });
                  cy.log('Heavy font selected');
                  cy.wait(3000);

                  this.elements.titleThemeLocation({ timeout: 30000 }).then($afterHeavy => {
                    const heavyFontWeight = parseInt(window.getComputedStyle($afterHeavy[0]).fontWeight);
                    cy.log(`Font Weight after Heavy: ${heavyFontWeight}`);
                    expect(heavyFontWeight).to.be.greaterThan(defaultBold);

                    cy.log('  Selecting Bold font weight');
                    this.elements.boldRadioButton({ timeout: 30000 }).then($bold => {
                      if ($bold.length > 0) {
                        cy.wrap($bold)
                          .scrollIntoView({ ensureScrollable: false })
                          .click({ force: true });
                        cy.log('Bold font selected');
                        cy.wait(3000);

                        this.elements.titleThemeLocation({ timeout: 30000 }).then($afterBold => {
                          const boldFontWeight = parseInt(window.getComputedStyle($afterBold[0]).fontWeight);
                          cy.log(`Font Weight after Bold: ${boldFontWeight}`);
                          expect(boldFontWeight).to.be.lessThan(heavyFontWeight);

                          cy.log('  Selecting Semi-Bold font weight');
                          this.elements.semiboldRadioButton({ timeout: 30000 }).then($semi => {
                            if ($semi.length > 0) {
                              cy.wrap($semi)
                                .scrollIntoView({ ensureScrollable: false })
                                .click({ force: true });
                              cy.log('Semi-Bold font selected');
                              cy.wait(3000);

                              this.elements.titleThemeLocation({ timeout: 30000 }).then($afterSemi => {
                                const semiBoldFontWeight = parseInt(window.getComputedStyle($afterSemi[0]).fontWeight);
                                cy.log(`Font Weight after Semi-Bold: ${semiBoldFontWeight}`);
                                expect(semiBoldFontWeight).to.be.lessThan(heavyFontWeight);
                                cy.log('  Title font weight changes verified successfully');
                              });
                            } else {
                              const errorMsg = '  Semi-Bold radio button not found';
                              cy.log(errorMsg);
                              throw new Error(errorMsg);
                            }
                          });
                        });
                      } else {
                        const errorMsg = '  Bold radio button not found';
                        cy.log(errorMsg);
                        throw new Error(errorMsg);
                      }
                    });
                  });
                } else {
                  const errorMsg = '  Heavy radio button not found';
                  cy.log(errorMsg);
                  throw new Error(errorMsg);
                }
              });
            } else {
              const errorMsg = '  Header Session Theme not found';
              cy.log(errorMsg);
              throw new Error(errorMsg);
            }
          });
        } else {
          const errorMsg = '  Theme Settings button not found';
          cy.log(errorMsg);
          throw new Error(errorMsg);
        }
      });
    } else {
      const errorMsg = '  Title Theme Location not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

addingPage1MultipleQuestionsRadioButton() {
  cy.log('➕ Adding Page 1 multiple questions with Radio Buttons');

  this.elements.addQuestionButton({ timeout: 30000 }).then($addBtn => {
    if ($addBtn.length > 0) {
      cy.wrap($addBtn).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true });
      cy.log('Add Question button clicked');

      this.surveyTitle = faker.word.words(2) + ' Title';

      this.elements.surveyTitle().then($title => {
        if ($title.length > 0) {
          cy.wrap($title).clear().type(this.surveyTitle);
          cy.log(`Survey Title entered: ${this.surveyTitle}`);
        } else {
          const errorMsg = 'Survey Title input not found'; cy.log(errorMsg); throw new Error(errorMsg);
        }
      });

      this.elements.surveyTitleDescription().then($desc => {
        if ($desc.length > 0) {
          cy.wrap($desc).type('Sample survey description');
          cy.log('Survey description entered');
        } else {
          const errorMsg = 'Survey Description input not found'; cy.log(errorMsg); throw new Error(errorMsg);
        }
      });

      this.enterQuestion1();

      this.elements.selectQuestionType2Dropdown().then($drop => {
        if ($drop.length > 0) {
          cy.wrap($drop).trigger('mouseover');
          this.elements.questionTypeDropdownButton().click();

          this.elements.questionTypeOptions().contains('Radio Button Group').then($opt => {
            if ($opt.length > 0) {
              cy.wrap($opt).click();
              this.captureCheckboxNumbersItemsNames();
            } else {
              const errorMsg = 'Radio Button Group option not found'; cy.log(errorMsg); throw new Error(errorMsg);
            }
          });
        } else {
          const errorMsg = 'Select Question Type dropdown not found'; cy.log(errorMsg); throw new Error(errorMsg);
        }
      });

      this.elements.addQuestionBtnAdditional({ timeout: 30000 }).then($addMore => {
        if ($addMore.length > 0) {
          cy.wrap($addMore).click({ force: true });
          this.enterQuestion2();
          this.elements.questionTypeDropdownButton().click();
          this.elements.questionTypeOptions().contains('Radio Button Group').click();
          this.captureCheckboxNumbersItemsNames2();
          cy.log('Page 1 questions added successfully');
        } else {
          const errorMsg = 'Add Additional Question button not found'; cy.log(errorMsg); throw new Error(errorMsg);
        }
      });

    } else {
      const errorMsg = 'Add Question button not found'; cy.log(errorMsg); throw new Error(errorMsg);
    }
  });
}


  descriptionFontFamilyDropdown(fontFamily) {
    this.elements.descriptionThemeLocation({ timeout: 30000 }).should('exist').then(($el) => {
      const element = $el[0];
      const computedStyle = window.getComputedStyle(element);
      const currentFontFamily = computedStyle.fontFamily;
      const currentFontWeight = computedStyle.fontWeight;
      const currentFontSize = computedStyle.fontSize;
      cy.wrap({ fontFamily: currentFontFamily, fontWeight: currentFontWeight, fontSize: currentFontSize }).as('beforeFontStyles');
      cy.log(`BEFORE: Description Font Family: ${currentFontFamily}`);
      cy.log(`BEFORE: Description Font Weight: ${currentFontWeight}`);
      cy.log(`BEFORE: Description Font Size: ${currentFontSize}`);
    });

    this.elements.themeSettingsButton({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).click({ force: true });
    this.elements.headerSessionTheme({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).click({ force: true });
    this.elements.fontFamilyDescriptionDropdown({ timeout: 10000 }).should('exist').scrollIntoView({ ensureScrollable: false }).click({ force: true });
    cy.wait(1000);
    cy.get('body').then(($body) => {
      const isHidden = $body.find('.sv-popup.spg-dropdown-popup[style*="display: none"]').length > 0;
      if (isHidden) {
        cy.log('Dropdown closed unexpectedly — reopening...');
        this.elements.fontFamilyDescriptionDropdown({ timeout: 10000 }).scrollIntoView({ ensureScrollable: false }).click({ force: true });
        cy.wait(1000);
      }
    });

    this.elements.dropdownPopup().find('.sv-list__item-body').should('have.length.greaterThan', 0);
    cy.get('body').then(($body) => {
      const hasOption = $body.find(`.sv-list__item-body[title="${fontFamily}"]`).length > 0;
      if (!hasOption) {
        throw new Error(`Font family option "${fontFamily}" not found in dropdown!`);
      } else {
        cy.log(`Font family option "${fontFamily}" found.`);
      }
    });

    this.elements.fontFamilyDropdownOption(fontFamily, { timeout: 10000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true });
    this.elements.fontFamilyDescriptionDropdown().invoke('text')
      .then((selectedText) => {
        const normalized = selectedText.trim();
        if (!normalized.includes(fontFamily)) {
          cy.log(`Dropdown text mismatch: expected "${fontFamily}", got "${normalized}"`);
          this.elements.fontFamilyDropdownOption(fontFamily).should('contain.text', fontFamily);
        } else {
          cy.log(`Verified font family "${fontFamily}" successfully selected.`);
        }
      });

    this.elements.descriptionThemeLocation({ timeout: 30000 }).should('exist').then(($el) => {
      const element = $el[0];
      const computedStyle = window.getComputedStyle(element);
      const newFontFamily = computedStyle.fontFamily;
      const newFontWeight = computedStyle.fontWeight;
      const newFontSize = computedStyle.fontSize;
      cy.get('@beforeFontStyles').then((before) => {
        cy.log('Font Style Changes:');
        cy.log(`Font Family: BEFORE -> ${before.fontFamily}, AFTER -> ${newFontFamily}`);
        cy.log(`Font Weight: BEFORE -> ${before.fontWeight}, AFTER -> ${newFontWeight}`);
        cy.log(`Font Size: BEFORE -> ${before.fontSize}, AFTER -> ${newFontSize}`);
      });
    });
  }

verifyChangingDescriptionwidthChanges() {
  cy.log(' Verifying description font weight changes');

  this.elements.descriptionThemeLocation({ timeout: 30000 }).then($desc => {
    if ($desc.length > 0) {
      const defaultBold = parseInt(getComputedStyle($desc[0]).fontWeight);
      cy.log(`Default Bold: ${defaultBold}`);

      this.elements.themeSettingsButton({ timeout: 30000 }).then($themeBtn => {
        if ($themeBtn.length > 0) {
          cy.wrap($themeBtn).click({ force: true });
          cy.log('Theme Settings button clicked');

          this.elements.headerSessionTheme({ timeout: 30000 }).click({ force: true });
          cy.log('Header session theme opened');

          this.elements.heavyRadioButtonDescription({ timeout: 30000 }).then($heavy => {
            if ($heavy.length > 0) {
              cy.wrap($heavy).click({ force: true });
              cy.wait(3000);

              this.elements.descriptionThemeLocation().then($afterHeavy => {
                const heavyWeight = parseInt(getComputedStyle($afterHeavy[0]).fontWeight);
                cy.log(`Font Weight after Heavy: ${heavyWeight}`);
                expect(heavyWeight).to.be.greaterThan(defaultBold);

                this.elements.boldRadioButtonDescription({ timeout: 30000 }).then($bold => {
                  if ($bold.length > 0) {
                    cy.wrap($bold).click({ force: true });
                    cy.wait(3000);

                    this.elements.descriptionThemeLocation().then($afterBold => {
                      const boldWeight = parseInt(getComputedStyle($afterBold[0]).fontWeight);
                      cy.log(`Font Weight after Bold: ${boldWeight}`);
                      expect(boldWeight).to.be.lessThan(heavyWeight);

                      this.elements.semiboldRadioButtonDescription({ timeout: 30000 }).then($semi => {
                        if ($semi.length > 0) {
                          cy.wrap($semi).click({ force: true });
                          cy.wait(3000);

                          this.elements.descriptionThemeLocation().then($afterSemi => {
                            const semiWeight = parseInt(getComputedStyle($afterSemi[0]).fontWeight);
                            cy.log(`Font Weight after Semi-Bold: ${semiWeight}`);
                            expect(semiWeight).to.be.lessThan(heavyWeight);
                            cy.log('Description font weight changes verified');
                          });
                        } else {
                          const errorMsg = 'Semi-Bold radio button not found'; cy.log(errorMsg); throw new Error(errorMsg);
                        }
                      });
                    });
                  } else {
                    const errorMsg = 'Bold radio button not found'; cy.log(errorMsg); throw new Error(errorMsg);
                  }
                });
              });
            } else {
              const errorMsg = 'Heavy radio button not found'; cy.log(errorMsg); throw new Error(errorMsg);
            }
          });
        } else {
          const errorMsg = 'Theme Settings button not found'; cy.log(errorMsg); throw new Error(errorMsg);
        }
      });
    } else {
      const errorMsg = 'Description theme location not found'; cy.log(errorMsg); throw new Error(errorMsg);
    }
  });
}

  verifySaveAsDraftAlert() {
  cy.log('Verifying Save As Draft alert');

  this.elements.saveAsDraftButton({ timeout: 30000 }).then($btn => {
    if ($btn.is(':visible')) {
      cy.log('  Save As Draft button is visible');
      cy.wrap($btn).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      cy.log('  Save As Draft button clicked');
    } else {
      const errorMsg = '  Save As Draft button not visible'; cy.log(errorMsg); throw new Error(errorMsg);
    }
  });
  this.elements.responseRequiredSuccess({ timeout: 30000 }).then($el => {
    if ($el.is(':visible')) {
      cy.log('  Draft success alert is visible');
      cy.wrap($el)
        .should('contain.text', Messages.getMessage("SURVEY_DRAFT_MESSAGE"))
        .then(() => cy.log('  Save As Draft alert message verified'));
    } else {
      const errorMsg = '  Save As Draft alert not displayed'; cy.log(errorMsg); throw new Error(errorMsg);
    }
  });
}

verifyChangingDescriptionThemeFontSizeChanges() {
  cy.log('🔠 Verifying description theme font size changes');

  this.elements.sureveyDescriptionTheme({ timeout: 30000 }).then($desc => {
    if ($desc.length > 0) {
      const before = parseFloat(getComputedStyle($desc[0]).fontSize);
      cy.log(`Initial font size: ${before}`);

      this.elements.themeSettingsButton({ timeout: 30000 }).then($themeBtn => {
        if ($themeBtn.length > 0) {
          cy.wrap($themeBtn).click({ force: true });
          cy.log('Theme Settings button clicked');

          this.elements.headerSessionTheme({ timeout: 30000 }).then($header => {
            if ($header.length > 0) {
              cy.wrap($header).click({ force: true });
              cy.log('Header session theme opened');

              this.elements.sureveyDescriptionThemeUpArrow({ timeout: 30000 }).then($up => {
                if ($up.length > 0) {
                  cy.wrap($up).click({ force: true });
                  cy.log('⬆ Up arrow clicked');
                  cy.wait(1000);

                  this.elements.previewTab({ timeout: 30000 }).then($preview => {
                    if ($preview.length > 0) {
                      cy.wrap($preview).click({ force: true });

                      this.elements.sureveyDescriptionPreview().then($previewText => {
                        const afterUp = parseFloat(getComputedStyle($previewText[0]).fontSize);
                        cy.log(`Font size after Up Arrow: ${afterUp}`);
                        expect(afterUp - before).to.be.closeTo(1, 0.1);

                        this.elements.themesTab({ timeout: 30000 }).then($themes => {
                          if ($themes.length > 0) {
                            cy.wrap($themes).click({ force: true });

                            this.elements.sureveyDescriptionThemeDownArrow({ timeout: 30000 }).then($down => {
                              if ($down.length > 0) {
                                cy.wrap($down).click({ force: true });
                                cy.log('⬇ Down arrow clicked');
                                cy.wait(1000);

                                this.elements.previewTab().click({ force: true });
                                this.elements.sureveyDescriptionPreview().then($previewDown => {
                                  const afterDown = parseFloat(getComputedStyle($previewDown[0]).fontSize);
                                  cy.log(`Font size after Down Arrow: ${afterDown}`);
                                  expect(afterUp - afterDown).to.be.closeTo(1, 0.1);
                                  cy.log('Description font size changes verified');
                                });
                              } else {
                                const errorMsg = 'Down arrow not found'; cy.log(errorMsg); throw new Error(errorMsg);
                              }
                            });
                          } else {
                            const errorMsg = 'Themes tab not found'; cy.log(errorMsg); throw new Error(errorMsg);
                          }
                        });
                      });
                    } else {
                      const errorMsg = 'Preview tab not found'; cy.log(errorMsg); throw new Error(errorMsg);
                    }
                  });
                } else {
                  const errorMsg = 'Up arrow not found'; cy.log(errorMsg); throw new Error(errorMsg);
                }
              });
            } else {
              const errorMsg = 'Header session theme not found'; cy.log(errorMsg); throw new Error(errorMsg);
            }
          });
        } else {
          const errorMsg = 'Theme Settings button not found'; cy.log(errorMsg); throw new Error(errorMsg);
        }
      });
    } else {
      const errorMsg = 'Description theme element not found'; cy.log(errorMsg); throw new Error(errorMsg);
    }
  });
}

verifyLogoAlignmentChange() {
  cy.log('🔄 Verifying logo alignment change');

  this.elements.logoContainer({ timeout: 30000 }).then($logo => {
    if ($logo.length > 0) {
      const initialClass = $logo.attr('class');
      cy.log(`Initial logo class: ${initialClass}`);
      expect(initialClass).to.include('sv-logo--right');

      this.elements.themeSettingsButton({ timeout: 30000 }).then($themeBtn => {
        if ($themeBtn.length > 0) {
          cy.wrap($themeBtn).click({ force: true });
          this.elements.headerSessionTheme().click({ force: true });

          this.elements.logoLeftButton({ timeout: 30000 }).then($leftBtn => {
            if ($leftBtn.length > 0) {
              cy.wrap($leftBtn).click({ force: true });
              cy.log('Logo alignment changed to left');
              cy.wait(1000);

              this.elements.logoContainer().then($updatedLogo => {
                if ($updatedLogo.length > 0) {
                  const updatedClass = $updatedLogo.attr('class');
                  cy.log(`Updated logo class: ${updatedClass}`);
                  expect(updatedClass).to.include('sv-logo--left');
                  expect(updatedClass).not.to.eq(initialClass);
                  cy.log('Logo alignment successfully verified');
                } else {
                  const errorMsg = 'Logo container not found after changing alignment'; cy.log(errorMsg); throw new Error(errorMsg);
                }
              });
            } else {
              const errorMsg = 'Logo Left button not found'; cy.log(errorMsg); throw new Error(errorMsg);
            }
          });
        } else {
          const errorMsg = 'Theme Settings button not found'; cy.log(errorMsg); throw new Error(errorMsg);
        }
      });
    } else {
      const errorMsg = 'Logo container not found'; cy.log(errorMsg); throw new Error(errorMsg);
    }
  });
}

transstionTabInvisible() {
  cy.log('  Checking that Translations tab is NOT visible');

  cy.document().then(doc => {
    const el = doc.querySelector('[data-testid="translations-tab"], .translations-tab');

    if (!el) {
      cy.log('  Translations tab is not visible');
      console.log('Translations tab is not visible');
    } else { 
        const errorMsg = '  Translations tab IS visible (Expected NOT visible)'; cy.log(errorMsg); throw new Error(errorMsg); 
    }
  });
}

createSurveyAddMultiLanguage({ Department, Language, "Expiry Date": ExpiryDate, "Wait Period": WaitPeriod, Description, Language2 }) {

  cy.log("  Step 1: Clicking Add Survey button");
  this.elements.addSurvey().eq(1).then($btn => {
    if ($btn.length > 0) {
      cy.log(" Add Survey button found");
      cy.wrap($btn).click({ force: true, timeout: 120000 });
    } else {
      const errorMsg = " Add Survey button NOT found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
  cy.log("  Step 2: Generating random survey name");
  this.surveyName = faker.word.words(2) + ' Survey';
  cy.log(`Survey Name: ${this.surveyName}`);

  cy.log("  Step 3: Typing survey name");
  this.elements.surveyName().then($el => {
    if ($el.length > 0) {
      cy.log(" Survey Name field found");
      cy.wrap($el).type(this.surveyName).should('have.value', this.surveyName);
    } else {
      const errorMsg = " Survey Name field NOT found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  // Select Department
  cy.log(" Step 4: Selecting Department");
  this.elements.surveyDepartmentDropdown().then($el => {
    if ($el.length > 0) {
      cy.log(" Department dropdown found");
      cy.wrap($el).click();
      this.elements.dropdownOptions().contains(Department).click();
      cy.log(` Department selected: ${Department}`);
    } else {
      const errorMsg = "  Survey Department dropdown NOT found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  // Select Languages
  cy.log("  Step 5: Selecting Languages");
  this.elements.languageDropdown().then($el => {
    if ($el.length > 0) {
      cy.log("  Language dropdown found");
      cy.wrap($el).click();

      this.elements.dropdownOptions().contains(Language).click();
      cy.log(`  Language 1 selected: ${Language}`);

      this.elements.dropdownOptions().contains(Language2).click();
      cy.log(`  Language 2 selected: ${Language2}`);
    } else {
      const errorMsg = "  Language dropdown NOT found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  // Expiry Date
  cy.log("  Step 6: Setting Expiry Date");
  this.elements.expiryDate().then($el => {
    if ($el.length > 0) {
      cy.log("  Expiry Date input found");
      cy.setDateValue($el, ExpiryDate).should('have.value', ExpiryDate);
      cy.log(` Expiry Date set: ${ExpiryDate}`);
    } else {
      const errorMsg = "  Expiry Date input NOT found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  // Wait Period
  cy.log("  Step 7: Setting Wait Period");
  this.elements.resendWaitPeriod().then($el => {
    if ($el.length > 0) {
      cy.log("  Wait Period field found");
      cy.wrap($el).clear().type(WaitPeriod || "2");
      cy.log(` Wait Period set: ${WaitPeriod}`);
    } else {
      const errorMsg = "  Wait Period field NOT found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  // Description
  cy.log("  Step 8: Typing Description");
  this.elements.description().then($el => {
    if ($el.length > 0) {
      cy.log("  Description field found");
      cy.wrap($el).type(Description || "Sample survey description");
      cy.log(`  Description entered`);
    } else {
      const errorMsg = "  Description field NOT found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  // Click Next
  cy.log("  Step 9: Clicking Next button");
  this.elements.nextBtn({ timeout: 90000 }).then($btn => {
    if ($btn.length > 0) {
      cy.log("  Next button found");
      cy.wrap($btn).click({ timeout: 90000 });
      cy.log("  Move to next page");
    } else {
      const errorMsg = "  Next button NOT found";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  // Save survey name
  cy.log("  Step 10: Storing created survey name");
  cy.wrap(this.surveyName).as('createdSurveyName');

  return this.surveyName;
}

translationTabClick() {
  cy.log('Clicking Translations tab');
  this.elements.translationsTab({ timeout: 30000 }).then($tab => {
    if ($tab.is(':visible')) {
      cy.log('  Translations tab is visible');
      cy.wrap($tab)
        .scrollIntoView({ ensureScrollable: false })
        .click({ force: true });
      cy.log('  Translations tab clicked');
    } else {
      const errorMsg = '  Translations tab not visible'; cy.log(errorMsg); throw new Error(errorMsg);
    }
  });
}

enterArabicTranslations(title, description, question, item1, item2, item3) {
  cy.log('Entering Arabic translations');

  this.elements.arabicTextInputPlaceHolder().eq(1).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).type(title).should('have.value', title);
      cy.log('  Arabic Title entered');
    } else { const errorMsg = '  Arabic Title input not found'; cy.log(errorMsg); throw new Error(errorMsg); }
  });

  this.elements.arabicTextInputPlaceHolder().eq(3).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).type(description).should('have.value', description);
      cy.log('  Arabic Description entered');
    } else { const errorMsg = '  Arabic Description input not found'; cy.log(errorMsg); throw new Error(errorMsg); }
  });

  this.elements.arabicTextInputPlaceHolder().eq(5).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).type(question).should('have.value', question);
      cy.log('  Arabic Question entered');
    } else { const errorMsg = '  Arabic Question input not found'; cy.log(errorMsg); throw new Error(errorMsg); }
  });

  this.elements.arabicTextInputPlaceHolder().eq(7).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).type(item1).should('have.value', item1);
      cy.log('  Arabic Item1 entered');
    } else { const errorMsg = '  Arabic Item1 input not found'; cy.log(errorMsg); throw new Error(errorMsg); }
  });

  this.elements.arabicTextInputPlaceHolder().eq(9).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).type(item2).should('have.value', item2);
      cy.log('  Arabic Item2 entered');
    } else { const errorMsg = '  Arabic Item2 input not found'; cy.log(errorMsg); throw new Error(errorMsg); }
  });

  this.elements.arabicTextInputPlaceHolder().eq(11).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).type(item3).should('have.value', item3);
      cy.log('  Arabic Item3 entered');
      cy.log('Arabic translations entered successfully');
    } else { const errorMsg = '  Arabic Item3 input not found'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}

clearArabicTranslationColumn() {
  const positions = [1, 3, 5];
  cy.log('Starting to clear Arabic translation fields');

  positions.forEach((pos) => {
    cy.get('textarea.st-comment').eq(pos).then(($el) => {
      if ($el.length) {
        cy.wrap($el)
          .should('be.visible')
          .clear({ force: true });
        cy.log(`Cleared field at position ${pos}`);
      } else {
        const errorMsg = `  Error: Field at position ${pos} not found`;
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    });
  });
}

verifySureyTranslatesAddAlert() {
  cy.log('Verifying survey translation add alert');

  cy.log("STEP 1: Checking 'Send for Review' button");
  this.elements.sendForReviewButton({ timeout: 30000 }).then($btn => {
    if ($btn.is(':visible')) {
      cy.wrap($btn)
        .scrollIntoView({ ensureScrollable: false })
        .click({ force: true });
      cy.log("  'Send for Review' button clicked");

      cy.log("STEP 2: Checking translation add error alert");
      this.elements.responseRequiredError({ timeout: 30000 }).then($alert => {
        if ($alert.is(':visible')) {
          cy.wrap($alert)
            .should('contain.text', Messages.getMessage("SURVEY_TRANSLATION_ADD_ALERT"))
            .then(el => cy.log(`  Alert displayed: ${el.text()}`));
          cy.log('  Survey translation add alert verified');
        } else { const errorMsg = '  Survey translation add alert not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
      });

    } else { const errorMsg = "  'Send for Review' button not visible"; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}

verifyLogicConditionsDelete() {
  cy.log('Verifying deletion of logic conditions');
  cy.log('Hovering on delete logic icon');
  this.elements.deleteLogic().realHover({ position: 'center' });
  cy.log('Clicking delete logic icon');
  this.elements.deleteLogic({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true });
  cy.log('Verifying AND logic is removed');
  this.elements.andLogic({ timeout: 30000 }).should('not.exist');
  cy.log('Verifying Select logic is removed');
  this.elements.selectLogic({ timeout: 30000 }).should('not.exist');
  cy.log('Verifying Equal logic is removed');
  this.elements.equalLogic({ timeout: 30000 }).should('not.exist');
  cy.log('Verifying Delete logic icon is removed');
  this.elements.deleteLogic({ timeout: 30000 }).should('not.exist');
  cy.log('Logic condition deletion verified successfully');
}

verifyLogic1ConditionElements() {
  cy.log('Verifying Logic Condition 1 elements');
  cy.log('  Clicking Add Condition button');
  this.elements.addPanelButton({ timeout: 30000 }).first().scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true });
  cy.log('  Verifying AND logic is visible');
  this.elements.and1Logic({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible');
  cy.log('  Verifying Select logic is visible');
  this.elements.select1Logic({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible');
  cy.log('  Verifying Equal logic is visible');
  this.elements.equal1Logic({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible');
  cy.log('  Verifying Delete logic icon is visible');
  this.elements.delete1Logic({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible');
  cy.log('  Logic Condition 1 elements verified successfully');
}

verifySurveyListVisible() {
  cy.log('Verifying Survey List page visibility');
  cy.wait(5000);

  this.elements.surveyListPage().then($el => {
    if ($el.length > 0) {
      const isVisible = $el.is(':visible');
      const hasText = $el.text().includes('Survey List');

      if (isVisible && hasText) {
        cy.log('  Survey List page is visible');
      } else { const errorMsg = '  Survey List page NOT visible or missing expected text'; cy.log(errorMsg); throw new Error(errorMsg); }

    } else { const errorMsg = '  Survey List page element not found'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}

addingPage1QuestionRadioButton() {
  cy.log('➕ Adding first page question (Radio Button)');

  this.elements.addQuestionButton({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
    if ($el.is(':visible')) { cy.wrap($el).click({ force: true }); cy.log('Add Question button clicked'); }
    else { const errorMsg = 'Add Question button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
  cy.wait(1000);
  this.surveyTitle = faker.word.words(2) + ' Title';

  this.elements.surveyTitle({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
    if ($el.is(':visible')) { cy.wrap($el).clear().type(this.surveyTitle); cy.log(`Survey Title entered: ${this.surveyTitle}`); }
    else { const errorMsg = 'Survey Title input not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });

  this.elements.surveyTitleDescription({ timeout: 30000 }).then($el => {
    if ($el.is(':visible')) { cy.wrap($el).type('Sample survey description'); cy.log('Survey description entered'); }
    else { const errorMsg = 'Survey description input not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });

  this.enterQuestion1();

  this.elements.selectQuestionType2Dropdown().scrollIntoView({ ensureScrollable: false }).trigger('mouseover');

  this.elements.questionTypeDropdownButton().then($el => {
    if ($el.is(':visible')) { cy.wrap($el).click({ force: true }); cy.log('Question type dropdown opened'); }
    else { const errorMsg = 'Question type dropdown not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });

  this.elements.questionTypeOptions().contains('Radio Button Group').then($el => {
    if ($el.is(':visible')) { cy.wrap($el).click({ force: true }); cy.log('Radio Button Group selected'); }
    else { const errorMsg = 'Radio Button Group option not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });

  this.captureCheckboxNumbersItemsNames();
  cy.log('Checkbox numbers and item names captured');
}

logicTabClick() {
  cy.log('Clicking Logic tab');
  this.elements.logicTab({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($tab => {
    if ($tab.length && $tab.is(':visible')) {
      cy.wrap($tab).click({ force: true }); cy.log('  Logic tab clicked');
    } else {
      const errorMsg = '  Error: Logic tab not visible'; cy.log(errorMsg); throw new Error(errorMsg);
    }
  });
}

verifyLogicTab() {
  cy.log('Verifying Logic tab elements');
  this.elements.addNewRuleBtn().then($btn => {
    if ($btn.length && $btn.is(':visible') && $btn.text().trim() === 'Add New Rule') {
      cy.log('  Add New Rule button visible with correct text');
    } else {
      const errorMsg = '  Error: Add New Rule button not visible or incorrect text'; cy.log(errorMsg); throw new Error(errorMsg);
    }
  });
  this.elements.logicPlaceholderText().scrollIntoView({ ensureScrollable: false }).then($text => {
    if ($text.length &&
        $text.text().includes(Messages.getMessage("SURVEY_NO_LOGIC")) &&
        $text.text().includes(Messages.getMessage("SURVEY_LOGIC_CREATE_RULE"))) {
      cy.log('  Logic placeholder messages visible');
    } else {
      const errorMsg = '  Error: Missing one or more logic placeholder texts'; cy.log(errorMsg); throw new Error(errorMsg);
    }
  });
}

verifyNewRuleVisible() {
  cy.log('Verifying New Rule visibility'); this.verifyLogicTab();
  this.elements.addNewRuleBtn().then($btn => {
    if ($btn.length && $btn.is(':visible')) {
      cy.wrap($btn).click({ force: true });

      this.elements.newRuleBtn().then($newRule => {
        if ($newRule.length && $newRule.is(':visible') && $newRule.text().trim() === 'New rule') {
          cy.log('  "New rule" heading is visible');
        } else {
          const errorMsg = '  Error: "New rule" heading not visible or incorrect text'; cy.log(errorMsg); throw new Error(errorMsg);
        }
      });
    } else {
      const errorMsg = '  Error: Add New Rule button not visible'; cy.log(errorMsg); throw new Error(errorMsg);
    }
  });
}

selectLogicQuestion(questionName) {
  cy.log(`  Selecting logic question: ${questionName}`);

  this.elements.selectlogicQuestionDropdown().then($dropdown => {
    if ($dropdown.length && $dropdown.is(':visible')) {
      cy.wrap($dropdown).click({ force: true });

      this.elements.logicQuestionOption(questionName).then($option => {
        if ($option.length && $option.is(':visible')) {
          cy.wrap($option).click({ force: true }); cy.log(`  Selected logic question: ${questionName}`);

          cy.get('@enteredQuestion1').then(enteredQuestionText => {
            cy.log(`Verifying logic question matches entered question: ${enteredQuestionText}`);

            this.elements.question1Logic({ timeout: 30000 }).then($displayed => {
              if ($displayed.length && $displayed.is(':visible')) {
                const text = $displayed.text().trim(); cy.log(`Displayed logic question: ${text}`);

                if (text.includes(enteredQuestionText.trim())) cy.log('  Logic condition displays the correct question');
                else { const errorMsg = '  Error: Displayed logic question does not match entered question'; cy.log(errorMsg); throw new Error(errorMsg); }

              } else { const errorMsg = '  Error: Logic question text not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
            });
          });

        } else { const errorMsg = `  Error: Logic question option "${questionName}" not visible`; cy.log(errorMsg); throw new Error(errorMsg); }
      });

    } else { const errorMsg = '  Error: Logic question dropdown not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}

addConditionLogicQuestion(condition) {
  cy.log(`➕ Adding condition logic question: ${condition}`);

  this.elements.conditionQuestionDropdown().then($dropdown => {
    if ($dropdown.length && $dropdown.is(':visible')) {
      cy.wrap($dropdown).click({ force: true });

      this.elements.logicQuestionOption(condition).then($option => {
        if ($option.length && $option.is(':visible')) {
          cy.wrap($option).click({ force: true }); cy.log(`  Applied condition logic question: ${condition}`);
        } else { const errorMsg = `  Error: Condition logic option "${condition}" not visible`; cy.log(errorMsg); throw new Error(errorMsg); }
      });

    } else { const errorMsg = '  Error: Condition question dropdown not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}

clickAndVerifyFirstRadio() {
  cy.log(' Clicking first radio item and verifying selection');
  this.elements.radioItems({ timeout: 30000 }).first().then($radio => {
    if ($radio.is(':visible')) {
      cy.wrap($radio).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      this.elements.radioItemsCheched({ timeout: 30000 }).first().then($checked => {
        if ($checked.hasClass('sd-item--checked')) cy.log('  First radio item is selected');
        else { const errorMsg = '  Error: First radio item not selected'; cy.log(errorMsg); throw new Error(errorMsg); }
      });
    } else { const errorMsg = '  Error: First radio item not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}

verifyLogicConditionElements() {
  cy.log('  Verifying logic condition elements presence');
  this.elements.addPanelButton({ timeout: 30000 }).first().then($btn => {
    if ($btn.is(':visible')) {
      cy.wrap($btn).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      const elementsToCheck = [
        { el: this.elements.andLogic({ timeout: 30000 }), name: 'AND logic' },
        { el: this.elements.selectLogic({ timeout: 30000 }), name: 'Select logic' },
        { el: this.elements.equalLogic({ timeout: 30000 }), name: 'Equal logic' },
        { el: this.elements.deleteLogic({ timeout: 30000 }), name: 'Delete logic' }
      ];
      elementsToCheck.forEach(({ el, name }) => {
        el.then($el => {
          if ($el.is(':visible')) cy.log(`  ${name} element is visible`);
          else { const errorMsg = `  Error: ${name} element not visible`; cy.log(errorMsg); throw new Error(errorMsg); }
        });
      });
    } else { const errorMsg = '  Error: Add Panel button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}

selectLogicQuestion2(questionName) {
  cy.log(`Selecting second logic question: "${questionName}"`);
  this.elements.selectlogicQuestionDropdown().then($dropdown => {
    if ($dropdown.is(':visible')) {
      cy.wrap($dropdown).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      cy.log('Logic question dropdown opened');
      this.elements.logicQuestion2Input({ timeout: 30000 }).then($input => {
        if ($input.is(':visible')) {
          cy.wrap($input).clear({ force: true }).type(questionName, { force: true });
          cy.log(`Typed question name: "${questionName}"`);
          this.elements.logicQuestion2SortedOption({ timeout: 30000 }).contains(questionName).then($option => {
            if ($option.is(':visible')) {
              cy.wrap($option).scrollIntoView({ ensureScrollable: false }).click({ force: true });
              cy.log(`Selected logic question: "${questionName}"`);
              this.elements.logicQuestion2Input().invoke('val').then(val => {
                if (val === questionName) cy.log(`Verified selected value: "${val}"`);
                else { const errorMsg = `Logic question value mismatch. Expected "${questionName}", found "${val}"`; cy.log(errorMsg); throw new Error(errorMsg); }
              });
            } else { const errorMsg = `Option "${questionName}" not visible`; cy.log(errorMsg); throw new Error(errorMsg); }
          });
        } else { const errorMsg = 'Logic question input not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
      });
    } else { const errorMsg = 'Logic question dropdown not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}

clickAndVerifyFirstRadioQuestion1() {
  cy.log('Clicking first radio option for Question 1');
  this.elements.radio1Items({ timeout: 30000 }).first().scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true });
  cy.log('First radio option clicked');

  cy.log('Verifying first radio option is selected');
  this.elements.radio1ItemsCheched({ timeout: 30000 }).first().scrollIntoView({ ensureScrollable: false }).should('be.visible').should('have.class', 'sd-item--checked');
  cy.log('First radio option is selected');
}

  selectLogicPage2Question(questionName) {
    this.elements.selectlogicPage2QuestionDropdown().should('be.visible').click({ force: true });
    this.elements.selectlogicPage2QuestionDropdown().should('be.visible').click({ force: true });
    this.elements.logicQuestionPage2Input({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible').clear().type(questionName);
    this.elements.logicQuestionPage2SortedOption({ timeout: 30000 }).contains(questionName).click({ force: true });
    cy.log(`Selected logic question: ${questionName}`);
  }

addConditionLogicQuestion2(condition) {
  cy.log(`Applying condition logic question 2: "${condition}"`);
  this.elements.equal1Logic({ timeout: 30000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      cy.log('Equal condition dropdown opened');
      this.elements.dropdownQuestion2Option().eq(4).then($dropdown => {
        if ($dropdown.length) {
          cy.wrap($dropdown).within(() => {
            cy.contains(condition).click({ force: true });
          });
          cy.log(`Applied condition logic question: "${condition}"`);
        } else {
          const errorMsg = `Dropdown option for condition "${condition}" not found`; cy.log(errorMsg); throw new Error(errorMsg);
        }
      });
    } else {
      const errorMsg = 'Equal1 logic element not visible'; cy.log(errorMsg); throw new Error(errorMsg);
    }
  });
}

clickAndVerifyFirstRadioForQuestion2() {
  cy.log('Clicking and verifying first radio option for Question 2');
  this.elements.radioItemsQuestion2({ timeout: 30000 }).first().then($radio => {
    if ($radio.is(':visible')) {
      cy.wrap($radio).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      cy.log('First radio option for Question 2 clicked');
      this.elements.radioItemsQuestion2Cheched({ timeout: 30000 }).first().then($checked => {
        if ($checked.hasClass('sd-item--checked')) {
          cy.log('First radio for Question 2 verified as selected');
        } else {
          const errorMsg = 'Error: First radio for Question 2 not selected'; cy.log(errorMsg); throw new Error(errorMsg);
        }
      });
    } else {
      const errorMsg = 'Error: First radio for Question 2 not visible'; cy.log(errorMsg); throw new Error(errorMsg);
    }
  });
}


verifyLogic2ConditionElements() {
  cy.log('  Verifying second logic condition elements');

  this.elements.addPanelButton({ timeout: 30000 }).first().then(($btn) => {
    if ($btn.is(':visible')) {
      $btn.scrollIntoView({ ensureScrollable: false }).click({ force: true });

      const elementsToCheck = ['and2Logic', 'select2Logic', 'equal2Logic', 'delete2Logic'];
      elementsToCheck.forEach((el) => {
        this.elements[el]({ timeout: 30000 }).then(($elCheck) => {
          if ($elCheck.is(':visible')) {
            cy.log(`  ${el} is visible`);
          } else {
            const errorMsg = `  Error: ${el} not visible`;
            cy.log(errorMsg);
            throw new Error(errorMsg);
          }
        });
      });

    } else {
      const errorMsg = '  Error: Add Panel button not visible for second logic';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

addingMultiplePagesMultipleQuestionsRadioButton() {
  cy.log('Adding multiple pages with multiple questions (Radio Button)');
    this.elements.addQuestionButton({ timeout: 30000 }).then($addBtn => {
    if ($addBtn.length > 0) {
      cy.wrap($addBtn).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true });
      cy.log('Add Question button clicked');
      
      this.surveyTitle = faker.word.words(2) + ' Title'; cy.log(`  Generated Survey Title: ${this.surveyTitle}`);
      this.elements.surveyTitle().type(this.surveyTitle); cy.wrap(this.surveyTitle).as('surveyTitle'); cy.log('  Survey title entered');
      this.elements.surveyTitleDescription().type('Sample survey description'); cy.log('  Survey description entered');
      
      cy.log('Entering Question 1'); this.enterQuestion1();
      this.elements.selectQuestionType2Dropdown().trigger('mouseover'); cy.log('  Question type dropdown hovered');
      this.elements.questionTypeDropdownButton().click(); cy.log('  Question type dropdown clicked');
      this.elements.questionTypeOptions().contains('Radio Button Group').click(); cy.log('  "Radio Button Group" selected for Question 1');
      this.captureCheckboxNumbersItemsNames(); cy.log('  Checkbox numbers and items captured for Question 1');
      
      cy.log('Adding Question 2 on Page 2'); this.elements.addQuestionBtnAdditional().click({ force: true }); cy.log('  Add Additional Question button clicked');
      this.enterQuestion2(); cy.log('  Question 2 entered');
      this.elements.selectQuestionType2Dropdown().trigger('mouseover'); cy.log('  Question type dropdown hovered for Question 2');
      this.elements.questionTypeDropdownButton().click(); cy.log('  Question type dropdown clicked for Question 2');
      this.elements.questionTypeOptions().contains('Radio Button Group').click(); cy.log('  "Radio Button Group" selected for Question 2');
      this.captureCheckboxNumbersItemsNames2(); cy.log('  Checkbox numbers and items captured for Question 2');

      this.addingPage2Data(); cy.log('Multiple pages with multiple questions added successfully');

    } else { const errorMsg = '  Error: Add Question button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}

selectAction(condition) {
  cy.log(`Selecting action: "${condition}"`);
  this.elements.selectAction().then($action => {
    if ($action.is(':visible')) {
      cy.wrap($action).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      cy.log('Action dropdown opened');
      this.elements.dropdownQuestion2Option().eq(5).find('.sv-list__item').then($items => {
        const actual = [...$items].map(i => i.innerText.trim());
        if (JSON.stringify(actual) === JSON.stringify(this.expectedOptions)) {
          cy.log('Verified dropdown options match expected');
        } else {
          const errorMsg = 'Dropdown options mismatch'; cy.log(errorMsg); throw new Error(errorMsg);
        }
      });
      this.elements.dropdownQuestion2Option().eq(5).within(() => {
        cy.contains(condition).click({ force: true });
        cy.log(`Applied condition: "${condition}"`);
      });
      cy.get('#sq_1551i .sl-dropdown__value div').click();
      cy.log('Action selection confirmed');
    } else {
      const errorMsg = 'Error: Select action dropdown not visible'; cy.log(errorMsg); throw new Error(errorMsg);
    }
  });
}

  verifyQuestionsAfterDoneLogic() {
    this.elements.doneButton({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true });
    this.elements.newRuleBtn().should('not.exist').then(() => cy.log('"New rule" heading is not visible'));
    this.elements.logicRuleSummary({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false })
      .should('contain.text', Messages.getMessage("LOGIC_RULE_SUMMARY"));
  }

verifyLogicRuleAfterEditedQuestionSummary() {
  cy.log('Clicking Done button');
  this.elements.doneButton({ timeout: 30000 })
    .scrollIntoView({ ensureScrollable: false })
    .should('be.visible')
    .click({ force: true });
  cy.log('Done button clicked');

  cy.log('Verifying "New rule" heading is removed');
  this.elements.newRuleBtn().should('not.exist');
  cy.log('"New rule" heading is not visible');

  cy.log('Verifying edited logic rule summary text');
  this.elements.logicRuleSummary({ timeout: 30000 })
    .scrollIntoView({ ensureScrollable: false })
    .should('contain.text', Messages.getMessage("LOGIC_RULE_EDITED_QUESTION_SUMMARY"));
  cy.log('Edited logic rule summary verified');
}

editRuleFunctionality(questionName) {
  cy.log(`Editing rule to select question: "${questionName}"`);
  this.elements.editRule({ timeout: 30000 }).then($editBtn => {
    if ($editBtn.is(':visible')) {
      cy.wrap($editBtn).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      cy.log('Edit rule button clicked');
      this.elements.editRukeQuestion2().scrollIntoView({ ensureScrollable: false }).then($questionBtn => {
        if ($questionBtn.is(':visible')) {
          cy.wrap($questionBtn).scrollIntoView({ ensureScrollable: false }).click({ force: true });
          cy.log('Edit question dropdown opened');
          this.elements.logicQuestion2Input({ timeout: 30000 }).then($input => {
            if ($input.is(':visible')) {
              cy.wrap($input).clear().type(questionName);
              cy.log(`Typed question name: "${questionName}"`);
              this.elements.editRukeQuestion2SortedOption({ timeout: 30000 }).contains(questionName).then($option => {
                if ($option.length) {
                  cy.wrap($option).click({ force: true });
                  cy.log(`Selected logic question: "${questionName}"`);
                } else {
                  const errorMsg = `Option "${questionName}" not found`;
                  cy.log(errorMsg);
                  throw new Error(errorMsg);
                }
              });
            } else {
              const errorMsg = 'Logic question input not visible';
              cy.log(errorMsg);
              throw new Error(errorMsg);
            }
          });
        } else {
          const errorMsg = 'Edit question button not visible';
          cy.log(errorMsg);
          throw new Error(errorMsg);
        }
      });
    } else {
      const errorMsg = 'Edit rule button not visible';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

addConditionEditRuleQuestion2(condition) {
  cy.log(`Adding condition "${condition}" to edited rule`);
  this.elements.equal1Logic().then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Equal condition dropdown opened');
      this.elements.dropdownQuestion2Option().eq(4).then($dropdown => {
        if ($dropdown.length) {
          cy.log('Condition dropdown list visible');
          cy.wrap($dropdown).within(() => {
            cy.contains(condition).click({ force: true });
          });
          cy.log(`Condition "${condition}" applied successfully`);
        } else {
          const errorMsg = `Dropdown for condition "${condition}" not found`;
          cy.log(errorMsg);
          throw new Error(errorMsg);
        }
      });
    } else {
      const errorMsg = 'Equal1 logic element not visible';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

deleteRuleFunctionality() {
  cy.log('Deleting rule');
  this.elements.deleteRule({ timeout: 30000 }).then($delBtn => {
    if ($delBtn.is(':visible')) {
      cy.wrap($delBtn).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      cy.log('Rule deleted successfully');
    } else { const errorMsg = 'Delete rule button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}

clickDone() {
  cy.log('Clicking Done');
  this.elements.doneButton({ timeout: 30000 }).then($btn => {
    if ($btn.is(':visible')) {
      cy.wrap($btn).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      cy.log('Done clicked successfully');
    } else { const errorMsg = 'Done button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}

verifyExistingRuleOnTop() {
  cy.log('  Verifying existing rule appears on top');
  this.elements.addNewRuleBtn().then($btn => {
    if ($btn.length && $btn.is(':visible')) {
      cy.wrap($btn).click({ force: true });
      this.elements.logicRuleSummary({ timeout: 30000 }).eq(0).then($summary => {
        if ($summary.length) {
          this.elements.newRuleBtn({ timeout: 30000 }).then($newRule => {
            if ($newRule.length) {
              const summaryY = $summary[0].getBoundingClientRect().top, newRuleY = $newRule[0].getBoundingClientRect().top;
              if (summaryY < newRuleY) cy.log('  Verified: Rule summary is ABOVE the New Rule button');
              else { const errorMsg = '  Rule summary is not above the New Rule button'; cy.log(errorMsg); throw new Error(errorMsg); }
            } else { const errorMsg = '  New Rule button not found'; cy.log(errorMsg); throw new Error(errorMsg); }
          });
        } else { const errorMsg = '  Rule summary not found'; cy.log(errorMsg); throw new Error(errorMsg); }
      });
    } else { const errorMsg = '  Add New Rule button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}

verifyManualEntryOption() {
  cy.log('  Verifying manual entry option');

  this.elements.addNewRuleBtn({ timeout: 30000 }).then($btn => {
    if ($btn.length && $btn.is(':visible')) {
      cy.wrap($btn).click({ force: true });

      this.elements.manualEntryBtn({ timeout: 30000 }).then($manualBtn => {
        if ($manualBtn.length && $manualBtn.is(':visible')) {
          cy.wrap($manualBtn).click({ force: true });

          this.elements.manualEntryRuleExpressionField().then($field => {
            if ($field.length && $field.is(':visible')) {
              cy.wrap($field).clear({ force: true }).type(Messages.getMessage("LOGIC_RULE_MANUAL"), { force: true });
              cy.log('  Manual entry option verified');
            } else { const errorMsg = '  Manual entry rule field not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
          });

        } else { const errorMsg = '  Manual entry button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
      });

    } else { const errorMsg = '  Add New Rule button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}

selectActionManual(condition) {
  cy.log(`Selecting manual action: "${condition}"`);

  this.elements.selectAction().then($action => {
    if ($action.length && $action.is(':visible')) {
      cy.wrap($action).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      cy.log('Select action dropdown clicked');

      this.elements.dropdownQuestion2Option().eq(0).then($dropdown => {
        if ($dropdown.length) {
          cy.wrap($dropdown).within(() => {
            cy.contains(condition).click({ force: true });
            cy.log(`Manual action "${condition}" selected`);
          });

          this.elements.saveDetailPanel({ timeout: 30000 }).then($save => {
            if ($save.length && $save.is(':visible')) {
              cy.wrap($save).click({ force: true });
              cy.log('Details panel saved');
            } else { const errorMsg = 'Save button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
          });

            this.elements.logicRuleSummaryBox({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).eq(0).then($summary => {
    if ($summary.length) {
      const actualText = $summary.val();
      cy.log(`Logic Rule Summary Value 👉 "${actualText}"`);
      const expectedText = Messages.getMessage("LOGIC_RULE_SUMMARY");
      if (actualText && actualText.includes(expectedText)) {
        cy.log(`Manual action "${condition}" applied and verified`);
      } else {
        const errorMsg = 'Logic rule summary text not visible or not matching expected value';
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    } else {
      const errorMsg = 'Logic rule summary not visible after manual action';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
        } else { const errorMsg = 'Dropdown for manual action not found'; cy.log(errorMsg); throw new Error(errorMsg); }
      });
    } else { const errorMsg = 'Select action dropdown not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}

verifyAllQuestionsLogic() {
  cy.log('Verifying all questions in logic');
  this.elements.allQuestionsBtn({ timeout: 30000 }).then(($btn) => {
    if ($btn.length && $btn.is(':visible')) {
      cy.log('"All Questions" button is visible');
      cy.wrap($btn).scrollIntoView({ ensureScrollable: false }).click({ force: true });
      cy.log('"All Questions" dropdown clicked');
      this.allQuestions.forEach((q) => {
        cy.log(`Verifying question "${q}" in dropdown`);
        this.elements.allQuestionsDropdownItems({ timeout: 30000 }).contains(q).should('be.visible').then(() => {
            cy.log(`STEP 4 PASSED: Question "${q}" is visible`);
          });
      });
    } else {
      const errorMsg = 'ERROR: "All Questions" button not visible';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

verifyNextAndCompalte() {
  cy.log("Checking preview radio option availability");
  this.elements.previewRadioOptionItem().then($radio => {
    if ($radio.length > 0 && $radio.eq(0).is(':visible')) {
      cy.log("Selecting first radio option in preview");
      cy.wrap($radio.eq(0)).click({ force: true });
    } else {
      const msg = "Preview radio option not found";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.log("Checking Next button availability");
  this.elements.nextButton().scrollIntoView({ ensureScrollable: false }).then($next => {
    if ($next.length > 0 && $next.is(':visible')) {
      cy.log("Clicking Next button");
      cy.wrap($next).scrollIntoView({ ensureScrollable: false }).click({ force: true });
    } else {
      const msg = "Next button not found in preview";
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.log("Checking Complete button availability");
  this.elements.completeButton().scrollIntoView({ ensureScrollable: false }).then($complete => {
    if ($complete.length > 0 && $complete.is(':visible')) {
      cy.log("Clicking Complete button");
      cy.wrap($complete).scrollIntoView({ ensureScrollable: false }).click({ force: true });
    } else {
      const msg = "Complete button not found in preview";
      cy.log(msg);
      throw new Error(msg);
    }
  });
}

staticExternalLink() {
  cy.log('Setting static URL for Thank You page');
  this.elements.surveySettingsButton().then($btn => {
    if ($btn.length && $btn.is(':visible')) {
      cy.wrap($btn).click({ force: true });
      cy.log('Survey Settings Button clicked');
    } else { const errorMsg = 'Survey Settings Button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
this.elements.thankYoupagesSetting({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($setting => {
  if ($setting && $setting.length > 0 && $setting.is(':visible')) {
    cy.wrap($setting)
      .scrollIntoView({ ensureScrollable: false })
      .click({ force: true });
    cy.log('Thank You Page Settings opened');
  } else {
    const errorMsg = 'Thank You Page Settings not visible';
    cy.log(errorMsg);
    throw new Error(errorMsg);
  }
    this.elements.redirectStaticUrlInput()
  .scrollIntoView({ ensureScrollable: false })
  .then($input => {
    if ($input && $input.length > 0 && $input.is(':visible')) {
      cy.wrap($input)
        .clear({ force: true })
        .type(this.staticURL, { force: true });
      cy.log(`Static URL set: ${this.staticURL}`);
    } else {
      const errorMsg = 'Redirect Static URL input not visible';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
    });
  });
}

staticDynamicLink() {
  cy.log('Setting dynamic URL for Thank You page');

  this.elements.surveySettingsButton().then($btn => {
    if ($btn.length && $btn.is(':visible')) {
      cy.wrap($btn).click({ force: true }); cy.log('Survey Settings Button clicked');
    } else { const errorMsg = 'Survey Settings Button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }

    this.elements.thankYoupagesSetting({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($setting => {
      if ($setting.length && $setting.is(':visible')) {
        cy.wrap($setting).scrollIntoView({ ensureScrollable: false }).click({ force: true });
        cy.log('Thank You Page Settings opened');
      } else { const errorMsg = 'Thank You Page Settings not visible'; cy.log(errorMsg); throw new Error(errorMsg); }

      this.elements.addNewURLDynamicButton().scrollIntoView({ ensureScrollable: false }).then($dynamicBtn => {
        if ($dynamicBtn.length && $dynamicBtn.is(':visible')) {
          cy.wrap($dynamicBtn).scrollIntoView({ ensureScrollable: false }).click({ force: true });
          cy.log('Add New Dynamic URL Button clicked');
        } else { const errorMsg = 'Add New Dynamic URL Button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }

        this.elements.expressionInputDynamicURL({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($expr => {
          if ($expr.length && $expr.is(':visible') && !$expr.is(':disabled')) {
            cy.wrap($expr).click({ force: true }).clear({ force: true }).type('1+1', { force: true });
            cy.log('Expression input set to 1+1');
          } else { const errorMsg = 'Expression input for dynamic URL not visible/enabled'; cy.log(errorMsg); throw new Error(errorMsg); }
        });

        this.elements.dynamicURLink({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($link => {
          if ($link.length && $link.is(':visible') && !$link.is(':disabled')) {
            cy.wrap($link).scrollIntoView({ ensureScrollable: false }).click({ force: true }).clear({ force: true }).type(this.dynamicURL, { force: true });
            cy.log(`Dynamic URL set: ${this.dynamicURL}`);
          } else { const errorMsg = 'Dynamic URL input not visible/enabled'; cy.log(errorMsg); throw new Error(errorMsg); }
        });
      });
    });
  });
}

verifyNotifierMessageStaticURL() {
  cy.log('  Verifying notifier message for static URL');
  cy.wait(5000);
  this.elements.notifiereMessage({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($msg => {
    if ($msg && $msg.length > 0) {
      cy.wrap($msg).scrollIntoView({ ensureScrollable: false }).invoke('text').then(text => {
        if (text.includes(this.staticURL)) {
          cy.log(`  Notifier message contains static URL: ${this.staticURL}`);
        } else {
          const errorMsg = `  Notifier message does not contain static URL: ${this.staticURL}`;
          cy.log(errorMsg);
          throw new Error(errorMsg);
        }
      });
    } else {
      const errorMsg = '  Notifier message element not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}


verifyNotifierMessageDynamicURL() {
  cy.log('  Verifying notifier message for dynamic URL');
  cy.wait(5000);

  this.elements.notifiereMessage({ timeout: 30000 }).then(($msg) => {
    if ($msg.length) {
      $msg.scrollIntoView({ ensureScrollable: false }).invoke('text').then((text) => {
        if (text.includes(this.dynamicURL)) cy.log(`  Notifier message contains dynamic URL: ${this.dynamicURL}`);
        else {
          const errorMsg = `  Notifier message does not contain dynamic URL: ${this.dynamicURL}`;
          cy.log(errorMsg);
          throw new Error(errorMsg);
        }
      });
    } else {
      const errorMsg = '  Notifier message element not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}

verifySurveyLanguage() {
  cy.log('  Verifying survey language description');

  this.elements.hidePanelButton({ timeout: 30000 }).then($btn => {
    if ($btn.length && $btn.is(':visible')) {
      cy.wrap($btn).click({ force: true }); cy.log('  Hide panel button clicked');

      this.surveyArabicLanguage = faker.word.words(2) + ' Description';
      this.elements.surveyTitleDescription({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($desc => {
        if ($desc.length && $desc.is(':visible')) {
          cy.wrap($desc).scrollIntoView({ ensureScrollable: false }).click().clear().type(this.surveyArabicLanguage);
          cy.wrap(this.surveyArabicLanguage).as('surveyArabicLanguageDescription'); cy.log(`  Survey description typed: ${this.surveyArabicLanguage}`);

          this.elements.surveySettingsButton().then($settings => {
            if ($settings.length && $settings.is(':visible')) {
              cy.wrap($settings).click({ force: true }); cy.log('  Survey settings button clicked');

              this.elements.surveyLanguageClearSymbol({ timeout: 30000 }).then($clear => {
                if ($clear.length && $clear.is(':visible')) {
                  cy.wrap($clear).click({ force: true }); cy.log('  Cleared survey language selection');

                  this.elements.previewTab({ timeout: 30000 }).then($preview => {
                    if ($preview.length && $preview.is(':visible')) {
                      cy.wrap($preview).scrollIntoView({ ensureScrollable: false }).click({ force: true, scrollBehavior: false }); cy.log('  Preview tab opened');

                      cy.get('@titleSurveyDescription').then(expectedDesc => {
                        this.elements.surveyTitleDescriptionHolder({ timeout: 15000 }).scrollIntoView({ ensureScrollable: false }).then($holder => {
                          if ($holder.length && $holder.is(':visible')) {
                            const actualText = $holder.text().trim();
                            if (actualText === expectedDesc) cy.log(`  Description matches preview: ${actualText}`);
                            else { const errorMsg = `  Preview description mismatch. Expected: "${expectedDesc}", Found: "${actualText}"`; cy.log(errorMsg); throw new Error(errorMsg); 
                          }
                          } else { const errorMsg = '  Survey description holder not visible in preview'; cy.log(errorMsg); throw new Error(errorMsg); }
                        });
                      });

                    } else { const errorMsg = '  Preview tab not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
                  });

                } else { const errorMsg = '  Survey language clear symbol not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
              });

            } else { const errorMsg = '  Survey settings button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
          });

        } else { const errorMsg = '  Survey description input not visible/enabled'; cy.log(errorMsg); throw new Error(errorMsg); }
      });

    } else { const errorMsg = '  Hide panel button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}

limitToOneResponseInput(value) {
  cy.log('  Setting "Limit to One Response" value');

  this.elements.surveySettingsButton({ timeout: 30000 }).then($btn => {
    if ($btn.length && $btn.is(':visible')) {
      cy.wrap($btn).click({ force: true }); cy.log('  Survey settings button clicked');

      this.elements.limitToOneResponseInput({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($input => {
        if ($input.length && $input.is(':visible')) {
          cy.wrap($input).scrollIntoView({ ensureScrollable: false }).click().clear().type(value); cy.log(`  "Limit to One Response" value set to: ${value}`);

          this.elements.hidePanelButton({ timeout: 30000 }).then($hide => {
            if ($hide.length && $hide.is(':visible')) { cy.wrap($hide).click({ force: true }); cy.log('  Hide panel button clicked'); }
            else { const errorMsg = '  Hide panel button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
          });

        } else { const errorMsg = '  Limit to One Response input not visible/enabled'; cy.log(errorMsg); throw new Error(errorMsg); }
      });

    } else { const errorMsg = '  Survey settings button not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
  });
}


itemOptionsRadioButtonQuestion1DragOrder() {
  cy.log('  Editing and verifying radio button item order');

  const initialOrder = ["Yes", "No", "Maybe"];
  const finalOrder = ["Yes", "Maybe", "No"];

  this.elements.itemValueWrappers().each(($wrapper, index) => {
    if (index < initialOrder.length) {
      const value = initialOrder[index];
      const $editable = $wrapper.find('.sv-string-editor[contenteditable="true"]');
      if ($editable.length) {
        cy.wrap($editable).click().clear({ force: true }).type(value, { force: true });
        cy.log(`  Typed value: ${value}`);
      } else {
        const errorMsg = `  Editable input not found for item index ${index}`;
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    }
  });

  this.elements.surveyTitleDescription({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).click();
  cy.wait(1500);

  this.elements.sdRankingItemWrapper({ timeout: 30000 }).contains('Maybe').parents('.svc-item-value-wrapper').as('maybeItem');
  this.elements.sdRankingItemWrapper({ timeout: 30000 }).contains('No').parents('.svc-item-value-wrapper').as('noItem');

  cy.get('@maybeItem').then($maybe => {
    cy.get('@noItem').then($no => {
      cy.wrap($maybe).find('.svc-item-value-controls__drag').drag($no, { force: true });
      cy.log("  Drag completed: 'Maybe' above 'No'");
    });
  });

  this.elements.radioButtonOptions().then($items => {
    const list = [...$items].map(i => i.innerText.trim());
    if (JSON.stringify(list) === JSON.stringify(finalOrder)) cy.log(`  Order after drag correct: ${list.join(", ")}`);
    else {
      const errorMsg = `  Order after drag incorrect. Expected: ${finalOrder.join(", ")}, Found: ${list.join(", ")}`;
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

this.elements.previewTab({ timeout: 30000 }).then($tab => {
  if ($tab.is(':visible')) {
    cy.wrap($tab).click({ force: true });
    this.elements.radioButtonOptionsPreview().then($items => {
      const previewOrder = [...$items].map(i => i.innerText.trim());
      if (JSON.stringify(previewOrder) === JSON.stringify(finalOrder)) 
        cy.log(`  Preview order correct: ${previewOrder.join(", ")}`);
      else {
        const errorMsg = `  Preview order incorrect. Expected: ${finalOrder.join(", ")}, Found: ${previewOrder.join(", ")}`;
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    });
  } else {
    const errorMsg = '  Preview tab not visible';
    cy.log(errorMsg);
    throw new Error(errorMsg);
  }
});
}


dragQuesstion2ToQuestion1() {
  cy.log("Clicking Add Question button...");
  if (this.elements.addQuestionButton({ timeout: 30000 })) {
    this.elements.addQuestionButton()
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true })
      .then(() => cy.log("Clicked Add Question button"));
  } else {
    const errorMsg = 'Add Question button not visible';
    cy.log(errorMsg);
    throw new Error(errorMsg);
  }

  cy.log("Entering survey title...");
  this.surveyTitle = faker.word.words(2) + ' Title';
  if (this.elements.surveyTitle()) {
    this.elements.surveyTitle()
      .scrollIntoView()
      .should('exist')
      .and('be.visible')
      .and('not.be.disabled')
      .click()
      .clear()
      .type(this.surveyTitle)
      .then(() => cy.log("Entered survey title: " + this.surveyTitle));

    cy.wrap(this.surveyTitle).as('surveyTitle');
  } else {
    const errorMsg = 'Survey Title input not visible';
    cy.log(errorMsg);
    throw new Error(errorMsg);
  }

  // Description
  cy.log("Entering survey description...");
  if (this.elements.surveyTitleDescription()) {
    this.elements.surveyTitleDescription()
      .type("Sample survey description")
      .then(() => cy.log("Entered survey description"));
  } else {
    const errorMsg = 'Survey Description field not visible';
    cy.log(errorMsg);
    throw new Error(errorMsg);
  }

  // Question 1
  cy.log("Typing Question 1...");
  const titleWord = faker.word.noun();
  const questionText = `How do you experience about ${titleWord}`;

  this.elements.questionTextEditor().then($els => {
    let match = [...$els].find(el => el.textContent.trim() === 'question1');
    let target;

    if (match) {
      cy.log("Found question1 field");
      target = cy.wrap(match);
    } else {
      cy.log("question1 not found, using placeholder...");
      if (this.elements.question1PlaceHolder().eq(4)) {
        target = this.elements.question1PlaceHolder().eq(4);
      } else {
        const errorMsg = 'Question1 placeholder not available';
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    }

    target
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true })
      .clear({ force: true })
      .type(questionText, { force: true })
      .then(() => cy.log("Typed Question 1: " + questionText));
  });

  cy.wrap(questionText).as('enteredQuestion1');

  // Question 1 type selection
  cy.log("Selecting question type for question 1...");
  if (this.elements.selectQuestionType2Dropdown() && this.elements.questionTypeDropdownButton()) {
    this.elements.selectQuestionType2Dropdown().scrollIntoView().trigger('mouseover');
    this.elements.questionTypeDropdownButton().scrollIntoView().click();

    this.elements.questionTypeOptions()
      .contains('Radio Button Group')
      .scrollIntoView()
      .click()
      .then(() => cy.log("Selected Radio Button Group for Question 1"));
  } else {
    const errorMsg = 'Question Type dropdown not available for question 1';
    cy.log(errorMsg);
    throw new Error(errorMsg);
  }

  // Add question 2
  cy.log("Clicking Add Question button again...");
  if (this.elements.addQuestionButton()) {
    this.elements.addQuestionButton()
      .scrollIntoView()
      .click({ force: true })
      .then(() => cy.log("Clicked Add Question for Question 2"));
  } else {
    const errorMsg = 'Add Question button not visible for question 2';
    cy.log(errorMsg);
    throw new Error(errorMsg);
  }

  // Question 2 text
  cy.log("Typing Question 2...");
  const titleWord2 = faker.word.noun();
  const questionText2 = `How do you experience about ${titleWord2}`;

  this.elements.questionTextEditor().then($els => {
    const match2 = [...$els].find(el => el.textContent.trim() === 'question2');

    if (match2) {
      cy.wrap(match2)
        .scrollIntoView()
        .should('be.visible')
        .click({ force: true })
        .clear({ force: true })
        .type(questionText2, { force: true })
        .then(() => cy.log("Typed Question 2: " + questionText2));
    } else {
      const errorMsg = '"question2" span not found in DOM';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  cy.wrap(questionText2).as('enteredQuestion2');

  // Question 2 type
  cy.log("Selecting question type for question 2...");
  if (this.elements.selectQuestionType2Dropdown() && this.elements.questionTypeDropdownButton()) {
    this.elements.selectQuestionType2Dropdown().scrollIntoView().trigger('mouseover');
    this.elements.questionTypeDropdownButton().scrollIntoView().click();

    this.elements.questionTypeOptions()
      .contains('Radio Button Group')
      .scrollIntoView()
      .click()
      .then(() => cy.log("Selected Radio Button Group for Question 2"));
  } else {
    const errorMsg = 'Question Type dropdown not available for question 2';
    cy.log(errorMsg);
    throw new Error(errorMsg);
  }

  // Drag and drop
  cy.log("Performing drag and drop...");
  if (this.elements.questionContainerBody().eq(1) && this.elements.questionContainerBody().eq(0)) {
    const dataTransfer = new DataTransfer();

    this.elements.questionContainerBody().eq(1).trigger('dragstart', { dataTransfer });
    this.elements.questionContainerBody().eq(0).trigger('drop', { dataTransfer });
    this.elements.questionContainerBody().eq(1).trigger('dragend', { dataTransfer })
      .then(() => cy.log("Drag and drop completed"));
  } else {
    const errorMsg = 'Drag/drop targets not found';
    cy.log(errorMsg);
    throw new Error(errorMsg);
  }
}


verifyQuestionsInPreview() {
  cy.get('@enteredQuestion1').then((questionText) => {
    cy.log(`  Verifying Question 1 in Preview: "${questionText}"`);
    this.elements.previewQuestionTitle().eq(0).invoke('text').then((text) => {
      const cleanedText = text.replace(/^\d+\.\s*/, '').trim();
      if (cleanedText === questionText) {
        cy.log('  Question 1 matched in preview');
      } else {
        const errorMsg = `  Question 1 mismatch in preview | Expected: "${questionText}", Actual: "${cleanedText}"`;
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    });
  });

  cy.wait(1000);

  cy.get('@enteredQuestion2').then((questionText2) => {
    cy.log(`  Verifying Question 2 in Preview: "${questionText2}"`);
    this.elements.previewQuestionTitle().eq(1).invoke('text').then((text) => {
      const cleanedText2 = text.replace(/^\d+\.\s*/, '').trim();
      if (cleanedText2 === questionText2) {
        cy.log('  Question 2 matched in preview');
      } else {
        const errorMsg = `  Question 2 mismatch in preview | Expected: "${questionText2}", Actual: "${cleanedText2}"`;
        cy.log(errorMsg);
        throw new Error(errorMsg);
      }
    });
  });

  cy.log('  Verified dragged questions in preview');
}

verifyQuestionBoxStateLocked() {
  cy.log("Checking that Question Box Expand Icon is NOT visible (Locked state)");
  cy.document().then(doc => {
    const el = doc.querySelector('[data-testid="question-box-expand-icon"]');
    if (!el) {
      cy.log("Question Box is LOCKED - Expand icon is not visible");
    } else {
      const errorMsg = "Question Box is UNLOCKED - Expand icon IS visible (Expected NOT visible)";
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}



}
export default SurveyAddPage;

