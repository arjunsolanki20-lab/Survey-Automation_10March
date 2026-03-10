const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/features/**/*.feature", 
    baseUrl: "https://twowayserver.future-club.com",
      pageLoadTimeout: 120000,
      defaultCommandTimeout: 30000,
      experimentalMemoryManagement: true,


    retries: {
      runMode: 2,
      openMode: 0,
    },
    env: {
      stepDefinitions: "cypress/e2e/step_definitions/**/*.js",
      allure: true, 
      // puffinLogin: "https://twowayserver.future-club.com/PuffinUI/login" 
    },
    async setupNodeEvents(on, config) { 
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
 
      allureWriter(on, config);
      return config;
    },
  }, 
  
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },
});
