/// <reference types ="cypress"/>

//const { method } = require("cypress/types/bluebird")

//import { faker } from '@faker-js/faker';

describe('tarefas', () => {

    const taskName = 'Junior'

    it('deve cadastrar uma nova tarefa', () => {

        cy.request({
            url: 'http://localhost:3333/helper/tasks',
            method: 'DELETE',
            body: { name: taskName }
        }).then(response => {
            expect(response.status).to.eq(204)
        })

        cy.visit('http://localhost:8080')

        // cy.get('input[placeholder="Add a new Task"]')
        //     .type(faker.music.songName())

        cy.get('input[placeholder="Add a new Task"]')
            .type(taskName)

        ////xpath button[text()="Create "]

        cy.contains('button', 'Create').click()
        //cy.get('button[class="_listItemDeleteButton_1kgm5_52"]').click()

        // cy.get('main div p').should('be.visible').should('have.text', 'junior')

        cy.contains('main div p', taskName)
            .should('be.visible')

    })

    it('não deve permitir tarefa duplicada', ()=>{

        const task = {
            name:   'Antonio',
            is_done: false
        }
      

        cy.request({
            url: 'http://localhost:3333/helper/tasks',
            method: 'DELETE',
            body: { name: task.name}
        }).then(response => {
            expect(response.status).to.eq(204)
        })
        cy.request({
            url: 'http://localhost:3333/tasks',
            method: 'POST',
            body: task

        }).then(response => {
            expect(response.status).to.eq(201)
        })

        cy.visit('http://localhost:8080')

        cy.get('input[placeholder="Add a new Task"]')
            .type(task.name)

        cy.contains('button', 'Create').click()

        cy.get('.swal2-html-container')
        .should('be.visible')
        .should('have.text', 'Task already exists!')

    })
})
