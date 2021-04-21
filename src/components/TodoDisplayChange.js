import React from 'react'

const TodoDisplayChange = ({ sortTodos,setSortTodos }) => {
    const buttonHighlight = {
        color: 'rgb(121, 152, 255)'
    }
    return (
        <div className="todo-container display-change-container">
            <div className="todo todo-display-change">
            <button onClick={()=>setSortTodos("all")} style={sortTodos === 'all' ? buttonHighlight : {}}>All</button>
            <button onClick={()=>setSortTodos("active")} style={sortTodos === 'active' ? buttonHighlight : {}}>Active</button>
            <button onClick={()=>setSortTodos("completed")} style={sortTodos === 'completed' ? buttonHighlight : {}}>Completed</button>
            </div>
        </div>
    )
}

export default TodoDisplayChange;