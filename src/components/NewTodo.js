import React, {useState} from 'react'

const NewTodo = ({todoList,setTodoList}) => {
    
    const [todoInput, setTodoInput] = useState("")
    const addTodo = () => {
       let input;
       todoInput === "" ? input = "I love procrastinating" : input = todoInput.substring(0,35);
       let id = 0;
       if(todoList.length > 0) {
        let max = todoList.reduce((acc, todo) => acc = acc > parseInt(todo.id) ? acc : parseInt(todo.id), 0);
        id = max + 1;
       }
        let todos = todoList;
        todos.push({
            'todoText': input,
            'active': true,
            'id': id.toString()
        });
        setTodoList([...todos]);
        setTodoInput("");
    }
    return (
        <div className="new-todo-container">
            <div className="todo">
            <button className="add-todo" onClick={addTodo}><span className="material-icons done-icon">done</span></button>
            <input placeholder="Create a new todo..." onChange={e => setTodoInput(e.target.value)} value={todoInput} />
            </div>
        </div>
    )
}

export default NewTodo;