class SurveyReportPage {

  elements = {

    surveyMenu: () => cy.contains('.nav-item span', 'Survey', { timeout: 90000 }),
    surveyReport: () => cy.contains('a.nav-item', 'Survey Report', { timeout: 90000 }),
    searchInput: () => cy.get('.search-bar-d2 input[type="text"]', { timeout: 90000 }),
    searchButton: () => cy.contains('button', 'Search', { timeout: 90000 }),
    surveyGrid: () => cy.get('.survey-grid .survey-name', { timeout: 90000 }),
    dateInput: () => cy.get('input.from-date', { timeout: 90000 }),
    filterButton: () => cy.xpath('/html/body/div/article/main/div/div[1]/span/div/div[2]/div[1]').realHover(),
    filterOption: () => cy.contains('button', 'Filter', { timeout: 90000 }),
    containFilterOption: () => cy.contains('Contains', { timeout: 90000 }),
    countPerPage: () => cy.get('.count-per-page > p', { timeout: 90000 }),
    pageHeaderMenu: () => cy.get('[data-title="Total Page"]', { timeout: 90000 }),
    FiftyOption: () => cy.contains('50', { timeout: 90000 }),
    navigationPage: () => cy.get('[style="cursor: pointer;"]'),
    onwardRowNav: () => cy.get('[class="custom-table-pages-buttons"] svg:nth-of-type(2)', { timeout: 90000 }),
    returnRowNav: () => cy.get('[class="custom-table-pages-buttons"] svg:nth-of-type(1)', { timeout: 90000 }),
    surveyReportTable: () => cy.get('.custom-table tbody tr td').first().should('be.visible').click(),
    surveyReportOverviewTab: () => cy.contains('span.tab-text', 'Overview', { timeout: 90000 }),
    totalSurveyRecipient: () => cy.get('[class="card participants"] span', { timeout: 90000 }),
    observeNoteTP: () => cy.get('th').contains('Total Participants', { timeout: 90000 }),
    observeNoteS: () => cy.get('th').contains('Submitted', { timeout: 90000 }),
    observeNotePC: () => cy.get('th').contains('Partially Completed', { timeout: 90000 }),
    observeNoteNT: () => cy.get('th').contains('Not Taken', { timeout: 90000 }),
    fromDate: () => cy.get('input.from-date', { timeout: 90000 }),
    toDate: () => cy.get('input.to-date', { timeout: 90000 }),
    buttonTable: () => cy.contains('[class="tab-text"]', 'Table', { timeout: 900000 }).click({ force: true }),
    item1: () => cy.get('[title="Item 1"]', { timeout: 900000 }),
    csvExportButton: () => cy.contains('button.sa-table__btn', 'CSV', { timeout: 90000 }),
    pdfExportButton: () => cy.contains('button.sa-table__btn', 'PDF', { timeout: 90000 }),
    excelExportButton: () => cy.contains('button.sa-table__btn', 'Excel', { timeout: 90000 }),
    participantsTab: () => cy.contains('span.tab-text', 'Participants', { timeout: 90000 }),
    responseStatusTab: () => cy.contains('.table-header-cell', 'Response Status', { timeout: 90000 }),
    statusSubmitted: () => cy.get('td .status.status_submitted span', { timeout: 90000 }),
    participantSurvey: () => cy.get('//tbody/tr[1]/td[4]', { timeout: 90000 }),
    participantSurvey1: () => cy.get('th').contains('Total Participants', { timeout: 90000 }),
    resetFilter: () => cy.contains('span.sa-toolbar__button', 'Reset Filter', { timeout: 90000 }),
    selectArebicLanguage: () => cy.get('select.sa-question__select', { timeout: 90000 }),
    navSummaryTab: () => cy.contains('span.tab-text', 'Summary', { timeout: 90000 }),
    summaryQuestions: () => cy.get('h3.sa-question__title', { timeout: 90000 }),
    selectChartType: () => cy.contains('select.sa-question__select', 'Chart', { timeout: 90000 }),
    chartType: () => cy.contains('select.sa-question__select', "Bar", { timeout: 90000 }),
    orderDropdown: () => cy.contains('sa-question__select', 'Default Order', { timeout: 90000 }),
    typeDropdown: () => cy.contains('select.sa-question__select', 'Doughnut', { timeout: 90000 }),
    uploadParticipantfile: () => cy.get('#fileUpload').selectFile('cypress/fixtures/Sample_Survey_File.csv.xlsx', { force: true }),
    participantsForreview: () => cy.get('button.button_form-primary_button', { includeShadowDom: true }),
    confirmParticipantspopup: () => cy.contains('div.dialogBody p', 'Are you sure you want to go ahead with 6 valid records and send this survey for review?'),
    confirmParticipantdialogFooter: () => cy.get('div.alertDialogFooter').contains('button', 'Send'),
    tableFirstRow: () => cy.get('table tbody tr').first().find('td').first(),
    surveyNameCell: () => cy.get('td.table-cell-max-width.cursor-pointer', { timeout: 90000 }),
    summaryQuestionTitle: () => cy.get('h3.sa-question__title.sa-question__title--draggable', { timeout: 90000 }),
    tableRows: () => cy.get('.custom-table tbody tr', { timeout: 90000 }),
    submittedStats: () => cy.get('div.status-item.submitted').within(() => {
      cy.contains('Submitted').should('be.visible');
      cy.get('*').last().invoke('text').then(value => {
        const val = value.trim();
        expect(val).to.match(/^(-|\d+)$/);
      });
    }),
    partialComplete: () => {
      cy.contains('div.status-item', 'Partially Completed').should('be.visible').as('partialBlock');
      cy.get('@partialBlock').find('div, span, p').last().invoke('text').then(val => {
        val = val.trim();
        expect(val).to.match(/^(-|\d+)$/);
      });
    },
    partiallySubmittedColumn: () => 
  cy.contains('th', 'Partially Completed')
    .invoke('index')
    .then(colIndex => {
      return cy
        .get('tbody tr')
        .first()
        .find(`td:eq(${colIndex})`);
    })
  }
  openSurveyReportAndSearch() {
    cy.log('Clicking on Survey menu...');
    this.elements.surveyMenu().should('be.visible').click({ force: true });

    cy.log('Clicking on Survey Report...');
    this.elements.surveyReport().click({ force: true });

    cy.log('Entering "Test 1" in search field...');
    this.elements.searchInput().should('be.visible').clear().type('Test 1');

    cy.log('Clicking on Search button...');
    this.elements.searchButton().should('be.visible').click();

  }

  clickOnFilterButton() {
    cy.log('Checking Filter button state');

    this.elements.filterButton().then(($btn) => {
      if (!$btn.is(':visible')) {
        throw new Error('Filter button is not visible');
      }
      if ($btn.is(':disabled')) {
        throw new Error('Filter button is disabled');
      }
    });

    this.elements.filterButton().click({ force: true });
    cy.log('Filter button clicked');
  }

  openSurveyReport() {
    cy.log('Clicking on Survey menu...');
    this.elements.surveyMenu().should('be.visible').click({ force: true });

    cy.log('Clicking on Survey Report...');
    this.elements.surveyReport().should('be.visible').click({ force: true });
  }
  containFilterOption() {
    cy.log('Checking if Contain filter option is displayed');
    this.elements.containFilterOption().should('exist').then(($el) => {
      if ($el.is(':visible')) {
        cy.log('Contain filter option is visible');
        expect($el).to.be.visible;
      } else {
        cy.log('Contain filter option exists but is not visible');
        throw new Error('Contain filter option exists but is not visible');
      }
    });
  }
  countPerPage() {
    cy.log('Checking Count per page value');
    this.elements.countPerPage().should('exist').then(($el) => {
      const actualText = $el.text().trim();
      const expectedText = 'Count per page: 20';
      if ($el.is(':visible') && actualText === expectedText) {
        cy.log('Count per page is visible and value is correct');
        expect($el).to.be.visible;
        expect(actualText).to.eq(expectedText);
      } else {
        cy.log('Count per page is missing, hidden, or value is incorrect');
        cy.log(`"${actualText}"`);
        throw new Error(
          `Count per page validation failed. Expected "${expectedText}" but got "${actualText}"`
        );
      }

    });
  }
  pageHeaderMenu() {
    cy.log('Hovering on Page Header Menu');
    this.elements.pageHeaderMenu().should('exist').then(($el) => {
      if ($el.is(':visible')) {
        cy.log('Page Header Menu is visible, performing hover');
        cy.wrap($el).realHover();
      } else {
        cy.log('Page Header Menu exists but is not visible');
        throw new Error('Page Header Menu is not visible for hover');
      }
    });
  }

  FiftyOption() {
    cy.log('Clicking on 50 option');
    this.elements.FiftyOption().should('exist').then(($el) => {
      try {
        cy.wrap($el).click({ force: true });
        cy.log('50 option clicked successfully');
      } catch (err) {
        cy.log('Failed to click 50 option');
        throw err;
      }
    });
  }


  countPerPage1() {
    cy.wait(90000)
    this.elements.countPerPage().should('be.visible').and('have.text', 'Count per page: 50')
  }

  navigationPage() {
    cy.wait(5000)
    this.elements.navigationPage().should('be.visible');
  }
  onwardRowNav() {
    cy.log(' Clicking on onward (next) row navigation');

    this.elements.onwardRowNav()
      .should('exist')
      .then(($el) => {

        if ($el.is(':visible')) {
          cy.wrap($el).click({ force: true });
          cy.log(' Onward row navigation clicked successfully');
        } else {
          cy.log('Onward row navigation exists but is not visible');
          throw new Error('Onward row navigation is not visible to click');
        }

      });
  }

  returnRowNav() {
    cy.log('Clicking on return (previous) row navigation');

    this.elements.returnRowNav()
      .should('exist')
      .then(($el) => {

        if ($el.is(':visible')) {
          cy.wrap($el).click({ force: true });
          cy.log(' Return row navigation clicked successfully');
        } else {
          cy.log('Return row navigation exists but is not visible');
          throw new Error('Return row navigation is not visible to click');
        }

      });
  }

  clickAnyListingItem() {
    cy.log('Attempting to click any listing item from survey report table');
    this.elements.tableRows({ timeout: 90000 }).should('have.length.greaterThan', 0).then(($rows) => {
      cy.log(`Found ${$rows.length} listing item(s)`);
    });
    this.elements.tableRows({ timeout: 90000 }).first().find('td').first().click({ force: true });
    cy.log('Listing item clicked successfully');
  }
  visibleOverviewText() {
    cy.log('Checking if Survey Report Overview tab is visible');
        cy.url({ timeout: 90000 }).should('include', '/surveys/reports');
    cy.log('Navigated to Survey Report details page');
    cy.intercept('GET', '**/surveyOverviewStats*').as('overviewApi');
    cy.log('Survey Overview API loaded');
      cy.log('Survey Report Overview tab is visible');
  }
  totalSurveyRecipient() {
    cy.log('Verifying Total Survey Recipient label and value');
    this.elements.totalSurveyRecipient().then(($els) => {
      if ($els.length < 2) {
        cy.log('Total Survey Recipient elements not found');
        throw new Error('Total Survey Recipient label/value elements are missing');
      }
      const label = $els.eq(0);
      const value = $els.eq(1);
      if (label.is(':visible')) {
        cy.log('"Total Survey Recipient" label is visible');
        cy.wrap(label).should('contain.text', 'Total Survey Recipient');
      } else {
        cy.log('"Total Survey Recipient" label is not visible');
        throw new Error('Total Survey Recipient label is not visible');
      }
      if (value.is(':visible')) {
        const text = value.text().trim();
        if (/^\d+$/.test(text)) {
          cy.log(`Total Survey Recipient value is numeric → ${text}`);
          expect(text).to.match(/^\d+$/);
        } else {
          cy.log(`Value is not numeric → "${text}"`);
          throw new Error('Total Survey Recipient value is not numeric');
        }
      } else {
        cy.log('Total Survey Recipient value is not visible');
        throw new Error('Total Survey Recipient value is not visible');
      }
    });
  }

  datePicker() {
    cy.log('Setting date range in date picker');
    const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - 365);
    const format = (d) => d.toISOString().split('T')[0];
    const fromDate = format(pastDate);
    const toDate = format(today);
    this.elements.fromDate().then(($from) => {
      if ($from.length && $from.is(':visible')) {
        cy.log(`From Date input is visible → setting ${fromDate}`);
        cy.wrap($from).clear({ force: true }).invoke('val', fromDate).trigger('input').trigger('change').should('have.value', fromDate);
        cy.log('From Date value set successfully');
      } else {
        cy.log('From Date input is not visible');
        throw new Error('From Date input field not visible');
      }
    });
    this.elements.toDate().then(($to) => {
      if ($to.length && $to.is(':visible')) {
        cy.log(`To Date input is visible → setting ${toDate}`);
        cy.wrap($to).clear({ force: true }).invoke('val', toDate).trigger('input').trigger('change').should('have.value', toDate);
        cy.log('To Date value set successfully');
      } else {
        cy.log('To Date input is not visible');
        throw new Error('To Date input field not visible');
      }
    });
  }

  observeNote() {
    cy.log('Verifying notes under Summary section');
    this.elements.observeNoteTP().then(($el) => {
      if ($el.length && $el.is(':visible') && $el.text().includes('Total Participants')) {
        cy.log(' Note "Total Participants" is visible');
      } else {
        cy.log(' Note "Total Participants" not visible or text mismatch');
        throw new Error('Total Participants note verification failed');
      }
    });
    this.elements.observeNoteS().then(($el) => {
      if ($el.length && $el.is(':visible') && $el.text().includes('Submitted')) {
        cy.log('Note "Submitted" is visible');
      } else {
        cy.log('Note "Submitted" not visible or text mismatch');
        throw new Error('Submitted note verification failed');
      }
    });
    this.elements.observeNotePC().then(($el) => {
      if ($el.length && $el.is(':visible') && $el.text().includes('Partially Completed')) {
        cy.log('Note "Partially Completed" is visible');
      } else {
        cy.log('Note "Partially Completed" not visible or text mismatch');
        throw new Error('Partially Completed note verification failed');
      }
    });
    this.elements.observeNoteNT().scrollIntoView().then(($el) => {
      if ($el.length && $el.is(':visible') && $el.text().includes('Not Taken')) {
        cy.log('Note "Not Taken" is visible');
      } else {
        cy.log('Note "Not Taken" not visible or text mismatch');
        throw new Error('Not Taken note verification failed');
      }
    });
  }
  participantSurvey() {
    this.elements.participantSurvey().should('be.visible').contains('Total Participants').click({ force: true })
    this.elements.participantSurvey1().should('be.visible').contains('Total Participants').click({ force: true })
  }
  tableTab() {
    cy.log('Checking Table tab visibility');
    cy.contains('.tab-text', 'Table', { timeout: 90000 }).then(($tab) => {
      if ($tab.length > 0 && $tab.is(':visible')) {
        cy.log('Table tab is visible');
        cy.wrap($tab).click({ force: true });
        cy.log('Table tab clicked successfully');
      } else {
        cy.log('Table tab is not visible or not found');
        throw new Error('Table tab visibility check failed');
      }
    });
  }
  checkItem1InTable() {
    cy.log(' Verifying answer in Question table');
    cy.get('.sa-table__action-container', { timeout: 90000 }).should('be.visible');
    cy.get('.sa-table__action-container').first().within(() => {
      cy.get('.sa-table__filter').clear().type('Yes');
    });
    cy.log('Verifying filtered result in table');
    cy.get('.tabulator').find('.tabulator-cell').contains(/^yes$/i).scrollIntoView({ block: 'center' }).should('be.visible').then(($cell) => {
      cy.log(`Answer verified in table: "${$cell.text().trim()}"`);
    });
  }

  csvExportButton() {
    cy.log('Checking CSV Export button presence');
    this.elements.csvExportButton({ timeout: 90000 }).should('exist').then(($btn) => {
      cy.log(`Button visible: ${$btn.is(':visible')}`);
    });
    cy.log('Clicking CSV Export button (forced)');
    this.elements.csvExportButton().click({ force: true });
    cy.log(' CSV Export triggered');
  }
  pdfExportButton() {
    this.elements.pdfExportButton().then(($btn) => {
      if ($btn.length > 0 && $btn.is(':visible')) {
        cy.log('PDF Export button is visible');
        cy.wrap($btn).should('be.visible', { timeout: 9000 }).click({ force: true });
      } else {
        cy.log('PDF Export button is not visible or not found');
        throw new Error('PDF Export button is missing or hidden');
      }
    });
  }

  excelExportButton() {
    this.elements.excelExportButton().then(($btn) => {
      if ($btn.length > 0 && $btn.is(':visible')) {
        cy.log('Excel Export button is visible');
        cy.wrap($btn).should('be.visible', { timeout: 9000 }).click({ force: true });
      } else {
        cy.log('Excel Export button is not visible or not found');
        throw new Error('Excel Export button is missing or hidden');
      }
    });
  }

participantsTab() {
  cy.log('Checking Participants tab');
   cy.wait(8000);
  this.elements.participantsTab({ timeout: 90000 }).should('be.visible').click({ force: true });
  cy.log('Participants tab clicked successfully');
}

  responseStatusTab() {
    this.elements.responseStatusTab().then(($tab) => {
      if ($tab.length > 0 && $tab.is(':visible')) {
        cy.log('Response Status tab is visible');
      } else {
        cy.log('Response Status tab is not visible or not found');
        throw new Error('Response Status tab visibility check failed');
      }
    });
  }

  statusSubmitted() {
    this.elements.statusSubmitted().then(($status) => {
      if ($status.length > 0 && $status.text().trim() === 'Submitted') {
        cy.log('Status is displayed as "Submitted"');
      } else {
        cy.log('Status is not "Submitted" or not found');
        throw new Error('Submitted status validation failed');
      }
    });
  }
  resetFilter() {
    this.elements.resetFilter().then(($btn) => {
      if ($btn.length > 0 && $btn.is(':visible')) {
        cy.log('Reset Filter button is visible');
        cy.wrap($btn).click({ force: true });
        cy.log('Reset Filter button clicked successfully');
      } else {
        cy.log('Reset Filter button is not visible or not found');
        throw new Error('Reset Filter button validation failed');
      }
    });
  }
  
selectArebicLanguage() {
    this.elements.selectArebicLanguage().then(($el) => {
      if ($el.length > 0 && $el.is(':visible')) {
        cy.log('Arabic language dropdown is visible');
        cy.wrap($el).find('option').then(($options) => {
          const optionDetails = [...$options].map(o => ({
            value: o.value,
            text: o.innerText.trim()
          }));
          cy.log(`Available language options: ${JSON.stringify(optionDetails)}`);
        });
      } else {
        cy.log('Arabic language dropdown is not visible or not found');
        throw new Error('Arabic language dropdown not visible');
      }
    });
  }

  navSummaryTab() {
    this.elements.navSummaryTab().then(($tab) => {
      if ($tab.length > 0 && $tab.is(':visible')) {
        cy.log('Summary tab is visible');
        cy.wrap($tab).click({ force: true });
        cy.log('Summary tab clicked successfully');
      } else {
        cy.log('Summary tab is not visible or not found');
        throw new Error('Summary tab visibility check failed');
      }
    });
  }

  summaryQuestions() {
    cy.log('Verifying Summary Tab loaded');
    this.elements.summaryQuestionTitle({ timeout: 90000 }).should('exist');
    cy.log('Summary Tab question containers are present');
  }

  selectChartType() {
    cy.log('Checking Chart Type dropdown visibility');
    this.elements.selectChartType().then(($select) => {
      if ($select.length > 0 && $select.is(':visible')) {
        cy.log('Chart Type dropdown is visible');
        cy.wrap($select).select('Chart').should('have.value', 'selectBase').then(() => {
          cy.log('Chart type "Chart" selected successfully');
        });
      } else {
        cy.log('Chart Type dropdown not found or not visible');
        throw new Error('Chart Type selection failed');
      }
    });
  }

  chartType() {
    cy.log('Verifying available chart options in Chart Type dropdown');
    this.elements.chartType().find('option', { timeout: 9000 }).then((options) => {
      const texts = [...options].map((o) => o.textContent.trim());
      const expectedOptions = ['Bar', 'Vertical Bar', 'Pie', 'Doughnut'];
      const allExist = expectedOptions.every(opt => texts.includes(opt));
      if (allExist) {
        cy.log(`All expected chart options are present: ${expectedOptions.join(', ')}`);
      } else {
        const missing = expectedOptions.filter(opt => !texts.includes(opt));
        cy.log(`Missing chart options: ${missing.join(', ')}`);
        throw new Error(`Chart options verification failed. Missing: ${missing.join(', ')}`);
      }
    });
  }

  orderDropdown() {
    cy.log('Checking Order dropdown visibility');
    this.elements.orderDropdown().then(($dropdown) => {
      if ($dropdown.length > 0 && $dropdown.is(':visible')) {
        cy.log('Order dropdown is visible');
        cy.wrap($dropdown).select('Default Order').then(() => {
          cy.log('"Default Order" selected successfully');
        });
      } else {
        cy.log('Order dropdown not found or not visible');
        throw new Error('Order dropdown selection failed');
      }
    });
  }

  typeDropdown() {
    cy.log('Checking Type dropdown visibility');
    this.elements.typeDropdown().then(($dropdown) => {
      if ($dropdown.length > 0 && $dropdown.is(':visible')) {
        cy.log('Type dropdown is visible');
        cy.wrap($dropdown).select('Doughnut').should('have.value', 'doughnut').then(() => {
          cy.log('Chart type "Doughnut" selected successfully');
        });
      } else {
        cy.log('Type dropdown not found or not visible');
        throw new Error('Type dropdown selection failed');
      }
    });
  }

  uploadParticipants() {
    this.elements.uploadParticipantfile();
    cy.wait(3000);
    this.elements.participantsForreview().click({ force: true });
    this.elements.confirmParticipantspopup().should('be.visible');
    this.elements.confirmParticipantdialogFooter().should('be.visible').click();
    cy.get('@scheduleSurveyName').then((name) => {
      this.elements.tableFirstRow().should('contain.text', name);
    });
  }

surveyNameCell() {
  cy.log('Clicking on first Survey Name cell');
  this.elements.surveyNameCell().first().click({ force: true });
  cy.log('Survey Name cell clicked successfully');
}

  submittedStats() {
    cy.log('Verifying Submitted stats section');
    this.elements.submittedStats().then(($el) => {
      if ($el.length > 0 && $el.is(':visible')) {
        cy.log('Submitted stats section is visible');
        cy.wrap($el).should('be.visible').within(() => {
          cy.contains('Submitted').should('be.visible').then(() => {
            cy.log('Submitted label is visible');
          });
          cy.get('*').last().invoke('text').then((value) => {
            const val = value.trim();
            if (/^(-|\d+)$/.test(val)) {
              cy.log(`Submitted value is valid${val}`);
            } else {
              cy.log(`Invalid Submitted value: ${val}`);
              throw new Error('Submitted stats value validation failed');
            }
          });
        });
      } else {
        cy.log('Submitted stats section is not visible or not found');
        throw new Error('Submitted stats section validation failed');
      }
    });
  }
 
  partiallySubmittedColumn1() {
    cy.log(' Checking Partially Submitted column');
    this.elements.partiallySubmittedColumn().then(($el) => {
      if ($el && $el.length > 0 && $el.is(':visible')) {
        cy.log('Partially Submitted column is visible');
        cy.wrap($el).should('be.visible');
      } else {
        cy.log('Partially Submitted column not found or not visible');
      }
    });
  }

  partialComplete() {
    cy.log('Checking Partially Completed section');
    cy.contains('Partially Completed')
      .should('be.visible')
      .then(() => {
        cy.log('Partially Completed section is visible');
      });
  }

  averageTime1() {
    cy.log('Checking Average Time section');
    return cy.get('span.time').should('be.visible').invoke('text').then((timeText) => {
      cy.log(`Average Time verified: ${timeText.trim()}`);
    });
  }
}
export default new SurveyReportPage(); 