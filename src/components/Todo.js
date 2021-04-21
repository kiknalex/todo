import React from 'react'

const Todo = ({ todo, todoList, setTodoList, sortTodos }) => {
    if(sortTodos === "active" && todo.active !== true) return null;
    if(sortTodos === "completed" && todo.active !== false) return null;

    const deleteTodo = () => {
        const deletedTodoList = todoList.filter(object =>  object.id !== todo.id);
        setTodoList(deletedTodoList);
    }
    const completeTodo = () => {
        todo.active = !todo.active;
        const updatedTodo = todoList;
        setTodoList([...updatedTodo]);
    }
    return (
        <div className="todo-container todo-bottom">
            <div className="todo">
                <button 
                className={`add-todo ${!todo.active ? "todo-gradient" : ""}`}
                onClick={completeTodo}>
                <span className={`${!todo.active ? "todo-check-icon" : ""} material-icons done-icon`}>done</span>
                </button>
                <p className="todo-text" id={`${!todo.active ? "todo-completed" : ""}`}>{todo.todoText}</p>
                <button className="delete-todo" onClick={deleteTodo}><span className="material-icons delete-icon">close</span></button>
            </div>
        </div>
    )
}

export default Todo;