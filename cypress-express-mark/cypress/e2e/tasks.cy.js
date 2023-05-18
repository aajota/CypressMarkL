/// <reference types ="cypress"/>

//const { method } = require("cypress/types/bluebird")

//import { faker } from '@faker-js/faker';

describe('tarefas', () => {

    const taskName = 'Junior'

    it('deve cadastrar uma nova tarefa', () => {

        cy.removerTaskByName(taskName)
        cy.createTask(taskName)

        //cy.visit('http://localhost:8080')

        // cy.get('input[placeholder="Add a new Task"]')
        //     .type(faker.music.songName())

        // cy.get('input[placeholder="Add a new Task"]')
        //     .type(taskName)

        ////xpath button[text()="Create "]

        // cy.contains('button', 'Create').click()
        //cy.get('button[class="_listItemDeleteButton_1kgm5_52"]').click()

        // cy.get('main div p').should('be.visible').should('have.text', 'junior')

        cy.contains('main div p', taskName)
            .should('be.visible')

    })

    it('não deve permitir tarefa duplicada', () => {

        const task = {
            name: 'Antonio',
            is_done: false
        }

        cy.removerTaskByName(task.name)
        cy.postTask(task)
        cy.createTask(task.name)

        cy.get('.swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Task already exists!')

    })
})

