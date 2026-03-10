# Cypress BDD Framework - Vervali

- Cypress: 13.13.0
- BDD: @badeball/cypress-cucumber-preprocessor
- Example uses https://www.saucedemo.com

To run:
1. npm install
2. npx cypress open    # or npm run cy:open
3. npx cypress run     # or npm run cy:run

To run with Allure:
1. npm run test:with:allure  
2. allure generate "allure-results" --clean -o "allure-report"
3. allure open "allure-report"  

To run commands for Individual testcase :
In Headed (single testcase ) : npx cypress open --env TAGS="@AS_001"
In Headed (multiple testcase) : npx cypress open --env TAGS="@AS_001 or @AS_002 or @AS_003" 

In Headless (single testcase ) : npx cypress run --env TAGS="@AS_001"
In Headless (multiple testcase) : npx cypress run --env TAGS="@AS_001 or @AS_002 or @AS_003"

Note : AS_001 is caseId (based on testcase)