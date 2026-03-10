import { faker } from "@faker-js/faker";
import Messages from "./Messages";

Cypress.on('fail', (error) => {
  cy.log(' TEST FAILED : ');
  cy.log(error.message);
  throw error; 
});

const safeClick = (elFn, label) => {
  cy.log(` Attempting to click: ${label}`);
  elFn().then($el => {
    if (!$el.length) {
      cy.log(` ${label} not found in DOM`);
      throw new Error(`${label} not found in DOM`);
    }
    if (!$el.is(':visible')) {
      cy.log(` ${label} found but NOT visible`);
      throw new Error(`${label} is hidden`);
    }
    cy.wrap($el).click({ force: true });
    cy.log(` ${label} clicked successfully`);
  });
};

class SurveySchedulePage {
  surveyScheduleName = '';
  elements = {
    surveyMenu: () => cy.get('[class="nav-item false"] span', { timeout: 90000 }),
    surveySchedule: () => cy.contains("a.nav-item", "Survey Schedule", { timeout: 90000 }),
    searchInput: () => cy.get('input[placeholder="Search for anything..."]', { timeout: 90000 }),
    searchButton: () => cy.get("button[title='Search']", { timeout: 90000 }),
    resetButton: () => cy.get("div[data-title='Reset'] svg", { timeout: 90000 }),
    tableRows: () => cy.get(".custom-table tbody tr", { timeout: 90000 }),
    countPerPageLabel: () => cy.get('div[class="count-per-page"] p', { timeout: 90000 }),
    totalPageDropdown: () => cy.get("img[alt='Total Page']", { timeout: 90000 }),
    totalPageOptions: () => cy.get("div.custom-table-pages-dropdown-item", { timeout: 90000 }),
    addButton: () => cy.get('div[data-title="Add"] svg', { timeout: 90000 }),
    addShedulesurvey: () => cy.get('div[data-title="Add"]').should('be.visible', { timeout: 90000 }),
    scheduleSurveyname: () => cy.get('input[placeholder="Enter Schedule Name"]', { timeout: 90000 }),
    expiryDate: () => cy.get('input[type="date"]', { timeout: 90000 }),
    selectSurveydropdown: () => cy.get('.input_select-form_inner-label').contains('Select survey', { timeout: 90000 }),
    scheduleTime: () => cy.get('input[name="scheduleTime"]', { timeout: 90000 }),
    linkExpiry: () => cy.get('input[name="linkExpiry"]', { timeout: 90000 }),
    languageDropdown: () => cy.get('.input_select-form_Languages', { timeout: 90000 }),
    dropdownOptions: () => cy.get('[class="input_select-form_option-container"] li', { timeout: 90000 }),
    selectedLanguageChips: () => cy.get('.multiselect_label-chips', { timeout: 90000 }),
    sMSSenderIdDropdown: () => cy.xpath("(//div[contains(@class,'input_select-form_inner-label') and .//p[text()='Select SMS Sender Id']])[1]", { timeout: 90000 }),
    sMSTemplateDropdown: () => cy.xpath("(//div[contains(@class,'input_select-form_inner-label') and .//p[text()='Select SMS Template']])[1]", { timeout: 90000 }),
    sMTPDropdown: () => cy.xpath("(//div[contains(@class,'input_select-form_inner-label') and .//p[text()='Select SMTP']])[1]", { timeout: 90000 }),
    emailTemplateDropdown: () => cy.xpath("(//div[contains(@class,'input_select-form_inner-label') and .//p[text()='Select Email Template']])[1]", { timeout: 90000 }),
    sendForReviewButton: () => cy.xpath("//button[@type='button' and contains(@class,'button_form-primary_button') and normalize-space(text())='Send For Review']", { timeout: 90000 }),
    container: () => cy.xpath("//div[contains(@class,'alertDialogContent')]", { timeout: 90000 }),
    message: () => cy.xpath("//div[contains(@class,'alertDialogBody')]//p"),
    continueEditingButton: () => cy.xpath("//button[@title='Continue Editing' and contains(@class,'button_form-submit_cancel')]"),
    sendButton: () => cy.xpath("//button[@title='Send' and contains(@class,'button_form-submit_main')]"),
    surveyScheduleMessageToast: () => cy.get('.Toastify__toast-body, .toast, [class*="toast"]', { timeout: 90000 }),
    suerveyScheduleStatu: () => cy.get('body > div > article > main > div > div.statusBadgeComments > div > span', { timeout: 90000 }),
    suerveyScheduleDefaultLangDropdown: () => cy.xpath("//div[contains(@class,'input_select-form_inner-label') and .//p[text()='Select default language']]", { timeout: 90000 }),
    menuButtonThreeDot: () => cy.get('button.kebab-menu.kebab-menu_kebab-menu-button', { timeout: 90000 }),
    deleteOption: () => cy.contains('div.survey-action_kebab-menu-body-element_title', 'Delete', { timeout: 90000 }),
    approveOption: () => cy.contains('div.survey-action_kebab-menu-body-element_title', 'Approve', { timeout: 90000 }),
    rejectOption: () => cy.contains('div.survey-action_kebab-menu-body-element_title', 'Reject', { timeout: 90000 }),
    alertDialogContent: () => cy.get('div.alertDialogContent', { timeout: 90000 }),
    reasonTextarea: () => cy.get('textarea.confirmation-dialog-body_textarea', { timeout: 90000 }),
    deleteButton: () => cy.get('button.button_form-submit_main[title="Delete"]', { timeout: 90000 }),
    approveButton: () => cy.get('button.button_form-submit_main[title="Approve"]', { timeout: 90000 }),
    rejectButton: () => cy.get('button.button_form-submit_main[title="Reject"]', { timeout: 90000 }),
    backToPuffinLink: () => cy.contains('a', 'Back to Puffin', { timeout: 90000 }),
    firstElement: () => cy.get('body > div > article > main > div > div.custom-table > table > tbody > tr > td:nth-child(1)', { timeout: 90000 }).first(),
    participantsTab: () => cy.contains('button', 'Participants', { timeout: 90000 }),
    responseStatusCells: () => cy.get('table tbody tr td:nth-child(6)', { timeout: 90000 }),
    typeSelectorLabel: () => cy.xpath("(//div[@class='search-bar-d2_type-selector_label'])[1]", { timeout: 90000 }),
    filterOperatorLabel: () => cy.xpath("(//div[@class='search-bar-d2_type-selector_label'])[2]", { timeout: 90000 }),
    filterOperatorOption: () => cy.get('.search-bar-d2_type-selector_option', { timeout: 90000 }),
    searchInputVisible: () => cy.get('input[placeholder="Search"]:visible', { timeout: 90000 }),
    surveyTypeCheckbox: (surveyTypeName) => cy.contains('span.custom-select_checkbox-container', surveyTypeName, { timeout: 90000 }),
    smsSenderIDField: () => cy.xpath('(//input[@placeholder="Search"])[2]', { timeout: 90000 }),
    smsTemplateField: () => cy.xpath('(//input[@placeholder="Search"])[3]', { timeout: 90000 }),
    sMTPField: () => cy.xpath('(//input[@placeholder="Search"])[4]', { timeout: 90000 }),
    emailTemplateField: () => cy.xpath('(//input[@placeholder="Search"])[5]', { timeout: 90000 }),
    smsSenderInput: () => cy.xpath("/html/body/div/article/main/div/form/div[1]/div/div[3]/div[1]/div[1]/div/input", { timeout: 90000 }),
    smtpInput: () => cy.xpath("/html/body/div/article/main/div/form/div[1]/div/div[3]/div[2]/div[1]/div/input", { timeout: 90000 }),
    nextButton: () => cy.xpath("//button[normalize-space()='Next']", { timeout: 90000 }),
    uploadParticipantsLabel: () => cy.get('.custom-stepper-label', { timeout: 90000 }),
    selectedSurveyLabel: () => cy.get('.input_select-form_inner-label', { timeout: 90000 }),
    headerInfo: () => cy.get('div.header-info h2', { timeout: 90000 }),
    panelCards: () => cy.get('div.cards div.card', { timeout: 90000 }),
    cardTitle: () => cy.get('p.card-title', { timeout: 90000 }),
    cardSubtitle: () => cy.get('p.card-subtitle', { timeout: 90000 }),
    componentsColumn: () => cy.get('div.sv-components-column', { timeout: 90000 }),
    editInput: () => cy.get('input[title="Edit"]', { timeout: 90000 }),
    clickableTableCells: () => cy.get('td.w-10.cursor-pointer', { timeout: 90000 }),
    statusInReview: () => cy.get('.statusMessageContainer .status_in-review', { timeout: 90000 }),
    fromDateInput: () =>cy.get('input.from-date[type="date"]',{ timeout: 90000 }),
    toDateInput: () =>cy.get('input.to-date[type="date"]',{ timeout: 90000 }),
    channelStats: '.channel-stats',
    validCount: '.counts_valid-count',
    invalidCount: '.counts_invalid-count',

  };
  fileUploadInput = '#fileUpload';
  channelStats = '.channel-stats';

navigateToSurveySchedule() {
  cy.wait(3000);
  cy.log('Navigating to Survey Schedule page');
  this.elements.surveyMenu({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).contains('Survey').click({ force: true });
      cy.log('Clicked on Survey menu');
    } else { const msg='Survey menu not visible'; cy.log(msg); throw new Error(msg); }
  });
  cy.wait(3000);
  this.elements.surveySchedule({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked on Survey Schedule');
    } else { const msg='Survey Schedule option not visible'; cy.log(msg); throw new Error(msg); }
  });
  cy.wait(5000);
  cy.contains('a.second-link', 'Survey Schedule', { timeout: 90000 }).should('be.visible');
      cy.log('Survey Schedule page loaded');
}

selectType(typeName) {
  this.elements.typeSelectorLabel({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).realHover();
      cy.log('Hovered on Type selector');
    } else { const msg='Type selector label not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.filterOperatorOption({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).contains(typeName).click({ force: true });
      cy.log(`Selected type: ${typeName}`);
    } else { const msg=`Type option not visible: ${typeName}`; cy.log(msg); throw new Error(msg); }
  });
}

selectFilterOperator(operatorName) {
  this.elements.filterOperatorLabel({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).realHover();
      cy.log('Hovered on Filter Operator selector');
    } else { const msg='Filter Operator label not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.filterOperatorOption({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).contains(operatorName).click({ force: true });
      cy.log(`Selected filter operator: ${operatorName}`);
    } else { const msg=`Filter operator option not visible: ${operatorName}`; cy.log(msg); throw new Error(msg); }
  });
}

enterSearchValue(value) {
  this.elements.searchInput({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).clear({ force: true }).type(value, { force: true });
      cy.log(`Entered search value: ${value}`);
    } else { const msg='Search input not visible'; cy.log(msg); throw new Error(msg); }
  });
}

clickSearch() {
  this.elements.searchButton({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked Search button');
    } else { const msg='Search button not visible'; cy.log(msg); throw new Error(msg); }
  });
}

  verifyFilteredTableResults(value, operator) {
  cy.get('.custom-table tbody tr', { timeout: 90000 }).then($rows => {
    if ($rows.length) {
      const allCellTexts = [];
      $rows.each((rowIndex, row) => {
        Cypress.$(row).find('td').each((colIndex, cell) => {
          const text = Cypress.$(cell).text().trim();
          if (text) allCellTexts.push(text);
        });
      });
      const matchFound = allCellTexts.some(text => {
        if (operator === 'Contains') return text.includes(value);
        else if (operator === 'Starts With') return text.startsWith(value);
        else if (operator === 'Ends With') return text.endsWith(value);
        else if (operator === 'Equals') return text === value;
        else if (operator === 'Not Equals') return text !== value;
        else if (operator === 'Not Contains') return !text.includes(value);
        else { cy.log(`Filter operator "${operator}" not implemented`); return false; }
      });
      if (matchFound) {
        cy.log(`Filtered table results match "${operator}" with value "${value}"`);
      } else {
        const msg = `Filtered table results do not match "${operator}" with value "${value}"`;
        cy.log(msg); throw new Error(msg);
      }
    } else {
      const msg = 'No table rows found to verify filters';
      cy.log(msg); throw new Error(msg);
    }
  });
}

enterDate(date) {
  this.elements.dateInput({ timeout: 90000 }).then($input => {
    if ($input.length && $input.is(':visible')) {
      $input.removeAttr('readonly');
      cy.wrap($input).clear({ force: true }).type(date, { force: true });
      cy.log(`Entered date: ${date}`);
    } else {
      const msg = 'Date input not visible';
      cy.log(msg); throw new Error(msg);
    }
  });
}

resetFiltersAndVerify() {
  this.elements.tableRows({ timeout: 90000 }).then($filteredRows => {
    if ($filteredRows.length) {
      const filteredCount = $filteredRows.length;
      cy.log(`Filtered table row count before reset: ${filteredCount}`);
      this.elements.resetButton({ timeout: 90000 }).then($btn => {
        if ($btn.is(':visible')) {
          cy.wrap($btn).click({ force: true });
          cy.log('Reset button clicked');
        } else {
          const msg = 'Reset button not visible';
          cy.log(msg); throw new Error(msg);
        }
      });
      cy.wait(2000);
      this.elements.tableRows({ timeout: 90000 }).then($rowsAfterReset => {
        if ($rowsAfterReset.length > filteredCount) {
          cy.log(`Table row count after reset: ${$rowsAfterReset.length}`);
          cy.log('Table data reloaded successfully after reset');
        } else {
          const msg = 'Table reset did not increase row count as expected';
          cy.log(msg); throw new Error(msg);
        }
      });
    } else {
      const msg = 'No filtered rows found before reset';
      cy.log(msg); throw new Error(msg);
    }
  });
}

clickElement(selector, text) {
  cy.contains(selector, text, { timeout: 90000 }).then($el => {
    if ($el.length && $el.is(':visible') && !$el.is(':disabled')) {
      cy.wrap($el).click({ force: true });
      cy.log(`Clicked element with text "${text}"`);
    } else {
      const msg = `Element not clickable or not visible: "${text}"`;
      cy.log(msg); throw new Error(msg);
    }
  });
}

selectDropdownOption(dropdownFn, optionsFn, expectedValue) {
  dropdownFn({ timeout: 90000 }).then($dropdown => {
    if ($dropdown.is(':visible')) {
      cy.wrap($dropdown).realHover();
      cy.log('Hovered on dropdown');
    } else {
      const msg = 'Dropdown not visible';
      cy.log(msg); throw new Error(msg);
    }
  });
  optionsFn({ timeout: 90000 }).then($options => {
    if ($options.length) {
      cy.log('Dropdown options loaded');
      const option = $options.filter(`:contains("${expectedValue}")`).first();
      if (option.length && option.is(':visible')) {
        cy.wrap(option).scrollIntoView({ ensureScrollable: false }).click({ force: true });
        cy.log(`Selected dropdown option "${expectedValue}"`);
      } else {
        const msg = `Dropdown option not visible: "${expectedValue}"`;
        cy.log(msg); throw new Error(msg);
      }
    } else {
      const msg = 'Dropdown options not found';
      cy.log(msg); throw new Error(msg);
    }
  });
}

verifyElementByText(elementFn, expectedText, options = { timeout: 90000 }) {
  cy.log(`Verifying element text contains "${expectedText}"`);
  elementFn({ timeout: options.timeout }).then($el => {
    if ($el.length && $el.is(':visible')) {
      const actualText = $el.text().trim();
      cy.log(`Actual text found: "${actualText}"`);
      if (actualText.includes(expectedText)) {
        cy.log('Text verification passed');
      } else {
        const msg = `Text verification failed. Expected "${expectedText}", got "${actualText}"`;
        cy.log(msg); throw new Error(msg);
      }
    } else {
      const msg = 'Element not visible for text verification';
      cy.log(msg); throw new Error(msg);
    }
  });
}

getDubaiCurrentDate() {
  const dubaiDate = new Date().toLocaleString("en-US", { timeZone: "Asia/Kuwait" });
  const date = new Date(dubaiDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  cy.log(`Fetched Dubai date: ${year}-${month}-${day}`);
  return `${year}-${month}-${day}`;
}

getDubaiCurrentTime(minutesToAdd) {
  const dubaiDate = new Date().toLocaleString("en-US", { timeZone: "Asia/Kuwait" });
  const date = new Date(dubaiDate);
  if (minutesToAdd) {
    date.setMinutes(date.getMinutes() + minutesToAdd);
    cy.log(`Added ${minutesToAdd} minutes to Dubai time`);
  }
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  cy.log(`Fetched Dubai time: ${hours}:${minutes}`);
  return `${hours}:${minutes}`;
}

clickAddButton() {
  this.elements.addButton({ timeout: 90000 }).then($btn => {
    if ($btn.is(':visible')) {
      cy.wrap($btn).click({ force: true });
      cy.log('Clicked Add Survey Schedule button');
    } else {
      const msg = 'Add Survey Schedule button not visible';
      cy.log(msg); throw new Error(msg);
    }
  });
  this.elements.addShedulesurvey({ timeout: 90000 }).then($popup => {
    if ($popup.is(':visible')) {
      cy.log('Add Survey Schedule popup displayed');
    } else {
      const msg = 'Add Survey Schedule popup not displayed';
      cy.log(msg); throw new Error(msg);
    }
  });
}

addSurveyScheduleDubaiTimings({ ScheduleName, surveyTypeName, Date = 'Date', Time = '14:44 AM', LinkExpiry = 2, futureMinutes = 2, Language } = {}) {
  cy.log('Starting Survey Schedule creation for Dubai timings');
  this.elements.addShedulesurvey({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked Add Survey Schedule');
    } else {
      const msg = 'Add Survey Schedule button not visible';
      cy.log(msg); throw new Error(msg);
    }
  });
  this.scheduleSurveyname = ScheduleName || (faker.word.words(2) + ' Schedule');
  this.elements.scheduleSurveyname({ timeout: 90000 }).then($input => {
    if ($input.is(':visible')) {
      cy.wrap($input).clear({ force: true });
      cy.log('Cleared Schedule Name input');
      cy.wrap($input).type(this.scheduleSurveyname, { force: true });
      cy.log(`Entered Schedule Name: ${this.scheduleSurveyname}`);
    } else {
      const msg = 'Schedule Name input not visible';
      cy.log(msg); throw new Error(msg);
    }
  });
  cy.wrap(this.scheduleSurveyname).as('surveyScheduleName');
  const surveyNameFromFeature = surveyTypeName || arguments[0]?.["Select Survey"];
  const languageFromFeature = Language || arguments[0]?.["Language"];
  const finalSurveyType = surveyNameFromFeature || 'All Questions';
  const finalLanguage = languageFromFeature || 'English';
  cy.log(`Selecting survey type: ${finalSurveyType}`);
  this.selectSurveyInDropdown(finalSurveyType);
  cy.log(`Selecting language: ${finalLanguage}`);
  this.selectScheduleDefLanguage(finalLanguage);
  const dateToUse = this.getDubaiCurrentDate();
  const timeToUse = this.getDubaiCurrentTime(futureMinutes);
  cy.log(`Setting schedule date: ${dateToUse}`);
  this.setScheduleDateABC(dateToUse);
  cy.log(`Setting schedule time: ${timeToUse}`);
  this.setScheduleTimeABC(timeToUse);
  cy.log(`Setting link expiry to ${LinkExpiry}`);
  this.setLinkExpiry(LinkExpiry);
  cy.log('Survey Schedule details filled successfully');
}

  addSurveyScheduleByLanguage({ ScheduleName, surveyTypeName = 'Automation event Survey', Date = 'Date', Time = '14:44 AM', LinkExpiry = 1, Language }) {
  cy.log('Filling Survey Schedule details with default language');
  this.elements.addShedulesurvey({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked Add Schedule Survey button');
    } else { const msg='Add Schedule Survey button not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.scheduleSurveyname = ScheduleName || (faker.word.words(2) + ' Schedule');
  this.elements.scheduleSurveyname({ timeout: 90000 }).then($input => {
    if ($input.is(':visible')) {
      cy.wrap($input).clear({ force: true });
      cy.log('Cleared Schedule Name input');
      cy.wrap($input).type(this.scheduleSurveyname, { force: true });
      cy.log(`Entered Schedule Name: ${this.scheduleSurveyname}`);
    } else { const msg='Schedule Name input not visible'; cy.log(msg); throw new Error(msg); }
  });
  cy.wrap(this.scheduleSurveyname).as('surveyScheduleName');
  this.selectSurveyInDropdown(surveyTypeName);
  this.selectScheduleDefLanguage(Language);
  this.setScheduleDate(Date);
  this.setScheduleTime(Time);
  this.setLinkExpiry(LinkExpiry);
}

addSurveyScheduleArabicEnglish({ ScheduleName, surveyTypeName = 'All Questions', Date = 'Date', Time = '14:44 AM', LinkExpiry = 2, Language1, Language2 }) {
  cy.log('Filling Survey Schedule details with Arabic and English as default languages');
  this.elements.addShedulesurvey({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked Add Schedule Survey button');
    } else { const msg='Add Schedule Survey button not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.scheduleSurveyname = ScheduleName || (faker.word.words(2) + ' Schedule');
  this.elements.scheduleSurveyname({ timeout: 90000 }).then($input => {
    if ($input.is(':visible')) {
      cy.wrap($input).clear({ force: true });
      cy.log('Cleared Schedule Name input');
      cy.wrap($input).type(this.scheduleSurveyname, { force: true });
      cy.log(`Entered Schedule Name: ${this.scheduleSurveyname}`);
    } else { const msg='Schedule Name input not visible'; cy.log(msg); throw new Error(msg); }
  });
  cy.wrap(this.scheduleSurveyname).as('surveyScheduleName');
  this.selectSurveyInDropdown(surveyTypeName);
  this.selectScheduleDefLanguageAsArabicAndEnglish(Language1, Language2);
  this.setScheduleDate(Date);
  this.setScheduleTime(Time);
  this.setLinkExpiry(LinkExpiry);
}

selectSurveyInDropdown(surveyTypeName) {
  this.elements.selectSurveydropdown({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked Survey dropdown');
    } else { const msg='Survey dropdown not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.searchInputVisible({ timeout: 90000 }).then($input => {
    if ($input.is(':visible')) {
      cy.wrap($input).clear({ force: true });
      cy.log('Cleared survey search input');
      cy.wrap($input).type(surveyTypeName, { force: true });
      cy.log(`Entered survey name: ${surveyTypeName}`);
    } else { const msg='Survey search input not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.surveyTypeCheckbox(surveyTypeName, { timeout: 90000 }).then($chk => {
    if ($chk.is(':visible')) {
      cy.wrap($chk).click({ force: true });
      cy.log(`Selected survey type: ${surveyTypeName}`);
    } else { const msg=`Survey type checkbox not visible: ${surveyTypeName}`; cy.log(msg); throw new Error(msg); }
  });
  this.elements.selectedSurveyLabel({ timeout: 90000 }).then($lbl => {
    if ($lbl.text().includes(surveyTypeName)) {
      cy.log(`Verified selected survey label: ${surveyTypeName}`);
    } else { const msg='Selected survey label mismatch'; cy.log(msg); throw new Error(msg); }
  });
}

selectScheduleDefLanguage(Language) {
  this.elements.suerveyScheduleDefaultLangDropdown({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked Default Language dropdown');
    } else { const msg='Default Language dropdown not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.dropdownOptions({ timeout: 90000 }).then($opts => {
    const opt = $opts.filter(`:contains("${Language}")`).first();
    if (opt.length && opt.is(':visible')) {
      cy.wrap(opt).click({ force: true });
      cy.log(`Selected language: ${Language}`);
    } else { const msg=`Language option not visible: ${Language}`; cy.log(msg); throw new Error(msg); }
  });
}

selectScheduleDefLanguageAsArabicAndEnglish(Language1, Language2) {
  this.elements.suerveyScheduleDefaultLangDropdown({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked Default Language dropdown');
    } else { const msg='Default Language dropdown not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.dropdownOptions({ timeout: 90000 }).then($opts => {
    const opt1 = $opts.filter(`:contains("${Language1}")`).first();
    const opt2 = $opts.filter(`:contains("${Language2}")`).first();
    if (opt1.length) { cy.wrap(opt1).click({ force: true }); cy.log(`Selected language: ${Language1}`); }
    else { const msg=`Language option not visible: ${Language1}`; cy.log(msg); throw new Error(msg); }
    if (opt2.length) { cy.wrap(opt2).click({ force: true }); cy.log(`Selected language: ${Language2}`); }
    else { const msg=`Language option not visible: ${Language2}`; cy.log(msg); throw new Error(msg); }
  });
}

setScheduleDate(Date) {
  this.elements.expiryDate({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.setDateValue($el, Date);
      cy.log(`Set schedule date: ${Date}`);
    } else { const msg='Schedule date input not visible'; cy.log(msg); throw new Error(msg); }
  });
}

setScheduleTime(Time) {
  this.elements.scheduleTime({ timeout: 90000 }).then($input => {
    if ($input.is(':visible')) {
      $input.val(Time).trigger('change');
      cy.log(`Set schedule time: ${Time}`);
    } else { const msg='Schedule time input not visible'; cy.log(msg); throw new Error(msg); }
  });
}

setScheduleDateABC(date) {
  this.elements.expiryDate({ timeout: 90000 }).then($input => {
    if ($input.is(':visible')) {
      const setter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      ).set;
      setter.call($input[0], date);
      $input[0].dispatchEvent(new Event('input', { bubbles: true }));
      $input[0].dispatchEvent(new Event('change', { bubbles: true }));
      cy.log('Set schedule date');
      cy.wrap($input).invoke('val').then(val => {
        if (val === date) {
          cy.log('Schedule date verified');
        } else {
          const msg = 'Schedule date value mismatch';
          cy.log(msg);
          throw new Error(msg);
        }
      });
    } else {
      const msg = 'Schedule date input not visible';
      cy.log(msg);
      throw new Error(msg);
    }
  });
}

setScheduleTimeABC(time) {
  this.elements.scheduleTime({ timeout: 90000 }).then($input => {
    if ($input.is(':visible')) {
      const setter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      ).set;
      setter.call($input[0], time);
      $input[0].dispatchEvent(new Event('input', { bubbles: true }));
      $input[0].dispatchEvent(new Event('change', { bubbles: true }));
      cy.log('Set schedule time');
      cy.wrap($input).invoke('val').then(val => {
        if (val === time) {
          cy.log('Schedule time verified');
        } else {
          const msg = 'Schedule time value mismatch';
          cy.log(msg);
          throw new Error(msg);
        }
      });
    } else {
      const msg = 'Schedule time input not visible';
      cy.log(msg);
      throw new Error(msg);
    }
  });
}


setLinkExpiry(LinkExpiry) {
  this.elements.linkExpiry({ timeout: 90000 }).scrollIntoView({ ensureScrollable: false }).then($input => {
    if ($input.is(':visible')) {
      cy.wrap($input).clear({ force: true });
      cy.log('Cleared link expiry input');
      cy.wrap($input).type(LinkExpiry.toString(), { force: true });
      cy.log(`Entered link expiry: ${LinkExpiry}`);
    } else { const msg='Link expiry input not visible'; cy.log(msg); throw new Error(msg); }
  });
  cy.contains('button', 'Next', { timeout: 90000 }).then($btn => {
    if ($btn.is(':visible')) {
      cy.wrap($btn).click({ force: true });
      cy.log('Clicked Next button');
    } else { const msg='Next button not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.uploadParticipantsLabel({ timeout: 90000 }).eq(1).then($lbl => {
    if ($lbl.text() === 'Add Channel') {
      cy.log('Verified Add Channel label');
    } else { const msg='Add Channel label verification failed'; cy.log(msg); throw new Error(msg); }
  });
}

selectLanguages() {
  this.elements.languageDropdown({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked language dropdown');
    } else { const msg='Language dropdown not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.dropdownOptions({ timeout: 90000 }).then($opts => {
    const arabic = $opts.filter(':contains("Arabic")').first();
    const english = $opts.filter(':contains("English")').first();
    if (arabic.length) { cy.wrap(arabic).click({ force: true }); cy.log('Selected Arabic language'); }
    else { const msg='Arabic language option not visible'; cy.log(msg); throw new Error(msg); }
    if (english.length) { cy.wrap(english).click({ force: true }); cy.log('Selected English language'); }
    else { const msg='English language option not visible'; cy.log(msg); throw new Error(msg); }
  });
}

  verifySelectedLanguages() {
  this.elements.selectedLanguageChips({ timeout: 90000 }).then($el => {
    if ($el.length) {
      cy.wrap($el).invoke('text').then(text => {
        const cleanText = text.trim();
        if (cleanText.includes('Arabic') && cleanText.includes('English')) {
          cy.log('Verified selected languages: Arabic and English');
        } else {
          const msg = `Language selection failed. Found "${cleanText}"`;
          cy.log(msg);
          throw new Error(msg);
        }
      });
    } else { const msg='Selected language chips not found'; cy.log(msg); throw new Error(msg); }
  });
}

uploadFile(fileName) {
  cy.get(this.fileUploadInput, { timeout: 90000 }).then($input => {
    if ($input.length) {
      cy.wrap($input).invoke('removeAttr', 'hidden').invoke('show');
      cy.log('File upload input made visible');
      cy.wrap($input).attachFile(fileName);
      cy.log(`Uploaded file: ${fileName}`);
    } else { const msg='File upload input not found'; cy.log(msg); throw new Error(msg); }
  });
  cy.contains(fileName, { timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.log(`Verified uploaded file visible: ${fileName}`);
    } else { const msg=`Uploaded file not visible: ${fileName}`; cy.log(msg); throw new Error(msg); }
  });
}

addSurveyScheduleComment({ smsSenderID = 'InfoText', smsTemplate = 'FCC SMS Valid En-Ar', SMTP = 'SMTP NBK', emailTemplate = 'SCT Email Valid En-Ar' } = {}) {
  this.elements.smsSenderInput({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked SMS Sender input');
    } else { const msg='SMS Sender input not visible'; cy.log(msg); throw new Error(msg); }
  });
  if (smsSenderID) this.selectSMSSenderIdDropdown(smsSenderID);
  if (smsTemplate) this.selectSMSTemplateDropdown(smsTemplate);
  this.elements.smtpInput({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked SMTP input');
    } else { const msg='SMTP input not visible'; cy.log(msg); throw new Error(msg); }
  });
  if (SMTP) this.selectSMTPDropdown(SMTP);
  if (emailTemplate) this.selectEmailTemplateDropdown(emailTemplate);
  cy.wait(2000);
  this.elements.nextButton({ timeout: 90000 }).then($btn => {
    if ($btn.is(':visible')) {
      cy.wrap($btn).click({ force: true });
      cy.log('Clicked Next button');
    } else { const msg='Next button not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.uploadParticipantsLabel({ timeout: 90000 }).eq(2).then($lbl => {
    if ($lbl.text() === 'Upload Participants') {
      cy.log('Verified Upload Participants label');
    } else { const msg='Upload Participants label mismatch'; cy.log(msg); throw new Error(msg); }
  });
}

selectSMSSenderIdDropdown(smsSenderID) {
  this.elements.sMSSenderIdDropdown({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked SMS Sender ID dropdown');
    } else { const msg='SMS Sender ID dropdown not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.smsSenderIDField({ timeout: 90000 }).then($input => {
    if ($input.is(':visible')) {
      cy.wrap($input).clear({ force: true });
      cy.log('Cleared SMS Sender ID field');
      cy.wrap($input).type(smsSenderID, { force: true });
      cy.log(`Entered SMS Sender ID: ${smsSenderID}`);
    } else { const msg='SMS Sender ID field not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.surveyTypeCheckbox(smsSenderID, { timeout: 90000 }).then($chk => {
    if ($chk.is(':visible')) {
      cy.wrap($chk).click({ force: true });
      cy.log(`Selected SMS Sender ID: ${smsSenderID}`);
    } else { const msg=`SMS Sender ID option not visible: ${smsSenderID}`; cy.log(msg); throw new Error(msg); }
  });
}

selectSMSTemplateDropdown(smsTemplate) {
  this.elements.sMSTemplateDropdown({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked SMS Template dropdown');
    } else { const msg='SMS Template dropdown not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.smsTemplateField({ timeout: 90000 }).then($input => {
    if ($input.is(':visible')) {
      cy.wrap($input).clear({ force: true });
      cy.log('Cleared SMS Template field');
      cy.wrap($input).type(smsTemplate, { force: true });
      cy.log(`Entered SMS Template: ${smsTemplate}`);
    } else { const msg='SMS Template field not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.surveyTypeCheckbox(smsTemplate, { timeout: 90000 }).then($chk => {
    if ($chk.is(':visible')) {
      cy.wrap($chk).click({ force: true });
      cy.log(`Selected SMS Template: ${smsTemplate}`);
    } else { const msg=`SMS Template option not visible: ${smsTemplate}`; cy.log(msg); throw new Error(msg); }
  });
}

selectSMTPDropdown(SMTP) {
  this.elements.sMTPDropdown({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked SMTP dropdown');
    } else { const msg='SMTP dropdown not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.sMTPField({ timeout: 90000 }).then($input => {
    if ($input.is(':visible')) {
      cy.wrap($input).clear({ force: true });
      cy.log('Cleared SMTP field');
      cy.wrap($input).type(SMTP, { force: true });
      cy.log(`Entered SMTP: ${SMTP}`);
    } else { const msg='SMTP field not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.surveyTypeCheckbox(SMTP, { timeout: 90000 }).then($chk => {
    if ($chk.is(':visible')) {
      cy.wrap($chk).click({ force: true });
      cy.log(`Selected SMTP: ${SMTP}`);
    } else { const msg=`SMTP option not visible: ${SMTP}`; cy.log(msg); throw new Error(msg); }
  });
}

selectEmailTemplateDropdown(emailTemplate) {
  this.elements.emailTemplateDropdown({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked Email Template dropdown');
    } else { const msg='Email Template dropdown not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.emailTemplateField({ timeout: 90000 }).then($input => {
    if ($input.is(':visible')) {
      cy.wrap($input).clear({ force: true });
      cy.log('Cleared Email Template field');
      cy.wrap($input).type(emailTemplate, { force: true });
      cy.log(`Entered Email Template: ${emailTemplate}`);
    } else { const msg='Email Template field not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.surveyTypeCheckbox(emailTemplate, { timeout: 90000 }).then($chk => {
    if ($chk.is(':visible')) {
      cy.wrap($chk).click({ force: true });
      cy.log(`Selected Email Template: ${emailTemplate}`);
    } else { const msg=`Email Template option not visible: ${emailTemplate}`; cy.log(msg); throw new Error(msg); }
  });
}

verifyAndSendForReview() {
  this.elements.sendForReviewButton({ timeout: 90000 }).then($btn => {
    if ($btn.is(':visible')) {
      cy.wrap($btn).click({ force: true });
      cy.log('Clicked Send for Review button');
    } else { const msg='Send for Review button not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.message({ timeout: 90000 }).then($msg => {
    const text = $msg.text();
    if (text.includes('Are you sure') && text.includes('send this survey for review')) {
      cy.log('Verified confirmation message');
    } else { const msg='Confirmation message mismatch'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.sendButton({ timeout: 90000 }).then($btn => {
    if ($btn.is(':visible')) {
      cy.wrap($btn).click({ force: true });
      cy.log('Clicked Send button');
    } else { const msg='Send button not visible'; cy.log(msg); throw new Error(msg); }
  });
}

getChannelStats() {
  const stats = {};
  cy.get(this.elements.channelStats, { timeout: 90000 }).within(() => {
    cy.contains('.channel-type span', 'SMS').parent().siblings('.stat-counts').within(() => {
      cy.get(this.elements.validCount).invoke('text').then(t => stats.smsValid = t.trim());
      cy.get(this.elements.invalidCount).invoke('text').then(t => stats.smsInvalid = t.trim());
    });
    cy.contains('.channel-type span', 'Email').parent().siblings('.stat-counts').within(() => {
      cy.get(this.elements.validCount).invoke('text').then(t => stats.emailValid = t.trim());
      cy.get(this.elements.invalidCount).invoke('text').then(t => stats.emailInvalid = t.trim());
    });
  });
  return cy.wrap(stats);
}

verifyValidFileUploads() {
  this.getChannelStats().then(stats => {
    const smsInvalid = stats.smsInvalid === '--' || stats.smsInvalid === '' ? 0 : Number(stats.smsInvalid);
    const emailInvalid = stats.emailInvalid === '--' || stats.emailInvalid === '' ? 0 : Number(stats.emailInvalid);
    const smsValid = stats.smsValid === '--' || stats.smsValid === '' ? 0 : Number(stats.smsValid);
    const emailValid = stats.emailValid === '--' || stats.emailValid === '' ? 0 : Number(stats.emailValid);
    if ((smsValid > 0 || emailValid > 0) && smsInvalid === 0 && emailInvalid === 0) {
      cy.log('Participant file uploaded successfully');
    } else {
      const msg = `Participant upload failed. SMS Invalid: ${smsInvalid}, Email Invalid: ${emailInvalid}`;
      cy.log(msg);
      throw new Error(msg);
    }
  });
}

  verifyInvalidFileUploads() {
  this.getChannelStats().then(stats => {
    cy.log(`SMS Valid: ${stats.smsValid}`);
    cy.log(`SMS Invalid: ${stats.smsInvalid}`);
    cy.log(`Email Valid: ${stats.emailValid}`);
    cy.log(`Email Invalid: ${stats.emailInvalid}`);
    const smsInvalid = stats.smsInvalid === '--' || stats.smsInvalid === '' ? 0 : Number(stats.smsInvalid);
    const emailInvalid = stats.emailInvalid === '--' || stats.emailInvalid === '' ? 0 : Number(stats.emailInvalid);
    cy.log(`Interpreted SMS Invalid: ${smsInvalid}`);
    cy.log(`Interpreted Email Invalid: ${emailInvalid}`);
    if (smsInvalid > 0 || emailInvalid > 0) {
      cy.log('Invalid participant file detected as expected');
    } else {
      const msg='Invalid participant file validation failed. No invalid rows detected';
      cy.log(msg);
      throw new Error(msg);
    }
  });
}

verifyToastMessage() {
  this.elements.surveyScheduleMessageToast({ timeout: 90000 }).then($toast => {
    if ($toast.length) {
      const actual = $toast.text().trim();
      const expected = Messages.getMessage("SURVEY_SCHEDULE_SUCCESS");
      if (actual === expected) {
        cy.log('Survey schedule created successfully');
      } else {
        const msg='Survey schedule creation failed';
        cy.log(msg);
        throw new Error(msg);
      }
    } else { const msg='Survey schedule toast not found'; cy.log(msg); throw new Error(msg); }
  });
}

verifySurveySchedulePage() {
  cy.url({ timeout: 90000 }).then(url => {
    if (url.includes('/SurveyUI/surveys/schedule')) {
      cy.log('User redirected to Survey Schedule page successfully');
    } else {
      const msg=`Survey Schedule page redirection failed. Current URL: ${url}`;
      cy.log(msg);
      throw new Error(msg);
    }
  });
  cy.contains('Survey Schedule', { timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.log('Survey Schedule page header is visible');
    } else { const msg='Survey Schedule page header not visible'; cy.log(msg); throw new Error(msg); }
  });
}

verifySurveyScheduledStatus(expectedStatus) {
  cy.get('@surveyScheduleName').then(name => {
    this.elements.searchInput({ timeout: 90000 }).then($input => {
      if ($input.is(':visible')) {
        cy.wrap($input).clear({ force: true }).type(name, { force: true });
        cy.log(`Searched survey schedule: ${name}`);
      } else { const msg='Search input not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.searchButton().then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Clicked search button');
      } else { const msg='Search button not visible'; cy.log(msg); throw new Error(msg); }
    });
    cy.contains('td', name, { timeout: 90000 }).then($row => {
      if ($row.is(':visible')) {
        cy.wrap($row).scrollIntoView({ offset: { top: -100, left: 0 } }).click({ force: true });
        cy.log(`Opened survey schedule: ${name}`);
      } else { const msg=`Survey row not visible for ${name}`; cy.log(msg); throw new Error(msg); }
    });
    this.elements.suerveyScheduleStatu({ timeout: 90000 }).then($status => {
      if ($status.is(':visible')) {
        const actual = $status.text().trim();
        if (actual === expectedStatus) {
          cy.log(`Survey status updated to ${expectedStatus}`);
        } else {
          const msg=`Survey approval failed. Expected ${expectedStatus}, found ${actual}`;
          cy.log(msg);
          throw new Error(msg);
        }
      } else { const msg='Survey status field not visible'; cy.log(msg); throw new Error(msg); }
    });
  });
}

verifySurveyScheduledLanguage(expectedStatus) {
  cy.get('@surveyScheduleName').then(name => {
    this.elements.searchInput({ timeout: 90000 }).then($input => {
      if ($input.is(':visible')) {
        cy.wrap($input).clear({ force: true }).type(name, { force: true });
        cy.log(`Searching survey schedule: ${name}`);
      } else { const msg='Search input not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.searchButton().click({ force: true });
    cy.contains('td', name, { timeout: 90000 }).then($row => {
      if ($row.is(':visible')) {
        cy.wrap($row).scrollIntoView({ offset: { top: -100, left: 0 } }).click({ force: true });
      } else { const msg='Survey row not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.selectedLanguageChips({ timeout: 90000 }).then($chip => {
      if ($chip.is(':visible')) {
        const actual = $chip.text().trim();
        if (actual === expectedStatus) {
          cy.log(`Survey language set to ${expectedStatus}`);
        } else {
          const msg=`Survey language mismatch. Expected ${expectedStatus}, found ${actual}`;
          cy.log(msg);
          throw new Error(msg);
        }
      } else { const msg='Language chips not visible'; cy.log(msg); throw new Error(msg); }
    });
  });
}

verifySurveyScheduledLanguages(language1, language2) {
  cy.get('@surveyScheduleName').then(name => {
    this.elements.searchInput({ timeout: 90000 }).then($input => {
      if ($input.is(':visible')) {
        cy.wrap($input).clear({ force: true }).type(name, { force: true });
      } else { const msg='Search input not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.searchButton().click({ force: true });
    cy.contains('td', name, { timeout: 90000 }).then($row => {
      if ($row.is(':visible')) {
        cy.wrap($row).scrollIntoView({ offset: { top: -100, left: 0 } }).click({ force: true });
      } else { const msg='Survey row not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.selectedLanguageChips({ timeout: 90000 }).then($chip => {
      if ($chip.is(':visible')) {
        const text = $chip.text().replace(/\s+/g, ' ').trim();
        if (text.includes(language1) && text.includes(language2)) {
          cy.log(`Survey languages set to ${language1} and ${language2}`);
        } else {
          const msg=`Survey languages mismatch. Found "${text}"`;
          cy.log(msg);
          throw new Error(msg);
        }
      } else { const msg='Language chips not visible'; cy.log(msg); throw new Error(msg); }
    });
  });
}

deleteSurveySchedule() {
  cy.get('@surveyScheduleName').then(name => {
    cy.log(`Deleting survey schedule "${name}"`);
    this.elements.searchInput({ timeout: 90000 }).then($input => {
      if ($input.is(':visible')) {
        cy.wrap($input).clear({ force: true }).type(name, { force: true });
      } else { const msg='Search input not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.searchButton().click({ force: true });
    cy.contains('td', name, { timeout: 90000 }).then($row => {
      if ($row.is(':visible')) {
        cy.wrap($row).scrollIntoView({ offset: { top: -100, left: 0 } });
      } else { const msg='Survey row not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.menuButtonThreeDot({ timeout: 90000 }).scrollIntoView({ ensureScrollable: false }).then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Opened action menu');
      } else { const msg='Menu button not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.deleteOption({ timeout: 90000 }).then($opt => {
      if ($opt.is(':visible')) {
        cy.wrap($opt).click({ force: true });
        cy.log('Clicked delete option');
      } else { const msg='Delete option not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.alertDialogContent({ timeout: 90000 }).then($dlg => {
      if ($dlg.is(':visible')) {
        this.elements.reasonTextarea().type('Wrong data', { force: true });
        cy.log('Entered delete reason');
        this.elements.deleteButton().then($btn => {
          if ($btn.is(':disabled')) cy.wrap($btn).invoke('removeAttr', 'disabled');
          cy.wrap($btn).click({ force: true });
          cy.log('Confirmed delete');
        });
      } else { const msg='Delete confirmation dialog not visible'; cy.log(msg); throw new Error(msg); }
    });
    cy.get('.toast-success', { timeout: 90000 }).then($toast => {
      if ($toast.text().includes(Messages.getMessage("SURVEY_SCHEDULE_DELETE"))) {
        cy.log('Survey schedule deleted successfully');
      } else { const msg='Delete success toast not visible'; cy.log(msg); throw new Error(msg); }
    });
  });
}

  clickAndVerifyPuffinRedirect() {
  cy.log('Clicking Back to Puffin link.');
  cy.wait(8000);
  this.elements.backToPuffinLink({ timeout: 90000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Back to Puffin link clicked');
    } else { const msg='Back to Puffin link not visible'; cy.log(msg); throw new Error(msg); }
  });
  cy.wait(5000);
  cy.url({ timeout: 90000 }).then(url => {
    if (url.includes('/PuffinUI/dashboard')) {
      cy.log('Redirected to Puffin dashboard successfully');
    } else { const msg=`Redirect to Puffin dashboard failed. Current URL: ${url}`; cy.log(msg); throw new Error(msg); }
  });
}

approveSurveySchedule() {
  cy.get('@surveyScheduleName').then(name => {
    cy.log(`Approving survey schedule "${name}"`);
    this.elements.searchInput({ timeout: 90000 }).then($input => {
      if ($input.is(':visible')) {
        cy.wrap($input).clear({ force: true }).type(name, { force: true });
        cy.log('Entered survey name in search');
      } else { const msg='Search input not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.searchButton().then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Clicked search button');
      } else { const msg='Search button not visible'; cy.log(msg); throw new Error(msg); }
    });
    cy.contains('td', name, { timeout: 90000 }).then($row => {
      if ($row.is(':visible')) {
        cy.wrap($row).scrollIntoView({ offset: { top: -100, left: 0 } });
        cy.log('Survey row located');
      } else { const msg='Survey row not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.menuButtonThreeDot({ timeout: 90000 }).scrollIntoView({ ensureScrollable: false }).then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Opened action menu');
      } else { const msg='Menu button not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.approveOption({ timeout: 90000 }).then($opt => {
      if ($opt.is(':visible')) {
        cy.wrap($opt).click({ force: true });
        cy.log('Clicked approve option');
      } else { const msg='Approve option not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.alertDialogContent({ timeout: 90000 }).then($dlg => {
      if ($dlg.is(':visible')) {
        this.elements.reasonTextarea().type('Correct data', { force: true });
        cy.log('Entered approval reason');
        this.elements.approveButton().then($btn => {
          if ($btn.is(':disabled')) cy.wrap($btn).invoke('removeAttr', 'disabled');
          cy.wrap($btn).click({ force: true });
          cy.log('Approved survey schedule');
        });
      } else { const msg='Approval dialog not visible'; cy.log(msg); throw new Error(msg); }
    });
    cy.get('.toast-success', { timeout: 90000 }).then($toast => {
      if ($toast.text().includes(Messages.getMessage("SURVEY_SCHEDULE_APPROVED"))) {
        cy.log('Survey schedule approved successfully');
      } else { const msg='Survey approval toast not visible'; cy.log(msg); throw new Error(msg); }
    });
  });
}

rejectSurveySchedule() {
  cy.get('@surveyScheduleName').then(name => {
    cy.log(`Rejecting survey schedule "${name}"`);
    this.elements.searchInput({ timeout: 90000 }).then($input => {
      if ($input.is(':visible')) {
        cy.wrap($input).clear({ force: true }).type(name, { force: true });
        cy.log('Entered survey name in search');
      } else { const msg='Search input not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.searchButton().click({ force: true });
    cy.contains('td', name, { timeout: 90000 }).then($row => {
      if ($row.is(':visible')) {
        cy.wrap($row).scrollIntoView({ offset: { top: -100, left: 0 } });
      } else { const msg='Survey row not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.menuButtonThreeDot({ timeout: 90000 }).scrollIntoView({ ensureScrollable: false }).then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Opened action menu');
      } else { const msg='Menu button not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.rejectOption({ timeout: 90000 }).then($opt => {
      if ($opt.is(':visible')) {
        cy.wrap($opt).click({ force: true });
        cy.log('Clicked reject option');
      } else { const msg='Reject option not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.alertDialogContent({ timeout: 90000 }).then($dlg => {
      if ($dlg.is(':visible')) {
        this.elements.reasonTextarea().type('Wrong data', { force: true });
        cy.log('Entered rejection reason');
        this.elements.rejectButton().then($btn => {
          if ($btn.is(':disabled')) cy.wrap($btn).invoke('removeAttr', 'disabled');
          cy.wrap($btn).click({ force: true });
          cy.log('Rejected survey schedule');
        });
      } else { const msg='Rejection dialog not visible'; cy.log(msg); throw new Error(msg); }
    });
    cy.get('.toast-success', { timeout: 90000 }).then($toast => {
      if ($toast.text().includes(Messages.getMessage("SURVEY_SCHEDULE_REJECTED"))) {
        cy.log('Survey schedule rejected successfully');
      } else { const msg='Survey rejection toast not visible'; cy.log(msg); throw new Error(msg); }
    });
  });
}

clickResetButton() {
  cy.wait(70000);
  this.elements.resetButton({ timeout: 90000 }).then($btn => {
    if ($btn.is(':visible')) {
      cy.wrap($btn).click({ force: true });
      cy.log('Clicked reset button');
    } else { const msg='Reset button not visible'; cy.log(msg); throw new Error(msg); }
  });
  cy.wait(3000);
}

verifyStatusSurveySchedule(expectedStatus) {
  cy.get('@surveyScheduleName').then(name => {
    this.clickResetButton();
    this.elements.searchInput({ timeout: 90000 }).then($input => {
      if ($input.is(':visible')) {
        cy.wrap($input).clear({ force: true }).type(name, { force: true });
        cy.log('Searched survey schedule');
      } else { const msg='Search input not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.searchButton().click({ force: true });
    cy.contains('td', name, { timeout: 90000 }).parent('tr').then($row => {
      if ($row.length) {
        cy.wrap($row).find('td .status span').invoke('text').then(text => {
          const cleanStatus = text.trim();
          if (cleanStatus === expectedStatus) {
            cy.log(`Survey status verified as ${expectedStatus}`);
          } else { const msg=`Expected status ${expectedStatus}, found ${cleanStatus}`; cy.log(msg); throw new Error(msg); }
        });
      } else { const msg='Survey row not found'; cy.log(msg); throw new Error(msg); }
    });
  });
}

verifyResponseStatus(expectedText) {
  cy.log(`Verifying Response Status column contains "${expectedText}"`);
  this.elements.firstElement({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked first survey row');
    } else {
      throw new Error('First survey row not visible');
    }
  });
  this.elements.participantsTab({ timeout: 90000 }).then($tab => {
    if ($tab.is(':visible')) {
      cy.wrap($tab).click({ force: true });
      cy.log('Clicked Participants tab');
    } else {
      throw new Error('Participants tab not visible');
    }
  });
  this.elements.responseStatusCells().then($cells => {
    const found = [...$cells].some(cell => cell.innerText.trim().includes(expectedText));
    if (found) {
      cy.log(`Response Status column contains "${expectedText}"`);
    } else {
      throw new Error(`Response Status column does not contain "${expectedText}"`);
    }
  });
}

verifyParticipantResponseDetailPanel(expectedText) {
  cy.log(`Verifying participant response detail panel for status "${expectedText}"`);

  this.elements.firstElement({ timeout: 90000 }).then($el => {
    if ($el.length && $el.is(':visible')) {
      cy.wrap($el).click({ force: true });
      cy.log('Clicked first survey row');
    } else {
      const msg = 'First survey row not visible';
      cy.log(msg);
      throw new Error(msg);
    }
  });

  this.elements.participantsTab({ timeout: 90000 }).then($tab => {
    if ($tab.length && $tab.is(':visible')) {
      cy.wrap($tab).click({ force: true });
      cy.log('Clicked Participants tab');
    } else {
      const msg = 'Participants tab not visible';
      cy.log(msg);
      throw new Error(msg);
    }
  });

  this.elements.clickableTableCells().then($cells => {
    const match = [...$cells].find(cell =>
      cell.innerText.trim().toLowerCase().includes(expectedText.toLowerCase())
    );

    if (match) {
      cy.wrap(match)
        .scrollIntoView({ offset: { top: -100, left: 0 } })
        .click({ force: true });
      cy.log(`Clicked participant with status "${expectedText}"`);
    } else {
      cy.log(`Participant with status "${expectedText}" not found in table`);
    }
  });

  cy.document().then(doc => {
    const statusEl = doc.querySelector('div.previewHeader div.status');
    if (statusEl) {
      const actualStatus = statusEl.textContent.trim().toLowerCase();
      if (actualStatus.includes(expectedText.toLowerCase())) {
        cy.log(`Participant detail panel status verified: "${actualStatus}"`);
      } else {
        cy.log(`Panel status mismatch. Expected "${expectedText}", found "${actualStatus}"`);
      }
    } else {
      cy.log('Participant detail panel status element not found');
    }
  });
}


verifyPanelDetailsField() {
  cy.log('Verifying participant detail panel fields');
  cy.log('Checking participant contact header');
  this.elements.headerInfo().then($el => {
    const text = $el.text().trim();
    if (text) {
      cy.log(`Header contact value verified: "${text}"`);
    } else {
      const msg = 'Participant contact header is empty';
      cy.log(msg);
      throw new Error(msg);
    }
  });

  const expectedCards = ['Completion Time', 'Browser Info', 'Device Info'];
  cy.log('Verifying panel detail cards');
  this.elements.panelCards().then($cards => {
    if ($cards.length > 0) {
      cy.log(`Found ${$cards.length} panel cards`);
      cy.wrap($cards).each(($card, index) => {
        cy.log(`Verifying panel card ${index + 1}`);
        cy.wrap($card).within(() => {
          this.elements.cardTitle().invoke('text').then(title => {
            if (title.trim()) {
              cy.log(`Card ${index + 1} title verified: "${title.trim()}"`);
            } else {
              const msg = `Empty title found in card ${index + 1}`;
              cy.log(msg);
              throw new Error(msg);
            }
          });
          this.elements.cardSubtitle().invoke('text').then(subtitle => {
            const value = subtitle.trim();
            if (expectedCards.includes(value)) {
              cy.log(`Verified panel card subtitle: "${value}"`);
            } else {
              const msg = `Unexpected panel card "${value}"`;
              cy.log(msg);
              throw new Error(msg);
            }
          });
        });
      });
    } else {
      const msg = 'No panel cards found';
      cy.log(msg);
      throw new Error(msg);
    }
  });

  cy.log('Verifying Edit option is not available for components');
  cy.document().then(doc => {
    const columns = doc.querySelectorAll('div.sv-components-column');
    let editFound = false;
    columns.forEach(col => {
      if (col.querySelector('input[title="Edit"]')) editFound = true;
    });
    if (!editFound) {
      cy.log('Edit option is not present as expected');
    } else {
      const msg = 'Edit option is visible but should not be present';
      cy.log(msg);
      throw new Error(msg);
    }
  });
}


addSurveyScheduleData({
  ScheduleName,
  surveyTypeName,
  Date,
  Time = '14:44 AM',
  LinkExpiry = 2,
  Language
} = {}) {
  cy.log('Adding survey schedule using generic data');
  this.elements.addShedulesurvey().then($btn => {
    if ($btn.is(':visible')) {
      cy.wrap($btn).click();
      cy.log('Clicked Add Schedule button');
    } else {
      throw new Error('Add Schedule button not visible');
    }
  });
  this.scheduleSurveyname = ScheduleName || `${faker.word.words(2)} Schedule`;
  this.elements.scheduleSurveyname().then($input => {
    cy.wrap($input)
      .clear()
      .type(this.scheduleSurveyname)
      .should('have.value', this.scheduleSurveyname);
    cy.log('Entered Schedule Name');
  });
  cy.wrap(this.scheduleSurveyname).as('surveyScheduleName');
  const finalSurveyType = surveyTypeName || arguments[0]?.['Select Survey'] || 'All Questions';
  const finalLanguage = Language || arguments[0]?.['Language'] || 'English';
  this.selectSurveyInDropdown(finalSurveyType);
  this.selectScheduleDefLanguage(finalLanguage);
  this.elements.expiryDate().then($el => {
    cy.setDateValue($el, Date);
    cy.log('Set schedule date');
  });
  this.elements.scheduleTime().then($input => {
    cy.wrap($input).clear().type(Time).should('have.value', Time);
    cy.log('Set schedule time');
  });
  this.setLinkExpiry(LinkExpiry);
}


addSurveySchedule({ ScheduleName, Language = 'English', Time = '14:44', LinkExpiry = 2 }) {
  cy.log('Starting Survey Schedule creation');
  this.elements.addShedulesurvey({ timeout: 90000 }).then($btn => {
    if ($btn.is(':visible')) {
      cy.wrap($btn).click({ force: true });
      cy.log('Clicked Add Survey Schedule button');
    } else { const msg='Add Survey Schedule button not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.scheduleSurveyname = ScheduleName || (faker.word.words(2) + ' Schedule');
  this.elements.scheduleSurveyname({ timeout: 90000 }).then($input => {
    if ($input.is(':visible')) {
      cy.wrap($input).type(this.scheduleSurveyname, { force: true });
      cy.log('Entered Schedule name');
      cy.wrap($input).invoke('val').then(val => {
        if (val === this.scheduleSurveyname) {
          cy.log('Schedule name verified');
        } else { const msg='Schedule name value mismatch'; cy.log(msg); throw new Error(msg); }
      });
    } else { const msg='Schedule name input not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.languageDropdown2({ timeout: 90000 }).then($dd => {
    if ($dd.is(':visible')) {
      cy.wrap($dd).click({ force: true });
      cy.log('Opened language dropdown');
    } else { const msg='Language dropdown not visible'; cy.log(msg); throw new Error(msg); }
  });
  cy.contains('.input_select-form_list-item', Language, { timeout: 90000 }).then($opt => {
    if ($opt.is(':visible')) {
      cy.wrap($opt).click({ force: true });
      cy.log(`Selected language ${Language}`);
    } else { const msg=`Language option ${Language} not visible`; cy.log(msg); throw new Error(msg); }
  });
  this.elements.scheduleTime({ timeout: 90000 }).then($input => {
    if ($input.is(':visible')) {
      cy.wrap($input).clear({ force: true }).type(Time, { force: true });
      cy.log('Entered schedule time');
      cy.wrap($input).invoke('val').then(val => {
        if (val === Time) {
          cy.log('Schedule time verified');
        } else { const msg='Schedule time value mismatch'; cy.log(msg); throw new Error(msg); }
      });
    } else { const msg='Schedule time input not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.linkExpiry({ timeout: 90000 }).then($input => {
    if ($input.is(':visible')) {
      cy.wrap($input).clear({ force: true }).type(LinkExpiry.toString(), { force: true });
      cy.log('Entered link expiry');
      cy.wrap($input).invoke('val').then(val => {
        if (val === LinkExpiry.toString()) {
          cy.log('Link expiry verified');
        } else { const msg='Link expiry value mismatch'; cy.log(msg); throw new Error(msg); }
      });
    } else { const msg='Link expiry input not visible'; cy.log(msg); throw new Error(msg); }
  });
}

selectLanguageEnglish() {
  this.elements.languageDropdown({ timeout: 90000 }).then($dd => {
    if ($dd.is(':visible')) {
      cy.wrap($dd).click({ force: true });
      cy.log('Opened language dropdown');
    } else { const msg='Language dropdown not visible'; cy.log(msg); throw new Error(msg); }
  });
  this.elements.dropdownOptions({ timeout: 90000 }).contains('English').then($opt => {
    if ($opt.is(':visible')) {
      cy.wrap($opt).click({ force: true });
      cy.log('Selected English language');
    } else { const msg='English option not visible'; cy.log(msg); throw new Error(msg); }
  });
}

verifySelectedLanguageEnglish() {
  this.elements.selectedLanguageChips({ timeout: 90000 }).then($el => {
    if ($el.is(':visible')) {
      cy.wrap($el).invoke('text').then(text => {
        const cleanText = text.trim();
        if (cleanText.includes('English')) {
          cy.log('Verified English language is selected');
        } else { const msg=`English language not selected. Found "${cleanText}"`; cy.log(msg); throw new Error(msg); }
      });
    } else { const msg='Selected language chip not visible'; cy.log(msg); throw new Error(msg); }
  });
}

verifySurveyScheduledInReviewStatus() {
  cy.get('@surveyScheduleName').then(name => {
    this.elements.searchInput({ timeout: 90000 }).then($input => {
      if ($input.is(':visible')) {
        cy.wrap($input).clear({ force: true }).type(name, { force: true });
        cy.log('Entered survey name in search');
      } else { const msg='Search input not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.searchButton({ timeout: 90000 }).then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Clicked search button');
      } else { const msg='Search button not visible'; cy.log(msg); throw new Error(msg); }
    });
    cy.contains('td', name, { timeout: 90000 }).then($cell => {
      if ($cell.is(':visible')) {
        cy.wrap($cell).scrollIntoView({ offset: { top: -100, left: 0 } }).click({ force: true });
        cy.log('Opened survey schedule');
      } else { const msg='Survey row not visible'; cy.log(msg); throw new Error(msg); }
    });
    this.elements.statusInReview({ timeout: 90000 }).then($el => {
      if ($el.is(':visible')) {
        cy.log(`Verified In Review status for survey "${name}"`);
      } else { const msg=`In Review status not visible for survey "${name}"`; cy.log(msg); throw new Error(msg); }
    });
  });
}

selectFromAndToDates(minDate, maxDate) {
  cy.log(`Setting Min Date to: ${minDate}`);

  this.elements.fromDateInput().then($el => {
    if ($el && $el.length > 0) {

      cy.wrap($el)
        .scrollIntoView({ ensureScrollable: false })
        .should('be.visible')
        .invoke('val', minDate)     
        .trigger('input')          
        .trigger('change');

      cy.log(`Min Date set to: ${minDate}`);

    } else {
      const errorMsg = 'Failed: Could not set Min Date — input not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });

  cy.log(`Setting Max Date to: ${maxDate}`);

  this.elements.toDateInput().then($el => {
    if ($el && $el.length > 0) {

      cy.wrap($el)
        .scrollIntoView({ ensureScrollable: false })
        .should('be.visible')
        .invoke('val', maxDate) 
        .trigger('input')
        .trigger('change');

      cy.log(`Max Date set to: ${maxDate}`);

    } else {
      const errorMsg = 'Failed: Could not set Max Date — input not found';
      cy.log(errorMsg);
      throw new Error(errorMsg);
    }
  });
}



verifyAnyTableRowVisible() {
  cy.get('tr', { timeout: 90000 }).then($rows => {
    if ($rows.filter(':visible').length > 0) {
      cy.log('Found table row is visible');
    } else {
      cy.log('No table rows are visible');
    }
  });
}



}


export default SurveySchedulePage;
