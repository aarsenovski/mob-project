Cypress project from scratch

1. We create a folder and open it using VS Code
2. yarn init - to create package.json file which handles all packages and dependencies and is primary used in Node projects //we use yarn although npm or pnpm can be used
3. Installing Cypress:

- yarn add cypress --dev   - using Yarn we add Cypress as a dev dependancy
- npm install --save-dev cypress@10.11.0 - using Npm

1. npx cypress open - to create the Cypress folder structure
2. yarn add --dev typescript   - we want to use Typescript in our tests
3. We create tsconfig.json inside cypress folder - a configuration file for Typescript to know how to transpile typescript to javascript
4. git init - we initialize an empty Git repository
5. We create .gitignore file and put node_modules in it - with this file Git knows what files/folders to exlude
6. We install Prettier from Extensions - an extension for formating code (need to set it as a default formatter and to enable formating on save)
7. Create .prettierrc where we can configure those settings
8. We create an e2e folder inside Cypress (Cypress looks for tests in this folder)
9. We create tests with it(‘test’, () => {})
10. We put tests inside describe(‘describe’, () => {}  //https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Writing-tests

11. Run Cypress tests - `yarn run cypress open` (usefull for debugging as it opens the Cypress Lanuchpad)

- yarn run cypress run - To run the tests in CLI

1. Install Mochawesome reporter:

- https://www.npmjs.com/package/cypress-mochawesome-reporter
- install MochaweSome - `yarn add -D cypress-mochawesome-reporter`
- edit `cypress.config.ts` file
- edit `cypress/support/e2e.js` file to import mochawesome

16. Custom commands:

- https://docs.cypress.io/api/cypress-api/custom-commands
- We create custom commands with Cypress.Commands.add('login', (email, pw) => {})
