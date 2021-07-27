import React from 'react'
import Todo from './Todo.js'

export default function TodoList({apples, toggleTodo}) {
    return (
        apples.map(todo => {
            return <Todo key={todo.id} toggleTodo= {toggleTodo} todo={todo} />
        }) 
    )
}