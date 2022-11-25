import './commands'
import 'cypress-mochawesome-reporter/register'

Cypress.on('test:before:run', (test, runnable) => {
  console.log(test, runnable)
})
