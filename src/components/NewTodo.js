import React, {useState} from 'react'

const NewTodo = () => {
    return (
        <div className="todo-container">
            <div className="todo">
            <button className="add-todo"></button>
            <input placeholder="Create a new todo..." />
            </div>
        </div>
    )
}

export default NewTodo;