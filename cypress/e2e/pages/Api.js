
class Api {

  constructor() {
    this.apiKey =
      'u8uqjK1SfLHVcJ2mRVbG07H6yf83MN+pLSoT03umoct14pOZRBE/22JS4uBjldZAq8GIIP0QZ7JzVSnElyvTCg==';
    this.createdOn = null;
    this.generatedLink = null;
  }

  //------------- UI Elements -------------
  elements = {
    visitGeneratelink: () => {
      if (!this.generatedLink) {
        throw new Error(`generatedLink is NULL when calling cy.visit()`);
      }
      cy.visit(this.generatedLink);
    },

    answerSurvey: () =>
      cy.get('.sd-item__control-label').should('be.visible'),

    completeButtonclick: () =>
      cy.get('.sd-btn--action.sd-navigation__complete-btn'),

    verifySuccessofCompletesurvey: () =>
      cy.contains('h3', 'Thank you for completing the survey'),

    yesNoBoolean: () =>
        cy.contains('.sd-boolean__label span', 'Yes'),

    previousButton: () => cy.get('div#sv-nav-prev input.sd-btn.sd-navigation__prev-btn[title="Previous"]', { timeout: 30000 }),
    previewNextbtn: () => cy.get('input.sd-btn.sd-navigation__next-btn[title="Next"][value="Next"]'),

  };

  //------------- Store Local Created Time -------------
  extractCreatedOn() {
    const now = new Date();
    now.setSeconds(0, 0);

    const pad = (n, len = 2) => String(n).padStart(len, '0');
    const yyyy = now.getFullYear();
    const mm = pad(now.getMonth() + 1);
    const dd = pad(now.getDate());
    const HH = pad(now.getHours());
    const MI = pad(now.getMinutes());
    const SS = pad(now.getSeconds());
    const mss = pad(now.getMilliseconds(), 3);

    this.createdOn = `${yyyy}-${mm}-${dd}T${HH}:${MI}:${SS}.${mss}`;
    cy.log(`Stored createdOn: ${this.createdOn}`);
  }

  runApiFlow() {
  cy.log('Starting API flow');
  return cy.url({ timeout: 60000 })
    .should(url => expect(url).to.match(/[0-9A-Fa-f\-]{36}/))
    .then(url => {
      cy.log('URL loaded successfully');
      const surveyGuid = url.match(/[0-9A-Fa-f\-]{36}/)[0];
      cy.log(`Extracted Survey GUID: ${surveyGuid}`);
      cy.log('Waiting before generating survey link');
      cy.wait(30000);
      cy.log('Calling Generate Survey Link API');
      return cy.request({
        method: 'POST',
        url: 'https://twowayserver.future-club.com/survey/api/survey/puffin/v1/generateLink/schedule',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.apiKey,
        },
        body: { scheduleGuid: surveyGuid },
      });
    })
    .then(response => {
      cy.log('Generate Link API response received');
      expect(response.status).to.eq(200);
      cy.log(`Generate Link API Status: ${response.status}`);
      const dataArray = response.body?.data;
      if (!Array.isArray(dataArray)) {
        cy.log('Invalid response structure detected');
        throw new Error(`response.body.data is missing or invalid`);
      }
      cy.log(`Total records received: ${dataArray.length}`);
      cy.log('Waiting before processing records');
      cy.wait(30000);
      return cy.wrap(dataArray).each(item => {
        cy.log('Processing transaction record');
        const transactionId = item.transactionId;
        const subTransactionId = item.links?.[0]?.subTransactionId;
        const generatedLink = item.links?.[0]?.generatedLink;
        cy.log(`TransactionId: ${transactionId}`);
        cy.log(`SubTransactionId: ${subTransactionId}`);
        this.generatedLink = generatedLink;
        cy.log(`Stored Generated Link → ${this.generatedLink}`);
        cy.log('Generating CreatedOn timestamp');
        this.extractCreatedOn();
        const deliveredOn = this.createdOn;
        cy.log(`PUT Body DeliveredOn: ${deliveredOn}`);
        cy.log('Waiting before PUT request');
        cy.wait(30000);
        cy.log('Calling Transaction Status Update API');
        return cy.request({
          method: 'PUT',
          url: 'https://twowayserver.future-club.com/survey/api/survey/puffin/v1/transactions',
          headers: {
            'Content-Type': 'application/json',
            Authorization: this.apiKey,
          },
          body: [
            {
              transactionId,
              subTransactionId,
              channelId: 1,
              deliveredOn,
              status: 'DELIVERED',
              deliveryFailureReason: 'string',
            },
          ],
          failOnStatusCode: false,
        }).then(res2 => {
          cy.log('PUT API response received');
          cy.log(`PUT Response Status: ${res2.status}`);
        });
      });
    });
}

  SubmitSurvey() {
  cy.log('Navigating to generated survey link');
  this.elements.visitGeneratelink();
  cy.log('Selecting Yes answer in survey');
  this.elements.answerSurvey().contains('Yes').click();
  cy.log('Clicking Complete button');
  this.elements.completeButtonclick().should('be.visible').click();
  cy.log('Verifying survey completion success message');
  this.elements.verifySuccessofCompletesurvey().should('be.visible');
  cy.log('Navigating back after survey submission');
  cy.go('back');
  cy.log('Waiting after navigation');
  cy.wait(20000);
}

  SubmitSurveyArabic() {
  cy.log('Navigating to generated Arabic survey link');
  this.elements.visitGeneratelink();
  cy.log('Selecting first Arabic answer option');
  this.elements.answerSurvey().eq(0).scrollIntoView({ ensureScrollable: false }).and('be.visible').contains('كيف').click({ force: true });
  cy.log('Selecting second Arabic answer option');
  this.elements.answerSurvey().eq(3).scrollIntoView({ ensureScrollable: false }).and('be.visible').contains('كيف').click({ force: true });
  cy.log('Clicking Complete button for Arabic survey');
  this.elements.completeButtonclick().should('be.visible').click();
  cy.log('Verifying Arabic survey completion success message');
  this.elements.verifySuccessofCompletesurvey().should('be.visible');
  cy.log('Navigating back after Arabic survey submission');
  cy.go('back');
  cy.log('Waiting after navigation');
  cy.wait(20000);
}

  userSelectAndSubmitAllQuestions() {
  cy.log('Visiting generated survey link');
  this.elements.visitGeneratelink();
  cy.log('Selecting first Arabic answer');
  this.elements.answerSurvey({ timeout: 30000 }).eq(0).scrollIntoView({ ensureScrollable: false }).and('be.visible').contains('كيف').click({ force: true });
  cy.log('Selecting second Arabic answer');
  this.elements.answerSurvey({ timeout: 30000 }).eq(3).scrollIntoView({ ensureScrollable: false }).and('be.visible').contains('كيف').click({ force: true });
  cy.log('Selecting Yes/No Boolean option');
  this.elements.yesNoBoolean({ timeout: 30000 }).should('be.visible').click({ force: true });
  cy.log('Verifying first option is checked');
  cy.get('div.sd-item', { timeout: 30000 }).eq(0).should('have.class', 'sd-item--checked');
  cy.log('Verifying second option is checked');
  cy.get('div.sd-item', { timeout: 30000 }).eq(3).should('have.class', 'sd-item--checked');
  cy.log('Clicking Complete button');
  this.elements.completeButtonclick().should('be.visible').click();
  cy.log('Verifying survey completion success message');
  this.elements.verifySuccessofCompletesurvey().should('be.visible');
  cy.log('Navigating back after submission');
  cy.go('back');
  cy.log('Waiting after navigation');
  cy.wait(20000);
}

verifyAllQuestionsSeleted_Complete() {
  cy.log('Visiting generated survey link');
  this.elements.visitGeneratelink();
  cy.log('Selecting first Arabic answer on page 1');
  this.elements.answerSurvey({ timeout: 30000 }).eq(0).scrollIntoView({ ensureScrollable: false }).and('be.visible').contains('كيف').click({ force: true });
  cy.log('Selecting second Arabic answer on page 1');
  this.elements.answerSurvey({ timeout: 30000 }).eq(3).scrollIntoView({ ensureScrollable: false }).and('be.visible').contains('كيف').click({ force: true });
  cy.log('Selecting Yes/No Boolean on page 1');
  this.elements.yesNoBoolean({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true });
  cy.log('Verifying first option checked on page 1');
  cy.get('div.sd-item', { timeout: 30000 }).eq(0).should('have.class', 'sd-item--checked');
  cy.log('Verifying second option checked on page 1');
  cy.get('div.sd-item', { timeout: 30000 }).eq(3).should('have.class', 'sd-item--checked');
  cy.log('Navigating to next page');
  this.elements.previewNextbtn().scrollIntoView({ ensureScrollable: false }).click({ force: true });
  cy.log('Selecting first Arabic answer on page 2');
  this.elements.answerSurvey({ timeout: 30000 }).eq(0).scrollIntoView({ ensureScrollable: false }).and('be.visible').contains('كيف').click({ force: true });
  cy.log('Selecting second Arabic answer on page 2');
  this.elements.answerSurvey({ timeout: 30000 }).eq(3).scrollIntoView({ ensureScrollable: false }).and('be.visible').contains('كيف').click({ force: true });
  cy.log('Selecting Yes/No Boolean on page 2');
  this.elements.yesNoBoolean({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible').click({ force: true });
  cy.log('Verifying first option checked on page 2');
  cy.get('div.sd-item', { timeout: 30000 }).eq(0).should('have.class', 'sd-item--checked');
  cy.log('Verifying second option checked on page 2');
  cy.get('div.sd-item', { timeout: 30000 }).eq(3).should('have.class', 'sd-item--checked');
  cy.log('Navigating to previous page');
  this.elements.previousButton().scrollIntoView({ ensureScrollable: false }).click({ force: true });
  cy.log('Verifying selections persisted on previous page');
  cy.get('div.sd-item', { timeout: 30000 }).eq(0).should('have.class', 'sd-item--checked');
  cy.get('div.sd-item', { timeout: 30000 }).eq(3).should('have.class', 'sd-item--checked');
  cy.log('Navigating forward again');
  this.elements.previewNextbtn().scrollIntoView({ ensureScrollable: false }).click({ force: true });
  cy.log('Verifying selections persisted after navigation');
  cy.get('div.sd-item', { timeout: 30000 }).eq(0).should('have.class', 'sd-item--checked');
  cy.get('div.sd-item', { timeout: 30000 }).eq(3).should('have.class', 'sd-item--checked');
}

  verifyPartialQuestionsSeleted_partialComplete() {
  cy.log('Visiting generated survey link');
  this.elements.visitGeneratelink();
  cy.log('Selecting first Arabic answer on page 1');
  this.elements.answerSurvey({ timeout: 30000 }).eq(0).scrollIntoView({ ensureScrollable: false }).and('be.visible').contains('كيف').click({ force: true });
  cy.log('Verifying first option checked on page 1');
  cy.get('div.sd-item', { timeout: 30000 }).eq(0).should('have.class', 'sd-item--checked');
  cy.log('Navigating to next page');
  this.elements.previewNextbtn().scrollIntoView({ ensureScrollable: false }).click({ force: true });
  cy.log('Selecting first Arabic answer on page 2');
  this.elements.answerSurvey({ timeout: 30000 }).eq(0).scrollIntoView({ ensureScrollable: false }).and('be.visible').contains('كيف').click({ force: true });
  cy.log('Verifying first option checked on page 2');
  cy.get('div.sd-item', { timeout: 30000 }).eq(0).should('have.class', 'sd-item--checked');
  cy.log('Navigating back to previous page');
  this.elements.previousButton().scrollIntoView({ ensureScrollable: false }).click({ force: true });
  cy.log('Verifying selection persisted on previous page');
  cy.get('div.sd-item', { timeout: 30000 }).eq(0).should('have.class', 'sd-item--checked');
  cy.log('Navigating forward again');
  this.elements.previewNextbtn().scrollIntoView({ ensureScrollable: false }).click({ force: true });
  cy.log('Verifying selection persisted after navigation');
  cy.get('div.sd-item', { timeout: 30000 }).eq(0).should('have.class', 'sd-item--checked');
}

clickCompleteTheSurvey_goBack() {
  cy.log('Clicking Complete button');
  this.elements.completeButtonclick({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible').click();
  cy.log('Verifying survey completion success message');
  this.elements.verifySuccessofCompletesurvey().should('be.visible');
  cy.log('Navigating back after completion');
  cy.go('back');
  cy.log('Waiting after navigation');
  cy.wait(20000);
}

completeSurveyAndVerifyNonEditableOnRevisit() {
  cy.log('Clicking Complete button');
  this.elements.completeButtonclick({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible').click();
  cy.log('Verifying survey completion success message');
  this.elements.verifySuccessofCompletesurvey().should('be.visible');
  cy.log('Waiting before revisiting survey');
  cy.wait(20000);
  cy.log('Revisiting generated survey link');
  this.elements.visitGeneratelink();
  cy.log('Verifying first option is readonly on revisit');
  this.elements.answerSurvey({ timeout: 30000 }).eq(0).scrollIntoView({ ensureScrollable: false }).should('be.visible').contains('كيف').parents('.sd-item').find('input.sd-item__control').should('have.attr', 'readonly');
  cy.log('Verifying second option is readonly on revisit');
  this.elements.answerSurvey({ timeout: 30000 }).eq(3).scrollIntoView({ ensureScrollable: false }).should('be.visible').contains('كيف').parents('.sd-item').find('input.sd-item__control').should('have.attr', 'readonly');
  cy.log('Navigating to previous page');
  this.elements.previousButton().scrollIntoView({ ensureScrollable: false }).click({ force: true });
  cy.log('Verifying readonly state persists on previous page');
  this.elements.answerSurvey({ timeout: 30000 }).eq(0).scrollIntoView({ ensureScrollable: false }).should('be.visible').contains('كيف').parents('.sd-item').find('input.sd-item__control').should('have.attr', 'readonly');
  this.elements.answerSurvey({ timeout: 30000 }).eq(3).scrollIntoView({ ensureScrollable: false }).should('be.visible').contains('كيف').parents('.sd-item').find('input.sd-item__control').should('have.attr', 'readonly');
}

completeSurveyAndVerifyPartialCompleteOnRevisit() {
  cy.log('Clicking Complete button');
  this.elements.completeButtonclick({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).should('be.visible').click();
  cy.log('Verifying survey completion success message');
  this.elements.verifySuccessofCompletesurvey().should('be.visible');
  cy.log('Waiting before revisiting survey');
  cy.wait(20000);
  cy.log('Revisiting generated survey link');
  this.elements.visitGeneratelink();
  cy.log('Verifying first option is readonly after partial completion');
  this.elements.answerSurvey({ timeout: 30000 }).eq(0).scrollIntoView({ ensureScrollable: false }).should('be.visible').contains('كيف').parents('.sd-item').find('input.sd-item__control').should('have.attr', 'readonly');
  cy.log('Navigating to previous page');
  this.elements.previousButton().scrollIntoView({ ensureScrollable: false }).click({ force: true });
  cy.log('Verifying readonly state persists on previous page');
  this.elements.answerSurvey({ timeout: 30000 }).eq(0).scrollIntoView({ ensureScrollable: false }).should('be.visible').contains('كيف').parents('.sd-item').find('input.sd-item__control').should('have.attr', 'readonly');
}



}

export default Api;





