import React, { useEffect, useState } from 'react'
import TodoDisplayChange from './TodoDisplayChange'
import NewTodo from './NewTodo'
import Todos from './Todos'
const MainContent = () => {
    console.log("what's going on?")
    const [todoList, setTodoList] = useState([
    {
    'todoText': "Add your first todo",
    'active': true,
    'id': '0'
    }]);
    const [sortTodos, setSortTodos] = useState("all")
    const [rerender, setRerender] = useState(false);
    useEffect(() => {
        const list = JSON.parse(localStorage.getItem("todoList"));
        if(list !== undefined && list !== null) {
            setTodoList(list)
            console.log("first render: list", list)
        }
    },[])
    useEffect(() => {
        if(todoList !== undefined)
        localStorage.setItem("todoList", JSON.stringify(todoList))
    },[todoList,rerender])
    return (
        <div className="main-content">
            <NewTodo
            todoList={todoList}
            setTodoList={setTodoList}
            />
            <Todos
            todoList={todoList}
            setTodoList={setTodoList}
            sortTodos={sortTodos}
            rerender={rerender}
            setRerender={setRerender}
            />
            <TodoDisplayChange
            setSortTodos={setSortTodos}
            sortTodos={sortTodos}
            />
        </div>
    )
}
export default MainContent;