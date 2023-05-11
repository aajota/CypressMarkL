/// <reference types ="cypress"/>

//import { faker } from '@faker-js/faker';

describe('tarefas', () => {

    it('deve cadastrar uma nova tarefa', () => {

        cy.request({
            url: 'http://localhost:3333/helper/tasks',
            method: 'DELETE',
            body: { name: 'junior' }
        }).then(response => {
            expect(response.status).to.eq(204)
        })

        cy.visit('http://localhost:8080')

        // cy.get('input[placeholder="Add a new Task"]')
        //     .type(faker.music.songName())

        cy.get('input[placeholder="Add a new Task"]')
            .type('junior')

        ////xpath button[text()="Create "]

        cy.contains('button', 'Create').click()
        //cy.get('button[class="_listItemDeleteButton_1kgm5_52"]').click()

    })
})