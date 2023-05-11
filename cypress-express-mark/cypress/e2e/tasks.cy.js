/// <reference types ="cypress"/>

import { faker } from '@faker-js/faker';

describe('tarefas', () => {

    it('deve cadastrar uma nova tarefa', () => {
        cy.visit('http://localhost:8080')

        cy.get('input[placeholder="Add a new Task"]')
            .type(faker.music.songName())

        ////xpath button[text()="Create "]

        cy.contains('button', 'Create').click()
        //cy.get('button[class="_listItemDeleteButton_1kgm5_52"]').click()

    })
})