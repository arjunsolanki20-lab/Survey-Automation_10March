import { faker } from "@faker-js/faker";
import Messages from "./Messages";
import 'cypress-wait-until';

class DashboardPage {


  elements = {
    searchInput: () => cy.get('input[placeholder="Search for anything..."]', { timeout: 90000 }),
    searchButton: () => cy.get("button[title='Search']", { timeout: 90000 }),
    suerveyListStatus: () => cy.get('body > div > article > main > div > div:nth-child(1) > div > span', { timeout: 90000 }),
    menuButtonThreeDot: () => cy.get('button.kebab-menu.kebab-menu_kebab-menu-button', { timeout: 90000 }),
    approveOption: () => cy.contains('div.survey-action_kebab-menu-body-element_title', 'Approve', { timeout: 90000 }),
    alertDialogContent: () => cy.get('div.alertDialogContent', { timeout: 90000 }),
    reasonTextarea: () => cy.get('textarea.confirmation-dialog-body_textarea', { timeout: 90000 }),
    approveButton: () => cy.get('button.button_form-submit_main[title="Approve"]', { timeout: 90000 }),
    totalSurveyCount: () => cy.get('.count-details-container_total-surveys .count', { timeout: 90000 }),
    scheduledCount: () => cy.get('.count-details-container_scheduled .count', { timeout: 90000 }),
    scheduleSurveyname: () => cy.get('input[placeholder="Enter Schedule Name"]', { timeout: 90000 }),
    addShedulesurvey: () => cy.get('div[data-title="Add"]').should('be.visible', { timeout: 90000 }),
    selectSurveydropdown: () => cy.get('.input_select-form_inner-label').contains('Select survey', { timeout: 90000 }),
    searchInputVisible: () => cy.get('input[placeholder="Search"]:visible', { timeout: 90000 }),
    surveyTypeCheckbox: (surveyTypeName) => cy.contains('span.custom-select_checkbox-container', surveyTypeName, { timeout: 90000 }),
    selectedSurveyLabel: () => cy.get('.input_select-form_inner-label', { timeout: 90000 }),
    suerveyScheduleDefaultLangDropdown: () => cy.xpath("//div[contains(@class,'input_select-form_inner-label') and .//p[text()='Select default language']]", { timeout: 90000 }),
    dropdownOptions: () => cy.get('[class="input_select-form_option-container"] li', { timeout: 90000 }),
    expiryDate: () => cy.get('input[type="date"]', { timeout: 90000 }),
    scheduleTime: () => cy.get('input[name="scheduleTime"]', { timeout: 90000 }),
    linkExpiry: () => cy.get('input[name="linkExpiry"]', { timeout: 90000 }),
    uploadParticipantsLabel: () => cy.get('.custom-stepper-label', { timeout: 90000 }),
    pieChartLabels: () => cy.get('.recharts-layer.recharts-pie-labels text', { timeout: 90000 }),
    typeSelectorLabel: () => cy.xpath("(//div[@class='search-bar-d2_type-selector_label'])[1]", { timeout: 90000 }),
    filterOperatorOption: () => cy.get('.search-bar-d2_type-selector_option', { timeout: 90000 }),
    surveyMenuButton: () => cy.get('[class="nav-item false"] span', { timeout: 90000 }),
    surveydashboard: () => cy.contains("a.nav-item", "Survey Dashboard", { timeout: 90000 }),
    totalPageDropdown: () => cy.get("img[alt='Total Page']", { timeout: 90000 }),
    totalPageOptions: () => cy.get("div.custom-table-pages-dropdown-item", { timeout: 90000 }),
    surveySchedule: () => cy.contains("a.nav-item", "Survey Schedule", { timeout: 90000 }),
    activePieChart: () => cy.get('g.recharts-pie-sector path[name="Active"]', { timeout: 90000 }),
    completedPieChart: () => cy.get('g.recharts-pie-sector path[name="Completed"]', { timeout: 90000 }),
    pieChartFullSize: () => cy.get('g.recharts-pie', { timeout: 90000 }).eq(0),
    livePieChart: () => cy.get('g.recharts-pie-sector path[name="Live"]', { timeout: 90000 }),
    offlinePieChart: () => cy.get('g.recharts-pie-sector path[name="Offline"]', { timeout: 90000 }),
    backToPuffinLink: () => cy.contains('a', 'Back to Puffin', { timeout: 90000 }),
    questionByDataName: () => cy.get('div[data-name="question2"]', { timeout: 90000 }),
    itemValueWrappers: () => cy.get('div.svc-item-value-wrapper', { timeout: 90000 }),
    itemRemoveIcon: () => cy.get('[aria-label="Click to remove the item..."]', { timeout: 90000 }),
    questionTextEditor: () => cy.get('span.sv-string-editor', { timeout: 15000 }),
    selectQuestionType2Dropdown: () => cy.get('button.svc-survey-element-toolbar__item[title="Single-Line Input"]', { timeout: 90000 }),
    questionTypeDropdownButton: () => cy.get('.svc-survey-element-toolbar__item--with-text[title="Single-Line Input"]', { timeout: 90000 }),
    questionTypeOptions: () => cy.get('.sv-list__item-body', { timeout: 90000 }),
    sdCheckboxContainer: () => cy.get('.sd-selectbase', { timeout: 90000 }),
    addQuestionBtnAdditional: () => cy.get('.svc-page[data-sv-drop-target-page="page2"] .svc-element__add-new-question', { timeout: 90000 }),
    question1PlaceHolder: () => cy.xpath('//span[contains(@class,"svc-string-editor__content")]//span[@class="sv-string-editor" and @role="textbox"]', { timeout: 15000 }),
    addQuestionButton: () => cy.get('.svc-element__add-new-question.svc-btn', { timeout: 90000 }).eq(0),
    surveyTitle: () => cy.get('span[aria-label="Survey Title"]', { timeout: 90000 }),
    surveyTitleDescription: () => cy.get('span[contenteditable="true"][aria-label="Description"]', { timeout: 90000 }).eq(0),
    sendForReviewButton: () => cy.xpath("//button[@type='button' and contains(@class,'button_form-primary_button') and normalize-space(text())='Send For Review']", { timeout: 90000 }),
    container: () => cy.xpath("//div[contains(@class,'alertDialogContent')]", { timeout: 90000 }),
    continueEditingButton: () => cy.xpath("//button[@title='Continue Editing' and contains(@class,'button_form-submit_cancel')]", { timeout: 90000 }),
    sendButton: () => cy.xpath("//button[@title='Send' and contains(@class,'button_form-submit_main')]", { timeout: 90000 }),
    previewRadioOptionItem: () => cy.get('label.sd-selectbase__label span.sd-radio__decorator', { timeout: 90000 }),
    //nextButton: () => cy.get('input.sd-btn.sd-navigation__next-btn[title="Next"][value="Next"]', { timeout: 90000 }),
    completeButton: () => cy.get('input[title="Complete"]', { timeout: 90000 }),
    previewTab: () => cy.get('span.svc-tabbed-menu-item__text').contains('Preview', { timeout: 90000 }),
    surveyListMessageToast: () => cy.get('.Toastify__toast-body, .toast, [class*="toast"]', { timeout: 90000 }),
    languageDropdown: () => cy.get('.input_select-form_Languages', { timeout: 90000 }),
    selectedLanguageChips: () => cy.get('.multiselect_label-chips', { timeout: 90000 }),
    smsSenderInput: () => cy.xpath("/html/body/div/article/main/div/form/div[1]/div/div[3]/div[1]/div[1]/div/input", { timeout: 90000 }),
    smtpInput: () => cy.xpath("/html/body/div/article/main/div/form/div[1]/div/div[3]/div[2]/div[1]/div/input", { timeout: 90000 }),
    nextButton: () => cy.xpath("//button[normalize-space()='Next']", { timeout: 90000 }),
    nextButtonXpath: () => cy.xpath("//button[normalize-space()='Next']", { timeout: 90000 }),
    sMSSenderIdDropdown: () => cy.xpath("(//div[contains(@class,'input_select-form_inner-label') and .//p[text()='Select SMS Sender Id']])[1]", { timeout: 90000 }),
    smsSenderIDField: () => cy.xpath('(//input[@placeholder="Search"])[2]', { timeout: 90000 }),
    sMSTemplateDropdown: () => cy.xpath("(//div[contains(@class,'input_select-form_inner-label') and .//p[text()='Select SMS Template']])[1]", { timeout: 90000 }),
    smsTemplateField: () => cy.xpath('(//input[@placeholder="Search"])[3]', { timeout: 90000 }),
    sMTPDropdown: () => cy.xpath("(//div[contains(@class,'input_select-form_inner-label') and .//p[text()='Select SMTP']])[1]", { timeout: 90000 }),
    sMTPField: () => cy.xpath('(//input[@placeholder="Search"])[4]', { timeout: 90000 }),
    emailTemplateDropdown: () => cy.xpath("(//div[contains(@class,'input_select-form_inner-label') and .//p[text()='Select Email Template']])[1]", { timeout: 90000 }),
    emailTemplateField: () => cy.xpath('(//input[@placeholder="Search"])[5]', { timeout: 90000 }),
    message: () => cy.xpath("//div[contains(@class,'alertDialogBody')]//p"),
    nextBtn: () => cy.xpath("//button[normalize-space()='Next']", { timeout: 90000 }),
    nextButtonOption: () => cy.get('input.sd-btn.sd-navigation__next-btn[title="Next"][value="Next"]', { timeout: 90000 }),
    surveyScheduleMessageToast: () => cy.get('.Toastify__toast-body, .toast, [class*="toast"]', { timeout: 90000 }),
    latestUpdates: () => cy.get('.feed-element-container', { timeout: 90000 }),
    latestUpdateTitle: () => cy.get('.feed-element-title', { timeout: 90000 }),
    latestUpdateContent: () => cy.get('.feed-element-content', { timeout: 90000 }),
    latestUpdateCountInfo: () => cy.get('.feed-count-information', { timeout: 90000 }),
    latestUpdateParticipantCount: () => cy.get('.participant-count', { timeout: 90000 }),
    barChartBars: () => cy.get('path.recharts-rectangle', { timeout: 90000 }),
    channelStats: '.channel-stats',
    validCount: '.counts_valid-count',
    invalidCount: '.counts_invalid-count',
  }
  fileUploadInput = '#fileUpload';
  channelStats = '.channel-stats';

  verifySurveyListStatus(expectedStatus) {
    cy.log(`Verifying survey list status as "${expectedStatus}"`);
    cy.get('@createdSurveyName').then(name => {
      cy.log(`Searching survey "${name}"`);
      this.elements.searchInput().then($input => {
        if ($input.is(':visible')) {
          cy.wrap($input).clear({ force: true }).type(name, { force: true });
          cy.log('Entered survey name in search');
        } else { const msg = 'Search input not visible'; cy.log(msg); throw new Error(msg); }
      });
      this.elements.searchButton().then($btn => {
        if ($btn.is(':visible')) {
          cy.wrap($btn).click({ force: true });
          cy.log('Clicked search button');
        } else { const msg = 'Search button not visible'; cy.log(msg); throw new Error(msg); }
      });
      cy.contains('td', name, { timeout: 90000 }).then($row => {
        if ($row.is(':visible')) {
          cy.wrap($row).scrollIntoView({ offset: { top: -100, left: 0 } }).click({ force: true });
          cy.log('Opened survey row');
        } else { const msg = 'Survey row not found'; cy.log(msg); throw new Error(msg); }
      });
      this.elements.suerveyListStatus().then($status => {
        if ($status.length) {
          const actual = $status.text().trim();
          if (actual === expectedStatus) {
            cy.log(`Survey status verified as "${actual}"`);
          } else {
            const msg = `Survey status mismatch. Expected "${expectedStatus}", found "${actual}"`;
            cy.log(msg);
          }
        } else {
          const msg = 'Survey status element not found';
          cy.log(msg);
        }
      });
    });
  }

  verifySurveyListInChecker() {
    cy.log('Verifying survey list in checker');
    cy.get('@createdSurveyName').then(name => {
      cy.log(`Searching survey "${name}"`);
      this.elements.searchInput().then($input => {
        if ($input.is(':visible')) {
          cy.wrap($input).clear({ force: true }).type(name, { force: true });
          cy.log('Entered survey name in search');
        } else { const msg = 'Search input not visible'; cy.log(msg); throw new Error(msg); }
      });
      this.elements.searchButton().then($btn => {
        if ($btn.is(':visible')) {
          cy.wrap($btn).click({ force: true });
          cy.log('Clicked search button');
        } else { const msg = 'Search button not visible'; cy.log(msg); throw new Error(msg); }
      });
      cy.contains('td', name, { timeout: 90000 }).then($row => {
        if ($row.is(':visible')) {
          cy.wrap($row).scrollIntoView({ offset: { top: -100, left: 0 } }).click({ force: true });
          cy.log('Survey row opened successfully');
        } else { const msg = 'Survey row not found'; cy.log(msg); throw new Error(msg); }
      });
    });
  }

  approveSurveyList() {
    cy.log('Starting approveSurveyList');
    cy.get('@createdSurveyName').then(name => {
      cy.log(`Searching survey: ${name}`);
      this.elements.searchInput().then($input => {
        if ($input.is(':visible')) {
          cy.wrap($input).clear({ force: true }).type(name, { force: true });
          cy.log('Survey name entered');
        } else {
          const msg = 'Search input not visible';
          cy.log(msg);
          throw new Error(msg);
        }
      });
      this.elements.searchButton().click();
      cy.log('Search button clicked');
      cy.contains('td', name, { timeout: 90000 }).then($row => {
        if ($row.is(':visible')) {
          cy.wrap($row).scrollIntoView({ offset: { top: -100, left: 0 } });
          cy.log('Survey row found');
        } else {
          const msg = 'Survey row not found';
          cy.log(msg);
          throw new Error(msg);
        }
      });
      this.elements.menuButtonThreeDot().scrollIntoView({ ensureScrollable: false }).then($menu => {
        if ($menu.is(':visible')) {
          cy.wrap($menu).scrollIntoView({ block: 'center', inline: 'center' }).click({ force: true });
          cy.log('Three dot menu clicked');
        } else {
          const msg = 'Three dot menu not visible';
          cy.log(msg);
          throw new Error(msg);
        }
      });
      this.elements.approveOption().then($opt => {
        if ($opt.is(':visible')) {
          cy.wrap($opt).click({ force: true });
          cy.log('Approve option clicked');
        } else {
          const msg = 'Approve option not visible';
          cy.log(msg);
          throw new Error(msg);
        }
      });
      this.elements.alertDialogContent().then($dialog => {
        if ($dialog.is(':visible')) {
          cy.log('Approval dialog visible');
          this.elements.reasonTextarea().type('Correct data', { force: true });
          cy.log('Approval reason entered');
          this.elements.approveButton().then($btn => {
            if ($btn.is(':disabled')) {
              cy.wrap($btn).invoke('removeAttr', 'disabled');
              cy.log('Approve button enabled');
            }
            cy.wrap($btn).click({ force: true });
            cy.log('Approve button clicked');
          });
        } else {
          const msg = 'Approval dialog not visible';
          cy.log(msg);
          throw new Error(msg);
        }
      });
      cy.get('.toast-success', { timeout: 90000 }).then($toast => {
        if ($toast.text().includes(Messages.getMessage('SURVEY_LIST_APPROVED'))) {
          cy.log('Survey approved successfully');
        } else {
          const msg = 'Approval success toast not found';
          cy.log(msg);
          throw new Error(msg);
        }
      });
    });
  }

  totalSurveyDashboardCount() {
  cy.log('Fetching total survey dashboard count');
  this.elements.totalSurveyCount({ timeout: 90000 }).should('be.visible').invoke('text').then(text => {
      cy.log(`Raw text from UI: ${text}`);
      const totalSurvey = parseInt(text.replace(/\D/g, ''), 10);
      expect(totalSurvey, 'Total survey count should be a number').to.not.be.NaN;
      cy.log(`Total surveys count: ${totalSurvey}`);
      cy.wrap(totalSurvey).as('totalSurveys');
    });
}

verifyTotalSurveyCountIncrementedByOne() {
  cy.log('Verifying total survey count increment by one');
  cy.get('@totalSurveys').should('be.a', 'number').then(originalCount => {
    const expectedCount = originalCount + 1;
    cy.log(`Original count: ${originalCount}`);
    cy.log(`Expected count: ${expectedCount}`);
    this.elements.totalSurveyCount({ timeout: 90000 }).should('be.visible').invoke('text').then(text => {
        cy.log(`Raw UI text: ${text}`);
        const actualCount = parseInt(text.replace(/\D/g, ''), 10);
        cy.log(`Actual count: ${actualCount}`);
        expect(actualCount).to.equal(expectedCount);
        cy.wrap(actualCount).as('incrementedTotalSurveys');
      });
  });
}


  totalSurveyScheduleDashboardCount() {
    cy.log('Fetching scheduled survey dashboard count');
    this.elements.scheduledCount().then($el => {
      if ($el.is(':visible')) {
        const scheduled = Number($el.text().trim());
        cy.log(`Scheduled surveys count: ${scheduled}`);
        cy.wrap(scheduled).as('scheduled');
      } else {
        const msg = 'Scheduled survey count not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  totalSurveyScheduleActiveDashboardCount() {
    cy.log('Fetching active scheduled surveys count');
    this.elements.pieChartLabels().then($texts => {
      if ($texts.length) {
        const active = Number($texts.eq(0).text().trim());
        cy.log(`Active scheduled surveys count: ${active}`);
        cy.wrap(active).as('scheduleActiveSurveys');
      } else {
        const msg = 'Pie chart labels not found';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  selectSurveyInDropdownE2E(surveyTypeName) {
    cy.log('Opening survey dropdown');
    this.elements.selectSurveydropdown().then($dd => {
      if ($dd.is(':visible')) {
        cy.wrap($dd).click();
        cy.log('Survey dropdown clicked');
      } else {
        const msg = 'Survey dropdown not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.searchInputVisible().then($input => {
      if ($input.is(':visible')) {
        cy.wrap($input).clear({ force: true }).type(surveyTypeName, { force: true });
        cy.log(`Survey type entered: ${surveyTypeName}`);
      } else {
        const msg = 'Survey search input not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.surveyTypeCheckbox(surveyTypeName).then($chk => {
      if ($chk.is(':visible')) {
        cy.wrap($chk).click({ force: true });
        cy.log('Survey type checkbox selected');
      } else {
        const msg = 'Survey type checkbox not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.selectedSurveyLabel().then($label => {
      if ($label.text().includes(surveyTypeName)) {
        cy.log('Survey type selection verified');
      } else {
        const msg = 'Selected survey label mismatch';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  selectScheduleDefLanguageE2E(Language) {
    cy.log('Opening default language dropdown');
    this.elements.suerveyScheduleDefaultLangDropdown().then($dd => {
      if ($dd.is(':visible')) {
        cy.wrap($dd).click();
        cy.log('Default language dropdown clicked');
      } else {
        const msg = 'Default language dropdown not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.dropdownOptions().contains(Language).then($opt => {
      if ($opt.is(':visible')) {
        cy.wrap($opt).click({ force: true });
        cy.log(`Language selected: ${Language}`);
      } else {
        const msg = `Language option not visible: ${Language}`;
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  setLinkExpiryE2E(LinkExpiry) {
    cy.log('Setting link expiry');
    this.elements.linkExpiry().then($input => {
      if ($input.is(':visible')) {
        cy.wrap($input).clear().type(LinkExpiry.toString());
        cy.log(`Link expiry entered: ${LinkExpiry}`);
      } else {
        const msg = 'Link expiry input not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    cy.contains('button', 'Next').then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Next button clicked');
      } else {
        const msg = 'Next button not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.uploadParticipantsLabel().eq(1).then($lbl => {
      if ($lbl.text() === 'Add Channel') {
        cy.log('Add Channel label verified');
      } else {
        const msg = 'Add Channel label mismatch';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  addSurveyScheduleE2EFlow({ ScheduleName, surveyTypeName, "Date": Date, Time = '14:44 AM', LinkExpiry = 1, Language } = {}) {
    cy.log('Starting add survey schedule flow');
    this.elements.addShedulesurvey().then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click();
        cy.log('Add schedule button clicked');
      } else {
        const msg = 'Add schedule button not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.scheduleSurveyname = ScheduleName || (faker.word.words(2) + ' Schedule');
    this.elements.scheduleSurveyname().then($input => {
      if ($input.is(':visible')) {
        cy.wrap($input).type(this.scheduleSurveyname);
        cy.log(`Schedule name entered: ${this.scheduleSurveyname}`);
      } else {
        const msg = 'Schedule name input not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    cy.wrap(this.scheduleSurveyname).as('surveyScheduleName');
    cy.get('@surveyName').then(expectedSurveyName => {
      const finalSurveyType = expectedSurveyName || surveyTypeName || 'All Questions';
      const finalLanguage = Language || 'English';
      cy.log(`Final survey type: ${finalSurveyType}`);
      cy.log(`Final language: ${finalLanguage}`);
      this.selectSurveyInDropdownE2E(finalSurveyType);
      this.elements.expiryDate().then($el => {
        if ($el.is(':visible')) {
          cy.setDateValue($el, Date);
          cy.log(`Expiry date set: ${Date}`);
        } else {
          const msg = 'Expiry date input not visible';
          cy.log(msg);
          throw new Error(msg);
        }
      });
      this.elements.scheduleTime().then($time => {
        if ($time.is(':visible')) {
          cy.wrap($time).clear().type(Time);
          cy.log(`Schedule time entered: ${Time}`);
        } else {
          const msg = 'Schedule time input not visible';
          cy.log(msg);
          throw new Error(msg);
        }
      });
      this.setLinkExpiryE2E(LinkExpiry);
    });
  }

  verifyTotalSurveyScheduleCountIncrementedByOne() {
    cy.log('Verifying scheduled survey count increment');
    cy.get('@scheduled').then(originalCount => {
      const expectedCount = originalCount + 1;
      cy.log(`Original count: ${originalCount}`);
      cy.log(`Expected count: ${expectedCount}`);
      this.elements.scheduledCount().then($el => {
        if ($el.is(':visible')) {
          const actualCount = Number($el.text().trim());
          cy.log(`Actual count: ${actualCount}`);
          if (actualCount === expectedCount) {
            cy.log('Scheduled survey count increment verified');
            cy.wrap(actualCount).as('incremenetedTotalSurveySchedule');
          } else {
            const msg = `Scheduled count mismatch. Expected ${expectedCount} but found ${actualCount}`;
            cy.log(msg);
            throw new Error(msg);
          }
        } else {
          const msg = 'Scheduled count element not visible';
          cy.log(msg);
          throw new Error(msg);
        }
      });
    });
  }

  verifyTotalSurveyScheduleActive() {
    cy.log('Verifying active survey schedule count between Maker and Checker');
    cy.get('@scheduleActiveSurveys').then(dashboardActive => {
      this.elements.pieChartLabels().then($el => {
        const checkerActive = Number($el.eq(0).text().trim());
        cy.log('Maker Active Count: ' + dashboardActive);
        cy.log('Checker Active Count: ' + checkerActive);
        if (checkerActive === dashboardActive) {
          cy.log('Active survey schedule count verified successfully');
        } else {
          const msg = `Active count mismatch. Maker ${dashboardActive} Checker ${checkerActive}`;
          cy.log(msg);
          throw new Error(msg);
        }
      });
    });
  }

  verifyTotalSurveyScheduleActiveCount(value) {
    cy.log('Filtering survey schedule by active status');
    this.elements.searchInput().then($el => {
      if ($el.is(':visible')) {
        cy.wrap($el).clear().type(value);
        cy.log('Search value entered: ' + value);
      } else {
        const msg = 'Search input not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.typeSelectorLabel().realHover({ timeout: 90000 });
    this.elements.filterOperatorOption().then($opt => {
      if ($opt.is(':visible')) {
        cy.wrap($opt).contains('Status').click({ force: true });
        cy.log('Status filter applied');
      } else {
        const msg = 'Status filter option not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.searchButton().click({ force: true });
    cy.log('Search button clicked');
    this.elements.totalPageDropdown().realHover({ timeout: 90000 });
    this.elements.totalPageOptions().then($opts => {
      if ($opts.length) {
        cy.wrap($opts).contains('1000').click({ force: true });
        cy.log('Pagination set to 1000');
      } else {
        const msg = 'Pagination options not found';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    cy.get('tr').then($rows => {
      const surveySet = new Set();
      $rows.each((i, row) => {
        const cell = row.querySelectorAll('td.table-cell-max-width.cursor-pointer')[1];
        if (cell && cell.innerText.trim()) surveySet.add(cell.innerText.trim());
      });
      const tableCount = surveySet.size;
      cy.log('Active survey names from table: ' + tableCount);
      cy.wrap(tableCount).as('activeSurveyScheduleCount');
    });
    cy.get('a.nav-item').contains('span', 'Survey').click({ force: true });
    cy.log('Navigated to Survey dashboard');
    this.elements.surveydashboard().click({ force: true });
    cy.contains('a.second-link', 'Survey Dashboard').should('be.visible');
    cy.wait(15000);
    this.elements.pieChartLabels().then($texts => {
      const dashboardCount = Number($texts.eq(0).text().trim());
      cy.log('Dashboard Active Survey Count: ' + dashboardCount);
      cy.wrap(dashboardCount).as('activeScheduleDashboard');
    });
    cy.get('@activeSurveyScheduleCount').then(tableCount => {
      cy.get('@activeScheduleDashboard').then(dashboardCount => {
        if (tableCount === dashboardCount) {
          cy.log(`Active count matched: ${tableCount}`);
        } else {
          const msg = `Active count mismatch. Table ${tableCount} Dashboard ${dashboardCount}`;
          cy.log(msg);
          throw new Error(msg);
        }
      });
    });
  }

  verifyTotalSurveyScheduleCompletedCount(value) {
    cy.log('Verifying completed survey schedule count');
    cy.get('a.nav-item').contains('span', 'Survey').click({ force: true });
    this.elements.surveySchedule().click({ force: true });
    cy.contains('a.second-link', 'Survey Schedule').should('be.visible');
    this.elements.searchInput().clear().type(value);
    cy.log('Completed status filter entered');
    this.elements.typeSelectorLabel().realHover({ timeout: 90000 });
    this.elements.filterOperatorOption().contains('Status').click({ force: true });
    this.elements.searchButton().click({ force: true });
    this.elements.totalPageDropdown().realHover({ timeout: 90000 });
    this.elements.totalPageOptions().then($opts => {
      if ($opts.length) {
        cy.wrap($opts).contains('1000').click({ force: true });
        cy.log('Pagination set to 1000');
      } else {
        const msg = 'Pagination options missing';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    cy.get('tr').then($rows => {
      const surveySet = new Set();
      $rows.each((i, row) => {
        const cell = row.querySelectorAll('td.table-cell-max-width.cursor-pointer')[1];
        if (cell && cell.innerText.trim()) surveySet.add(cell.innerText.trim());
      });
      const completedCount = surveySet.size;
      cy.log('Completed survey count from table: ' + completedCount);
      cy.wrap(completedCount).as('completedSurveyScheduleCount');
    });
    cy.get('a.nav-item span').contains('Survey').click({ force: true });
    this.elements.surveydashboard().click({ force: true });
    cy.contains('a.second-link', 'Survey Dashboard').should('be.visible');
    cy.wait(15000);
    this.elements.pieChartLabels().then($texts => {
      const completedDashboard = Number($texts.eq(1).text().trim());
      cy.log('Dashboard Completed Survey Count: ' + completedDashboard);
      cy.wrap(completedDashboard).as('scheduleCompletedSurveys');
    });
    cy.get('@completedSurveyScheduleCount').then(actualCount => {
    cy.get('@scheduleCompletedSurveys').then(expectedCount => {
    if (actualCount === expectedCount) {
      cy.log(`Completed count matched | Expected: ${expectedCount}, Actual: ${actualCount}`);
    } else {
      const msg = `Completed count mismatch | Expected (Dashboard): ${expectedCount}, Actual (Table): ${actualCount}`;
      cy.log(msg);
      throw new Error(msg);
    }
  });
});

  }

  navigateToSurveyDashboard() {
    cy.log('Navigating to Survey Dashboard');
    this.elements.surveyMenuButton({ timeout: 90000 }).eq(7).then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).scrollIntoView().click();
        cy.log('Survey menu clicked');
      } else {
        const msg = 'Survey menu button not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.surveydashboard({ timeout: 90000 }).then($dash => {
      if ($dash.is(':visible')) {
        cy.wrap($dash).click();
        cy.log('Survey Dashboard clicked');
      } else {
        const msg = 'Survey Dashboard option not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    cy.contains('a.second-link', 'Survey Dashboard', { timeout: 90000 }).then($link => {
      if ($link.is(':visible')) {
        cy.log('Survey Dashboard page loaded');
      } else {
        const msg = 'Survey Dashboard page not loaded';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  verifyPuffinRedirect() {
    cy.log('Verifying Puffin redirect');
    cy.wait(8000);
    this.elements.backToPuffinLink().scrollIntoView({ ensureScrollable: false }).then($link => {
      if ($link.is(':visible')) {
        cy.wrap($link).click();
        cy.log('Back to Puffin link clicked');
      } else {
        const msg = 'Back to Puffin link not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    cy.wait(5000);
    cy.url({ timeout: 90000 }).then(url => {
      if (url.includes('/PuffinUI/dashboard')) {
        cy.log('Redirected to Puffin dashboard successfully');
      } else {
        const msg = 'Puffin redirect failed';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  captureCheckboxNumItemsNames2() {
    cy.log('Capturing checkbox item names for Question 2');
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

  enterQuestionNum2() {
    cy.log('Entering text for Question 2');
    const titleWord = faker.word.noun();
    const questionText2 = `How do you experience about ${titleWord}`;
    this.elements.questionTextEditor().then($els => {
      const match = [...$els].find(el => el.textContent.trim() === 'question2');
      if (match) {
        cy.wrap(match).scrollIntoView({ ensureScrollable: false }).click({ force: true }).clear({ force: true }).type(questionText2, { force: true });
        cy.log('Question 2 text entered');
        cy.wrap(questionText2).as('enteredQuestion2');
      } else {
        const msg = '"question2" span not found';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  captureCheckboxNumItemsNames() {
    cy.log('Capturing checkbox item names');
    this.elements.sdCheckboxContainer().then($container => {
      if ($container.is(':visible')) {
        const enteredTexts = [];
        this.elements.itemValueWrappers().each(($wrapper, index) => {
          const $editable = $wrapper.find('.sv-string-editor[contenteditable="true"]');
          if ($editable.length) {
            const randomText = faker.string.alpha({ length: 5, casing: 'upper' });
            cy.wrap($editable).click({ force: true }).clear({ force: true }).type(randomText, { force: true });
            enteredTexts.push(randomText);
            cy.log(`Checkbox item ${index + 1} updated with "${randomText}"`);
          }
        }).then(() => {
          if (enteredTexts.length) {
            cy.log(`Total checkbox items updated: ${enteredTexts.length}`);
            cy.wrap(enteredTexts).as('enteredCheckboxTexts');
          } else {
            const msg = 'No editable checkbox items found';
            cy.log(msg);
            throw new Error(msg);
          }
        });
      } else {
        const msg = 'Checkbox container not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  enterQuestionNum1() {
    cy.log('Entering Question 1 text');
    const titleWord = faker.word.noun();
    const questionText = `How do you experience about ${titleWord}`;
    this.elements.questionTextEditor().then($els => {
      const match = [...$els].find(el => el.textContent.trim() === 'question1');
      if (match) {
        cy.wrap(match).scrollIntoView({ ensureScrollable: false }).click({ force: true }).clear({ force: true }).type(questionText, { force: true });
        cy.log('Question 1 text entered using primary selector');
        cy.wrap(questionText).as('enteredQuestion1');
      } else {
        const msg = 'Question 1 placeholder not found';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  addPage1MultipleQuestionsRadioButton() {
    cy.log('Adding Page 1 with multiple radio button questions');
    this.elements.addQuestionButton({ timeout: 90000 }).scrollIntoView({ ensureScrollable: false }).then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).scrollIntoView({ ensureScrollable: false }).click({ force: true });
        cy.log('Add Question button clicked');
      } else {
        const msg = 'Add Question button not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.surveyTitle = faker.word.words(2) + ' Title';
    this.elements.surveyTitle({ timeout: 90000 }).scrollIntoView({ ensureScrollable: false }).then($el => {
      if ($el.is(':visible')) { cy.wrap($el).clear().type(this.surveyTitle); cy.log(`Survey Title entered: ${this.surveyTitle}`); }
      else { const errorMsg = 'Survey Title input not visible'; cy.log(errorMsg); throw new Error(errorMsg); }
    });
    this.elements.surveyTitleDescription().type('Sample survey description'); cy.log('  Survey description entered');
    this.enterQuestionNum1();
    this.elements.questionTypeDropdownButton().then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Question type dropdown opened');
      } else {
        const msg = 'Question type dropdown not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.questionTypeOptions().contains('Radio Button Group').then($opt => {
      if ($opt.is(':visible')) {
        cy.wrap($opt).click({ force: true });
        cy.log('Radio Button Group selected');
      } else {
        const msg = 'Radio Button Group option not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.captureCheckboxNumItemsNames();
    this.elements.addQuestionBtnAdditional({ timeout: 90000 }).scrollIntoView({ ensureScrollable: false }).then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Additional question added');
      } else {
        const msg = 'Add additional question button not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.enterQuestionNum2();
    this.elements.questionTypeDropdownButton().then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Second question type dropdown opened');
      } else {
        const msg = 'Second question type dropdown not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.questionTypeOptions().contains('Radio Button Group').then($opt => {
      if ($opt.is(':visible')) {
        cy.wrap($opt).click({ force: true });
        cy.log('Second Radio Button Group selected');
      } else {
        const msg = 'Second Radio Button Group option not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.captureCheckboxNumItemsNames2();
  }

  previewTabBtnClick() {
    cy.log('Clicking Preview tab');
    this.elements.previewTab({ timeout: 90000 }).then($tab => {
      if ($tab.is(':visible')) {
        cy.wrap($tab).click({ force: true });
        cy.log('Preview tab clicked');
      } else {
        const msg = 'Preview tab not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  verifyNextAndCompalteProcess() {
    cy.log('Completing survey preview flow');
    this.elements.previewRadioOptionItem().then($opt => {
      if ($opt.length) {
        cy.wrap($opt.eq(0)).click({ force: true });
        cy.log('Radio option selected');
      } else {
        const msg = 'Preview radio options not found';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.nextButtonOption().scrollIntoView({ ensureScrollable: false }).then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Next button clicked');
      } else {
        const msg = 'Next button not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.completeButton().scrollIntoView({ ensureScrollable: false }).then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Complete button clicked');
      } else {
        const msg = 'Complete button not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  verifySendForReviewSurveyList() {
    cy.log('Sending survey for review');
    this.elements.sendForReviewButton().then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Send for Review button clicked');
      } else {
        const msg = 'Send for Review button not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.container().then($container => {
      const text = $container.text();
      if (text.includes('Send For Review')) {
        cy.log('Review confirmation dialog visible');
      } else {
        const msg = 'Send For Review confirmation not displayed';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.sendButton().then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Survey sent for review');
      } else {
        const msg = 'Send button not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  verifyToastSuccessMessageSurveyList() {
    cy.log('Verifying success toast message');
    this.elements.surveyListMessageToast().then($toast => {
      if ($toast.is(':visible')) {
        cy.log('Survey success toast displayed');
      } else {
        const msg = 'Survey success toast not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  addSurveyScheduleCommentMessage({ smsSenderID = 'InfoText', smsTemplate = 'FCC SMS Valid En-Ar', SMTP = 'SMTP NBK', emailTemplate = 'SCT Email Valid En-Ar' } = {}) {
    cy.log('Adding survey schedule communication settings');
    this.elements.smsSenderInput().then($el => {
      if ($el.is(':visible')) {
        cy.wrap($el).click({ force: true });
        cy.log('SMS sender dropdown opened');
        this.selectSMSSenderIdDropdownOption(smsSenderID);
        this.selectSMSTemplateDropdownOption(smsTemplate);
      } else {
        const msg = 'SMS sender input not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.smtpInput().then($el => {
      if ($el.is(':visible')) {
        cy.wrap($el).click({ force: true });
        cy.log('SMTP dropdown opened');
        this.selectSMTPDropdownOption(SMTP);
        this.selectEmailTemplateDropdownOption(emailTemplate);
      } else {
        const msg = 'SMTP input not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.nextBtn().then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Next button clicked after communication setup');
      } else {
        const msg = 'Next button not visible in communication setup';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  selectSMSSenderIdDropdownOption(smsSenderID) {
    cy.log(`Selecting SMS Sender ID: ${smsSenderID}`);
    this.elements.sMSSenderIdDropdown().then($dd => {
      if ($dd.is(':visible')) {
        cy.wrap($dd).click({ force: true });
        cy.log('SMS Sender ID dropdown opened');
      } else {
        const msg = 'SMS Sender ID dropdown not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.smsSenderIDField().then($field => {
      if ($field.is(':visible')) {
        cy.wrap($field).clear({ force: true }).type(smsSenderID, { force: true });
        cy.log(`SMS Sender ID typed: ${smsSenderID}`);
      } else {
        const msg = 'SMS Sender ID input field not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.surveyTypeCheckbox(smsSenderID).then($opt => {
      if ($opt.is(':visible')) {
        cy.wrap($opt).click({ force: true });
        cy.log('SMS Sender ID option selected');
      } else {
        const msg = `SMS Sender ID option not found: ${smsSenderID}`;
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  selectSMSTemplateDropdownOption(smsTemplate) {
    cy.log(`Selecting SMS Template: ${smsTemplate}`);
    this.elements.sMSTemplateDropdown().then($dd => {
      if ($dd.is(':visible')) {
        cy.wrap($dd).click({ force: true });
        cy.log('SMS Template dropdown opened');
      } else {
        const msg = 'SMS Template dropdown not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.smsTemplateField().then($field => {
      if ($field.is(':visible')) {
        cy.wrap($field).clear({ force: true }).type(smsTemplate, { force: true });
        cy.log(`SMS Template typed: ${smsTemplate}`);
      } else {
        const msg = 'SMS Template input field not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.surveyTypeCheckbox(smsTemplate).then($opt => {
      if ($opt.is(':visible')) {
        cy.wrap($opt).click({ force: true });
        cy.log('SMS Template option selected');
      } else {
        const msg = `SMS Template option not found: ${smsTemplate}`;
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  selectSMTPDropdownOption(SMTP) {
    cy.log(`Selecting SMTP: ${SMTP}`);
    this.elements.sMTPDropdown().then($dd => {
      if ($dd.is(':visible')) {
        cy.wrap($dd).click({ force: true });
        cy.log('SMTP dropdown opened');
      } else {
        const msg = 'SMTP dropdown not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.sMTPField().then($field => {
      if ($field.is(':visible')) {
        cy.wrap($field).clear({ force: true }).type(SMTP, { force: true });
        cy.log(`SMTP typed: ${SMTP}`);
      } else {
        const msg = 'SMTP input field not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.surveyTypeCheckbox(SMTP).then($opt => {
      if ($opt.is(':visible')) {
        cy.wrap($opt).click({ force: true });
        cy.log('SMTP option selected');
      } else {
        const msg = `SMTP option not found: ${SMTP}`;
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  selectEmailTemplateDropdownOption(emailTemplate) {
    cy.log(`Selecting Email Template: ${emailTemplate}`);
    this.elements.emailTemplateDropdown().then($dd => {
      if ($dd.is(':visible')) {
        cy.wrap($dd).click({ force: true });
        cy.log('Email Template dropdown opened');
      } else {
        const msg = 'Email Template dropdown not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.emailTemplateField().then($field => {
      if ($field.is(':visible')) {
        cy.wrap($field).clear({ force: true }).type(emailTemplate, { force: true });
        cy.log(`Email Template typed: ${emailTemplate}`);
      } else {
        const msg = 'Email Template input field not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.surveyTypeCheckbox(emailTemplate).then($opt => {
      if ($opt.is(':visible')) {
        cy.wrap($opt).click({ force: true });
        cy.log('Email Template option selected');
      } else {
        const msg = `Email Template option not found: ${emailTemplate}`;
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  uploadFiles(fileName) {
    cy.log(`Uploading file: ${fileName}`);
    cy.get(this.fileUploadInput).then($input => {
      if ($input.length) {
        cy.wrap($input).invoke('removeAttr', 'hidden').invoke('show').attachFile(fileName);
        cy.log('File attached successfully');
      } else {
        const msg = 'File upload input not found';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    cy.contains(fileName).then($file => {
      if ($file.is(':visible')) {
        cy.log('Uploaded file name visible');
      } else {
        const msg = 'Uploaded file name not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  verifyValidFileUploaded() {
    cy.log('Verifying uploaded file channel stats');
    this.getChannelSessionStats().then(stats => {
      const smsInvalid = stats.smsInvalid === '--' || stats.smsInvalid === '' ? 0 : Number(stats.smsInvalid);
      const emailInvalid = stats.emailInvalid === '--' || stats.emailInvalid === '' ? 0 : Number(stats.emailInvalid);
      cy.log(`SMS Valid: ${stats.smsValid}`);
      cy.log(`SMS Invalid: ${smsInvalid}`);
      cy.log(`Email Valid: ${stats.emailValid}`);
      cy.log(`Email Invalid: ${emailInvalid}`);
      if (stats.smsValid !== '--' && stats.emailValid !== '--' && smsInvalid === 0 && emailInvalid === 0) {
        cy.log('Uploaded file is VALID with zero invalid entries');
      } else {
        const msg = `Invalid file upload detected | SMS Invalid: ${smsInvalid}, Email Invalid: ${emailInvalid}`;
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  getChannelSessionStats() {
    cy.log('Fetching channel session stats');
    const stats = {};
    cy.get(this.elements.channelStats).then($container => {
      if ($container.is(':visible')) {
        cy.wrap($container).within(() => {
          cy.contains('.channel-type span', 'SMS').parent().siblings('.stat-counts').within(() => {
            cy.get(this.elements.validCount).invoke('text').then(t => stats.smsValid = t.trim());
            cy.get(this.elements.invalidCount).invoke('text').then(t => stats.smsInvalid = t.trim());
          });
          cy.contains('.channel-type span', 'Email').parent().siblings('.stat-counts').within(() => {
            cy.get(this.elements.validCount).invoke('text').then(t => stats.emailValid = t.trim());
            cy.get(this.elements.invalidCount).invoke('text').then(t => stats.emailInvalid = t.trim());
          });
        });
      } else {
        const msg = 'Channel stats container not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    return cy.wrap(stats);
  }

  verifySendForReview() {
    cy.log('Verifying Send For Review flow');
    this.elements.sendForReviewButton().then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Send For Review clicked');
      } else {
        const msg = 'Send For Review button not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.container().then($container => {
      const text = $container.text();
      if (text.includes('Are you sure') && text.includes('send this survey for review')) {
        cy.log('Confirmation dialog validated');
      } else {
        const msg = 'Send For Review confirmation text mismatch';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.sendButton().then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
        cy.log('Survey sent for review');
      } else {
        const msg = 'Send button not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  verifyToastMessageSuccess() {
    cy.log('Verifying survey schedule success toast');
    this.elements.surveyScheduleMessageToast().then($toast => {
      const expected = Messages.getMessage('SURVEY_SCHEDULE_SUCCESS');
      if ($toast.is(':visible') && $toast.text().trim() === expected) {
        cy.log('Survey schedule success toast validated');
      } else {
        const msg = 'Survey schedule success toast missing or incorrect';
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }

  verifyTotalSurveyScheduleCountIncrementByOne() {
    cy.get('@scheduled').then(originalCount => {
      const expectedCount = originalCount + 1;
      cy.log(`Original Count: ${originalCount}`);
      cy.log(`Expected Count After Increment: ${expectedCount}`);
      this.elements.scheduledCount({ timeout: 90000 }).invoke('text').then(text => {
        const newCount = Number(text.trim());
        cy.log(`Actual Count After Increment: ${newCount}`);
        if (newCount === expectedCount) {
          cy.log('Survey schedule count incremented by one successfully');
          cy.wrap(newCount).as('incremenetedTotalSurveySchedule');
        } else {
          const msg = `Survey schedule count mismatch. Expected ${expectedCount} but got ${newCount}`;
          cy.log(msg);
          throw new Error(msg);
        }
      });
    });
  }
  selectLanguagesOption() {
    cy.log('Selecting languages from dropdown');
    this.elements.languageDropdown().then($dd => {
      if ($dd.is(':visible')) {
        cy.wrap($dd).click({ force: true });
        cy.log('Language dropdown opened');
      } else {
        const msg = 'Language dropdown not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    ['Arabic', 'English'].forEach(lang => {
      this.elements.dropdownOptions().contains(lang).then($opt => {
        if ($opt.length) {
          cy.wrap($opt).click({ force: true });
          cy.log(`Language selected: ${lang}`);
        } else {
          const msg = `Language option not found: ${lang}`;
          cy.log(msg);
          throw new Error(msg);
        }
      });
    });
  }
  verifySelectedLanguagesOption() {
    cy.log('Verifying selected language chips');
    this.elements.selectedLanguageChips().invoke('text').then(text => {
      const hasArabic = text.includes('Arabic');
      const hasEnglish = text.includes('English');
      if (hasArabic && hasEnglish) {
        cy.log('Arabic and English languages are correctly selected');
      } else {
        const msg = `Selected languages mismatch. Found text: ${text}`;
        cy.log(msg);
        throw new Error(msg);
      }
    });
  }
  verifyTotalSurveyScheduleActiveCount_NotPresent(value) {
    cy.log(`Verifying all survey schedules are in status: ${value}`);
    this.elements.totalPageDropdown().then($dd => {
      if ($dd.is(':visible')) {
        cy.wrap($dd).realHover();
        cy.log('Total page dropdown hovered');
      } else {
        const msg = 'Total page dropdown not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.totalPageOptions().contains('1000').then($opt => {
      if ($opt.length) {
        cy.wrap($opt).click({ force: true });
        cy.log('Selected 1000 records');
      } else {
        const msg = '1000 records option not found';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    cy.contains('th', /status/i).then($th => {
      let container = $th[0].parentElement;
      while (container && container !== document.body) {
        if (container.scrollWidth > container.clientWidth) break;
        container = container.parentElement;
      }
      if (container) {
        cy.wrap(container).scrollTo('right', { duration: 1000 });
        cy.log('Scrolled horizontally to Status column');
      } else {
        const msg = 'Scrollable container not found for Status column';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    cy.get('td.cursor-pointer span').then($cells => {
      const statuses = [];
      let mismatch = false;
      $cells.each((_, el) => {
        const status = el.innerText.trim();
        statuses.push(status);
        if (status.toLowerCase() !== value.toLowerCase()) mismatch = true;
      });
      statuses.forEach((s, i) => cy.log(`${i + 1}. ${s}`));
      if (mismatch) {
        const msg = `Status mismatch found. Not all rows are "${value}"`;
        cy.log(msg);
        throw new Error(msg);
      }
      cy.log(`All statuses are "${value}"`);
    });
    cy.get('tr').then($rows => {
      const names = new Set();
      $rows.each((_, row) => {
        const cell = row.querySelectorAll('td.table-cell-max-width.cursor-pointer')[1];
        if (cell) names.add(cell.innerText.trim());
      });
      const tableCount = names.size;
      cy.log(`Total ${value} survey schedules from table: ${tableCount}`);
      cy.wrap(tableCount).as('activeSurveyScheduleCount');
    });
    cy.get('a.nav-item').contains('span', 'Survey').click({ force: true });
    this.elements.surveydashboard().then($el => {
      if ($el.is(':visible')) {
        cy.wrap($el).click({ force: true });
        cy.log('Survey dashboard opened');
      } else {
        const msg = 'Survey dashboard not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    cy.wait(25000);
    this.elements.pieChartLabels().then($texts => {
      const dashboardCount = Number($texts.eq(0).text().trim());
      cy.log(`Dashboard ${value} count: ${dashboardCount}`);
      cy.wrap(dashboardCount).as('activeScheduleDashboard');
    });
    cy.get('@activeSurveyScheduleCount').then(tableCount => {
      cy.get('@activeScheduleDashboard').then(dashboardCount => {
        if (tableCount === dashboardCount) {
          cy.log(`Table count matches dashboard count: ${tableCount}`);
        } else {
          const msg = `Count mismatch. Table: ${tableCount}, Dashboard: ${dashboardCount}`;
          cy.log(msg);
          throw new Error(msg);
        }
      });
    });
  }

  verifyTotalSurveyScheduleCompletedCount_NotPresent(value) {
    this.elements.totalPageDropdown().then($dd => {
      if ($dd.is(':visible')) {
        cy.wrap($dd).realHover({ timeout: 90000 });
        cy.log('Hovered total page dropdown');
      } else {
        const msg = 'Total page dropdown not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.totalPageOptions().then($opts => {
      if ($opts.length) {
        this.elements.totalPageOptions().contains('1000').click({ force: true });
        cy.log('Selected 1000 records');
      } else {
        const msg = 'Total page options not available';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    cy.contains('th', /status/i).then($th => {
      let scrollContainer = $th[0].parentElement;
      while (scrollContainer && scrollContainer !== document.body) {
        if (scrollContainer.scrollWidth > scrollContainer.clientWidth) break;
        scrollContainer = scrollContainer.parentElement;
      }
      if (scrollContainer) {
        cy.wrap(scrollContainer).scrollTo('right', { duration: 1000 });
        cy.log('Scrolled to Status column');
      } else {
        const msg = 'Horizontal scroll container not found';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    cy.get('td.cursor-pointer span', { timeout: 120000 }).then($cells => {
      const statuses = [];
      let mismatch = false;
      $cells.each((_, el) => {
        const status = el.innerText.trim();
        statuses.push(status);
        if (status.toLowerCase() !== value.toLowerCase()) mismatch = true;
      });
      statuses.forEach((s, i) => cy.log(`${i + 1}. ${s}`));
      if (mismatch) {
        const msg = `Some statuses are not "${value}"`;
        cy.log(msg);
        throw new Error(msg);
      } else {
        cy.log(`All statuses are "${value}"`);
      }
    });
    cy.get('tr').then($rows => {
      const names = new Set();
      $rows.each((_, row) => {
        const cell = row.querySelectorAll('td.table-cell-max-width.cursor-pointer')[1];
        if (cell) names.add(cell.innerText.trim());
      });
      const tableCount = names.size;
      cy.log(`Total "${value}" survey names from table: ${tableCount}`);
      cy.wrap(tableCount).as('completedSurveyScheduleCount');
    });
    cy.get('a.nav-item').contains('span', 'Survey').click({ force: true });
    this.elements.surveydashboard().then($el => {
      if ($el.is(':visible')) {
        cy.wrap($el).click({ force: true });
        cy.log('Navigated to Survey Dashboard');
      } else {
        const msg = 'Survey dashboard not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    cy.wait(25000);
    this.elements.pieChartLabels().then($texts => {
      const dashboardCount = Number($texts.eq(1).text().trim());
      cy.log(`Dashboard "${value}" count: ${dashboardCount}`);
      cy.wrap(dashboardCount).as('completedScheduleDashboard');
    });
    cy.get('@completedSurveyScheduleCount').then(tableCount => {
      cy.get('@completedScheduleDashboard').then(dashboardCount => {
        if (tableCount === dashboardCount) {
          cy.log(`Table count (${tableCount}) matches Dashboard "${value}" count (${dashboardCount})`);
        } else {
          const msg = `Count mismatch. Table: ${tableCount}, Dashboard: ${dashboardCount}`;
          cy.log(msg);
          throw new Error(msg);
        }
      });
    });
    cy.get(this.elements.pieChartFullSize()).find('path').then($paths => {
      const expectedColor = '#5571c9';
      let colorMismatch = false;
      $paths.each((_, el) => {
        const fill = el.getAttribute('fill')?.trim().toLowerCase();
        if (fill !== expectedColor) colorMismatch = true;
      });
      if (colorMismatch) {
        const msg = 'Completed pie chart color mismatch';
        cy.log(msg);
        throw new Error(msg);
      } else {
        cy.log('Completed pie chart color verified');
      }
    });
  }

  verifyLiveAndOfflinePiechartsvisible() {
    this.elements.livePieChart({ timeout: 90000 }).then($el => {
      if ($el.is(':visible')) {
        cy.wrap($el).scrollIntoView({ ensureScrollable: false });
        cy.log('Live pie chart is visible');
        this.elements.pieChartLabels({ timeout: 90000 }).then($texts => {
          const dashboardCount = Number($texts.eq(2).text().trim());
          cy.log('Dashboard Live Survey Count: ' + dashboardCount);
          cy.wrap(dashboardCount).as('liveScheduleDashboard');
        });
      } else {
        const msg = 'Live pie chart not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.offlinePieChart({ timeout: 90000 }).then($el => {
      if ($el.is(':visible')) {
        cy.wrap($el).scrollIntoView({ ensureScrollable: false });
        cy.log('Offline pie chart is visible');
        this.elements.pieChartLabels({ timeout: 90000 }).then($texts => {
          const dashboardCount = Number($texts.eq(2).text().trim());
          cy.log('Dashboard Offline Survey Count: ' + dashboardCount);
          cy.wrap(dashboardCount).as('offlineScheduleDashboard');
        });
      } else {
        const msg = 'Offline pie chart not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.pieChartLabels().then($texts => {
      const live = Number($texts.eq(2).text().trim());
      cy.log('Dashboard Survey Schedule Live Count: ' + live);
      cy.wrap(live).as('liveScheduleDashboard');
    });
    this.elements.pieChartLabels().then($texts => {
      const offline = Number($texts.eq(3).text().trim());
      cy.log('Dashboard Survey Schedule Offline Count: ' + offline);
      cy.wrap(offline).as('offlineScheduleDashboard');
    });
  }

  verifyLatestUpdatesDashboard() {
    cy.get('@surveyName').then(name => {
      cy.get('@surveyAddDepartment').then(dept => {
        this.elements.latestUpdateTitle({ timeout: 90000 }).eq(0).invoke('text').then(t => {
          const actual = t.trim();
          cy.log(`Latest update title found: ${actual}`);
          if (actual !== name) {
            const msg = `Latest update title mismatch. Expected "${name}" but found "${actual}"`;
            cy.log(msg);
            throw new Error(msg);
          }
        });
        this.elements.latestUpdateContent({ timeout: 90000 }).eq(0).invoke('text').then(c => {
          const actual = c.trim();
          cy.log(`Latest update department found: ${actual}`);
          if (actual !== dept) {
            const msg = `Latest update department mismatch. Expected "${dept}" but found "${actual}"`;
            cy.log(msg);
            throw new Error(msg);
          }
        });
        this.elements.latestUpdateParticipantCount({ timeout: 90000 }).eq(0).invoke('text').then(p => {
          const actual = p.trim();
          cy.log(`Latest update participants found: ${actual}`);
          if (actual !== '1') {
            const msg = `Latest update participant count mismatch. Expected "1" but found "${actual}"`;
            cy.log(msg);
            throw new Error(msg);
          }
        });
      });
    });
  }

  verifyAllSurveysOfTitleDepartmentCount() {
    this.elements.latestUpdates({ timeout: 90000 }).then($blocks => {
      if (!$blocks.length) {
        const msg = 'No surveys found in latest updates';
        cy.log(msg);
        throw new Error(msg);
      }
      cy.log(`Total surveys available: ${$blocks.length}`);
      this.elements.latestUpdates().each(($block, index) => {
        cy.wrap($block).scrollIntoView().then(() => {
          this.elements.latestUpdateTitle().invoke('text').then(title => {
            const t = title.trim();
            cy.log(`Survey ${index + 1} title: ${t}`);
            if (!t) {
              const msg = `Survey ${index + 1} title is empty`;
              cy.log(msg);
              throw new Error(msg);
            }
          });
          this.elements.latestUpdateContent().invoke('text').then(content => {
            const c = content.trim();
            cy.log(`Survey ${index + 1} department: ${c}`);
            if (!c) {
              const msg = `Survey ${index + 1} department is empty`;
              cy.log(msg);
              throw new Error(msg);
            }
          });
          this.elements.latestUpdateParticipantCount().invoke('text').then(pc => {
            const p = pc.trim();
            cy.log(`Survey ${index + 1} participants: ${p}`);
            if (!p || isNaN(Number(p))) {
              const msg = `Survey ${index + 1} participant count invalid: "${p}"`;
              cy.log(msg);
              throw new Error(msg);
            }
          });
        });
      });
      cy.log('All surveys validated successfully');
    });
  }

  getTotalBarCountInDashboard() {
    this.elements.barChartBars().then($bars => {
      const count = $bars.length;
      cy.log(`Initial Bars Count In Dashboard: ${count}`);
      cy.wrap(count).as('initialBarCountInDashboard');
    });
  }

  verifyBarCountIncremented() {
    cy.get('@initialBarCountInDashboard').then(initialCount => {
      this.elements.barChartBars().then($bars => {
        const newCount = $bars.length;
        const diff = newCount - initialCount;

        cy.log('--- Bar Count Verification ---');
        cy.log(`Initial Count: ${initialCount}`);
        cy.log(`Actual Count: ${newCount}`);
        cy.log(`Difference: ${diff}`);

        if (diff > 0) {
          cy.log(`Bar count incremented by ${diff}`);
        } else {
          const msg = `Bar count did not increase. Initial=${initialCount}, Actual=${newCount}`;
          cy.log(msg);
          throw new Error(msg);
        }
      });
    });
  }


  printAllBarsWithValidationDashboard() {
    this.elements.barChartBars().then($bars => {
      const total = $bars.length;
      cy.log(`Total Bars Found: ${total}`);
      if (!total) {
        const msg = 'No bars found in dashboard bar chart';
        cy.log(msg);
        throw new Error(msg);
      }
      this.elements.barChartBars().each(($bar, index) => {
        const name = ($bar.attr('name') || '').trim();
        const x = ($bar.attr('x') || '').trim();
        const y = ($bar.attr('y') || '').trim();
        const width = ($bar.attr('width') || '').trim();
        const height = ($bar.attr('height') || '').trim();
        const radius = ($bar.attr('radius') || '').trim();
        const fill = ($bar.attr('fill') || '').trim();
        const d = ($bar.attr('d') || '').trim();
        cy.log(`# Bar ${index + 1} | name="${name}" | x=${x} | y=${y} | width=${width} | height=${height} | radius=${radius} | fill=${fill} | d=${d}`);
        if (!name) {
          const msg = `Name missing in bar ${index + 1}`;
          cy.log(msg);
          throw new Error(msg);
        }
        if (!x) {
          const msg = `X missing in bar ${index + 1}`;
          cy.log(msg);
          throw new Error(msg);
        }
        if (!y) {
          const msg = `Y missing in bar ${index + 1}`;
          cy.log(msg);
          throw new Error(msg);
        }
        if (!width) {
          const msg = `Width missing in bar ${index + 1}`;
          cy.log(msg);
          throw new Error(msg);
        }
        if (!height) {
          const msg = `Height missing in bar ${index + 1}`;
          cy.log(msg);
          throw new Error(msg);
        }
      });
    });
  }



  verifyActiveStatusInDashboard(value) {
    cy.log('Filtering survey schedule by active status');
    this.elements.searchInput().then($el => {
      if ($el.is(':visible')) {
        cy.wrap($el).clear().type(value);
        cy.log('Search value entered: ' + value);
      } else {
        const msg = 'Search input not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.typeSelectorLabel().realHover({ timeout: 90000 });
    this.elements.filterOperatorOption().then($opt => {
      if ($opt.is(':visible')) {
        cy.wrap($opt).contains('Status').click({ force: true });
        cy.log('Status filter applied');
      } else {
        const msg = 'Status filter option not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.searchButton().click({ force: true });
    cy.log('Search button clicked');
    this.elements.totalPageDropdown().realHover({ timeout: 90000 });
    this.elements.totalPageOptions().then($opts => {
      if ($opts.length) {
        cy.wrap($opts).contains('1000').click({ force: true });
        cy.log('Pagination set to 1000');
      } else {
        const msg = 'Pagination options not found';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    cy.get('tr').then($rows => {
      const surveySet = new Set();
      $rows.each((i, row) => {
        const cell = row.querySelectorAll('td.table-cell-max-width.cursor-pointer')[1];
        if (cell && cell.innerText.trim()) surveySet.add(cell.innerText.trim());
      });
      const tableCount = surveySet.size;
      cy.log('Active survey names from table: ' + tableCount);
      cy.wrap(tableCount).as('activeSurveyScheduleCount');
    });
    cy.get('a.nav-item').contains('span', 'Survey').click({ force: true });
    cy.log('Navigated to Survey dashboard');
    this.elements.surveydashboard().click({ force: true });
    cy.contains('a.second-link', 'Survey Dashboard').should('be.visible');
    cy.wait(15000);
    cy.get('.icon-details_completed').then($el => {
      if ($el.length > 0 && $el.is(':visible')) {
        cy.log('Completed Status found, So Not able to Find Only Active Status');
      } else {
        cy.log('Not Found Completed, Only having Active Status');
        this.elements.pieChartLabels().then($texts => {
          const dashboardCount = Number($texts.eq(0).text().trim());
          cy.log('Dashboard Active Survey Count: ' + dashboardCount);
          cy.wrap(dashboardCount).as('activeScheduleDashboard');
        });
        cy.get('@activeSurveyScheduleCount').then(tableCount => {
          cy.get('@activeScheduleDashboard').then(dashboardCount => {
            if (tableCount === dashboardCount) {
              cy.log(`Active count matched: ${tableCount}`);
            } else {
              const msg = `Active count mismatch. Table ${tableCount} Dashboard ${dashboardCount}`;
              cy.log(msg);
              throw new Error(msg);
            }
          });
        });
      }
    });
  }

  verifyCompletedStatusInDashboard(value) {
    cy.log('Filtering survey schedule by completed status');
    this.elements.searchInput().then($el => {
      if ($el.is(':visible')) {
        cy.wrap($el).clear().type(value);
        cy.log('Search value entered: ' + value);
      } else {
        const msg = 'Search input not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.typeSelectorLabel().realHover({ timeout: 90000 });
    this.elements.filterOperatorOption().then($opt => {
      if ($opt.is(':visible')) {
        cy.wrap($opt).contains('Status').click({ force: true });
        cy.log('Status filter applied');
      } else {
        const msg = 'Status filter option not visible';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    this.elements.searchButton().click({ force: true });
    cy.log('Search button clicked');
    this.elements.totalPageDropdown().realHover({ timeout: 90000 });
    this.elements.totalPageOptions().then($opts => {
      if ($opts.length) {
        cy.wrap($opts).contains('1000').click({ force: true });
        cy.log('Pagination set to 1000');
      } else {
        const msg = 'Pagination options not found';
        cy.log(msg);
        throw new Error(msg);
      }
    });
    cy.get('tr').then($rows => {
      const surveySet = new Set();
      $rows.each((i, row) => {
        const cell = row.querySelectorAll('td.table-cell-max-width.cursor-pointer')[1];
        if (cell && cell.innerText.trim()) surveySet.add(cell.innerText.trim());
      });
      const tableCount = surveySet.size;
      cy.log('Completed survey names from table: ' + tableCount);
      cy.wrap(tableCount).as('completedSurveyScheduleCount');
    });
    cy.get('a.nav-item').contains('span', 'Survey').click({ force: true });
    cy.log('Navigated to Survey dashboard');
    this.elements.surveydashboard().click({ force: true });
    cy.contains('a.second-link', 'Survey Dashboard').should('be.visible');
    cy.wait(15000);
    cy.get('.icon-details_active').then($el => {
      if ($el.length > 0 && $el.is(':visible')) {
        cy.log('active Status found, So Not able to Find Only Completed Status');
      } else {
        cy.log('Not Found active, Only having Completed Status');
        this.elements.pieChartLabels().then($texts => {
          const dashboardCount = Number($texts.eq(1).text().trim());
          cy.log('Dashboard Completed Survey Count: ' + dashboardCount);
          cy.wrap(dashboardCount).as('completedScheduleDashboard');
        });
        cy.get('@completedSurveyScheduleCount').then(tableCount => {
          cy.get('@completedScheduleDashboard').then(dashboardCount => {
            if (tableCount === dashboardCount) {
              cy.log(`Active count matched: ${tableCount}`);
            } else {
              const msg = `Active count mismatch. Table ${tableCount} Dashboard ${dashboardCount}`;
              cy.log(msg);
              throw new Error(msg);
            }
          });
        });
      }
    });
  }

}

export default DashboardPage;