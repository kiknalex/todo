import { useEffect, useState } from "react";
import Create from "./components/CreateTodo/Create";
import TodoList from "./components/TodoList/TodoList";
import Controls from "./components/Controls/Controls";
import "/src/components/css/container.css"
function Todos() {
  const [sortMode, setSortMode] = useState("all");
  const [todos, setTodos] = useState([
    {
      todoText: "Create your first todo",
      date: new Date(),
      id: 1,
      status: "active",
    },
  ]);
  const [darkMode, setDarkMode] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    if(!darkMode) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  },[darkMode]);
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteCompletedTodos = () => {
    setSortMode("all");
    setTodos((todos) => todos.filter((todo) => todo.status === "active"));
    
  };

  const onCompleteClick = (todoId) => {
    // marks todo as completed
    const toChangeTodo = { ...todos.find((todo) => todo.id === todoId) };
    if (toChangeTodo.status === "active") {
      toChangeTodo.status = "completed";
    } else if (toChangeTodo.status === "completed") {
      toChangeTodo.status = "active";
    }
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return toChangeTodo;
        } else {
          return todo;
        }
      })
    );
  };

  const deleteTodo = (targetTodoId) => {
    setTodos(todos.filter((todo) => todo.id !== targetTodoId));
  };

  const onSortClick = (mode) => {
    setSortMode(mode);
  };

  return (
    <>
    <div id="background-img"></div>
    <div className="container header">
      <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
        <h1>TODO</h1>
        <button className="btn" onClick={() => setDarkMode(() => !darkMode)}>
          <img src={`/icon-${darkMode ? "sun" : "moon"}.svg`} width="25" height="25" alt={`Set ${darkMode ? "light" : "dark"} mode`} />
        </button>
      </div>
      </div>
      
        <div className="container todos todos-create input-container">
        <Create todos={todos} addTodo={addTodo} />
        </div>
        
        <div className="container todos">
          <TodoList
            todos={todos}
            onDeleteClick={deleteTodo}
            onCompleteClick={onCompleteClick}
            sortMode={sortMode}
          />
          <Controls
            itemsLeft={todos.length}
            onClearClick={deleteCompletedTodos}
            onSortClick={onSortClick}
            sortMode={sortMode}
          />
        </div>
    </>
  );
}

export default Todos;
