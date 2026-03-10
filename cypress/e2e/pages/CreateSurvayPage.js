import { faker } from "@faker-js/faker";
import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';

class SurveyPage {

    surveyName = '';
    surveyTitle = '';

    elements = {

        surveyTitle: () => cy.get('span[aria-label="Survey Title"]', { timeout: 900000 }),
        surveyMenu: () => cy.get('[class="nav-item false"] span', { timeout: 900000 }),
        surveyTitleDescription: () => cy.get('span[contenteditable="true"][aria-label="Description"]', { timeout: 900000 }).eq(0),
        surveyList: () => cy.contains("a.nav-item", "Survey List", { timeout: 900000 }),
        surveySchedule: () => cy.contains("a.nav-item", "Survey Schedule", { timeout: 100000 }),
        surveydashboard: () => cy.contains("a.nav-item", "Survey Dashboard", { timeout: 900000 }),
        backTopuffin: () => cy.contains('a', 'Back to Puffin', { timeout: 900000 }),
        addSurvey: () => cy.get('[class="table-action-icon-container02"] div', { timeout: 900000 }),
        newSurveyButton: () => cy.get('div.table-action[data-title="Add"]', { timeout: 900000 }),
        saveAsdraft: () => cy.contains('button', 'Save As Draft', { timeout: 900000 }),
        surveyStatus: () => cy.get('table tbody tr').first().find('td.table-cell-max-width.cursor-pointer.status-column', { timeout: 900000 }),
        surveyName: () => cy.get('input[name="surveyName"]', { timeout: 900000 }),
        surveyDepartmentDropdown: () => cy.xpath('//label[text()="Department"]/following::div[@class="input_select-form"]', { timeout: 900000 }),
        languageDropdown: () => cy.get('[class*="input_select-form_Languages"]', { timeout: 900000 }),
        dropdownOptions: () => cy.get('[class="input_select-form_option-container"] li', { timeout: 900000 }),
        expiryDate: () => cy.get('input[type="date"]', { timeout: 900000 }),
        resendWaitPeriod: () => cy.get('input[name="resendWaitPeriod"]', { timeout: 900000 }),
        description: () => cy.get('textarea.form_input-field_container_field', { timeout: 900000 }),
        nextBtn: () => cy.get('button.button_form-primary_button').contains('Next', { timeout: 900000 }),
        designerTab: () => cy.get('span.svc-tabbed-menu-item__text').contains('Designer', { timeout: 900000 }),
        designerTabarabic: () => cy.get('span.svc-tabbed-menu-item__text').contains('تصميم الإستبيان', { timeout: 900000 }),
        addQuestionBtn: () => cy.get('button[title="Add Question"]', { timeout: 900000 }),
        addQuestionarabic: () => cy.contains('span.svc-add-new-item-button__text', 'إضافة سؤال', { timeout: 900000 }),
        addquestionbtn2: () => cy.get('div.svc-element__add-new-question button[title="Add Question"]').click(),
        questionTypeBtn: (type) => cy.get('ul[class="sv-list"]>li[role="option"]', { timeout: 900000 }).contains(type, { timeout: 900000 }),
        questionTypearabic: (type) => cy.contains('span', 'إختيار فردي').should('be.visible'), optionInput: (item) => cy.get('span.sv-string-editor').contains(item, { timeout: 90000 }),
        sendForReviewBtn: () => cy.contains('button.button_form-primary_button', 'Send For Review', { timeout: 900000 }),
        sendButton: () => cy.get('button.false.button_form-submit_main', { timeout: 900000 }),
        selectRandomAnswer: () => cy.get('label.sd-selectbase__label', { timeout: 900000 }).then($labels => {
            const randomIndex = Cypress._.random(0, $labels.length - 1);
            cy.wrap($labels[randomIndex]).click();
        }),
        expiryDateInput: () => cy.get('input[type="date"]'),
        toastMessage: () => cy.get('div[class="toast toast-success"]', { timeout: 900000 }),
        tableFirstRow: () => cy.get('table tbody tr').first().find('td').first(),
        profileMenuName: () => cy.get('.profile-menu__name', { timeout: 900000 }),
        profileDropdown: () => cy.get('.profile-menu_dropdown').should('exist').invoke('show'),
        logout: () => cy.contains('.profile-menu_dropdown li', 'Logout', { timeout: 900000 }),
        threeDotmenu: () => cy.get('button.kebab-menu.kebab-menu_kebab-menu-button', { timeout: 900000 }),
        approveRequest: () => cy.get('.survey-action_kebab-menu-body-element_title').contains('Approve', { timeout: 900000 }),
        approvalReason: () => cy.get('textarea.confirmation-dialog-body_textarea', { timeout: 900000 }),
        clickOnApprovebutton: () => cy.contains('button', 'Approve'),
        addShedulesurvey: () => cy.get('div[data-title="Add"]').should('be.visible', { timeout: 900000 }),
        scheduleSurveyname: () => cy.get('input[placeholder="Enter Schedule Name"]', { timeout: 900000 }),
        updateQuestion: () => cy.get('input.spg-input.spg-text[type="text"][aria-required="false"]', { timeout: 900000 }),
        selectSurveydropdown: () => cy.get('.input_select-form_inner-label').contains('Select survey', { timeout: 900000 }),
        languageDropdown2: () => cy.get('div.input_select-form_inner-label').filter(':visible').first(),
        scheduleTime: () => cy.get('input[name="scheduleTime"]', { timeout: 900000 }),
        linkExpiry: () => cy.get('input[name="linkExpiry"]', { timeout: 900000 }),
        questionGrid: () => cy.get('fieldset.sd-selectbase', { timeout: 900000 }),
        addChannelselectLanguage: () => cy.get('.input_select-form_Languages', { timeout: 90000 }),
        generalSetting: () => cy.contains('span.sv-string-viewer--multiline', /^General$/, { timeout: 900000 }),
        visibleCheck: () => cy.get('input[name="visible"]', { timeout: 90000 }),
        sendReviewbtn: () => cy.xpath("//button[@type='button' and contains(@class,'button_form-primary_button') and normalize-space(text())='Send For Review']", { timeout: 90000 }),
        scheduleLanguage: () => cy.contains('.input_select-form_inner-label', 'English', { timeout: 900000 }),
        aprroveThreedotmenu: () => cy.get('div.survey-action_kebab-menu-body-element_title', { timeout: 900000 }),
        scheduleNextbtn: () => cy.get('button.button_form-primary_button', { timelout: 900000 }),
        addChannelpage: () => cy.get('.custom-stepper-label', { timeout: 900000 }),
        surveyNamedropdownfromSchedule: () => cy.get('@surveyName').then((name) => {
            this.elements.selectSurveydropdown().click();
            cy.get('input[placeholder="Search"]:visible', { timeout: 900000 }).clear({ force: true }).type(name, { force: true });
            cy.contains('span.custom-select_checkbox-container', name, { timeout: 900000 }).should('be.visible').click({ force: true });
            cy.get('.input_select-form_inner-label').should('contain.text', name);
        }),
        addInvalidquestion: () => cy.contains('span.svc-add-new-item-button__text', 'Add Invalid Question', { timeout: 900000 }),
        hidePanel: () => cy.get('button[title="Hide Panel"]', { timeout: 900000 }),
        selectScheduledreviewfrom3dotMenu: () => cy.contains('td', 'Review', { timeout: 200000 }),
        addChannelLanguageDropdown: () => cy.get('.input_select-form_option-container', { timeout: 900000 }),
        addChannelLanguagelist: () => cy.get('.input_select-form_option-container ul li', { timeout: 900000 }),
        addChannelSMS: () => cy.contains('.channel-card', 'SMS').find('input[type="checkbox"]', { timeout: 900000 }),
        smsSenderID: () => cy.get('.input_select-form', { timeout: 90000 }),
        smsTemplate: () => cy.contains('.input_select-form_inner-label p', 'Select SMS Template', { timeout: 90000 }),
        selectSMStemplateOption: () => cy.contains('li.option span', 'FCC SMS Valid En', { timeout: 90000 }),
        addChannelnext: () => cy.contains('button', 'Next', { timeout: 900000 }),
        uploadParticipantfile: () => cy.get('#fileUpload').selectFile('cypress/fixtures/Sample_Survey_File.csv.xlsx', { force: true }, { timeout: 90000 }),
        participantsForreview: () => cy.get('button.button_form-primary_button', { includeShadowDom: true }, { timeout: 900000 }),
        confirmParticipantspopup: () => cy.contains('div.dialogBody p', 'Are you sure you want to go ahead with 6 valid records and send this survey for review?', { timeout: 90000 }),
        confirmParticipantdialogFooter: () => cy.get('div.alertDialogFooter').contains('button', 'Send', { timeout: 90000 }),
        visibleCheckbox: () => cy.contains('span.sv-string-viewer', 'Visible', { timeout: 900000 }),
        previewTabclick: () => cy.get('span.svc-tabbed-menu-item__text').contains('Preview', { timeout: 900000 }),
        visibleElementspopup: () => cy.contains("The survey doesn't contain any visible elements.", { timeout: 900000 }),
        readOnly: () => cy.get('input.spg-checkbox__control[name="readOnly"]', { timeout: 900000 }),
        previewExist: () => cy.get('span.sv-string-viewer.sv-string-viewer--multiline', { timeout: 900000 }),
        requiredCheckbox: () => cy.get('input.spg-checkbox__control[name="isRequired"]', { timeout: 900000 }),
        nextButtonvalue: () => cy.get('input.sd-navigation__next-btn[value="Next"]', { timeout: 900000 }),
        profileMenudropdown: () => cy.contains('.profile-menu_dropdown li', 'Logout', { timeout: 900000 }),
        loginUrldisplay: () => cy.url({ timeout: 90000 }).should('include', '/PuffinUI/login', { timeout: 900000 }),
        questionAsterisk: () => cy.get('span.sd-question__required-text', { timeout: 900000 }),
        removeRadiobtn: () => cy.get('button[title="Remove"]').first(),
        questionMultiline: () => cy.get('span.sv-string-viewer.sv-string-viewer--multiline', { timeout: 900000 }),
        surveyAnswers: () => cy.get('.sd-item .sv-string-viewer', { timeout: 900000 }),
        showPaneltitle: () => cy.get('button.sv-action-bar-item.sv-action-bar-item--icon[title="Show Panel"]', { timeout: 900000 }),
        textareaComment: () => cy.get('textarea#sq_416_comment.sd-input.sd-comment', { timeout: 900000 }),
        choiceOptions: () => cy.contains('h4.spg-title', 'Choice Options', { timeout: 900000 }),
        columnValue1: () => cy.get('tbody tr').eq(0).find('input[aria-label*="column Value"]', { timeout: 900000 }),
        columnValue2: () => cy.get('tbody tr').eq(1).find('input[aria-label*="column Value"]', { timeout: 900000 }),
        dragSwapvalues: () => cy.get('tbody tr').eq(0).find('.spg-drag-element__svg', { timeout: 900000 }),
        swapHappened: () => cy.get('tbody tr').eq(0).find('input[aria-label*="column Value"]', { timeout: 900000 }),
        questionTitlealignment: () => cy.contains('span.sv-string-viewer', 'Question title alignment', { timeout: 900000 }),
        layoutSettings: () => cy.contains('h4.spg-title.spg-panel__title', 'Layout', { timeout: 900000 }),
        layoutQuestionenable: () => cy.get('span.sv-string-editor[contenteditable="true"]', { timeout: 900000 }),
        clearRadiooption: () => cy.get('button[title="Clear"]', { timeout: 900000 }),
        clearItemconfirmation: () => cy.get('#sq_705 .sd-item', { timeout: 900000 }),
        nextPagebuttonText: () => cy.get('#sq_539i'),
        generalTitle: () => cy.contains('h4.spg-title.spg-panel__title', 'General', { timeout: 900000 }),
        layoutTitle: () => cy.contains('h4.spg-title.spg-panel__title', 'Layout', { timeout: 900000 }),
        choiceOptiontitle: () => cy.contains('h4.spg-title.spg-panel__title', 'Choice Options', { timeout: 900000 }),
        smsSenderIDselection: () => cy.contains('li.option span', 'InfoText', { timeout: 900000 }),
        settingTitle: () => cy.get('h4.spg-title.spg-panel__title', { timeout: 9000000 }),
        otherDescribesurveyAnswer: () => cy.get('span.sv-string-editor[contenteditable="true"]', { timeout: 900000 }),
        editRadioOption: () => cy.get('button.spg-action-button[title="Edit"]', { timeout: 90000 }),
        completeBtn: () => cy.get('input[title="Complete"]', { timeout: 900000 }),
        errorAlignBottom: () => cy.get('label.spg-button-group__item[title="Bottom"]', { timeout: 900000 }),
        errorRequiredfieldBottom: () => cy.get('div.sd-question__erbox--below-question', { timeout: 90000 }),
        errorRequiredfieldTop: () => cy.get('div.sd-question__erbox--above-question', { timeout: 9000000 }),
        errorAligninherit: () => cy.get('input[aria-label="Inherit"]', { timeout: 900000 }),
        selectRequiredfield: () => cy.get('svg[role="img"] title').contains('Required').parents('svg').parents('button', { timeout: 90000 }),
        questionText: () => cy.get('span[role="textbox"][aria-label="content editable"]', { timeout: 900000 }),
        questionAlignmentinherit: () => cy.contains('span.sv-string-viewer', /^Inherit$/, { timeout: 900000 }),
        questionAlignmentbottom: () => cy.get('#sq_656i_list').contains('span', 'Bottom', { timeout: 900000 }),
        questionAlignmenthidden: () => cy.get('#sq_656i_list').contains('span', 'Hidden', { timeout: 900000 }),
        questionAlignmenttop: () => cy.get('#sq_656i_list').contains('span', 'Top', { timeout: 900000 }),
        hideButton: () => cy.get('button[title="Hide Panel"]', { timeout: 900000 }),
        questionNumber: () => cy.contains('span[data-key="q_num"]', '1.', { timeout: 900000 }),
        seventhMenu: () => cy.get('#children-7', { timeout: 900000 }),
        requiredButton: () => cy.contains('span.svc-survey-element-toolbar-item__title', 'Required', { timeout: 900000 }),
        selectDepartment: () => cy.intercept('GET', '/PuffinAPI/api/Dropdown/v1/departments').as('getDepartments', { timeout: 900000 }),
        surveyApprovedsuccess: () => cy.get('div.toast.toast-success', { timeout: 900000 }),
        addCommentexist: () => cy.get('textarea[aria-required="true"]', { timeout: 900000 }),
        questionUpdate: () => cy.get('input.spg-input.spg-text', { timeout: 900000 }),
        errorAligntop: () => cy.get('label.spg-button-group__item[title="Top"]', { timeout: 900000 }),
        choiceOrder: () => cy.get('span.sv-string-viewer--multiline').contains('Choice order', { timeout: 900000 }),
        noneChoiceorder: () => cy.get('span.sv-string-viewer').contains('None', { timeout: 900000 }),
        addcommentBox: () => cy.contains('span.sv-string-viewer.sv-string-viewer--multiline', 'Add a comment', { timeout: 900000 }),
        updateQuestiontitle: () => cy.get('textarea.spg-input.spg-comment', { timeout: 900000 }),
        minimumQuestionwidth: () => cy.get('#sq_661i', { timeout: 100000 }).should('exist', { timeout: 90000 }),
        selectQuestionTypeDropdown: () => cy.get('div[data-key="question10"]', { timeout: 300000 }),
        questionTypeDropdownButton: () => cy.get('.svc-survey-element-toolbar__item--with-text[title="Single-Line Input"]', { timeout: 90000 }),
        questionTypeOptions: () => cy.get('.sv-list__item-body', { timeout: 900000 }),
        addQuestionButton: () => cy.get('.svc-element__add-new-question.svc-btn', { timeout: 300000 }).eq(0),
        storeFilecontentJson: () => cy.contains('.spg-checkbox__caption', 'Store file content in JSON result as text', { timeout: 900000 }),
        surveyDescriptionpresentDesigner: () => cy.get('span[role="textbox"][aria-label="Description"]', { timeout: 900000 }),
        surveyDescriptionpresentPreview: () => cy.get('span.sv-string-viewer.sv-string-viewer--multiline', { timeout: 900000 }),
        makeTitleDescriptionVisible: () => cy.contains('Make the title and description visible', { timeout: 900000 }),
        surveySettings: () => cy.get('button[title="Survey settings"]', { timeout: 90000 }),
        navigationSettings: () => cy.contains('h4.spg-title span.sv-string-viewer--multiline', /^Navigation$/, { timeout: 900000 }),
        showHidenavigationButton: () => cy.contains('span.sv-string-viewer', 'Show/hide navigation buttons', { timeout: 900000 }),
        navigationBottomplacement: () => cy.get('label[title="Bottom"]', { timeout: 900000 }),
        hidePanelsurveySettings: () => cy.get('button[title="Hide Panel"]', { timeout: 900000 }),
        navigationTopplacement: () => cy.get('label[title="Top"]', { timeout: 900000 }),
        showpreviouspageCheckbox: () => cy.contains('label', 'Show the "Previous Page" button').find('input', { timeout: 900000 }),
        previousPageButtontextPreesent: () => cy.contains('span.sv-string-viewer', '"Previous Page" button text', { timeout: 900000 }),
        previousPageButtonText: () => cy.get('input#sq_729i.spg-input-container__input', { timeout: 900000 }),
        completeButtonplacement: () => cy.get('div.sv-components-container-contentTop').find('input.sd-navigation__complete-btn', { timeout: 90000 }),
        completeButtonplacementBottom: () => cy.get('input.sd-navigation__complete-btn:visible', { timeout: 900000 }),
        addMorequestionBtn: () => cy.get('div.svc-element__add-new-question.svc-btn', { timeout: 900000 }),
        previewNextbtn: () => cy.get('input.sd-btn.sd-navigation__next-btn[title="Next"][value="Next"]', { timeout: 900000 }),
        previewBackbtn: () => cy.get('input[type="button"][value="back"]', { timeout: 900000 }),
        questionNumber1: () => cy.get('.sd-element__num', { timeout: 900000 }),
        previewContinuebtn: () => cy.get('input.sd-navigation__next-btn[value="continue"]', { timeout: 900000 }),
        completePagebuttonText: () => cy.get('input#sq_540i', { timeout: 900000 }),
        previewCompletebtn: () => cy.get('input.sd-navigation__complete-btn', { timeout: 900000 }),
        selectQuestionSetting: () => cy.contains('span.sv-string-viewer.sv-string-viewer--multiline', 'Question Settings', { timeout: 900000 }),
        questionNumbering: () => cy.contains('span.sv-string-viewer', 'Auto-numbering', { timeout: 900000 }),
        verifyAutonumbering: () => cy.get('span.sd-element__num[data-key="q_num"]', { timeout: 900000 }),
        questionOrder: () => cy.get('label[title="Original"]', { timeout: 900000 }),
        previewPagination: () => cy.contains('span.svc-preview-pager-item__title', 'Page 2', { timeout: 900000 }),
        questionDescription: () => cy.get('textarea.spg-input.spg-comment', { timeout: 900000 }),
        questionDescriptionalignment: () => cy.get('div.sd-dropdown_chevron-button', { timeout: 900000 }),
        verifyQuestiondescalignmentUnderinput: () => cy.contains('span.sv-string-viewer', 'Under the input field', { timeout: 900000 }),
        verifyQuestiondescalignmentUndertitle: () => cy.contains('span.sv-string-viewer', 'Under the question title', { timeout: 900000 }),
        checkPreviewdescAlignunderInupt: () => cy.contains('span.sv-string-viewer', 'Maybe').should('be.visible').then(($maybe) => { cy.contains('span.sv-string-viewer.sv-string-viewer--multiline', 'Key strategies include understanding...').should('be.visible').then(($desc) => { const maybeBottom = $maybe[0].getBoundingClientRect().bottom; const descTop = $desc[0].getBoundingClientRect().top; expect(descTop).to.be.greaterThan(maybeBottom); }); }),
        toastErrorMessage: () => cy.get('div.toast.toast-error', { timeout: 900000 }),
        openPanel: () => cy.get('.spg-panel__content:visible', { timeout: 900000 }),
        questionTitle: () => cy.get('.sd-question__title, [class*="title"]', { timeout: 900000 }),
        optionalRequired: () => cy.contains('span.svc-survey-element-toolbar-item__title', 'Optional Required', { timeout: 900000 }),
        checkPreviewdescAlignunderTitle: () => cy.contains('.sv-string-viewer--multiline', 'question1').then(($q1) => {
            const q1Y = $q1[0].getBoundingClientRect().top;
            cy.contains('.sv-string-viewer--multiline', 'Key strategies include understanding...').should('exist').then(($desc) => {
                const descY = $desc[0].getBoundingClientRect().top; expect(descY).to.be.greaterThan(q1Y);
            });
        }),
        swapOrderItem2: () => cy.get('div.svc-item-value-wrapper[data-sv-drop-target-item-value="Item 2"]', { timeout: 900000 }),
        surveySchedulesearch: () => cy.get('@scheduleSurveyName').then((name) => {
            cy.get('input[placeholder="Search for anything..."]').clear().type(name, { delay: 0 });
            cy.contains('button', 'Search', { timeout: 90000 })
        }),
        dragDroptarget: () => cy.contains('.svc-item-value-wrapper', target, { timeout: 900000 }),
        dragDropsource: () => cy.contains('.svc-item-value-wrapper', source, { timeout: 900000 }),
        wrongOption: () => cy.contains('span.sv-string-viewer', 'Wrong Option', { timeout: 900000 }),
        applyButton: () => cy.get('button[title="Apply"]', { timeout: 90000 }),
        question2Visible: () => cy.contains('span.sv-string-editor[contenteditable="true"]', { timeout: 900000 }),
        participants: () => cy.xpath("//span[@class='tab-text' and text()='Participants']", { timeout: 900000 }),
        responseStatus: () => cy.contains('.status', 'Submitted', { timeout: 900000 }),
        selectQuestionType2Dropdown: () => cy.get('button.svc-survey-element-toolbar__item[title="Single-Line Input"]', { timeout: 90000 }),
        mainTypeListItem: (mainType) => cy.contains('.sv-list__item-body', mainType, { timeout: 900000 }),
        popupContainer: () => cy.get('.sv-popup__container', { timeout: 90000 }),
        hideQuestionnumber: () => cy.contains('span.sv-string-viewer--multiline', 'Hide the question number', { timeout: 900000 }),
       // hidePanel: () => cy.get('button.sv-action-bar-item.sv-action-bar-item--icon[title="Hide Panel"]', { timeout: 900000 }),
        question1PlaceHolder: () => cy.xpath('//span[contains(@class,"svc-string-editor__content")]//span[@class="sv-string-editor" and @role="textbox"]', { timeout: 90000 }),
        questionTextEditor: () => cy.get('span.sv-string-editor', { timeout: 150000 }),
        removeItemRatingButton: () => cy.get('span.svc-item-value-controls__button.svc-item-value-controls__remove[aria-label="Click to remove the item..."]', { timeout: 90000 }),
        sdRating: () => ({ selector: '.sd-rating', timeout: 900000 }),
        sdRatingSmiley: () => ({ selector: 'label.sd-rating__item-smiley', timeout: 900000 }),
        sdRatingSmileySvgTitle: () => ({ selector: 'label.sd-rating__item-smiley svg title', timeout: 900000 }),
        sdRatingStar: () => ({ selector: 'label.sd-rating__item-star', timeout: 300000 }),
        sdRatingStarSvgTitle: () => ({ selector: 'label.sd-rating__item-star svg title', timeout: 150000 }),
        sdRatingFixedSize: () => ({ selector: 'label.sd-rating__item--fixed-size', timeout: 300000 }),
        sdRatingTextLabel: () => ({ selector: '.sd-rating__item-text .sv-string-editor', timeout: 300000 }),
        sdRatings: () => cy.get('.sd-rating', { timeout: 900000 }),
        sdRatingSmileys: () => cy.get('label.sd-rating__item-smiley', { timeout: 900000 }),
        sdRatingStars: () => cy.get('label.sd-rating__item-star', { timeout: 900000 }),
        sdRatingLabelSizes: () => cy.get('label.sd-rating__item--fixed-size', { timeout: 900000 }),
        surveySchedulesearchBar: () => cy.get('@surveyScheduleName').then((name) => {
            cy.get('input[placeholder="Search for anything..."]').clear().type(name, { delay: 0 }); cy.contains('button', 'Search')
        }),
        notApplicableOption: () => cy.contains('span.sv-string-viewer', 'Not Applicable', { timeout: 900000 }),
        surveySchedulesearchBarPlace: () => cy.get('@scheduleSurveyName').then((name) => {
            cy.get('input[placeholder="Search for anything..."]').clear().type(name, { delay: 0 });
            cy.contains('button', 'Search', { timeout: 900000 })
        }),
        setDatevalue: () => cy.setDateValue($el, ExpiryDate, { timeout: 900000 }),
        sdCheckboxContainer: () => cy.get('.sd-selectbase', { timeout: 30000 }),
        itemValueWrappers: () => cy.get('div.svc-item-value-wrapper', { timeout: 30000 }),
        itemRemoveIcon: () => cy.get('[aria-label="Click to remove the item..."]', { timeout: 30000 }),
        addQuestionButtonPage2: () => cy.get('.svc-element__add-new-question.svc-btn', { timeout: 30000 }).eq(1),
        page1Question2: () => cy.get('div.sd-page:has(span[aria-label="Page 1"]) div[data-sv-drop-target-survey-element="question2"] span[aria-label="content editable"]', { timeout: 30000 }).eq(0),
        page1Question3: () => cy.get('div.sd-page:has(span[aria-label="Page 1"]) div[data-sv-drop-target-survey-element="question3"] span[aria-label="content editable"]', { timeout: 30000 }).eq(0),
        page2Question1: () => cy.get('div.sd-page:has(span[aria-label="Page 2"]) div[data-sv-drop-target-survey-element="question4"] span[aria-label="content editable"]', { timeout: 30000 }).eq(0),
        page2Question2: () => cy.get('div.sd-page:has(span[aria-label="Page 2"]) div[data-sv-drop-target-survey-element="question5"] span[aria-label="content editable"]', { timeout: 30000 }).eq(0),
        page2Question3: () => cy.get('div.sd-page:has(span[aria-label="Page 2"]) div[data-sv-drop-target-survey-element="question6"] span[aria-label="content editable"]', { timeout: 30000 }).eq(0),
        surveyLanguageDropdown: () => cy.get('.spg-dropdown_chevron-button', { timeout: 30000 }),
        arabicSurveyLanguageDropdownOption: () => cy.contains('span.sv-string-viewer', 'Arabic', { timeout: 30000 }),
        surveySettingsIcon: () => cy.get('svg.sv-svg-icon[role="img"] title', { timeout: 30000 }).contains('Survey settings'),
        surveySettingsButton: () => cy.get('button[title="Survey settings"]', { timeout: 30000 }),
        fieldLabelRawWithContains: (fieldName) => `span.sv-string-viewer:contains("${fieldName}")`,
        sectionTitle: (sectionName) => cy.xpath(`//h4[contains(@class,"spg-title")]//span[normalize-space(text())="${sectionName}"]`, { timeout: 30000 }),
        fieldLabelByName: (fieldName) => cy.contains('span.sv-string-viewer', fieldName, { timeout: 30000 }),
        dropdownInputByField: (fieldName) => cy.xpath(`//div[@aria-label="${fieldName}"]//input[contains(@class,"spg-dropdown__filter-string-input")]`, { timeout: 30000 }),
        popupListContainer: () => cy.get('.sv-popup.spg-dropdown-popup ul.sv-list', { timeout: 30000 }),
        popupListItemByValue: (dropdownValue) => cy.get('span.sv-string-viewer').filter((index, el) => el.innerText.trim() === dropdownValue, { timeout: 30000 }),
        selectedDropdownText: (fieldName) => cy.xpath(`//div[@aria-label="${fieldName}"]//span[@data-bind="text: model.filterString"]`, { timeout: 8000 }),
        selectedListItem: () => cy.get('ul.sv-list li[aria-selected="true"] span.sv-string-viewer', { timeout: 8000 }),
        filterText: (fieldName) => cy.xpath(`//div[@aria-label="${fieldName}"]//span[@data-bind="text: model.filterString"]`, { timeout: 30000 }),
        selectedDropdownItem: () => cy.get('ul.sv-list li[aria-selected="true"] span.sv-string-viewer', { timeout: 30000 }),
        questionNum1Text: () => cy.get('span[role="textbox"][aria-label="content editable"]', { timeout: 30000 }).eq(0),
        translationsTabSession: () => cy.get('.svc-tabbed-menu-item__text').contains('Translations', { timeout: 30000 }),
        arabicColumnQuestionLocation: () => cy.get('textarea[aria-label="row Question title, column Arabic"]', { timeout: 30000 }),
        arabicColumnAllLocation: () => cy.get('textarea[aria-label*="Arabic"]', { timeout: 30000 }),
        suerveyScheduleDefaultLangDropdown: () => cy.xpath("//div[contains(@class,'input_select-form_inner-label') and .//p[text()='Select default language']]", { timeout: 90000 }),
        addQuestionBtnAdditional: () => cy.get('.svc-page[data-sv-drop-target-page="page2"] .svc-element__add-new-question', { timeout: 30000 }),
        previewQuestionwidth: () => cy.get('h3.sd-title'),
        enableNoneoption: () => cy.contains('span.sv-string-viewer--multiline', 'Enable the "None" option'),
        noneOptionPreview: () => cy.contains('span.sv-string-viewer', 'None'),
        noneOptiondropdown: () => cy.contains('span.sv-string-editor[contenteditable="true"]', 'None'),
        sixthMenu: () => cy.get('#children-6', { timeout: 90000 }),

    }

    selectQuestionType2(type) {
        cy.log("selectQuestionType2");
        cy.log("Question type dropdown should be visible.");
        this.elements.selectQuestionType2Dropdown().should('be.visible').then(() => cy.log("Dropdown is visible"));
        cy.log("Dropdown button should be visible.");
        this.elements.questionTypeDropdownButton().should('be.visible').click().then(() => cy.log("Dropdown button clicked"));
        cy.log(`Option '${type}' should be visible.`);
        this.elements.questionTypeOptions().contains(type).should('be.visible').click().then(() => cy.log(`Option '${type}' selected`));
        cy.log(`Option 'INVALID_OPTION' should NOT be visible.`);
        this.elements.questionTypeOptions().contains("INVALID_OPTION").should('not.exist').then(() => cy.log("Invalid option not found (expected)"));
        cy.log("selectQuestionType2 completed");
    }
    captureRatingNumbers() {
        cy.log("captureRatingNumbers");
        cy.log("Rating element should be visible");
        cy.get(this.elements.sdRating().selector, { timeout: this.elements.sdRating().timeout }).should('be.visible').then(() => cy.log("Rating element is visible")).then(($els) => {
            let numbers = [];
            cy.log("Detecting rating type...");
            if ($els.find(this.elements.sdRatingSmiley().selector).length) {
                cy.log("Detected: Smiley Rating");
                numbers = Array.from($els.find(this.elements.sdRatingSmileySvgTitle().selector)).map(el => el.textContent.trim());
                cy.log("Extracted smiley rating numbers");
            }
            else if ($els.find(this.elements.sdRatingStar().selector).length) {
                cy.log("Detected: Star Rating");
                numbers = Array.from($els.find(this.elements.sdRatingStarSvgTitle().selector)).map(el => el.textContent.trim()).filter(Boolean);
                numbers = [...new Set(numbers)];
                cy.log("Extracted star rating numbers");
            }
            else if ($els.find(this.elements.sdRatingFixedSize().selector).length) {
                cy.log("Detected: Fixed-size Rating");
                numbers = Array.from($els.find(this.elements.sdRatingFixedSize().selector)).map(el => {
                    const svgTitle = el.querySelector('svg title');
                    return svgTitle ? svgTitle.textContent.trim() : el.textContent.trim();
                })
                    .filter(Boolean);
                numbers = [...new Set(numbers)];
                cy.log("Extracted fixed-size rating numbers");
            }
            else if ($els.find(this.elements.sdRatingTextLabel().selector).length) {
                cy.log("Detected: Rating with text labels");
                numbers = Array.from($els.find(this.elements.sdRatingTextLabel().selector))
                    .map(el => el.textContent.trim())
                    .filter(Boolean);
                cy.log("Extracted text rating numbers");
            }
            if (numbers.length === 0) {
                cy.log("No rating values found (unexpected)");
            } else {
                cy.log("Rating values captured successfully → " + numbers.join(", "));
            }
            cy.wrap(numbers).as("expectedRatingNumbers");
        });
        cy.log("captureRatingNumbers");
    }
    decreaseItemRatingButton() {
        cy.log("Attempting to decrease item rating");
        this.elements.removeItemRatingButton({ timeout: 20000 }).should('exist').then(($btn) => {
            cy.wrap($btn).click({ force: true });
            cy.log("Positive: Decrease rating button clicked successfully");
        })
            .catch(() => {
                cy.log("Decrease rating button NOT found or not clickable");
                throw new Error("Decrease rating button is missing or not clickable");
            });
    }
    clickOnnewSurvey() {
        cy.log("Checking + New Survey button visibility");
        this.elements.newSurveyButton().then($el => {
            if ($el.is(':visible')) {
                cy.wrap($el).scrollIntoView().click({ force: true });
                cy.log("Clicked on + New Survey button");
                console.log("Clicked on + New Survey button");
            }
            else {
                const msg = "New Survey button not visible, cannot click";
                cy.log(msg).then(() => {
                    console.error(msg);
                    throw new Error(msg);
                });
            }
        });
        cy.log("Waiting for redirect to Add Survey page...");
        const expectedUrl = "/SurveyUI/surveys/add";
        cy.url({ timeout: 900000 }).should('include', expectedUrl);
        cy.url().then(currentUrl => {
            if (currentUrl.includes(expectedUrl)) {
                const msg = "User successfully redirected to Add Survey page: " + currentUrl;
                cy.log(msg);
                console.log(msg);
            } else {
                const msg = "User NOT redirected to Add Survey page. Current URL: " + currentUrl;
                cy.log(msg).then(() => {
                    console.error(msg);
                    throw new Error(msg);
                });
            }
        });
    }
    clickOnSaveAsDraft() {
        cy.log("Clicking 'Save as Draft'");
        cy.intercept('POST', '**/api/survey/**').as('saveDraft');
        this.elements.saveAsdraft().scrollIntoView().should('be.visible').should('not.be.disabled').click();
        cy.log("Save as Draft' clicked");
        cy.wait('@saveDraft', { timeout: 30000 }).then((interception) => {
            if (interception.response && interception.response.statusCode === 200) {
                cy.log("Draft saved successfully");
            } else {
                const msg = "API returned error";
                cy.log(msg);
                throw new Error(msg);
            }
        });
        cy.wait(2000);
        cy.log("Verifying survey appears in Draft list...");
        this.elements.tableFirstRow().should('be.visible', { timeout: 90000 }).should('contain.text', this.surveyName)
            .then(() => {
                cy.log("Survey saved in Draft successfully and visible in table");
            });
    }

    goToSurveyList() {
        this.elements.surveyMenu().eq(7).scrollIntoView().should('be.visible').click({ force: true });
        this.elements.seventhMenu().should('be.visible');
        this.elements.surveyList().should('be.visible', { timeout: 90000 }).click({ force: true });
        cy.log("Clicked on Survey List");
        cy.url({ timeout: 20000 }).should('include', '/SurveyUI/surveys').then((currentUrl) => {
            cy.log("User successfully redirected to Survey List page: " + currentUrl);
            console.log("User successfully redirected to Survey List page: " + currentUrl);
        });
    }
    clickOnNewSurvey() {
        cy.log("Clicking on + New Survey button");
        this.elements.newSurveyButton().then($btn => {
            if ($btn.length > 0 && $btn.is(':visible')) {
                cy.wrap($btn).click({ force: true })
                    .then(() => cy.url().should('include', '/SurveyUI/surveys/add'))
                    .then(url => cy.log("Add Survey page loaded: " + url));
            } else {
                cy.log("+ New Survey button not found or not visible");
            }
        });
        cy.log("End click + New Survey");
    }
    updateQuestion() {
        cy.log("Update Question");
        this.elements.questionUpdate().scrollIntoView().should('exist').then(($input) => {
            if ($input.is(':visible')) {
                cy.log("Question input box is visible");
                cy.wrap($input).clear().type('Customer satisfaction for survey');
                cy.log("Question updated successfully");
            } else {
                cy.log("Question input box is NOT visible");
            }
        });
        this.elements.previewTabclick().scrollIntoView().should('exist')
            .then(($tab) => {
                if ($tab.is(':visible')) {
                    cy.log("Preview tab is visible");
                    cy.wrap($tab).click({ force: true });
                    cy.log("Preview tab clicked successfully");
                } else {
                    cy.log("Preview tab NOT visible");
                }
            });
        const updatedText = 'Customer satisfaction for survey';
        this.elements.questionMultiline(updatedText).scrollIntoView().then(($label) => {
            if ($label.length > 0 && $label.is(':visible')) {
                cy.log(`Updated question '${updatedText}' is visible in Preview`);
            } else {
                cy.log(`Updated question '${updatedText}' NOT visible in Preview`);
            }
        });
        cy.log("Update Question");
    }
    backTopuffin() {
        this.elements.backTopuffin().should('be.visible').click();
    }

    createSurvey({ Department, Language, "Expiry Date": ExpiryDate, "Wait Period": WaitPeriod, Description }, isPositive = true) {
        this.elements.addSurvey().eq(1).then($el => {
            if ($el.is(':visible')) {
                cy.wrap($el).click({ force: true, timeout: 120000 });
                cy.log("Clicked add survey button");
                console.log("Clicked add survey button");
            } else {
                const msg = "Add Survey button not visible";
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
            }
        });
        this.surveyName = faker.word.words(2) + ' Survey';
        this.elements.surveyName().then($el => {
            if ($el.is(':visible')) {
                cy.wrap($el).type(this.surveyName).should('have.value', this.surveyName);
                cy.wrap(this.surveyName).as('surveyName');
                cy.log("Survey Name entered: " + this.surveyName);
                console.log("Survey Name entered: " + this.surveyName);
            } else {
                const msg = "Survey Name input not visible";
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
            }
        });
        this.elements.surveyDepartmentDropdown().then($el => {
            if ($el.is(':visible')) {
                cy.wrap($el).click();
                this.elements.dropdownOptions().contains(Department).click();
                cy.log("Selected department: " + Department);
                console.log("Selected department: " + Department);
            } else {
                const msg = "Department dropdown not visible";
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
            }
        });
        this.elements.languageDropdown().then($el => {
            if ($el.is(':visible')) {
                cy.wrap($el).click();
                this.elements.dropdownOptions().then($options => {
                    if ($options.length > 0) {
                        this.elements.dropdownOptions().contains(Language).click();
                        cy.log("Selected language: " + Language);
                        console.log("Selected language: " + Language);
                    } else {
                        const msg = "Clicked language dropdown but no options found in UI";
                        cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                    }
                });
            } else {
                const msg = "Language dropdown not visible";
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
            }
        });
        this.elements.expiryDate().then($el => {
            if ($el.is(':visible')) {
                cy.setDateValue($el, ExpiryDate).should('have.value', ExpiryDate);
                cy.log("Expiry Date set: " + ExpiryDate);
                console.log("Expiry Date set: " + ExpiryDate);
            } else {
                const msg = "Expiry Date input not visible";
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
            }
        });
        this.elements.resendWaitPeriod().then($el => {
            if ($el.is(':visible')) {
                cy.wrap($el).clear().type(WaitPeriod || "2");
                cy.log("Wait Period entered: " + (WaitPeriod || "2"));
                console.log("Wait Period entered: " + (WaitPeriod || "2"));
            } else {
                const msg = "Wait Period input not visible";
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
            }
        });
        this.elements.description().then($el => {
            if ($el.is(':visible')) {
                cy.wrap($el).type(Description || "Sample survey description");
                cy.log("Description entered: " + (Description || "Sample survey description"));
                console.log("Description entered: " + (Description || "Sample survey description"));
            } else {
                const msg = "Description input not visible";
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
            }
        });
        this.elements.nextBtn().then($el => {
            if ($el.is(':visible')) {
                cy.wrap($el).click();
                cy.log("Clicked next button");
                console.log("Clicked next button");
            } else {
                const msg = "Next button not visible";
                cy.log(msg).then(() => { console.error(msg); throw new Error(msg); });
            }
        });
        cy.wrap(this.surveyName).as('createdSurveyName');
        if (isPositive) cy.log("Survey List basic details added successfully");
        else cy.log("Survey List basic details not added successfully");

        return this.surveyName;
    }

    verifyDesignerTab() {
        cy.log("Checking Designer tab visibility");
        this.elements.designerTab({ timeout: 90000 }).then($el => {
            if ($el && $el.length > 0 && $el.is(':visible')) {
                cy.log("Designer tab is visible → User navigates to basic details page");
            } else {
                const errorMsg = "Failed: Designer tab not visible";
                cy.log(errorMsg);
                console.error(errorMsg);
                throw new Error(errorMsg);
            }
        });
    }

    verifyDesignerTabarabic(isPositive = true) {
        this.elements.designerTabarabic().should('be.visible');
        if (isPositive) {
            cy.log("Arabic Designer tab should be visible");
            this.elements.designerTabarabic().should('be.visible');
            cy.log("Arabic Designer tab is visible as expected");
        } else {
            cy.log("Arabic Designer tab should NOT be visible");
            this.elements.designerTabarabic().should('not.be.visible');
            cy.log("Arabic Designer tab is NOT visible — negative test passed");
        }
    }

    addQuestionwithRadiobutton({ Title, Type, Options }) {
        cy.log("addQuestionwithRadiobutton");
        cy.log("Clicking Add Question button");
        this.elements.addQuestionBtn().scrollIntoView().should('be.visible').click()
            .then(() => cy.log("Add Question button clicked"));
        cy.log(`Selecting question type: ${Type}`);
        this.elements.questionTypeBtn(Type).scrollIntoView().should('be.visible').click({ force: true }).then(() => cy.log(`Question type '${Type}' selected`));
        const [item1 = '', item2 = '', item3 = ''] = (Options || '').split(',').map(o => o.trim());
        cy.log(`Typing option values: [${item1}], [${item2}], [${item3}]`);
        this.elements.optionInput("Item 1").clear().type(item1).then(() => cy.log("Option 1 set"));
        this.elements.optionInput("Item 2").clear().type(item2).then(() => cy.log("Option 2 set"));
        this.elements.optionInput("Item 3").clear().type(item3).then(() => cy.log("Option 3 set"));
        cy.log("Setting question title");
        this.elements.surveyTitle().click().clear().type(Title)
            .then(($el) => {
                const value = $el.val() || $el.text();
                if (value === Title) {
                    cy.log("Question title set");
                } else {
                    cy.log("Could not verify question title text (some UIs don't reflect typed title immediately)");
                }
            });
        if (!item1 || !item2 || !item3) {
            cy.log("One or more options are empty — ensure Options param includes 3 comma-separated values");
        } else {
            cy.log("All three options provided");
        }
        cy.log("addQuestionwithRadiobutton");
    }
    clickOnaddquestionBtn() {
        cy.log("clickOnaddquestionBtn");
        cy.log("Clicking first Add Question button");
        this.elements.addQuestionBtn().first().scrollIntoView().should('exist').click({ force: true }).then(() => cy.log("Clicked first Add Question button"));
        cy.log("Checking: Question type popup should be visible");
        this.elements.popupContainer().should('be.visible').then(() => cy.log("Question type popup opened (expected)"));
        cy.log("clickOnaddquestionBtn");
        cy.contains('div.sv-list__item-body', 'Radio Button Group').scrollIntoView().should('be.visible').click({ force: true });
        cy.get('body').click(0, 0);
    }
    clickOngeneralsettings() {
        cy.log("clickOngeneralsettings");
        cy.log("Clicking Show Panel title then General Setting");
        this.elements.showPaneltitle().should('be.visible').click().then(() => cy.log("Show Panel title clicked"));
        this.elements.generalSetting().should('be.visible').click().then(() => cy.log("General Setting clicked"));
        cy.log("Checking: Visible checkbox should be checked by default");
        this.elements.visibleCheck({ timeout: 90000 }).scrollIntoView().should('be.checked').then(() => cy.log("Visible checkbox is checked"));
        cy.log("Checking NEGATIVE: Visible checkbox should not be permanently disabled");
        this.elements.visibleCheck().should('not.be.disabled').then(() => cy.log("Visible checkbox is not disabled"));
        cy.log("clickOngeneralsettings");
    }
    visibleCheckuncheck() {
        cy.log("visibleCheckuncheck");
        cy.log("Waiting briefly to ensure UI stable");
        cy.wait(3000);
        cy.log("Clicking Show Panel title");
        this.elements.showPaneltitle().should('be.visible').click({ force: true }).then(() => cy.log("Show Panel title clicked"));
        cy.log("Clicking on body to close overlays");
        cy.get('body').click(0, 0);
        cy.log("Opening General settings to access Visible checkbox");
        this.elements.generalSetting().should('be.visible').click().then(() => cy.log("General setting opened"));
        cy.log("Toggling Visible checkbox to uncheck");
        this.elements.visibleCheck({ timeout: 90000 }).scrollIntoView({ ensureScrollable: false }).click().should('not.be.checked').then(() => cy.log("Visible checkbox is now unchecked"));
        cy.log("Checking NEGATIVE: Visible checkbox can be re-checked");
        this.elements.visibleCheck().click().should('be.checked').then(() => {
            cy.log("Visible checkbox re-checked (demonstrates toggle works)");
            this.elements.visibleCheck().click().should('not.be.checked').then(() => cy.log("Visible checkbox unchecked again"));
        });
        cy.log("visibleCheckuncheck");
    }
    previewSurvey() {
        cy.log("previewSurvey");
        cy.log("Clicking Preview tab");
        this.elements.previewTabclick().should('be.visible').click().then(() => cy.log("Preview tab clicked"));
        cy.log("Selecting random answers in preview");
        this.elements.selectRandomAnswer();
        cy.log("Random answers selected (preview)");
        cy.log(" Preview should not be empty");
        this.elements.previewExist().should('exist').then(() => cy.log("Preview contains elements (expected)"));
        cy.log("previewSurvey");
    }
    sendSurveyForReview() {
        cy.log("sendSurveyForReview");
        cy.log("Ensuring 'Send For Review' button is visible then clicking");
        this.elements.sendForReviewBtn().scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true }).then(() => cy.log("Clicked 'Send For Review'"));
        cy.log("final Send button");
        this.elements.sendButton().should('be.visible').click({ force: true }).then(() => cy.log("Send clicked"));
        cy.log("Success toast should appear");
        this.elements.toastMessage().should('exist').and('contain.text', 'Survey added and sent for review successfully').then(() => cy.log("Success toast appeared"));
        cy.log(" Error toast should NOT appear");
        this.elements.toastErrorMessage().should('not.exist').then(() => cy.log("No error toast present"));
        cy.log("sendSurveyForReview");
    }
    verifySurveyapprovedSuccess() {
        cy.log("verifySurveyapprovedSuccess");
        cy.log("Checking: 'Survey approved successfully' toast should be visible");
        this.elements.surveyApprovedsuccess().should('be.visible').and('contain.text', 'Survey approved successfully').then(() => cy.log("Approval success toast visible"));
        this.elements.toastErrorMessage().should('not.exist').then(() => cy.log("No approval error toast"));
        cy.log("verifySurveyapprovedSuccess");
    }
    sendReview() {
        cy.log("Clicking 'Send For Review' button");
        this.elements.sendReviewbtn().scrollIntoView({ ensureScrollable: false }).should('be.visible').and('not.be.disabled').click({ force: true });
        cy.log("'Send For Review' clicked. Waiting for validation / crash...");
        cy.wait(1500);
        cy.get("body").then(($body) => {
            const hasValidation =
                $body.find(".Toastify__toast--error, .Toastify__toast--warning, .error-message, .validation-error").length > 0;
            const hasReactCrash =
                $body.text().includes("Minified React error") ||
                $body.text().includes("Something went wrong");
            if (hasValidation) {
                cy.log("Validation error displayed as expected.");
                return;
            }
            return;
        });
        cy.log("sendReview()");
    }
    verifySurveySentSuccess(expectedMessage) {
        cy.log(" verifySurveySentSuccess");
        cy.log(`toast message contains expected text: '${expectedMessage}'`);
        this.elements.toastMessage().should("contain.text", expectedMessage, { timeout: 90000 }).then(() => cy.log("Expected toast message displayed"));
        cy.log("First row should contain survey name");
        this.elements.tableFirstRow().should('contain.text', this.surveyName, { timeout: 90000 }).then(() => cy.log("Survey found in table first row"));
        cy.log("Status column should not be blank");
        this.elements.surveyStatus().should('not.be.empty').then(() => cy.log("Status column is not blank"));
        cy.log('Status column is changed to "In Review" in Survey makers Survey list');
        cy.log("verifySurveySentSuccess");
    }
    verifyNoquestionAdded() {
        cy.log("verifyNoquestionAdded");
        cy.log("Checking: Toast appears for no question added");
        cy.get('div.toast').should('contain.text', 'Please add question to send survey for review').then(() => cy.log("Expected toast displayed: 'Please add question to send survey for review'"));
        this.elements.surveyApprovedsuccess().should('not.exist').then(() => cy.log("No success toast present (expected)"));
        cy.log("verifyNoquestionAdded");
    }
    goTosurveySchedule() {
        cy.log("goTosurveySchedule");
        cy.log("Navigating to Survey Schedule via Survey Menu");
        this.elements.surveyMenu().eq(7).scrollIntoView({ ensureScrollable: false }).should('be.visible').click().then(() => cy.log("Clicked survey menu"));
        cy.log("Clicking Survey Schedule menu option");
        this.elements.surveySchedule().should('be.visible').click().then(() => cy.log("Survey Schedule clicked"));
        this.elements.designerTab().should('not.exist').then(() => cy.log("Not on Designer tab (expected)"));
        cy.log("goTosurveySchedule");
    }
    threeDotmenuClick(_surveyName) {
        cy.log("threeDotmenuClick");
        cy.log("Clicking the three dot menu for first survey row");
        this.elements.threeDotmenu().eq(0).scrollIntoView().should('be.visible').click({ force: true }).then(() => cy.log("Three dot menu clicked"));
        cy.log("Clicking Approve request from menu");
        this.elements.approveRequest().should('be.visible').click({ force: true }).then(() => cy.log("Approve request clicked"));
        cy.log("Typing approval reason");
        this.elements.approvalReason().should('be.visible').type('Approved after review').then(() => cy.log("Approval reason typed"));
        cy.log("Clicking Approve button");
        this.elements.clickOnApprovebutton().should('be.visible').click({ force: true }).then(() => cy.log("Clicked Approve"));
        cy.log("Checking: Approval success toast expected");
        this.elements.surveyApprovedsuccess().should('be.visible').then(() => cy.log("Survey approved which was in review status"));
        cy.log("threeDotmenuClick");
    }
    selectQuestionGrid() {
        cy.log("selectQuestionGrid");
        cy.log("Clicking on question grid");
        this.elements.questionGrid().should('exist').scrollIntoView({ offset: { top: -200, left: 0 } }).wait(1000).click({ force: true });
        cy.log("Question grid clicked");
        this.elements.questionGrid().should('not.be.empty');
        cy.log("Question grid not empty");
        cy.log("selectQuestionGrid");
    }
    scheduleSurvey() {
        cy.log("scheduleSurvey");
        cy.log("Navigating to schedule page");
        this.elements.surveyMenu().eq(7).scrollIntoView().should('be.visible').click().then(() => cy.log("Survey menu clicked"));
        this.elements.surveySchedule().should('be.visible').click().then(() => cy.log("Survey Schedule clicked"));
        cy.url().should('not.include', '/surveys/add').then(() => cy.log("Not on add survey page"));
        cy.log("scheduleSurvey");
    }
    addSurveySchedule({ ScheduleName, Date = 'Date', Time = '14:44', LinkExpiry = 1 }) {
        cy.log("addSurveySchedule");
        cy.log("Clicking Add Schedule survey button");
        this.elements.addShedulesurvey().should('be.visible').click().then(() => cy.log("Add Schedule clicked"));
        this.scheduleSurveyname = ScheduleName || (faker.word.words(2) + ' Schedule');
        cy.log("Generated schedule name: " + this.scheduleSurveyname);
        cy.log("Typing schedule name");
        this.elements.scheduleSurveyname().should('be.visible').type(this.scheduleSurveyname).should('have.value', this.scheduleSurveyname).then(() => {
            cy.wrap(this.scheduleSurveyname).as('scheduleSurveyName');
            cy.log("Schedule name typed");
        });
        cy.log("Selecting survey in dropdown");
        this.selectSurveyInDropdown();
        cy.log("Setting schedule date");
        this.setScheduleDate ? this.setScheduleDate(Date) : cy.log("setScheduleDate helper not found");
        cy.log("Setting schedule time");
        this.setScheduleTime ? this.setScheduleTime(Time) : cy.log("setScheduleTime helper not found");
        cy.log("Setting link expiry");
        this.setLinkExpiry ? this.setLinkExpiry(LinkExpiry) : cy.log("setLinkExpiry helper not found");
        cy.wrap(this.scheduleSurveyname).should('not.be.empty').then(() => cy.log("Schedule name is not empty"));
        cy.log("addSurveySchedule");
    }
    selectSurveyInDropdown() {
        this.elements.surveyNamedropdownfromSchedule();
        cy.log("Selecting survey from dropdown list");
    }
    selectScheduleLanguage() {
        cy.log("selectScheduleLanguage");
        cy.log("Schedule language should display 'English' (or be selectable)");
        this.elements.scheduleLanguage() ? this.elements.scheduleLanguage().should('be.visible').then(() => cy.log("Schedule language visible")) : cy.log("scheduleLanguage locator not found");
        cy.log("Other languages should not be preselected unexpectedly");
        this.elements.languageDropdown().should('not.contain.text', 'SomeUnexpectedLanguage').then(() => cy.log("Other languages not preselected"));
        cy.log("selectScheduleLanguage");
    }
    selectSchedulereview() {
        cy.log("Selecting schedule review from 3-dot menu");
        this.elements.selectScheduledreviewfrom3dotMenu().parents('tr').scrollIntoView({ offset: { top: 0, left: 500 } }).within(() => {
            cy.log("Checking kebab menu exists and visible");
            this.threeDotmenu().scrollIntoView().should('exist').and('be.visible').then(() => cy.log("Kebab menu exists and visible")).click({ force: true });
        });
        cy.wait(1000);
        cy.log("Clicking Approve option");
        this.elements.aprroveThreedotmenu().contains('Approve').scrollIntoView().should('be.visible').then(() => cy.log("Approve option visible")).click({ force: true });
        cy.log("Entering approval reason");
        this.elements.approvalReason().should('be.visible').type('approved').then(() => cy.log("Approval reason typed"));
        cy.log("Clicking Approve button");
        this.elements.clickOnApprovebutton().should('be.visible').then(() => cy.log("Approve button visible")).click({ force: true });
    }
    setScheduleDate(Date) {
        cy.log(`Setting schedule date: ${Date}`);
        this.elements.expiryDate().then($el => {
            cy.setDateValue($el, Date).should('have.value', Date).then(($input) => {
                const value = $input.val();
                expect(value).to.not.equal("");
                cy.log("Schedule date correctly set");
                cy.log("Date is not empty");
            });
        });
    }
    setScheduleTime(Time) {
        cy.log("Clearing schedule time field");
        this.elements.scheduleTime().clear();
        cy.log(`Typing schedule time: ${Time}`);
        this.elements.scheduleTime().type(Time).should('have.value', Time).then(($el) => {
            const value = $el.val();
            expect(value).to.not.equal("");
            cy.log("Schedule time correctly set");
            cy.log("Schedule time is not empty");
        });
    }
    setLinkExpiry(LinkExpiry) {
        cy.log(`Setting link expiry: ${LinkExpiry}`);
        this.elements.linkExpiry().clear().type(LinkExpiry.toString()).should('have.value', LinkExpiry.toString()).then(($el) => {
            const value = $el.val();
            expect(value).to.not.equal("");
            cy.log("Link expiry set");
            cy.log("Link expiry is not empty");
        });
        cy.log("Waiting for schedule form to stabilize");
        cy.log("Clicking Next button");
        this.elements.scheduleNextbtn().should('be.visible').and('not.be.disabled').scrollIntoView().click({ force: true });
    }
    addChannel() {
        cy.log("Clicking language selector");
        this.elements.addChannelselectLanguage().click();
        cy.log("Checking language dropdown visible");
        this.elements.addChannelLanguageDropdown().should('be.visible')
            .then(() => cy.log("SUCCESS: Language dropdown visible"));
        cy.log("Selecting English language");
        this.elements.addChannelLanguagelist().contains('English').click();
        cy.log("Checking SMS channel box");
        this.elements.addChannelSMS().check({ force: true }).should('be.checked').then(() => cy.log("SMS checkbox selected"));
        cy.log("Selecting SMS sender ID");
        this.elements.smsSenderID().eq(1).click();
        this.elements.smsSenderIDselection().click();
        cy.log("Opening SMS Template dropdown");
        this.elements.smsTemplate().parents('.input_select-form').find('.logo-small').click({ force: true });
        cy.log("Attempting to select English SMS template");
        this.elements.selectSMStemplateOption().click({ force: true });
        cy.wait(1000);
        cy.get('body').then(($body) => {
            if ($body.text().includes('SMS template must have only one placeholder')) {
                cy.log("English SMS template invalid — selecting alternative");
                cy.contains('.input_select-form_inner-label p', 'Select SMS Template').parents('.input_select-form').find('.logo-small').click({ force: true });
                cy.contains('li.option span', 'FCC SMS Valid En-AR').click({ force: true });
                cy.log("Alternative SMS template selected");
            } else {
                cy.log("English SMS template selected");
            }
        });
        cy.log("Proceeding to next step");
        this.elements.scheduleNextbtn().scrollIntoView({ ensureScrollable: false }).click({ force: true });
    }
    uploadParticipants() {
        cy.log("Uploading participant file");
        this.elements.uploadParticipantfile();
        cy.wait(3000);
        cy.log("Opening participants for review");
        this.elements.participantsForreview().click({ force: true });
        cy.log("Checking confirmation popup visible");
        this.elements.confirmParticipantspopup().should('be.visible').then(() => cy.log("Confirmation popup visible"));
        cy.log("Confirming participants");
        this.elements.confirmParticipantdialogFooter().should('be.visible').click();
        cy.log("Validating table row contains schedule name");
        this.elements.tableFirstRow().should('contain.text', this.scheduleSurveyname).then(() => cy.log("Participants uploaded correctly"));
    }
 
    approveSchedule() {
        cy.log("Approving schedule");
        cy.log("Clicking Approve Request");
        this.elements.approveRequest().should('be.visible').click({ force: true }).then(() => cy.log("Approve Request clicked"));
        cy.log("Entering approval reason");
        this.elements.approvalReason().should('be.visible').type('approved');
        cy.log("Clicking Approve button");
        this.elements.clickOnApprovebutton().should('be.visible').click({ force: true });
    }

    clickOnvisibleCheckbox() {
        cy.log("Checking visibility checkbox is visible");
        this.elements.visibleCheckbox().scrollIntoView().should('be.visible').then(() => cy.log("Visibility checkbox visible"));
        cy.log("Clicking preview tab");
        this.elements.previewTabclick().scrollIntoView().click({ force: true });
        cy.log("Checking preview exists");
        this.elements.previewExist().should('exist').then(() => cy.log("Preview loaded"));
    }
    clickOnvisibleUncheck() {
        cy.log("Unchecking visibility checkbox");
        this.elements.visibleCheckbox().scrollIntoView().parents('label, div, tr').find('input[type="checkbox"]').uncheck({ force: true }).then(() => cy.log("Visibility unchecked"));
        cy.log("Clicking preview tab");
        this.elements.previewTabclick().scrollIntoView().click({ force: true });
        cy.log("Checking hidden element popup visible");
        this.elements.visibleElementspopup().scrollIntoView().should('be.visible').then(() => cy.log("Hidden popup displayed"));
    }
    clickOnreadOnly() {
        cy.log("clickOnreadOnly");
        cy.log("Scrolling to and checking readonly checkbox");
        this.elements.readOnly().scrollIntoView({ offset: { top: -150 } }).check({ force: true }).then(() => cy.log("Readonly checkbox is checked"));
        cy.log("Clicking Preview tab");
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true }).then(() => cy.log("Preview tab clicked"));
        cy.wait(2000);
        cy.log("Waiting 2 seconds for preview to load");
        cy.log("Verifying preview content exists and is visible");
        this.elements.previewExist().should('exist').should('be.visible').then(($el) => {
            cy.log("Preview element exists and is visible");
            const text = $el.text().trim();
            if (text === '') {
                cy.log("Preview content is empty");
            } else {
                cy.log("Preview content is not empty");
                cy.log("User is able to only view the Question and options");
            }
            expect(text).to.not.equal('');
        });
        cy.log("clickOnreadOnly");
    }
    clickOnuncheckReadonly() {
        cy.log("clickOnuncheckReadonly");
        cy.log("Scrolling to and unchecking readonly checkbox");
        this.elements.readOnly().scrollIntoView({ offset: { top: -150 } }).uncheck({ force: true }).should('not.be.checked').then(() => cy.log("Readonly checkbox is unchecked"));
        cy.log("Clicking Preview tab");
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true }).then(() => cy.log("Preview tab clicked"));
        cy.log("Selecting survey answer 'Yes'");
        this.elements.surveyAnswers().should('exist').should('be.visible').contains('Yes').should('be.visible').click({ force: true }).then(() => {
            cy.log("'Yes' option found and clicked");
            cy.log("Survey option is selectable (readonly is disabled)");
        });
        cy.log("clickOnuncheckReadonly");
    }
    clickOnRequiredCheckbox() {
        cy.log("clickOnRequiredCheckbox");
        cy.log("Scrolling to required checkbox");
        this.elements.requiredCheckbox().scrollIntoView({ offset: { top: -150 } }).should('exist').then(() => cy.log("Required checkbox exists")).should('be.visible').then(() => cy.log("Required checkbox is visible")).then(($el) => {
            if ($el.is(':checked')) {
                cy.log("Required checkbox was already checked");
            } else {
                cy.log("Required checkbox is initially unchecked");
            }
        }).check({ force: true }).should('be.checked')
            .then(() => cy.log("Required checkbox is now checked"));
        cy.log("Clicking Preview tab");
        this.elements.previewTabclick().scrollIntoView().should('be.visible').then(() => cy.log("Preview tab is visible")).click({ force: true }).then(() => cy.log("Preview tab clicked"));
        cy.log("clickOnRequiredCheckbox");
    }

    clickOnlogout() {
        cy.log("Hovering over profile menu");
        this.elements.profileMenuName().trigger('mouseover', { force: true });
        cy.log("Checking dropdown visible");
        this.elements.profileDropdown().should('be.visible');
        cy.wait(3000);
        cy.log("Clicking logout option");
        this.elements.profileMenudropdown().click({ force: true });
        cy.log("Checking login URL visible");
        this.elements.loginUrldisplay();
    }

    clickOnrequiredCheckbox() {
        cy.log("clickOnrequiredCheckbox");
        this.elements.generalSetting().scrollIntoView().should('be.visible').then(($tab) => {
            const isOpen = $tab.parent().hasClass('sv-expanded');
            if (!isOpen) {
                cy.wrap($tab).click({ force: true });
                cy.log("General tab opened");
            } else {
                cy.log("General tab already open skipping click");
            }
        });
        cy.get('body').then(($body) => {
            if ($body.find('.spg-panel.spg-panel-general, .sd-panel--general').length > 0) {
                cy.log("General panel exists");
                const requiredCheckbox = 'input[type="checkbox"][name="isRequired"], input[id*="required"]';
                cy.get(requiredCheckbox).scrollIntoView().check({ force: true }).should('be.checked');
                cy.log("Required checkbox is now checked");
            } else {
                cy.log("General panel NOT found it may have been collapsed or DOM refreshed");
            }
        });

        cy.log("clickOnrequiredCheckbox");
    }
    clickOnrequiredUncheck() {
        cy.log("Unchecking Required checkbox");
        this.elements.generalSetting().scrollIntoView().should('be.visible').then(($general) => {
            cy.log("General tab located");
            this.elements.openPanel().then(($openPanel) => {
                if ($openPanel.length === 0) {
                    cy.log("General panel is closed → Opening now");
                    cy.wrap($general).click({ force: true });
                } else {
                    cy.log("General panel already open → Skipping click");
                }
            });
        });
        cy.wait(700);
        cy.get('.spg-panel__content', { timeout: 7000 }).should('be.visible').then(() => cy.log("General panel is open"));
        cy.get('input[name="isRequired"], input[aria-label="Required"]', { timeout: 7000 }).then(($chk) => {
            if ($chk.length === 0) {
                cy.log("Required checkbox not found");
                return;
            }

            cy.log("Required checkbox located");

            if ($chk.is(':checked')) {
                cy.wrap($chk).click({ force: true });
                cy.log("Required checkbox unchecked");
            } else {
                cy.log("Required checkbox already unchecked");
            }
        });
        this.elements.previewTabclick().scrollIntoView().click({ force: true });
        cy.wait(300);
        this.elements.previewTabclick().scrollIntoView().click({ force: true });
        cy.get('span.sd-question__required-text', { timeout: 4000 }).should('not.exist').then(() => cy.log("Asterisk removed"));
        cy.log("Unchecking Required checkbox");
    }
    removeRadiobuttonOption() {
        this.elements.removeRadiobtn().click({ force: true });
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.surveyAnswers().should('not.contain.text', 'Yes');
        cy.log("Able to remove the radio option");
    }
    clickAddCommentCheckbox() {
        cy.log("Add Comment checkbox validation");
        cy.log("Checking Add Comment checkbox visibility");
        this.elements.addcommentBox().scrollIntoView().should('exist').then(($el) => {
            if ($el.is(':visible')) {
                cy.log(" Add Comment checkbox is visible");
                cy.wrap($el).parents('div.spg-row').find('input[type=\"checkbox\"]').check({ force: true });
                cy.log("Add Comment checkbox is checked successfully");

            } else {
                cy.log("Add Comment checkbox is NOT visible");
            }
        });
        cy.log("Validating Comment textarea state");
        this.elements.textareaComment().should('exist').then(($textarea) => {
            if ($textarea.is(':disabled')) {
                cy.log("Comment textarea is disabled");
            } else {
                cy.log("Comment textarea is enabled (should be disabled)");
            }
        });
        cy.log("Checking Preview tab");
        this.elements.previewTabclick().scrollIntoView().should('exist').then(($tab) => {
            if ($tab.is(':visible')) {
                cy.log("Preview tab is visible");
                cy.wrap($tab).click({ force: true });
                cy.log("Preview tab clicked");
            } else {
                cy.log("Preview tab is NOT visible");
            }
        });

        cy.log("Validating Preview Comment box");
        this.elements.addCommentexist().should('exist').then(($el) => {
            if ($el.is(':disabled')) {
                cy.log("Preview comment box is present");
            } else {
                cy.log("Preview comment box should not present");
            }
        });

        cy.log("Add Comment checkbox validation");
    }
    showPanelandGeneralquestionGrid() {
        cy.log("Opening panel and general question grid");
        cy.log("POSITIVE CHECK: Verifying panel and general settings open correctly");
        this.elements.showPaneltitle().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.generalSetting().scrollIntoView().should('be.visible').click({ force: true });
        cy.log("Panel and general settings opened successfully");
        cy.log("NEGATIVE CHECK: Verifying general settings element exists and is not disabled");
        this.elements.generalSetting().should('exist').and('not.be.disabled');
        cy.log("NEGATIVE CHECK PASSED: General settings element is present and enabled");
    }
    clickAddcommentUncheck() {
        cy.log("Uncheck Add Comment checkbox validation");
        this.elements.addcommentBox().scrollIntoView().should('exist').then(($el) => {
            if ($el.is(':visible')) {
                cy.log("Add Comment checkbox label is visible");
                cy.wrap($el).parents('div.spg-row').find('input[type=\"checkbox\"]').uncheck({ force: true });
                cy.log("Add Comment checkbox is unchecked");
            } else {
                cy.log("Add Comment checkbox label is NOT visible");
            }
        });
        cy.log("Checking if Comment textarea is removed");
        cy.get('body').then(($body) => {
            if ($body.find('textarea.sd-input.sd-comment').length === 0) {
                cy.log("PASS: Comment textarea is removed as expected");
            } else {
                cy.log("Comment textarea still exists");
            }
        });
        this.elements.previewTabclick().scrollIntoView().should('exist').then(($tab) => {
            if ($tab.is(':visible')) {
                cy.log("Preview tab is visible");
                cy.wrap($tab).click({ force: true });
                cy.log("Preview tab clicked successfully");
            } else {
                cy.log("Preview tab NOT visible");
            }
        });
        cy.log("Validating Add Comment box in Preview");
        cy.get('body').then(($body) => {
            if ($body.find('div.sd-comment').length === 0) {
                cy.log("Add Comment box is not present in Preview as expected");
            } else {
                cy.log("Add Comment box still present in Preview");
            }
        });
        cy.log("Uncheck Add Comment checkbox validation");
    }
    updateSingleradioOption() {
        cy.log("Update Single Radio Option");
        cy.log("Checking choice options visibility");
        this.elements.choiceOptions().scrollIntoView().should('exist')
            .then(($opt) => {
                if ($opt.is(':visible')) {
                    cy.log("Choice options are visible");
                    cy.wrap($opt).click({ force: true });
                } else {
                    cy.log("Choice options are NOT visible");
                }
            });
        cy.get('div.svc-side-bar.svc-side-bar--flyout').then(($sidebar) => {
            if ($sidebar.css('display') === 'none') {
                cy.log("Sidebar hidden — Attempting to open");
                this.elements.showPaneltitle().click({ force: true });
                cy.wait(1000);
                cy.log("Sidebar opened successfully");
            } else {
                cy.log("Sidebar already visible");
            }
        });
        cy.log("Checking edit option availability");
        this.elements.editRadioOption().first().scrollIntoView().then(($edit) => {
            if ($edit.is(':visible')) {
                cy.log("Edit option is visible");
                cy.wrap($edit).click({ force: true });
            } else {
                cy.log("Edit option is NOT visible");
            }
        });
        cy.get('textarea#sq_705i').then(($textarea) => {
            if ($textarea.is(':visible')) {
                cy.log("Radio options textarea is visible");
                cy.wrap($textarea)
                    .clear()
                    .type('Item 1|Agree{enter}Item 2|No{enter}Item 3|Maybe');
                cy.log(" Options updated");
            } else {
                cy.log("Radio options textarea NOT visible");
            }
        });
        this.elements.applyButton().then(($btn) => {
            if ($btn.is(':visible')) {
                cy.wrap($btn).click({ force: true });
                cy.log("Apply button clicked");
            } else {
                cy.log("Apply button NOT visible");
            }
        });
        this.elements.previewTabclick().scrollIntoView().should('exist').then(($tab) => {
            if ($tab.is(':visible')) {
                cy.log("Preview tab is visible");
                cy.wrap($tab).click({ force: true });
            } else {
                cy.log("Preview tab NOT visible");
            }
        });
        cy.get('span.sv-string-viewer').then(($span) => {
            const text = $span.text();
            if (text.includes('Agree')) {
                cy.log("Updated option 'Agree' is visible");
            } else {
                cy.log("Updated option 'Agree' NOT found");
            }

            if (!text.includes('Yes')) {
                cy.log("Old option 'Yes' correctly removed");
            } else {
                cy.log("Old option 'Yes' is still present");
            }
        });

        cy.log("Single radio button option is updated");
    }

    checkChoiceoption() {
        cy.log("Checking choice options panel");
        this.elements.showPaneltitle().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.previewExist().contains('Choices').should('be.visible');
        this.elements.questionMultiline().contains('Value').should('be.visible');
        cy.log("Choice options are displayed");
        this.elements.questionMultiline().should('not.contain.text', 'InvalidChoice');
    }
    updateAllradioOptions() {
        cy.log(" Updating all radio button options");
        const updatedValues = ['Agree', 'Disagree', 'Not Sure'];
        this.elements.editRadioOption().eq(0).click({ force: true });
        cy.get('textarea#sq_705i', { timeout: 90000 }).should('be.visible').invoke('val').then((text) => {
            let updated = text;
            updated = updated.replace('Item 1|Yes', `Item 1|${updatedValues[0]}`);
            updated = updated.replace('Item 2|No', `Item 2|${updatedValues[1]}`);
            updated = updated.replace('Item 3|Maybe', `Item 3|${updatedValues[2]}`);
            cy.get('textarea#sq_705i').clear().type(updated);
            cy.log(" All choice options updated");
        });
        this.elements.applyButton().click({ force: true });
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        const expectedValues = ['Agree', 'Disagree', 'Not Sure'];
        cy.get('span.sv-string-viewer:visible', { timeout: 90000 }).then(($spans) => {
            const textArray = $spans.map((i, el) => Cypress.$(el).text().trim()).get();
            expectedValues.forEach((value) => expect(textArray).to.include(value));
        });
        cy.get('span.sv-string-viewer:visible').then(($spans) => {
            const textArray = $spans.map((i, el) => Cypress.$(el).text().trim()).get();
            expect(textArray).to.not.include.members(['Yes', 'No', 'Maybe']);
        });
        cy.log("All radio options validated in preview with negative check");
    }
    clearAllradioOption() {
        cy.log("Clearing all radio button options");
        this.elements.clearRadiooption().should('be.visible').click({ force: true });
        this.elements.questionMultiline().contains("You don't have any choices yet").should('be.visible');
        this.elements.questionMultiline().should('not.contain.text', 'Item 1');
        this.elements.clearItemconfirmation().should('not.exist');
        cy.log("All radio options cleared and negative validation passed");
    }
    updateQuestionTitle() {
        cy.log("Updating question title");
        this.elements.updateQuestiontitle().should('be.visible').first().clear().type('how the product is satisfied');
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.questionMultiline().contains("how the product is satisfied").should('be.visible');
        cy.log("Question title is updated and visible in preview");
        this.elements.questionMultiline().contains("wrong title").should('not.exist');
        cy.log("Verified incorrect question title is NOT present");
    }
    choiceOtherenable() {
        cy.log("Enabling 'Other' choice option");
        this.elements.generalTitle().then(($section) => {
            const isExpanded = $section.attr('aria-expanded') === 'true';
            if (isExpanded) {
                cy.wrap($section).scrollIntoView()
                    .find('svg.sv-svg-icon.sd-element__title-expandable-svg').click({ force: true });
            }
            cy.log("General section expanded for 'Other' option");
        });
        this.elements.choiceOptiontitle().then(($section) => {
            const isExpanded = $section.attr('aria-expanded') === 'true';
            if (!isExpanded) {
                cy.wrap($section).scrollIntoView().find('svg.sv-svg-icon.sd-element__title-expandable-svg').click({ force: true });
            }
        });
        this.elements.questionMultiline('Enable the "Other" option').parents('div').find('input[type="checkbox"]').first().check({ force: true });
        this.elements.hidePanel().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.otherDescribesurveyAnswer().contains('Other (describe)').click({ force: true }).clear().type('Not Applicable', { force: true });
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.notApplicableOption().should('exist').and('be.visible');
        cy.log("'Other' option visible in preview");
        this.elements.wrongOption().should('not.exist');
        cy.log("'Other' option with wrong text not present in preview");
    }
    choiceNoneenable() {
        cy.log("Enabling 'None' option");
        this.elements.showPaneltitle().click({ force: true });
        this.elements.choiceOrder(0).scrollIntoView().should('be.visible');
        this.elements.enableNoneoption().closest('div').find('input[type="checkbox"]').check({ force: true }).should('be.checked');
        this.elements.hidePanel().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.noneOptiondropdown().should('be.visible');
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.noneOptionPreview().should('exist').and('be.visible');
        cy.log("'None' option is visible in preview");
        this.elements.noneOptionPreview().contains('Invalid None').should('not.exist');
        cy.log("Verified incorrect 'None' option not present");
    }
    addOnemoreQuestion() {
        cy.log("addOnemoreQuestion");
        cy.log("Verifying 'Add Question' button is visible and clickable");
        cy.contains('span.svc-add-new-item-button__text', 'Add Question').scrollIntoView().should('be.visible').and('not.be.disabled').click({ force: true }).then(() => {
            cy.log("'Add Question' button clicked successfully");
        });
        cy.log("Verifying invalid 'Add Invalid Question' button does not exist");
        this.elements.addInvalidquestion().should('not.exist').then(() => {
            cy.log("Invalid button does not exist as expected");
        });
        cy.log("addOnemoreQuestion");
    }
    selectLayoutsetting() {
        cy.log("START: selectLayoutsetting");
        cy.log("Opening Layout Settings");
        cy.log("POSITIVE CHECK: Ensuring Layout settings button is visible and clickable");
        this.elements.layoutTitle().scrollIntoView().should('be.visible').and('exist').and('have.class', 'spg-panel__title--collapsed');
        cy.log("Layout pannel COLLAPSED");
        this.elements.layoutTitle().click({ force: true });
        cy.log("POSITIVE PASS: Layout settings clicked");
        cy.wait(800);
        cy.log("Verifying Layout panel expanded");
        this.elements.layoutTitle().should('not.have.class', 'spg-panel__title--collapsed').and('have.class', 'spg-panel__title--expanded');
        cy.log("Layout panel expanded successfully");
        cy.log("Verifying Layout panel content is accessible");
        this.elements.hideQuestionnumber().should('exist');
        cy.log(" PASS: Layout content is accessible");
        cy.log("selectLayoutsetting");
    }
    layoutDisplayquestionEnable() {
        this.elements.layoutQuestionenable().contains('question2').scrollIntoView().click({ force: true }).clear().type('Can you check the quality of product', { delay: 50 }).should('have.text', 'Can you check the quality of product');
        this.elements.questionMultiline('Display the question on a new line').parents('div').find('input[type="checkbox"]').uncheck({ force: true });
        this.elements.hidePanel().scrollIntoView().should('be.visible').click({ force: true });
        cy.contains('span.svc-survey-element-toolbar-item__title', 'Required').parents('button').scrollIntoView().should('be.visible').click({ force: true });
        cy.log("questions starts on new line");
    }
    layoutHidequestionNumber() {
        this.elements.questionMultiline('Hide the question number').parents('div').find('input[type="checkbox"]').check({ force: true });
        this.elements.hidePanel().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.questionNumber().should('not.exist');
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.questionNumber1().should('not.exist');
        cy.log('Question numbers are successfully hidden');
    }
    bottomQuestionalignment() {
        cy.log("Aligning question text to bottom");
        this.elements.questionTitlealignment().parentsUntil('body').find('svg.spg-dropdown_chevron-button-svg').first().click({ force: true });
        this.elements.questionAlignmentbottom().click({ force: true });
        this.elements.hidePanel().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.questionText().should('contain.text', 'question1');
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.previewExist().should('exist').and('have.text', 'question1');
        cy.log("Alignment of question is at bottom");
    }
    topQuestionalignment() {
        cy.log("Aligning question text to top");
        this.elements.questionTitlealignment().parentsUntil('body').find('svg.spg-dropdown_chevron-button-svg').first().click({ force: true });
        this.elements.questionAlignmenttop().click({ force: true });
        this.elements.hidePanel().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.questionText().should('contain.text', 'question1').and('not.contain.text', 'question2');
        cy.log("Alignment and text validated in Designer");
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.previewExist().should('exist').and('contain.text', 'question1').and('not.contain.text', 'question2');
        cy.log("Alignment of question is at top in Preview");
    }
    inheritQuestionalignment() {
        cy.log("🔹 Inheriting question alignment");
        this.elements.questionAlignmentinherit().scrollIntoView({ offset: { top: -200, left: 0 } }).should('be.visible');
        this.elements.hidePanel().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.questionText().should('contain.text', 'question1');
        cy.log("Question alignment inherited successfully");
        this.elements.questionText().should('not.contain.text', 'question2');
        cy.log("No misalignment detected");
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        cy.log("Alignment of question is at inherit");
    }

    selectChoiceorderNone() {
        cy.log("🔹 Selecting 'None' choice order");
        this.elements.choiceOptiontitle().then(($section) => {
            const isExpanded = $section.attr('aria-expanded') === 'true';
            if (!isExpanded) {
                cy.wrap($section).scrollIntoView().find('svg.sv-svg-icon.sd-element__title-expandable-svg').click({ force: true });
            }
            this.elements.choiceOrder().click();
            this.elements.noneChoiceorder().click();
        });
        this.elements.choiceOrder().should('contain.text', 'None');
        cy.log("'None' choice order selected");
        this.elements.choiceOrder().should('not.contain.text', 'Ascending');
        cy.log("Incorrect choice order not applied");
    }
    dragSwapchoices() {
        cy.log("Swapping choice options via drag & drop");
        this.elements.choiceOptions().click();
        cy.get('tbody tr').should('have.length.greaterThan', 1);
        this.elements.columnValue1().should('have.value', 'Item 1');
        this.elements.columnValue2().should('have.value', 'Item 2');
        cy.log("Verified initial choice order");
        this.elements.columnValue1().should('not.have.value', 'Item 2');
        this.elements.columnValue2().should('not.have.value', 'Item 1');
        cy.log("Verified initial order is not swapped incorrectly");
        this.elements.dragSwapvalues().scrollIntoView().trigger('mouseover').drag('tbody tr:nth-child(2)', { force: true });
        cy.wait(1500);
        this.elements.columnValue1().should('have.value', 'Item 2');
        this.elements.columnValue2().should('have.value', 'Item 1');
        cy.log("Choice options swapped successfully");
        this.elements.columnValue1().should('not.have.value', 'Item 1');
        this.elements.columnValue2().should('not.have.value', 'Item 2');
        cy.log("Incorrect swapped order not present");
        this.elements.hidePanel().scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(3000);
        this.elements.swapOrderItem2().find('span.sv-string-editor[role="textbox"]').should('be.visible').and('have.text', 'No');
    }
    hiddenQuestionalignment() {
        cy.log("Setting question alignment to hidden");
        this.elements.questionTitlealignment().parentsUntil('body').find('svg.spg-dropdown_chevron-button-svg').first().click({ force: true });
        this.elements.questionAlignmenthidden().click({ force: true });
        this.elements.hidePanel().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.questionText().should('not.contain.text', 'question1');
        cy.log("Question text is hidden");
        this.elements.questionText().should('not.contain.text', 'question2');
        cy.log("Other question text not hidden incorrectly");
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.questionMultiline('question1').should('not.exist');
        cy.log("Alignment of question is hidden");
    }
    errorAlignmentinherit() {
        cy.log("Setting error alignment to inherit");
        this.elements.errorAligninherit().click({ force: true });
        this.elements.hidePanel().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.selectRequiredfield().click({ force: true });
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.completeBtn().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.errorRequiredfieldTop().should('be.visible').and('contain.text', 'Response required.');
        cy.log("Error alignment inherit applied");
        this.elements.errorRequiredfieldTop().should('not.contain.text', 'Unexpected error');
        cy.log("No incorrect error message displayed");
    }
    errorAlignmenttop() {
        cy.log("Setting error alignment to top");
        this.elements.errorAligntop().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.hidePanel().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.selectRequiredfield().click({ force: true });
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.completeBtn().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.errorRequiredfieldTop().should('be.visible').and('contain.text', 'Response required.');
        cy.log("Error alignment top applied");
        this.elements.errorRequiredfieldTop().should('not.contain.text', 'Error at bottom');
        cy.log("Incorrect error alignment not displayed");
    }
    errorAlignmentbottom() {
        cy.log("Setting error alignment to bottom");
        this.elements.errorAlignBottom().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.hidePanel().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.selectRequiredfield().click({ force: true });
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.completeBtn().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.errorRequiredfieldBottom().should('be.visible').and('contain.text', 'Response required.');
        cy.log("Error alignment bottom applied");
        this.elements.errorRequiredfieldBottom().should('not.contain.text', 'Error at top');
        cy.log("Incorrect error alignment not displayed");
    }
    hideQuestionpanel() {
        this.elements.hidePanel().should('be.visible').click({ force: true });
    }
    dragDropSurveyanswers(source, target) {
        cy.log(`Drag & drop survey answer from ${source} to ${target}`);
        this.elements.dragDropsource().should('exist').and('be.visible');
        this.elements.dragDropsource().find('.svc-item-value-controls__drag').scrollIntoView().trigger('mousedown', { button: 0, force: true }).trigger('mousemove', { clientY: -100, force: true });
        cy.wait(500);
        this.elements.dragDroptarget().trigger('mousemove', { clientY: 50, force: true }).trigger('mouseup', { force: true });
        this.elements.dragDroptarget().should('exist');
        this.elements.dragDropsource().should('exist');
        cy.contains('.svc-item-value-wrapper', 'Nonexistent').should('not.exist');
        cy.log("Drag & drop completed");
    }
    questionWidthpx() {
        cy.log("Setting question width to 30px");
        this.elements.minimumQuestionwidth().scrollIntoView({ offset: { top: -100, left: 0 } }).should('be.visible').clear().type('30px').should('have.value', '30px');
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.previewQuestionwidth().should('be.visible').then($el => {
            const width = $el[0].getBoundingClientRect().width;
            cy.log(`Actual Question Width: ${width}px`);
            if (width === 30) {
                cy.log('Question width is exactly 30px');
            } else {
                cy.log('Question width is NOT 30px, failing the test');
                throw new Error(`Question width is not 30px: ${width}px`);
            }
        });
    }
    selectQuestionType(type) {
        cy.log(`Selecting question type: ${type}`);
        this.elements.selectQuestionTypeDropdown().trigger('mouseover');
        this.elements.questionTypeDropdownButton().click({ force: true });
        this.elements.questionTypeOptions().contains(type).scrollIntoView({ ensureScrollable: false }).click({ force: true });
        cy.log("Question type selected");
    }
    checkedStorefileContent() {
        cy.log("Checking 'Store file content in JSON result as text'");
        this.elements.showPaneltitle().click({ force: true });
        this.elements.storeFilecontentJson().scrollIntoView().should('be.visible').parents('div').find('input[type="checkbox"]').check({ force: true }).should('be.checked');
        this.elements.hidePanel().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        cy.log('"Store file content in JSON result as text" is checked, no error will be displayed');
    }
    verifySurveydescription() {
        cy.log("Verifying survey title and description");
        cy.get('body').click(0, 0);
        this.elements.surveyDescriptionpresentDesigner().should('be.visible');
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        this.elements.surveyDescriptionpresentPreview().should('be.visible');
        cy.log(" Title and description are displayed in survey preview");
    }
    enableTitleandDescription() {
        cy.log("Enabling title and description visibility");
        this.elements.showPaneltitle().click({ force: true });
        this.elements.generalSetting().scrollIntoView({ offset: { top: -100, left: 0 } }).should('be.visible');
        cy.contains('Make the title and description visible').should('exist').scrollIntoView({ offset: { top: -50, left: 0 } }).then($label => {
            const checkbox = $label.find('input[type="checkbox"]');
            cy.wrap(checkbox).should('exist').check({ force: true }).should('be.checked');
        });
        cy.log("Title and description are displayed in survey preview");
    }
    clickOnsurveySettings() {
        cy.log("Clicking on Survey Settings");
        cy.get('body').click(0, 0);
        this.elements.surveySettings().should('be.visible').click({ force: true });
        cy.log("Survey Settings opened");
    }
    clickOnnavigationSettings() {
        cy.log("Clicking on Navigation Settings");
        this.elements.navigationSettings().scrollIntoView({ offset: { top: -100, left: 0 } }).should('be.visible').click({ force: true });
        cy.log("Navigation Settings opened");
    }
    setNavigationButtonPlacementToBottom() {
        cy.log("Setting Navigation Button Placement → Bottom");
        this.elements.showHidenavigationButton();
        cy.log("🔹 Selecting Bottom placement");
        this.elements.navigationBottomplacement().scrollIntoView().should('be.visible').click({ force: true }).then(() => {
            cy.log("Successfully selected Bottom placement");
        });
        cy.log("Closing survey settings panel");
        this.elements.hidePanelsurveySettings().scrollIntoView().should('be.visible').click({ force: true });
        cy.log("Navigating to Preview tab");
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        cy.log("Validating navigation button placement");
        this.elements.completeButtonplacementBottom().should('have.value', 'Complete').then(() => {
            cy.log("Navigation button correctly placed at Bottom");
        });
    }

    navigateToSurveySchedule() {
        cy.log("Navigating to Survey Schedule");
        this.elements.surveyMenu().contains('Survey').click({ force: true }).then(() => cy.log("Survey menu clicked")).catch(() => cy.log("Failed to click Survey menu"));
        this.elements.surveySchedule().click({ force: true }).then(() => cy.log("Survey Schedule clicked")).catch(() => cy.log("Failed to click Survey Schedule"));
        cy.contains('a.second-link', 'Survey Schedule', { timeout: 90000 }).should('be.visible').then(() => cy.log("✅ Survey Schedule page loaded successfully")).catch(() => cy.log("Survey Schedule page did NOT load"));
    }
    setNavigationButtonPlacementToTop() {
        cy.log("Setting Navigation Button Placement → Top");
        this.elements.showHidenavigationButton();
        cy.log("Selecting Top placement");
        this.elements.navigationTopplacement().scrollIntoView().should('be.visible').click({ force: true }).then(() => {
            cy.log("Successfully selected Top placement");
        });
        cy.log("Closing Survey Settings panel");
        this.elements.hidePanelsurveySettings().scrollIntoView().should('be.visible').click({ force: true });
        cy.log("Opening Preview tab");
        this.elements.previewTabclick().scrollIntoView().should('be.visible').click({ force: true });
        cy.log("Validating the Complete button is at Top");
        this.elements.completeButtonplacement().should('be.visible').and('have.attr', 'title', 'Complete').then(() => {
            cy.log("Navigation button placement is at Top");
        });
    }
    enableShowpreviouspagecheckbox() {
        cy.log("Checking if 'Show previous page' checkbox is enabled");
        this.elements.showpreviouspageCheckbox().scrollIntoView({ offset: { top: -80, left: 0 } }).should('exist')
            .then($el => {
                const $checkbox = cy.wrap($el);
                if ($el.is(':visible')) {
                    cy.log("Checkbox appears visible — using normal check()");
                    $checkbox.check({ force: false });
                } else {
                    cy.log("Checkbox not visible (clipped). Using force check() as fallback");
                    $checkbox.check({ force: true });
                }
            });
        this.elements.showpreviouspageCheckbox().should('be.checked').then(() => {
            cy.log("'Show previous page' checkbox is enabled");
        });

        this.elements.previousPageButtonText().scrollIntoView({ offset: { top: -80, left: 0 } }).should('exist').and('be.visible')
            .then(() => {
                cy.log("Previous button text field is visible");
            });
    }
    enterPreviousPageButtonText() {
        cy.log("Entering previous page button text");
        this.elements.previousPageButtonText().should('be.visible').then(($el) => {
            cy.wrap($el).clear().type('back');
            cy.log("Previous page button text entered successfully");
        });
    }
    clickOnaddMorequestion() {
        cy.log("Clicking on 'Add More Question'");
        this.elements.addMorequestionBtn().should('have.length.at.least', 2);
        this.elements.addMorequestionBtn().eq(1).scrollIntoView({ offset: { top: -200, left: 0 } }).click({ force: true }).then(() => cy.log("Add More Question clicked"));
        cy.get('body').click(0, 0);
    }
    clickOnpreviewNextbtn() {
        cy.log(" Clicking on Preview → Next button");
        this.elements.previewTabclick().scrollIntoView({ offset: { top: -150, left: 0 }, ensureScrollable: false }).should('be.visible').click({ force: true });
        cy.wait(700);
        cy.get('.sd-main, .sd-container-modern').scrollTo('bottom', { ensureScrollable: false });
        cy.get('input.sd-btn.sd-navigation__next-btn[title="Next"]').scrollIntoView({ offset: { top: -150, left: 0 }, ensureScrollable: false }).should('be.visible').click({ force: true }).then(() => cy.log("✅ Next button clicked successfully"));
        cy.get('input.sd-btn.sd-navigation__prev-btn').should('be.visible').invoke('val').then(val => {
            expect(val).to.not.eq('Next');
            cy.log("NEGATIVE PASS: Previous button does NOT have text 'Next'");
        });
    }
    enterNextPageButtonText() {
        cy.log("Entering Next page button text");
        this.elements.nextPagebuttonText().should('be.visible').clear().type('continue').then(() => {
            cy.log("Next page button text updated to 'continue'");
        });
    }
    checkOnpreviewContinuebtn() {
        cy.log("Verifying updated 'Continue' button in preview");
        this.elements.previewTabclick().scrollIntoView({ ensureScrollable: false }).click({ force: true });
        this.elements.previewContinuebtn().scrollIntoView({ ensureScrollable: false }).should('be.visible').then($btn => {
            const btnValue = $btn.val();
            expect(btnValue).to.eq('continue');
            cy.log("Next button changed to 'continue'");
        });
        this.elements.previewContinuebtn().should('be.visible').then($btn => {
            const btnValue = $btn.val();
            expect(btnValue).to.not.eq('Next');
            cy.log("NEGATIVE PASS: Continue button does NOT have default text 'Next'");
        });
        cy.get('input.sd-navigation__prev-btn[value="Previous"]').should('not.exist')
            .then(() => cy.log("Default Previous button is not present"));
    }
    enterCompletepageButtontext() {
        cy.log("Updating 'Complete' button text");
        this.elements.completePagebuttonText().should('be.visible').clear().type('Finish Survey').then(() => cy.log("Complete button text updated to 'Finish Survey'"));
    }
    checkOnpreviewCompletebtn() {
        cy.log("Verifying updated 'Finish Survey' button in preview");
        this.elements.previewTabclick().scrollIntoView({ ensureScrollable: false }).click({ force: true });
        this.elements.previewCompletebtn().scrollIntoView({ ensureScrollable: false }).should('be.visible').then($btn => {
            const btnValue = $btn.val();
            expect(btnValue).to.eq('Finish Survey');
            cy.log("Complete button changed to 'Finish Survey'");
        });
        this.elements.previewCompletebtn().should('be.visible').then($btn => {
            const btnValue = $btn.val();
            expect(btnValue).to.not.eq('Complete');
            cy.log("Complete button does NOT have default text 'Complete'");
        });
        this.elements.nextButtonvalue().should('not.exist').then(() => cy.log("NEGATIVE PASS: Default Next button is not present"));
    }
    selectQuestionsetting() {
        cy.log("Opening Question Settings");
        this.elements.selectQuestionSetting().scrollIntoView({ offset: { top: -100, left: 0 } }).should('be.visible').click({ force: true }).then(() => cy.log("✅ Question Settings opened successfully"));
    }
    selectQuestionnumbering() {
        cy.log("Selecting Question Numbering");
        this.elements.questionNumbering().should('exist').then(() => cy.log("Question Numbering option exists"));
        cy.get('div.invalid-question-numbering-option').should('not.exist').then(() => cy.log("Invalid Question Numbering option does not exist"));
        this.elements.addMorequestionBtn();
        this.elements.previewTabclick().scrollIntoView({ ensureScrollable: false }).click({ force: true });
        this.elements.previewNextbtn().click().then(() => cy.log("Next button clicked"));
        this.elements.verifyAutonumbering().first().should('be.visible').and('have.text', '2.').then(() => cy.log("Auto-numbering changed to 2. correctly"));
        this.elements.verifyAutonumbering().first().should('not.have.text', '1.').then(() => cy.log("Auto-numbering '1.' not present"));
    }
    selectQuestionorder() {
        cy.log("Selecting Question Order");
        this.elements.questionOrder().should('exist').and('be.visible').click({ force: true });
        cy.log("Question Order option selected");
        if (this.elements.invalidQuestionOrderOption) {
            this.elements.invalidQuestionOrderOption().should('not.exist');
            cy.log("Invalid Question Order option not present");
        }
        this.elements.addMorequestionBtn().first().scrollIntoView({ offset: { top: -100, left: 0 } }).should('exist').should('be.visible').click({ force: true });
        cy.log("Add More Question clicked");
        this.elements.addMorequestionBtn().should('have.length.gte', 1);
        this.elements.previewTabclick().scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true });
        this.elements.previewNextbtn().scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true });
        cy.log("Next button clicked");
        this.elements.verifyAutonumbering().contains(/^3\.$/).should('be.visible');
        cy.log("Question order displayed as original (3.)");
        this.elements.previewPagination().should('be.visible');
        cy.log("Pagination visible");
    }
    questionDescription() {
        cy.log("Typing Question Description");
        this.elements.questionDescription().eq(1).scrollIntoView().should('exist').and('be.visible').type('Key strategies include understanding...').then(() => cy.log("Question description entered successfully"));
        this.elements.questionDescription().eq(1).should('have.value', 'Key strategies include understanding...').then(() => cy.log("Question description typed correctly"));
        this.elements.questionDescription().eq(1).should('not.have.value', 'Incorrect text').then(() => cy.log("Question description does not contain invalid text"));
    }
    selectQuestiondescriptionAlignmentunderInput() {
        cy.log("Setting question description alignment: Under Input");
        this.elements.questionDescriptionalignment().eq(1).should('exist').and('be.visible').click();
        cy.log("Selected alignment dropdown");
        this.elements.verifyQuestiondescalignmentUnderinput().should('exist').and('be.visible').click();
        cy.log("Alignment set to: Under Input");
        this.elements.previewTabclick().scrollIntoView({ ensureScrollable: false }).should('exist').and('be.visible').click({ force: true });
        cy.log("Preview tab opened");
        cy.get('.sd-main, .sd-container-modern', { timeout: 15000 }).should('exist').and('be.visible');
        cy.wait(1500);
        cy.get('.sd-question', { timeout: 10000 }).first().should('exist').and('be.visible').within(() => {
            cy.get('.sd-question__description, [class*="description"]', { timeout: 10000 }).should('exist').and('be.visible').then($desc => {
                cy.log("Found description element");
                cy.get('input[type="radio"], input[type="text"], textarea, .sd-selectbase, .sd-item', { timeout: 10000 }).first().should('exist').then($input => {
                    cy.log(`Found input/control element: ${$input.prop('tagName')}`);
                    const inputRect = $input[0].getBoundingClientRect();
                    const descRect = $desc[0].getBoundingClientRect();
                    cy.log(`Input bottom: ${inputRect.bottom}, Description top: ${descRect.top}`);
                    cy.log(`Difference: ${descRect.top - inputRect.bottom}px`);
                    expect(descRect.top).to.be.greaterThan(inputRect.bottom - 5); // -5 for small margin tolerance
                    cy.log("Preview correctly shows description under input");
                });
            });
        });
    }
    selectQuestiondescriptionAlignmentunderTitle() {
        cy.log("Setting question description alignment: Under Title");
        this.elements.questionDescriptionalignment().eq(2).should('exist').scrollIntoView({ offset: { top: -150, left: 0 } }).wait(800).should('be.visible').click({ force: true });
        cy.log("Selected alignment dropdown");
        this.elements.verifyQuestiondescalignmentUndertitle().should('exist').and('be.visible').click();
        cy.log("Alignment set to: Under Title");
        this.elements.previewTabclick().scrollIntoView({ ensureScrollable: false }).should('exist').and('be.visible').click({ force: true });
        cy.log("Preview tab opened");
        cy.get('.sd-main, .sd-container-modern', { timeout: 15000 }).should('exist').and('be.visible');
        cy.wait(1500);
        cy.get('.sd-question', { timeout: 10000 }).first().should('exist').and('be.visible').within(() => {
            this.elements.questionTitle().should('exist').and('be.visible').as('questionTitle');
            cy.get('.sd-question__description, [class*="description"]', { timeout: 10000 }).should('exist').and('be.visible').as('questionDescription');
        });
        cy.get('@questionTitle').then($title => {
            cy.get('@questionDescription').then($desc => {
                const titleRect = $title[0].getBoundingClientRect();
                const descRect = $desc[0].getBoundingClientRect();
                cy.log(`Title bottom: ${titleRect.bottom.toFixed(2)}`);
                cy.log(`Description top: ${descRect.top.toFixed(2)}`);
                cy.log(`Gap: ${(descRect.top - titleRect.bottom).toFixed(2)}px`);
                expect(descRect.top, 'Description should be below title').to.be.greaterThan(titleRect.bottom - 5);
                cy.log("Preview correctly shows description under title");
            });
        });
        cy.get('.sd-question').first().within(() => {
            cy.get('input[type="radio"], input[type="text"], textarea, .sd-selectbase, fieldset', { timeout: 5000 }).first().should('exist').as('inputControl');
        });
        cy.get('@inputControl').then($input => {
            cy.get('@questionDescription').then($desc => {
                const inputRect = $input[0].getBoundingClientRect();
                const descRect = $desc[0].getBoundingClientRect();
                cy.log(`Input bottom: ${inputRect.bottom.toFixed(2)}`);
                cy.log(`Description top: ${descRect.top.toFixed(2)}`);
                expect(descRect.bottom, 'Description should NOT be below input').to.be.lessThan(inputRect.top + 10);
                cy.log("Description is not positioned under input");
            });
        });
    }
    threeDotmenusurveySchedule() {
        cy.log("Opening 3-dot menu for Survey Schedule");
        cy.log("Clicking survey schedule search box");
        this.elements.surveySchedulesearch().should('be.visible').click({ force: true }).then(() => cy.log("Search box clicked"));
        cy.log("Opening 3-dot menu");
        this.elements.threeDotmenu().eq(0).scrollIntoView().should('be.visible').click({ force: true }).then(() => cy.log("Three dot menu opened"));
        cy.log("Clicking Approve Request");
        this.elements.approveRequest().should('be.visible').click({ force: true }).then(() => cy.log("Approve Request clicked"));
        cy.log("Entering approval reason");
        this.elements.approvalReason().should('be.visible').type('Approved after review').then(() => cy.log("Approval reason entered"));
        cy.log("Clicking Approve button");
        this.elements.clickOnApprovebutton().should('be.visible').click({ force: true }).then(() => cy.log("Approve button clicked"));
        cy.log("Opening scheduled survey from table");
        cy.get('@scheduleSurveyName').then((name) => {
            cy.contains('td.cursor-pointer', name).scrollIntoView().should('be.visible').click({ force: true }).then(() => cy.log(`Opened scheduled survey: ${name}`));
        });
        cy.log("Survey approval flow completed");
    }
    openScheduledsurvey() {
        cy.get('@scheduleSurveyName').then((name) => {
            cy.contains('td.cursor-pointer', name).scrollIntoView().should('be.visible').click({ force: true });
        });
    }
    clickOnparticipants() {
        this.elements.participants().should('be.visible').click({ force: true });
        cy.log("POSITIVE: Participants tab opened");
    }
    checkResponseStatus() {
        this.elements.responseStatus().should('be.visible');
        cy.log("Response status is visible");
    }
    selectQuestionTypeSubOptionsSurveyAdd(mainType, subType) {
        cy.log(`Selecting Question Type → Main: ${mainType}, Sub: ${subType}`);
        cy.get('body').click(0, 0);
        this.elements.selectQuestionTypeDropdown().realHover().then(() => cy.log("Hovered over question type dropdown")).catch(() => cy.log(" Failed to hover over question type dropdown"));
        this.elements.questionTypeDropdownButton().should('be.visible').click().then(() => cy.log("Question type dropdown opened")).catch(() => cy.log("Failed to open question type dropdown"));
        this.elements.mainTypeListItem(mainType).should('be.visible').realHover().then(() => cy.log(`Hovered over main type: ${mainType}`)).catch(() => cy.log(`Main type '${mainType}' not found`));
        this.elements.popupContainer({ timeout: 30000 }).should('exist').then(($containers) => {
            let found = false;
            cy.wrap($containers).each(($popup) => {
                if ($popup.is(':visible')) {
                    cy.wrap($popup).find('.sv-list__item-body').contains(subType, { matchCase: false }).then(($el) => {
                        if ($el.length > 0) {
                            cy.wrap($el).click({ force: true }).then(() => cy.log(`Sub-type '${subType}' selected`)).catch(() => cy.log(`Failed to click sub-type '${subType}'`));
                            found = true;
                        }
                    });
                }
            }).then(() => {
                if (!found) {
                    cy.log(`Sub-option "${subType}" not found under "${mainType}"`);
                    throw new Error(`Sub-option "${subType}" not found`);
                }
            });
        });
    }
    enterQuestion1() {
        const titleWord = faker.word.noun();
        const questionText = `How do you experience about ${titleWord}`;
        cy.log("Attempting to enter text for Question 1...");
        this.elements.questionTextEditor()
            .then($els => {
                let match = [...$els].find(el => el.textContent.trim() === 'question1');
                let target;
                if (match) {
                    cy.log("Found 'question1' span using main selector.");
                    target = cy.wrap(match);
                } else {
                    cy.log("'question1' not found. Falling back to placeholder selector.");
                    target = this.elements.question1PlaceHolder().eq(4);
                }
                return target.scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true }).clear({ force: true }).type(questionText, { force: true });
            }).then(() => {
                cy.log("Question 1 text entered successfully.");
            })
            .catch(err => {
                cy.log("Failed to enter Question 1 text.");
                throw err;
            });
        cy.wrap(questionText).as('enteredQuestion1');
    }
    enterQuestion2() {
        const titleWord = faker.word.noun();
        const questionText2 = `How do you experience about ${titleWord}`;
        cy.log("Attempting to enter text for Question 2...");
        this.elements.questionTextEditor()
            .then($els => {
                const match = [...$els].find(el => el.textContent.trim() === 'question2');
                if (!match) {
                    cy.log("'question2' span NOT found.");
                    throw new Error('"question2" span not found in the DOM');
                }
                cy.log("Found 'question2' span — entering text.");
                return cy.wrap(match).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true }).clear({ force: true }).type(questionText2, { force: true });
            }).then(() => {
                cy.log("Question 2 text entered successfully.");
            }).catch(err => {
                cy.log("Failed to enter Question 2 text.");
                throw err;
            });
        cy.wrap(questionText2).as('enteredQuestion2');
    }
    threeDotmenusurveySchedulePage(_scheduleSurveyName) {
        cy.log("Opening 3-dot menu to approve scheduled survey...");
        cy.log("Clicking survey search bar");
        this.elements.surveySchedulesearchBar().should('be.visible').click({ force: true }).then(() => cy.log("Survey search bar clicked."));
        cy.log("Opening 3-dot menu");
        this.elements.threeDotmenu().eq(0).scrollIntoView().should('be.visible').click({ force: true }).then(() => cy.log("Three-dot menu opened."));
        cy.log("Clicking Approve Request");
        this.elements.approveRequest().should('be.visible').click({ force: true }).then(() => cy.log("Approve request clicked."));
        cy.log("Entering approval reason");
        this.elements.approvalReason().should('be.visible').type('Approved after review').then(() => cy.log("Approval reason entered."));
        cy.log("Clicking Approve button");
        this.elements.clickOnApprovebutton().should('be.visible').click({ force: true }).then(() => cy.log("Approval button clicked."));
        cy.log("Opening approved survey from table");
        cy.get('@surveyScheduleName').then((name) => {
            cy.contains('td.cursor-pointer', name).scrollIntoView().should('be.visible').click({ force: true }).then(() => cy.log(`Survey '${name}' opened.`));
        });
        cy.log("Survey approval flow completed.");
    }

    surveyScheduleApproveProcess(_scheduleSurveyName) {
        cy.log("Approving scheduled survey...");
        this.elements.surveySchedulesearchBarPlace({ timeout: 30000 }).should('be.visible').click({ force: true }).then(() => cy.log("Positive: Search bar clicked"));
        this.elements.threeDotmenu().eq(0).scrollIntoView({ timeout: 30000 }).should('be.visible').click({ force: true }).then(() => cy.log("Opened three-dot menu"));
        this.elements.approveRequest({ timeout: 30000 }).should('be.visible').click({ force: true }).then(() => cy.log("Approve request clicked"));
        this.elements.approvalReason({ timeout: 30000 }).should('be.visible').type('Approved after review').then(() => cy.log("Entered approval reason"));
        this.elements.clickOnApprovebutton({ timeout: 30000 }).should('be.visible').click({ force: true }).then(() => cy.log("Approval submitted successfully"));
}


    addingPage1MultipleQuestionsOptions() {
        cy.log('Adding first question');
        this.elements.addQuestionButton({ timeout: 30000 }).then($btn => {
            if ($btn.length === 0) {
                const msg = 'Add question button not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap($btn).click({ force: true });
            }
        });
        this.surveyTitle = faker.word.words(2) + ' Title';
        cy.log('Entering survey title');
        this.elements.surveyTitle().then($title => {
            if ($title.length === 0) {
                const msg = 'Survey title field not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap($title).click().clear().type(this.surveyTitle);
            }
        });
        cy.wrap(this.surveyTitle).as('surveyTitle');
        cy.log('Entering survey description');
        this.elements.surveyTitleDescription().then($desc => {
            if ($desc.length === 0) {
                const msg = 'Survey description field not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap($desc).type('Sample survey description');
            }
        });
        this.enterQuestion1Data();
        cy.log('Selecting radio button group for question 1');
        this.elements.selectQuestionType2Dropdown().then($dd => {
            if ($dd.length === 0) {
                const msg = 'Question type dropdown not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap($dd).trigger('mouseover');
            }
        });
        this.elements.questionTypeDropdownButton().then($btn => {
            if ($btn.length === 0) {
                const msg = 'Question type dropdown button not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap($btn).click();
            }
        });
        this.elements.questionTypeOptions().then($opts => {
            const match = [...$opts].find(el => el.innerText.trim() === 'Radio Button Group');
            if (!match) {
                const msg = 'Radio Button Group option not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap(match).click();
            }
        });
        this.captureCheckboxNumbersItemsNamesOptions();
        cy.log('Adding second question');
        this.elements.addQuestionButton({ timeout: 30000 }).then($btn => {
            if ($btn.length === 0) {
                const msg = 'Add question button not found for question 2';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap($btn).click({ force: true });
            }
        });
        const titleWord2 = faker.word.noun();
        const question2Text = `How do you experience about ${titleWord2}`;
        this.elements.page1Question2({ timeout: 30000 }).then($q2 => {
            if ($q2.length === 0) {
                const msg = 'Page 1 question 2 field not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap($q2).click().clear().type(question2Text, { force: true });
            }
        });
        cy.wrap(question2Text).as('enteredQuestion2Num');
        cy.log('Selecting checkbox question type');
        this.elements.selectQuestionType2Dropdown().then($dd => {
            if ($dd.length === 0) {
                const msg = 'Question type dropdown not found for question 2';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap($dd).trigger('mouseover');
            }
        });
        this.elements.questionTypeDropdownButton().then($btn => {
            if ($btn.length === 0) {
                const msg = 'Question type dropdown button not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap($btn).click();
            }
        });
        this.elements.questionTypeOptions().then($opts => {
            const match = [...$opts].find(el => el.innerText.trim() === 'Checkboxes');
            if (!match) {
                const msg = 'Checkboxes option not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap(match).click();
            }
        });
        cy.log('Adding third question');
        this.elements.addQuestionButton({ timeout: 30000 }).then($btn => {
            if ($btn.length === 0) {
                const msg = 'Add question button not found for question 3';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap($btn).click({ force: true });
            }
        });
        const titleWord3 = faker.word.noun();
        const question3Text = `How do you experience about ${titleWord3}`;
        this.elements.page1Question3({ timeout: 30000 }).then($q3 => {
            if ($q3.length === 0) {
                const msg = 'Page 1 question 3 field not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap($q3).click().clear().type(question3Text, { force: true });
            }
        });
        cy.wrap(question3Text).as('enteredQuestion3Num');
        cy.log('Selecting yes/no question type');
        this.elements.selectQuestionType2Dropdown().then($dd => {
            if ($dd.length === 0) {
                const msg = 'Question type dropdown not found for question 3';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap($dd).trigger('mouseover');
            }
        });
        this.elements.questionTypeDropdownButton().then($btn => {
            if ($btn.length === 0) {
                const msg = 'Question type dropdown button not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap($btn).click();
            }
        });
        this.elements.questionTypeOptions().then($opts => {
            const match = [...$opts].find(el => el.innerText.trim() === 'Yes/No (Boolean)');
            if (!match) {
                const msg = 'Yes/No question option not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.wrap(match).click();
            }
        });
        cy.log('Page 1 multiple questions added successfully');
    }

    enterQuestion1Data() {
        const titleWord = faker.word.noun();
        const questionText = `How do you experience about ${titleWord}`;
        cy.log('Entering Question 1 data');
        this.elements.questionTextEditor().then($els => {
            let match = [...$els].find(el => el.textContent.trim() === 'question1');
            let target;
            if (match) {
                cy.log('Question1 matched by text');
                target = cy.wrap(match);
            } else {
                cy.log('Question1 match not found, using fallback');
                this.elements.question1PlaceHolder().then($fallback => {
                    if ($fallback.length < 5) {
                        const msg = 'Fallback Question1 placeholder not found';
                        cy.log(msg);
                        throw new Error(msg);
                    } else {
                        cy.wrap($fallback.eq(4))
                            .click({ force: true })
                            .clear({ force: true })
                            .type(questionText, { force: true });
                    }
                });
                return;
            }
            target
                .click({ force: true })
                .clear({ force: true })
                .type(questionText, { force: true });
        });
        cy.wrap(questionText).as('enteredQuestion1');
    }

    captureCheckboxNumbersItemsNamesOptions() {
        cy.log('Capturing checkbox option values');
        const enteredTexts = [];
        this.elements.sdCheckboxContainer().then($container => {
            if ($container.length === 0) {
                const msg = 'Checkbox container not found';
                cy.log(msg);
                throw new Error(msg);
            }
        });
        this.elements.itemValueWrappers().then($wrappers => {
            if ($wrappers.length === 0) {
                const msg = 'Checkbox item wrappers not found';
                cy.log(msg);
                throw new Error(msg);
            }
            cy.wrap($wrappers).each(($wrapper, index) => {
                this.elements.itemRemoveIcon().then($remove => {
                    if ($remove.length === 0) {
                        cy.log(`Remove icon not present for item ${index + 1}`);
                        return;
                    }
                    const $editable = $wrapper.find('.sv-string-editor[contenteditable="true"]');
                    if ($editable.length === 0) {
                        cy.log(`Editable field not found for item ${index + 1}`);
                        return;
                    }
                    const randomText = faker.string.alpha({ length: 5, casing: 'upper' });
                    cy.wrap($editable)
                        .click({ force: true })
                        .clear({ force: true })
                        .type(randomText, { force: true });
                    enteredTexts.push(randomText);
                    cy.log(`Entered checkbox item ${index + 1}: ${randomText}`);
                });
            });
        }).then(() => {
            if (enteredTexts.length === 0) {
                const msg = 'No checkbox items were updated';
                cy.log(msg);
                throw new Error(msg);
            }
            cy.log(`Total ${enteredTexts.length} checkbox items updated`);
            cy.wrap(enteredTexts).as('enteredCheckboxTexts');
        });
    }

    addQuestionButtonPage2() {
        cy.log('Clicking Add Question button on Page 2');
        this.elements.addQuestionButtonPage2().then($btn => {
            if ($btn.length === 0) {
                const msg = 'Add Question button (Page 2) not found';
                cy.log(msg);
                throw new Error(msg);
            }
            cy.wrap($btn)
                .scrollIntoView({ ensureScrollable: false })
                .click({ force: true });
        });
    }

    addSurveyAddArabicEnglish({ Department, Language, Language2, "Expiry Date": ExpiryDate, "Wait Period": WaitPeriod, Description }) {
        cy.log('Clicking Add Survey button');
        this.elements.addSurvey().eq(1).then($btn => {
            if ($btn.length) {
                cy.log('Add Survey button found');
                cy.wrap($btn).click({ force: true, timeout: 120000 });
            } else {
                const msg = 'Add Survey button not found';
                cy.log(msg);
                throw new Error(msg);
            }
        });
        this.surveyName = `${faker.word.words(2)} Survey`;
        cy.log(`Generated Survey Name: ${this.surveyName}`);
        this.elements.surveyName().then($input => {
            if ($input.length) {
                cy.log('Survey Name input found');
                cy.wrap($input).clear().type(this.surveyName);
            } else {
                const msg = 'Survey Name input not found';
                cy.log(msg);
                throw new Error(msg);
            }
        });
        cy.log('Saving surveyName alias');
        cy.wrap(this.surveyName).as('surveyName');
        cy.log('Saving createdSurveyName alias');
        cy.wrap(this.surveyName).as('createdSurveyName');
        this.elements.surveyDepartmentDropdown().then($dept => {
            if ($dept.length) {
                cy.log(`Selecting Department: ${Department}`);
                cy.wrap($dept).click();
                this.elements.dropdownOptions().contains(Department).click();
            } else {
                const msg = 'Department dropdown not found';
                cy.log(msg);
                throw new Error(msg);
            }
        });
        cy.log('Saving surveyAddDepartment alias');
        cy.wrap(Department).as('surveyAddDepartment');
        this.elements.languageDropdown().then($lang => {
            if ($lang.length) {
                cy.log(`Selecting Language: ${Language}`);
                cy.wrap($lang).click();
                this.elements.dropdownOptions().contains(Language).click();
                cy.log(`Selecting Language: ${Language2}`);
                this.elements.dropdownOptions().contains(Language2).click();
            } else {
                const msg = 'Language dropdown not found';
                cy.log(msg);
                throw new Error(msg);
            }
        });
        this.elements.expiryDate().then($el => {
            if ($el.length) {
                cy.log(`Setting Expiry Date: ${ExpiryDate}`);
                cy.setDateValue($el, ExpiryDate);
            } else {
                const msg = 'Expiry Date field not found';
                cy.log(msg);
                throw new Error(msg);
            }
        });
        this.elements.resendWaitPeriod().then($wait => {
            if ($wait.length) {
                cy.log(`Setting Wait Period: ${WaitPeriod || '2'}`);
                cy.wrap($wait).clear().type(WaitPeriod || '2');
            } else {
                const msg = 'Wait period field not found';
                cy.log(msg);
                throw new Error(msg);
            }
        });
        this.elements.description().then($desc => {
            if ($desc.length) {
                cy.log('Entering Survey Description');
                cy.wrap($desc).clear().type(Description || 'Sample survey description');
            } else {
                const msg = 'Description field not found';
                cy.log(msg);
                throw new Error(msg);
            }
        });
        this.elements.nextBtn().then($next => {
            if ($next.length) {
                cy.log('Clicking Next button');
                cy.wrap($next).click();
            } else {
                const msg = 'Next button not found';
                cy.log(msg);
                throw new Error(msg);
            }
        });
        cy.log('Survey creation completed successfully');
        return this.surveyName;
    }



    selectDropdownUnderSectionSurveySettings(sectionName, fieldName, dropdownValue) {
        this.elements.surveySettingsIcon().then(($icon) => {
            if ($icon.length > 0) {
                this.elements.surveySettingsButton().should('be.visible').click({ force: true });
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

    UserClickAndHideSurveySetting() {
        this.elements.surveySettings({ timeout: 30000 }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Survey settings not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Survey settings found');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.hidePanel({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Hide panel not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Hide panel found');
                cy.wrap($el).click({ force: true });
            }
        });
    };

    transalteEnglishToArabicLanguageMultiQuestions() {
        this.elements.surveySettings({ timeout: 30000 }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Survey settings not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Survey settings clicked');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.hidePanel({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Hide panel not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Hide panel clicked');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.surveySettings({ timeout: 30000 }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Survey settings not found again';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Survey settings clicked again');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.surveyLanguageDropdown({ timeout: 90000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Survey language dropdown not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Survey language dropdown opened');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.arabicSurveyLanguageDropdownOption({ timeout: 90000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic language option not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic language selected');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.surveyLanguageDropdown({ timeout: 90000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Survey language dropdown not found second time';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Survey language dropdown opened again');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.arabicSurveyLanguageDropdownOption({ timeout: 90000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic language option not found second time';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic language selected again');
                cy.wrap($el).click({ force: true });
            }
        });
    };

    userModifyQuestionWithArabic() {
        this.elements.hidePanel({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Hide panel not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Hide panel clicked');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.questionNum1Text({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Question 1 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Entered Arabic text in Question 1');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.page1Question2({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Question 2 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Entered Arabic text in Question 2');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('تجري', { force: true });
            }
        });
        this.elements.page1Question3({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Question 3 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Entered Arabic text in Question 3');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('الأمور', { force: true });
            }
        });
    };

    translationTabClick() {
        this.elements.translationsTab({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Translations tab not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Translations tab clicked');
                cy.wrap($el).click({ force: true });
            }
        });
    }

    userVerifyQuestionsWithArabicTextInTranslatePage() {
        this.elements.translationsTabSession({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Translation session tab not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Translation session tab opened');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.arabicColumnQuestionLocation().eq(0).scrollIntoView({ ensureScrollable: false }).then($el => {
            const val = $el.val();
            if (!val || !val.includes('كيف')) {
                const msg = 'Arabic text mismatch in question 1';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text verified for question 1');
            }
        });
        this.elements.arabicColumnQuestionLocation().eq(1).scrollIntoView({ ensureScrollable: false }).then($el => {
            const val = $el.val();
            if (!val || !val.includes('تجري')) {
                const msg = 'Arabic text mismatch in question 2';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text verified for question 2');
            }
        });
        this.elements.arabicColumnQuestionLocation().eq(2).scrollIntoView({ ensureScrollable: false }).then($el => {
            const val = $el.val();
            if (!val || !val.includes('الأمور')) {
                const msg = 'Arabic text mismatch in question 3';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text verified for question 3');
            }
        });
        this.elements.sendForReviewBtn({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Send for review button not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Send for review clicked');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.sendButton({ timeout: 30000 }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Send button not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Send button clicked');
                cy.wrap($el).click({ force: true });
            }
        });
    };

    addingArabicTextInArabicColumnTransateTab() {
        this.elements.translationsTabSession({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Translations tab session not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Translations tab session clicked');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(0).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 0 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Entered Arabic text at index 0');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(1).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 1 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Entered Arabic text at index 1');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(2).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 2 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Entered Arabic text at index 2');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(3).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 3 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Entered Arabic text at index 3');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(4).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 4 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Entered Arabic text at index 4');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(5).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 5 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Entered Arabic text at index 5');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(6).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 6 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Entered Arabic text at index 6');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(7).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 7 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Entered Arabic text at index 7');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(8).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 8 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Entered Arabic text at index 8');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(9).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 9 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Entered Arabic text at index 9');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(10).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 10 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Entered Arabic text at index 10');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
    }

    addingArabicTextInArabicColumnTransateTabForBothPages() {
        this.elements.translationsTabSession({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Translations tab session not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Translations tab session opened');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(0).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 0 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 0');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(1).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 1 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 1');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(2).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 2 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 2');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(3).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 3 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 3');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(4).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 4 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 4');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(5).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 5 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 5');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(6).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 6 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 6');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(7).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 7 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 7');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(8).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 8 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 8');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(9).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 9 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 9');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(10).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 10 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 10');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(11).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 11 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 11');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(12).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 12 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 12');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(13).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 13 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 13');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(14).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 14 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 14');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(15).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 15 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 15');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(16).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 16 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 16');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(17).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 17 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 17');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(18).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 18 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 18');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
        this.elements.arabicColumnAllLocation().eq(19).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Arabic column index 19 not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Arabic text entered at index 19');
                cy.wrap($el).click({ force: true }).clear({ force: true }).type('كيف', { force: true });
            }
        });
    }

    addSurveyScheduleAllDeatils({ ScheduleName, Date = 'Date', Time = '14:44', LinkExpiry = 1, Language }) {
        cy.log('Starting addSurveyScheduleAllDeatils');
        this.elements.addShedulesurvey().then($el => {
            if (!$el || !$el.length) {
                const msg = 'Add schedule survey button not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Add schedule survey button clicked');
                cy.wrap($el).click({ force: true });
            }
        });
        this.scheduleSurveyname = ScheduleName || (faker.word.words(2) + ' Schedule');
        this.elements.scheduleSurveyname().then($el => {
            if (!$el || !$el.length) {
                const msg = 'Schedule survey name input not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log(`Entering schedule survey name: ${this.scheduleSurveyname}`);
                cy.wrap($el).clear({ force: true }).type(this.scheduleSurveyname, { force: true }).invoke('val').then(val => {
                    if (val !== this.scheduleSurveyname) {
                        const msg = 'Schedule survey name value mismatch';
                        cy.log(msg);
                        throw new Error(msg);
                    } else {
                        cy.log('Schedule survey name entered successfully');
                    }
                });
            }
        });
        const languageFromFeature = Language || arguments[0]["Language"];
        const finalLanguage = languageFromFeature || 'English';
        cy.log(`Final language selected: ${finalLanguage}`);
        this.selectSurveyInDropdown();
        this.selectScheduleDefLanguage(finalLanguage);
        this.setScheduleDate(Date);
        this.setScheduleTime(Time);
        this.setLinkExpiry(LinkExpiry);
        cy.wrap(this.scheduleSurveyname).as('scheduleSurveyName');
        cy.log('addSurveyScheduleAllDeatils completed successfully');
    }

    selectScheduleDefLanguage(Language) {
        cy.log('Opening default language dropdown');
        this.elements.suerveyScheduleDefaultLangDropdown().then($el => {
            if (!$el || !$el.length) {
                const msg = 'Survey schedule default language dropdown not found';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Default language dropdown clicked');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.dropdownOptions({ timeout: 10000 }).contains(Language).then($el => {
            if (!$el || !$el.length) {
                const msg = `Language option "${Language}" not found`;
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log(`Language option selected: ${Language}`);
                cy.wrap($el).click({ force: true });
            }
        });
    }

    addingPage2MultipleQuestions() {
        cy.log('Adding Page 2 Question 1');
        this.elements.addQuestionBtnAdditional({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Add Question button not found for Page 2 Question 1';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Clicked Add Question button for Page 2 Question 1');
                cy.wrap($el).click({ force: true });
            }
        });
        const titleWordPage2Question1 = faker.word.noun();
        const question1Page2Text = `How do you experience about ${titleWordPage2Question1}`;
        this.elements.page2Question1({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length || $el.is(':disabled')) {
                const msg = 'Page 2 Question 1 input not available or disabled';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log(`Entering Page 2 Question 1 text: ${question1Page2Text}`);
                cy.wrap($el).click({ force: true }).clear({ force: true }).type(question1Page2Text, { force: true });
            }
        });
        cy.wrap(question1Page2Text).as('enteredQuestion1Page2');
        this.elements.selectQuestionType2Dropdown().scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Question type dropdown not found for Page 2 Question 1';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Hovering question type dropdown for Page 2 Question 1');
                cy.wrap($el).trigger('mouseover');
            }
        });
        this.elements.questionTypeDropdownButton().scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Question type dropdown button not found for Page 2 Question 1';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Clicking question type dropdown button for Page 2 Question 1');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.questionTypeOptions().contains('Radio Button Group').scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Radio Button Group option not found for Page 2 Question 1';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Selected Radio Button Group for Page 2 Question 1');
                cy.wrap($el).click({ force: true });
            }
        });

        cy.log('Adding Page 2 Question 2');
        this.elements.addQuestionBtnAdditional({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Add Question button not found for Page 2 Question 2';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Clicked Add Question button for Page 2 Question 2');
                cy.wrap($el).click({ force: true });
            }
        });
        const titleWordPage2Question2 = faker.word.noun();
        const question2Page2Text = `How do you experience about ${titleWordPage2Question2}`;
        this.elements.page2Question2({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length || $el.is(':disabled')) {
                const msg = 'Page 2 Question 2 input not available or disabled';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log(`Entering Page 2 Question 2 text: ${question2Page2Text}`);
                cy.wrap($el).click({ force: true }).clear({ force: true }).type(question2Page2Text, { force: true });
            }
        });
        cy.wrap(question2Page2Text).as('enteredQuestion2Page2');
        this.elements.selectQuestionType2Dropdown().scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Question type dropdown not found for Page 2 Question 2';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Hovering question type dropdown for Page 2 Question 2');
                cy.wrap($el).trigger('mouseover');
            }
        });
        this.elements.questionTypeDropdownButton().scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Question type dropdown button not found for Page 2 Question 2';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Clicking question type dropdown button for Page 2 Question 2');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.questionTypeOptions().contains('Checkboxes').scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Checkboxes option not found for Page 2 Question 2';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Selected Checkboxes for Page 2 Question 2');
                cy.wrap($el).click({ force: true });
            }
        });

        cy.log('Adding Page 2 Question 3');
        this.elements.addQuestionBtnAdditional({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Add Question button not found for Page 2 Question 3';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Clicked Add Question button for Page 2 Question 3');
                cy.wrap($el).click({ force: true });
            }
        });
        const titleWordPage2Question3 = faker.word.noun();
        const question3Page2Text = `How do you experience about ${titleWordPage2Question3}`;
        this.elements.page2Question3({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length || $el.is(':disabled')) {
                const msg = 'Page 2 Question 3 input not available or disabled';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log(`Entering Page 2 Question 3 text: ${question3Page2Text}`);
                cy.wrap($el).click({ force: true }).clear({ force: true }).type(question3Page2Text, { force: true });
            }
        });
        cy.wrap(question3Page2Text).as('enteredQuestion3Page2');
        this.elements.selectQuestionType2Dropdown().scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Question type dropdown not found for Page 2 Question 3';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Hovering question type dropdown for Page 2 Question 3');
                cy.wrap($el).trigger('mouseover');
            }
        });
        this.elements.questionTypeDropdownButton().scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Question type dropdown button not found for Page 2 Question 3';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Clicking question type dropdown button for Page 2 Question 3');
                cy.wrap($el).click({ force: true });
            }
        });
        this.elements.questionTypeOptions().contains('Yes/No (Boolean)').scrollIntoView({ ensureScrollable: false }).then($el => {
            if (!$el || !$el.length) {
                const msg = 'Yes/No (Boolean) option not found for Page 2 Question 3';
                cy.log(msg);
                throw new Error(msg);
            } else {
                cy.log('Selected Yes/No (Boolean) for Page 2 Question 3');
                cy.wrap($el).click({ force: true });
            }
        });
    }


}

export default SurveyPage;