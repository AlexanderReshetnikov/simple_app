import $ from 'jQuery'

import todoService from './TodoService'

import {
    inputTodo,
    todoList,
    todoItem,
    btnAddTodo
} from './constants'

function renderTodoList(list, container){
    container.html('')

    list.map((todo, id) => {
        const todoComponent = todoItem(todo, id)
        container.html(container.html() + todoComponent)
    })

    $('button[data-type="status"]').click((e) => {
        const id = $(e.currentTarget).attr('data-id')
        const status = $(e.currentTarget).attr('data-status') === 'open' ? 'close' : 'open'

        renderTodoList(todoService.changeTodo(id, status), container)

    })

    $('button[data-type="remove"]').click((e) => {
        const id = $(e.currentTarget).attr('data-id')

        renderTodoList(todoService.removeTodo(id), container)
    })
}

$(document).ready(() => {
    renderTodoList(todoService.todoList, todoList)

    btnAddTodo.click(() => {
        
        if(inputTodo.val() === ''){
            alert('в поле todo пусто')
            return
        }
        
        if($('.todo').map(function(){
            return this.innerHTML
        }).toArray().indexOf(inputTodo.val()) > -1){
            alert('такой todo уже есть')
            return
        }


        var new_tdItem = {
            description: inputTodo.val(),
            status: 'open'
        }

        renderTodoList(todoService.addTodo(new_tdItem), todoList)
    })
})