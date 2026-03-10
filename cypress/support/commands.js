import 'cypress-real-events';
import 'cypress-file-upload';


import "cypress-real-events/support";


Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Minified React error')) {
    return false;
  }
  return false;
});

// Custom command to set the value of a DOM element directly
Cypress.Commands.add('setDomValue', (selector, value) => {
  cy.get(selector).then($el => {
    const input = $el[0]; // raw DOM element
    input.value = value;
    cy.setDomValue('input[name="username"]', 'sanket');
    cy.setDomValue('input[name="password"]', 'mypassword');



    // trigger events so frameworks like React/Angular/Vue detect change
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  });
});

// Helper to set value directly via DOM
Cypress.Commands.add('setDomValue', (selector, value) => {
  cy.document().then((doc) => {
    const el = doc.querySelector(selector);
    if (!el) {
      throw new Error(`Element not found for selector: ${selector}`);
    }
    el.value = value;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });
});



Cypress.Commands.add('setDateValue', (selector, value) => {
  return cy.get(selector).then($el => {
    const el = $el[0];

    // If readonly attribute exists, remove it so assignment won't be blocked
    if (el.hasAttribute && el.hasAttribute('readonly')) {
      el.removeAttribute('readonly');
    }

    // Use native setter to properly notify React controlled inputs
    const win = el.ownerDocument.defaultView;
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(win.HTMLInputElement.prototype, 'value').set;
    nativeInputValueSetter.call(el, value);

    // Dispatch events so app picks up the change
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));

    return cy.wrap($el);
  });
});

Cypress.Commands.add('typeInEditable', (locator, text) => {
  cy.get(locator)
    .click()
    .type('{selectall}{backspace}' + text);
});

Cypress.Commands.add("assertUrl", (key) => {
  cy.fixture("urls").then((urls) => {
    const expected = urls[key];
    if (!expected) throw new Error(`URL for key "${key}" not found in urls.json`);
    cy.url().should("include", expected);
  });
});
//const commonSurvey = require('./common');

Cypress.Commands.add('goToSurveyList', () => {
    commonSurvey.goToSurveyList();
});
Cypress.Commands.add('loginViaAPI', () => {
  const baseUrl = 'https://twowayserver.future-club.com';
  const loginEndpoint = '/puffinAPI/api/User/v1/login'; // adjust if endpoint name differs

  cy.request({
    method: 'POST',
    url: `${baseUrl}${loginEndpoint}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cypress.env('authKey')}`, // optional header if your API requires it
      'tenantId': Cypress.env('tenantId')
    },
    body: {
      username: Cypress.env('username'),
      password: Cypress.env('password')
    },
    failOnStatusCode: false
  }).then((response) => {
    cy.log('🔍 Login Response:', JSON.stringify(response.body));

    expect(response.status).to.eq(200);

    // Extract token from response — adjust key if nested
    const token = response.body.token || response.body.data?.token;

    if (!token) {
      throw new Error('❌ Token not found in response!');
    }

    cy.log('✅ Token generated:', token.substring(0, 10) + '...');
    Cypress.env('authToken', token);

    // Store in localStorage for app usage
    cy.visit(`${baseUrl}/PuffinUI/dashboard`, {
      onBeforeLoad(win) {
        win.localStorage.setItem('authToken', token);
      }
    });


    cy.url().should('include', '/PuffinUI/dashboard');
  });
});

// Cypress.on('fail', (error) => {
//   cy.log(' TEST FAILED : ');
//   cy.log(error.message);
//   throw error; 
// });