/// <reference types ="cypress"/>

//const { method } = require("cypress/types/bluebird")

//import { faker } from '@faker-js/faker';

describe('tarefas', () => {
    let testData;

    before(()=>{
        cy.fixture('tasks').then(t =>{
            testData = t
        })

    })

    context('cadastro', ()=>{


        it('deve cadastrar uma nova tarefa', () => {

            const taskName = 'Junior Lima'
    
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
    
            const task = testData.dup
    
            cy.removerTaskByName(task.name)
            cy.postTask(task)
            cy.createTask(task.name)
    
            cy.get('.swal2-html-container')
                .should('be.visible')
                .should('have.text', 'Task already exists!')
    
        })
    
        it('campo obrigatório', ()=>{
            cy.createTask()
    
            cy.isRequired('This is a required field')
            })
        })

        context('atualização', ()=>{
            it('deve concluir uma tarefa', ()=>{
                const task = {
                name: 'Comprar ketchup', is_done: false
            }
                cy.removerTaskByName(task.name)
                cy.postTask(task)

                cy.visit('/')

                cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemToggle]')
                .click()

                cy.contains('p', task.name)
                .should('have.css', 'text-decoration-line', 'line-through')

            })
        })

        context('exclusão', ()=>{
            it('deve remover uma tarefa', ()=>{
                const task = {
                name: 'negatividade', is_done: false
            }
                cy.removerTaskByName(task.name)
                cy.postTask(task)

                cy.visit('/')

                cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemDelete]')
                .click()

                cy.contains('p', task.name)
                .should('not.exist')

            })
        })

    })



