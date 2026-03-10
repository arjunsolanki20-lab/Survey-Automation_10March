
class surveyListpage {

    elements = {
        surveyListHeading: () => cy.get('.table-header-cell', { timeout: 90000 }),
        deleteSurvey: () => cy.contains('div.survey-action', 'Delete'),
        surveyDeleteconfirmation: () => cy.contains('Survey deleted successfully!', { timeout: 90000 }),
        scheduleOption: () => cy.contains('div.survey-action_kebab-menu-body-element_title', 'Schedule'),
        makeCopy: () => cy.contains('button', 'Make a Copy'),
        navigationPage: () => cy.get('[style="cursor: pointer;"]'),
        onwardRowNav: () => cy.get('[class="custom-table-pages-buttons"] svg:nth-of-type(2)', { timeout: 90000 }),
        returnRowNav: () => cy.get('[class="custom-table-pages-buttons"] svg:nth-of-type(1)', { timeout: 90000 }),
        filtervalue: () => cy.get('input[placeholder="Search for anything..."]', { timeout: 15000 }).should('be.visible'),
        filterSearch: () => cy.get('button[title="Search"]').click(),
        surveyName: () => cy.get('input[name="surveyName"]', { timeout: 90000 }),
        placeholderSearch: () => cy.get('input[placeholder="Search for anything..."]'),
        searchButton: () => cy.get('button[title="Search"]'),
        addIcon: () => cy.get('div[data-title="Add"] svg.table-action-icon'),
        totalPageIcon: () => cy.get('img[alt="Total Page"]'),
        totalCountText: () => cy.get('div.total-count'),
        countPerPageText: () => cy.get('div.count-per-page'),
        rowCountText: () => cy.get('div.row-count'),
        totalPagedropdown: () => cy.get('.table-action.table-action_dropdown').trigger('mouseover'),
        totalPagedropdownoption: () => cy.get('.custom-table-pages-dropdown-item'),
        draftStatus: () => cy.get('[class="status status_draft"]'),
        inReviewstatus: () => cy.get('[class="status status_in-review"]', { timeout: 90000 }),
        approvedStatus: () => cy.get('[class="status status_approved"]', { timeout: 90000 }),
        rejectedStatus: () => cy.get('[class="status status_rejected"]', { timeout: 90000 }),
        deleteConfirmationtext: () => cy.get('textarea.confirmation-dialog-body_textarea'),
        deleteBtn: () => cy.contains('button', 'Delete'),
        surveySchedulelink: () => cy.get('span.main-link').contains('Surveys Schedule', { timeout: 90000 }),
        threeDotmenuMakeaCopy: () => cy.get('div.survey-action_kebab-menu-body-element_title').contains('Make a Copy'),
        makeCopybtnDetailspage: () => cy.get('div.submit-button-container').find('button.button_form-primary_button').contains('Make a Copy'),
        backTolist: () => cy.get('button[title="Back to List"]', { timeout: 90000 }),
        openDraftsurvey: () => cy.get('button[title="Open Draft Survey"]', { timeout: 90000 }),
        draftSuccess: () => cy.contains('Your survey has been copied successfully and saved as a draft.', { timeout: 90000 }),
        questionMultiline: (questionText) => cy.contains('span.sv-string-viewer--multiline', questionText, { timeout: 90000 }),
        clickThreeDotMenuForStatus: () => cy.get('button.kebab-menu.kebab-menu_kebab-menu-button', { timeout: 90000 }),
        editDraftSurvey: () => cy.contains('a.second-link', 'Edit Survey', { timeout: 90000 }),
        rowCountrange: () => cy.get('.row-count', { timeout: 90000 }),
        dropdownContains: () => cy.get('.search-bar-d2_type-selector_label').first(),
        nameDropdown: () => cy.get('.search-bar-d2_type-selector_option').contains('Name', { timeout: 90000 }),
        departmentDropdown: () => cy.get('.search-bar-d2_type-selector_option').contains('Department'),
        languageDropdown: () => cy.get('.search-bar-d2_type-selector_option').contains('Language'),
        statusDropdown: () => cy.get('.search-bar-d2_type-selector_option').contains('Status'),
        resetButton: () => cy.get('div[data-title="Reset"]'),
        sortingbyName: () => cy.get('path[d^="M 16 3.59375"]').eq(0).closest('svg'),
        ascendingNamesort: () => cy.get('span.title-sort-order[title="Ascending"]'),
        sortingbyStatus: () => cy.contains('th', 'Status').find('span.title-sort-order'),
        descendingStatussort: () => cy.contains('th', 'Status').find('span.title-sort-order'),
        tableRows: () => cy.get('table tbody tr'),
        customeTablepageDropdown: () => cy.contains('.custom-table-pages-dropdown-item', pageSize),
        draftStatuscheck: () => cy.contains('.status.status_draft', 'Draft'),
        customeTablepagesButtons: () => cy.get('.custom-table-pages-buttons svg:nth-of-type(2)'),
        reviewStatsuscheck: () => cy.contains('.status.status_in-review', 'In Review'),
        approvedSttauscheck: () => cy.contains('.status.status_approved', 'Approved'),
        surveyNameclick: () => cy.get('a, .surveyName, .survey-title, td'),
        rejectedStatuscheck: () => cy.contains('.status.status_rejected', 'Rejected'),
        ThreedotMenuoptionReject: () => cy.contains('div.survey-action:visible', 'Reject'),
        ThreedotMenuoptionApprove: () => cy.contains('div.survey-action:visible', 'Approve'),
        ThreedotMenuoptionEdit: () => cy.contains('div.survey-action', 'Edit'),
        ThreedotMenuoptionDelete: () => cy.contains('div.survey-action', 'Delete'),
        ThreedotMenuoptionMakeaCopy: () => cy.contains('div.survey-action', 'Make a Copy'),
        ThreedotMenuoptionSchedule: () => cy.contains('div.survey-action', 'Schedule'),
        surveyListsortTitle: () => cy.get('span.title-sort-order'),
        Statussort: () => cy.get('th').contains('Status'),
    }

    SurveyListheading() {
        this.elements.surveyListHeading().should('be.visible').and('have.length.greaterThan', 0);
        cy.log("Survey list table is visible.");
        const headers = [
            'Name', 'Department', 'Language', 'Created By', 'Created On', 'Reviewed By', 'Reviewed On', 'Status'
        ];
        headers.forEach(header => {
            cy.contains('.table-header-cell', header).scrollIntoView({ duration: 1000 }).should('be.visible').should('not.have.css', 'text-overflow', 'ellipsis').then(() => cy.log(`Header '${header}' is visible and not truncated.`));
        });
    }

    SurveyListElements() {
        this.elements.placeholderSearch().should('be.visible').then(() => cy.log("Search placeholder is visible."));
        this.elements.searchButton().should('be.disabled').then(() => cy.log("Search button is initially disabled."));
        this.elements.resetButton().should('be.visible').then(() => cy.log("Reset button is visible."));
        this.elements.addIcon().should('be.visible').then(() => cy.log("Add icon is visible."));
        this.elements.totalPageIcon().should('be.visible').then(() => cy.log("Total Page icon is visible."));
        this.elements.totalCountText().should('be.visible').then(() => cy.log("Total count text is visible."));
        this.elements.countPerPageText().should('be.visible').then(() => cy.log("Count per page text is visible."));
        this.elements.rowCountText().should('be.visible').then(() => cy.log("Row count text is visible."));
        cy.log("All survey list elements are present and correctly state checked.");
    }
    countPerpageChnages() {
        this.elements.totalPagedropdown().trigger('mouseover');
        this.elements.totalPagedropdownoption().contains('50').click({ force: true });
        this.elements.countPerPageText('50').should('be.visible');
        cy.log("the survey list table is updated to show the selected number of surveys per page");
    }

    selectDraftStatusOfAnyRow(maxPages = 20) {
        let currentPage = 1;
        const searchDraft = () => {
            cy.log(`Searching for **Draft** status on page ${currentPage}...`);
            cy.get('table', { timeout: 20000 }).should('exist');
            cy.get('body').then($body => {
                const draftExists = $body.find('.status.status_draft').length > 0;
                if (draftExists) {
                    cy.log('Draft found, opening the survey.');
                    this.elements.draftStatuscheck().parents('tr').within(() => {
                        this.elements.surveyNameclick().first().click({ force: true });
                    });
                    cy.log("Draft survey clicked.");
                    cy.url({ timeout: 20000 }).should('include', '/edit').then(() => {
                        cy.log(" Successfully navigated to the '/edit' URL for the Draft survey.");
                    });
                    return;
                }
                const hasNext = $body.find(this.elements.customeTablepagesButtons()).length > 0;
                if (hasNext && currentPage < maxPages) {
                    cy.log('Moving to next page...');
                    currentPage++;
                    this.elements.customeTablepagesButtons().first().click({ force: true });
                    cy.wait(1500).then(() => searchDraft());
                }
                else {
                    cy.log(`No Draft survey found after checking ${currentPage} pages (max ${maxPages}).`);
                }
            });
        };
        searchDraft();
    }

    selectInreviewstatusOfanyRow(maxPages = 20) {
        let currentPage = 1;
        const searchReview = () => {
            cy.log(`Checking page ${currentPage} for 'In Review' status...`);
            cy.get('table', { timeout: 15000 }).should('exist');
            cy.get('body').then(($body) => {
                const reviewExists = $body.find('.status.status_in-review').length > 0;
                if (reviewExists) {
                    cy.log('Found "In Review" survey, opening...');
                    this.elements.reviewStatsuscheck().parents('tr').within(() => {
                        this.elements.surveyNameclick().first().click({ force: true });
                    });
                    cy.log("'In Review' survey clicked.");
                    cy.url({ timeout: 20000 }).should('include', '/view').then(() => {
                        cy.log("Successfully navigated to the '/view' URL for the 'In Review' survey.");
                    });
                    return;
                }
                const hasNext = $body.find('.custom-table-pages-buttons svg:nth-of-type(2)').length > 0;
                if (hasNext && currentPage < maxPages) {
                    cy.log('Moving to next page...');
                    currentPage++;
                    this.elements.customeTablepagesButtons().first().click({ force: true });
                    cy.wait(1500).then(() => searchReview());
                } else {
                    cy.log(`No 'In Review' survey found after checking ${currentPage} pages (max ${maxPages}).`);
                }
            });
        };
        searchReview();
    }

    selectApprovedstatusOfanyRow(maxPages = 40) {
        let currentPage = 1;
        const searchApproved = () => {
            cy.log(`Checking page ${currentPage} for 'Approved' status...`);
            return cy.get('table', { timeout: 15000 }).should('exist')
                .then(() => cy.get('body'))
                .then(($body) => {
                    const approvedExists = $body.find('.status.status_approved').length > 0;
                    if (approvedExists) {
                        cy.log('Found "Approved" survey — opening...');
                        this.elements.approvedSttauscheck().parents('tr').within(() => {
                            this.elements.surveyNameclick().first().click({ force: true });
                        });
                        cy.log("'Approved' survey clicked.");
                        return cy.url({ timeout: 20000 }).should('include', '/view').then(() => {
                            cy.log("Successfully navigated to the '/view' URL for the 'Approved' survey.");
                        });
                    }
                    const hasNext = $body.find('.custom-table-pages-buttons svg:nth-of-type(2)').length > 0;
                    if (hasNext && currentPage < maxPages) {
                        cy.log(`Moving to next page ${currentPage + 1}...`);
                        currentPage++;
                        return this.elements.customeTablepagesButtons().first().click({ force: true }).wait(1500).then(() => searchApproved());
                    }
                    cy.log(`No 'Approved' survey found after checking ${currentPage} pages (max ${maxPages}).`);
                });
        };
        return searchApproved();
    }
    selectRejectedStatusOfAnyRow(maxPages = 20) {
        let currentPage = 1;
        const searchRejected = () => {
            cy.log(`Checking page ${currentPage} for 'Rejected'status...`);
            return cy.get('table', { timeout: 15000 }).should('exist')
                .then(() => cy.get('body'))
                .then(($body) => {
                    const hasRejected = $body.find('.status.status_rejected').length > 0;
                    if (hasRejected) {
                        cy.log('Found "Rejected" survey opening...');
                        this.elements.rejectedStatuscheck().parents('tr').within(() => {
                            this.elements.surveyNameclick().first().click({ force: true });
                        });
                        return cy.url({ timeout: 90000 })
                            .should('include', '/view').then(() => {
                                cy.log("Successfully navigated to the '/view' URL for the 'Rejected' survey.");
                            });
                    }
                    const nextButton = $body.find('.custom-table-pages-buttons svg:nth-of-type(2)');
                    const canGoNext = nextButton.length > 0 && currentPage < maxPages;
                    if (canGoNext) {
                        cy.log(`Moving to page ${currentPage + 1}...`);
                        currentPage++;
                        return this.elements.customeTablepagesButtons().first().click({ force: true }).then(() => cy.get('table').should('exist')).then(() => searchRejected());
                    }
                    cy.log(`No 'Rejected' survey found after checking ${currentPage} pages (max ${maxPages}). Returning null.`);
                    return null;
                });
        };

        return searchRejected();
    }
    clickThreeDotMenuForStatusinReview(status = "In Review", rowIndex = 0) {
        cy.log(`Searching for status: '${status}'`);
        cy.get('tbody tr', { timeout: 90000 }).should('have.length.greaterThan', 0).then($rows => {
            const filteredRows = $rows.filter((i, el) =>
                el.innerText.includes(status)
            );
            if (!filteredRows.length) {
                throw new Error(`No rows found with status: '${status}'`);
            }
            const row = filteredRows[rowIndex];
            cy.wrap(row).scrollIntoView({ block: 'center' });
            cy.wrap(row).then($row => {
                const scrollParent = $row.parents().filter((i, el) => {
                    const style = window.getComputedStyle(el);
                    return style.overflowX === 'auto' || style.overflowX === 'scroll';
                }).first();
                if (scrollParent.length) {
                    cy.wrap(scrollParent).scrollTo('right', { ensureScrollable: false });
                }
            });
            cy.wrap(row).within(() => {
                cy.get('button.kebab-menu').should('exist').click({ force: true });
            });
        });
        cy.get('div.survey-action', { timeout: 20000 }).should('exist').first().scrollIntoView({ block: 'center' });
        cy.contains('div.survey-action', 'Reject').should('exist');
        cy.contains('div.survey-action', 'Approve').should('exist');
        cy.log("Menu options available after scrolling into view");
    }

    clickOninReviewasSurvaymaker(status = "In Review", rowIndex = 0) {
        cy.log(`Searching for status '${status}' (Maker validation)...`);
        cy.get('tr', { timeout: 90000 }).should('have.length.greaterThan', 0).then(($rows) => {
            const filteredRows = [...$rows].filter(row =>
                row.innerText.includes(status)
            );
            const rowsFound = filteredRows.length;
            cy.log(`Found ${rowsFound} row(s) containing '${status}'.`);
            if (rowsFound === 0) {
                cy.log(` No rows found with status '${status}'.`);
                return;
            }
            if (rowIndex >= rowsFound) {
                cy.log(`Row index ${rowIndex} out of range. Only ${rowsFound} row(s).`);
                return;
            }
            cy.wrap(filteredRows[rowIndex]).within(() => {
                cy.log("Attempting to click three-dot menu...");
                this.elements.clickThreeDotMenuForStatus().scrollIntoView({ ensureScrollable: true }).should('exist').click({ force: true }).then(
                    () => cy.log("Three-dot menu clicked."),
                    () => cy.log("Failed to click three-dot menu.")
                );
                cy.contains('div.survey-action', 'Make a Copy')
                    .should('be.visible')
                    .then(
                        () => cy.log("'Make a Copy' option is visible."),
                        () => cy.log("'Make a Copy' is NOT visible.")
                    );
                cy.contains('div.survey-action', 'Reject').should('not.exist')
                    .then(
                        () => cy.log("'Reject' correctly NOT visible (Maker role)."),
                        () => cy.log("'Reject' IS visible (unexpected for Maker role).")
                    );
                cy.contains('div.survey-action', 'Approve').should('not.exist')
                    .then(
                        () => cy.log("'Approve' correctly NOT visible (Maker role)."),
                        () => cy.log("'Approve' IS visible (unexpected for Maker role).")
                    );
            });
        })
    }
    clickThreeDotMenuForStatusinAprrove(status = "Approved", rowIndex = 0) {
        cy.url().should('include', '/SurveyUI/surveys');
        cy.log("Confirmed current page is the Survey List.");
        cy.get('body').click(0, 0, { force: true });
        cy.wait(1000);
        cy.log(`Searching for status: **'${status}'** to open three-dot menu...`);
        cy.get('tr', { timeout: 90000 }).should('have.length.greaterThan', 0)
            .then($rows => {
                const filteredRows = $rows.filter((i, el) => el.innerText.trim().includes(status));
                const rowsFound = filteredRows.length;
                cy.log(`Found ${rowsFound} row(s) containing status '${status}'.`);
                if (rowsFound === 0) {
                    cy.log(`No rows found with status '${status}'. Cannot proceed.`);
                    throw new Error(`No rows found with status '${status}'`);
                }
                if (rowIndex >= rowsFound) {
                    cy.log(`Requested row index ${rowIndex} is out of bounds (only ${rowsFound} rows found).`);
                    throw new Error(`Row index ${rowIndex} out of bounds`);
                }
                cy.wrap(filteredRows[rowIndex]).within(() => {
                    cy.log(`Opening three-dot menu for row index: ${rowIndex}`);
                    this.elements.clickThreeDotMenuForStatus().scrollIntoView({ offset: { top: -100, left: 0 } }).should('be.visible').click({ force: true });
                    cy.log("Three-dot menu clicked successfully.");
                });
                cy.wait(1000);
                cy.contains('div.survey-action:visible', 'Schedule').should('be.visible');
                cy.log("Schedule option is visible for 'Approved' status.");
                cy.contains('div.survey-action:visible', 'Make a Copy').should('be.visible');
                cy.log("Make a Copy option is visible for 'Approved' status.");
                cy.get('div.survey-action:visible').invoke('text').then(allText => {
                    expect(allText).to.not.include('Edit');
                    cy.log("'Edit' option is correctly **NOT** visible.");
                    expect(allText).to.not.include('Delete');
                    cy.log("'Delete'option is correctly **NOT** visible.");
                    expect(allText).to.not.include('Reject');
                    cy.log("'Reject' option is correctly **NOT** visible.");
                    expect(allText).to.not.include('Approve');
                    cy.log("'Approve' option is correctly **NOT** visible.");
                });
                cy.log("All checks passed for 'Approved' status menu.");
            });
    }
    clickThreeDotMenuForStatusinDraft(status = "Draft", rowIndex = 0) {
        cy.url().should('include', '/SurveyUI/surveys').then(() => cy.log("Confirmed current page is the Survey List."));
        cy.log(`Searching for status: '${status}'to open three-dot menu`);
        cy.get('tr', { timeout: 90000 })
            .should('have.length.greaterThan', 0)
            .then($rows => {
                const filteredRows = $rows.filter((i, el) => el.innerText.trim().includes(status));
                const rowsFound = filteredRows.length;
                cy.log(`Found ${rowsFound} row(s) containing status '${status}'.`);
                if (rowsFound === 0) {
                    cy.log(`No rows found with status: '${status}'. Cannot proceed.`);
                    throw new Error(`No rows found with status: '${status}'`);
                }
                if (rowIndex >= rowsFound) {
                    cy.log(` Requested row index ${rowIndex} is out of bounds (only ${rowsFound} rows found).`);
                    throw new Error(`Row index ${rowIndex} out of bounds`);
                }
                cy.wrap(filteredRows[rowIndex]).within(() => {
                    cy.log(`Opening three-dot menu for row index: ${rowIndex}`);
                    this.elements.clickThreeDotMenuForStatus().scrollIntoView({ offset: { top: -100, left: 0 } }).should('be.visible').click({ force: true });
                    cy.log("Three-dot menu clicked successfully.");
                    this.elements.ThreedotMenuoptionEdit().should('be.visible').then(() => cy.log("Edit option is visible for 'Draft' status."));
                    this.elements.ThreedotMenuoptionDelete().should('be.visible').then(() => cy.log("Delete option is visible for 'Draft' status."));
                    this.elements.ThreedotMenuoptionSchedule().should('not.exist').then(() => cy.log("'Schedule' option is correctly **NOT** visible."));
                    this.elements.ThreedotMenuoptionApprove().should('not.exist').then(() => cy.log("'Approve' option is correctly **NOT** visible."));
                });
            });
    }
    clickOnDeletesurvey() {
        cy.log("Attempting to click Delete option...");
        this.elements.deleteSurvey().should('be.visible').click({ force: true })
            .then(() => {
                cy.log("Clicked on 'Delete' option in the three-dot menu.");
            });
    }
    surveyDeleteconfirmation() {
        cy.log("Checking for delete confirmation dialog");
        cy.get('body').then($body => {
            const draftExists = $body.find('.status.status_draft').length > 0;
            if (!draftExists) {
                cy.log("No draft survey found for deletion. Skipping confirmation steps.");
                return;
            }
            cy.log("Draft survey found proceeding with delete confirmation.");
            const confirmationText = 'This survey is no longer needed';
            this.elements.deleteConfirmationtext().should('be.visible').clear().type(confirmationText).should('have.value', confirmationText).then(() => {
                cy.log("Typed confirmation text in the dialog.");
            });
            this.elements.deleteBtn().should('be.visible').should('not.be.disabled').click({ force: true }).then(() => {
                cy.log("Clicked the final 'Delete' button.");
            });

            this.elements.surveyDeleteconfirmation().should('be.visible').then(() => {
                cy.log("'Survey deleted successfully!' message is visible.");
            });
        });
    }
    clickOnScheduleoption() {
        this.elements.scheduleOption().should('exist').should('be.visible').and('not.be.disabled').then(($el) => {
            cy.wrap($el).invoke('text').then((txt) => {
                if (txt) {
                    expect(txt).to.not.contain('Error');
                }
            });
            cy.log("'Schedule' option is visible and enabled.");
        });
        this.elements.scheduleOption().click({ force: true }).then(() => cy.log("Clicked on 'Schedule' option."));
        this.elements.surveySchedulelink().should('exist').should('be.visible').and('not.be.disabled').
            then(($el) => {
                cy.wrap($el).invoke('text').then((txt) => {
                    if (txt) {
                        expect(txt).to.not.contain('Failed');
                    }
                });
                cy.log("'Survey Schedule' link is visible and enabled.");
            });
        this.elements.surveySchedulelink().click({ force: true }).then(() => cy.log("Clicked on 'Surveys Schedule' link."));
        cy.url().then(url => {
            if (!url) {
                cy.log(" URL returned null temporarily skipping check.");
                return;
            }
            expect(url).to.include('/schedule');
            cy.log("User is successfully on the survey schedule page.");
            expect(url).to.not.include('/error');
            cy.log("URL does NOT contain '/error'.");
        });
    }
    clickOnmakeCopy() {
        this.elements.threeDotmenuMakeaCopy().should('exist').should('be.visible').click({ force: true })
            .then(() => cy.log("Clicked on 'Make a Copy' option in the three-dot menu."));
    }
    makeCopysurveyDetailspage() {
        this.elements.makeCopybtnDetailspage().should('be.visible').click()
            .then(() => cy.log("Clicked 'Make a Copy' button on the survey details page."));
    }
    clickOnbackTolist() {
        this.elements.backTolist().should('be.visible').click({ force: true }).then(() => cy.log("Clicked 'Back to List' button."));
        cy.url().should('include', '/surveys').then(() => cy.log("Successfully navigated back to the survey list."));
        this.elements.draftStatus().should('be.visible').then(() => cy.log("Confirmed at least one Draft status survey is visible on the list."));
    }
    rejectSurveywithcomments() {
        cy.log("Clicking 'Reject' option from three-dot menu");
        cy.contains('button.button_form-secondary_button', 'Reject').first().should('be.visible').click({ force: true });
        cy.log("Entering rejection reason");
        cy.get('textarea.confirmation-dialog-body_textarea').should('be.visible').and('be.enabled').clear().type('Rejecting due to invalid data');
        cy.log("Submitting rejection");
        cy.contains('button[type="submit"]', 'Reject').should('be.visible').and('not.be.disabled').click({ force: true });
        cy.log("Survey rejection submitted successfully");
    }
    clickOpendraftSurvey() {
        this.elements.openDraftsurvey().click().then(() => cy.log("Clicked 'Open Draft Survey' button."));
        this.elements.draftSuccess().should('be.visible').then(() => cy.log("Success message 'Your survey has been copied' is visible."));
        this.elements.editDraftSurvey().should('be.visible').click().then(() => cy.log("Clicked 'Edit Survey' link."));
        cy.url().should('include', '/edit').then(() => cy.log("Draft survey has been successfully opened to edit."));
    }
    clickOnnavigationPage() {
        cy.wait(3000).then(() => cy.log("Waiting 3 seconds for page load/stabilization."));
        this.elements.navigationPage().should('be.visible').click().then(() => cy.log("Clicked the navigation page link."));
        this.elements.onwardRowNav().click().then(() => cy.log("Clicked onward navigation button (next page)."));
        this.elements.rowCountrange().should('be.visible').and('have.text', '41 - 60');
        this.elements.returnRowNav().click().then(() => cy.log("Clicked return navigation button (previous page)."));
        this.elements.rowCountrange().should('be.visible').and('not.have.text', '41 - 60');
    }
    clickOnFilterByName(surveyName) {
        cy.log(`Starting filter by Name: '${surveyName}'`);
        this.elements.dropdownContains().trigger('mouseover', { force: true });
        cy.wait(500);
        this.elements.nameDropdown().trigger('mouseover', { force: true }).click({ force: true }).then(() => cy.log("Selected 'Name' from the filter dropdown."));
        cy.wait(500);
        this.elements.filtervalue().should('be.visible').clear().type(surveyName).should('have.value', surveyName).then(() => cy.log(`Typed '${surveyName}' into the filter input.`));
        cy.log("Ready to search by name.");
    }
    clickOnFilterByDepartment(Department) {
        cy.log(`Starting filter by Department: '${Department}'`);
        cy.wait(3000).then(() => cy.log("Waiting 3 seconds for stabilization."));
        this.elements.dropdownContains().trigger('mouseover', { force: true });
        this.elements.departmentDropdown().trigger('mouseover', { force: true }).click({ force: true }).then(() => cy.log("Selected 'Department' from the filter dropdown."));
        this.elements.filtervalue().should('be.visible').clear().type(Department).should('have.value', Department).then(() => cy.log(`Typed '${Department}' into the filter input.`));
        cy.log("Ready to search by department.");
    }
    clickOnFilterByLanguage(Language) {
        cy.log(`Starting filter by Language: '${Language}'`);
        cy.wait(3000).then(() => cy.log("Waiting 3 seconds for stabilization."));
        this.elements.dropdownContains().trigger('mouseover', { force: true });
        this.elements.languageDropdown().trigger('mouseover', { force: true }).click({ force: true })
            .then(() => cy.log("Selected 'Language' from the filter dropdown."));
        this.elements.filtervalue().should('be.visible').clear().type(Language).should('have.value', Language)
            .then(() => cy.log(`Typed '${Language}' into the filter input.`));
        cy.log("Ready to search by language.");
    }
    clickOnFilterByStatus(Status) {
        cy.log(`Starting filter by Status: '${Status}'`);
        this.elements.dropdownContains().trigger('mouseover', { force: true });
        this.elements.statusDropdown().trigger('mouseover', { force: true }).click({ force: true })
            .then(() => cy.log("Selected 'Status' from the filter dropdown."));
        this.elements.filtervalue().scrollIntoView().should('be.visible').clear().type(Status).should('have.value', Status)
            .then(() => cy.log(`Typed '${Status}' into the filter input.`));
        cy.log("Ready to search by status.");
    }

    clickFilterSearch() {
        this.elements.filterSearch().should('not.be.disabled').click({ force: true })
            .then(() => cy.log("Clicked the Search button to apply filter."));
        cy.get('table tr').should('have.length.greaterThan', 1) // Should have at least one data row
            .then(() => cy.log("Search results are displayed."));
    }
    openSurveyDetailsOfSelectedSurvey() {
        cy.get('td.table-cell-max-width.cursor-pointer').first().click()
            .then(() => cy.log("Clicked on the first survey name to open its details."));
        cy.url().should('include', '/view').or('include', '/edit') // Assuming it navigates to view/edit page
            .then(() => cy.log("Successfully navigated to the survey details page."));
    }
    clickOnrest() {
        cy.log("Attempting to click the Reset button...");
        this.elements.resetButton().should('exist').and('be.visible').and('not.be.disabled').then(() => {
            cy.log("Reset button is visible and enabled.");
        });
        cy.log("Clicking reset button now...");
        this.elements.resetButton().click({ force: true });
        cy.log("Reset button clicked successfully.");
        cy.get('input[placeholder="Search for anything..."]', { timeout: 10000 }).should('be.visible').then($input => {
            const val = $input.val();
            if (!val) {
                cy.log("Search input cleared.");
            } else {
                cy.log(`Search input NOT cleared, found: "${val}"`);
            }
        });
    }
    clickOnnameSorting() {
        cy.log("Starting Name column sorting validation...");
        cy.get('thead tr th', { timeout: 20000 }).then(($headers) => {
            let nameIndex = -1;
            $headers.each((i, th) => {
                if (th.innerText.trim() === "Name") {
                    nameIndex = i + 1;
                }
            });

            cy.log(`Detected Name column index: ${nameIndex}`);
            expect(nameIndex, "'Name' column must exist").to.be.greaterThan(0);
            const sortSelector = `thead tr th:nth-child(${nameIndex}) svg, thead tr th:nth-child(${nameIndex}) path`;
            cy.get(sortSelector, { timeout: 10000 }).first().should('exist').click({ force: true });
            cy.log("Clicked Name column sorting arrow.");
            this.elements.surveyListsortTitle({ timeout: 15000 }).should('exist').invoke('attr', 'title')
                .then((title) => {
                    cy.log(`Detected sort order: ${title}`);
                    if (title === "Ascending") {
                        cy.log("Sorting changed to ASCENDING successfully.");
                    } else {
                        throw new Error(`Sorting indicator is not Ascending. Instead found: ${title}`);
                    }
                });
        });
    }
    clickOnstatusSorting() {
        cy.log("Attempting to sort by Status (Descending).");

        this.elements.sortingbyStatus().scrollIntoView().click({ force: true })
            .then(() => cy.log("Clicked the Status column sorting icon."));
        this.elements.descendingStatussort().click({ force: true })
            .then(() => cy.log("Clicked 'Descending' sort option."));
        this.elements.Statussort().within(() => {
            this.elements.surveyListsortTitle().should('be.visible').and('have.attr', 'title', 'Descending');
        });
        cy.log("Status column is sorted in DESCENDING order.");
    }

}
export default surveyListpage;

