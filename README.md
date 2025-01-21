# Cypress 14 with Allure Report Integration

This project demonstrates the integration of Cypress 14 with Allure Reports to generate comprehensive and visually appealing test reports for your automation framework.

## Features

- **Cypress 14:** Leverages the latest version of Cypress for robust end-to-end testing.
- **Allure Report Integration:** Provides detailed and interactive reports to analyze test execution results.
- **Easy Configuration:** Simplified setup and configuration for quick integration.

## Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone (https://github.com/veerpatil/cypress-demo)
   cd cypress-demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Allure CLI globally (if not already installed):

   ```bash
   npm install -g allure-commandline --save-dev
   ```

## Project Structure

```plaintext
project-root/
├── cypress/
│   ├── e2e/                  # Test specifications
│   ├── fixtures/             # Test data
│   ├── support/              # Custom commands and support files
├── cypress.config.js         # Cypress configuration file
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

## Configuration

1. Update the `cypress.config.js` file to include the Allure plugin:

   
   ```javascript
    import { allureCypress } from "allure-cypress/reporter";
    export default {
    e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    },
    };


2. Add the Allure plugin to your `cypress/support/e2e.js` file:

   ```javascript
    import "allure-cypress";
   ```

## Running Tests

- Execute tests with Cypress:

  ```bash
  npx cypress open
  ```

  or run in headless mode:

  ```bash
  npx cypress run
  ```

- Generate the Allure report after running tests:

  ```bash
  allure generate --clean
  ```

- Open the generated report:

  ```bash
  allure open
  ```
## Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Allure Report Documentation](https://docs.qameta.io/allure/)
- [Cypress Allure Plugin] (https://allurereport.org/docs/cypress/) 


---
Happy Testing! 🚀
