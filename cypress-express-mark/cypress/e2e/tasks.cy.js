/// <reference types ="cypress"/>

describe('tarefas', () => {

    it('deve cadastrar uma nova tarefa', () => {
        cy.visit('http://localhost:8080')

        cy.get('input[placeholder="Add a new Task"]')
            .type('ajota')
        cy.get('._listButtonNewTask_1y0mp_40').click()

    })
})