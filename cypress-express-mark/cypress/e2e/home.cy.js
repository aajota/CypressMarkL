/// <reference types ="cypress"/>

describe('home', () => {
  it('validar se a aplicação está online', () => {
    cy.visit('/')
    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
  })
})