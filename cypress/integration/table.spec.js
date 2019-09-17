/// <reference types="Cypress" />

describe('Aliases test', () => {
  beforeEach(() => {
    cy.visit('/')
      .get('tr')
      .as('rows')
  })
  it('should not pass', () => {
    // when
    cy.get('#addbtn')
      .click()

      // then
      .get('@rows')
      .should('have.length', 2)

      .get('@rows')
      .should('have.length', 3);
  })
})
