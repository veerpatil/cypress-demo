// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
/// <reference types="Cypress" />
// require('cypress-xpath');
// Alternatively you can use CommonJS syntax:
// require('./commands')
// import '@shelex/cypress-allure-plugin';
import "allure-cypress";


if (Cypress.config('hideXHR')) {
    const app = window.top;
  
    if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
      const style = app.document.createElement('style');
      style.innerHTML =
        '.command-name-request, .command-name-xhr, .command-name-uncaught-exception { display: none }';
      style.setAttribute('data-hide-command-log-request', '');
  
      app.document.head.appendChild(style);
    }
}


afterEach(function() {
   cy.log(this.currentTest.state + this.currentTest.title+ this.currentTest.body + this.currentTest.parent.title + this.currentTest.file)
});

beforeEach(function(){
  cy.viewport(1920, 1080)
})