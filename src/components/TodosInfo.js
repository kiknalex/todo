import React, { useState, useEffect } from "react";

const TodosInfo = ({ todoList, setTodoList }) => {
  const [remaining, setRemaining] = useState(0);
  const remainActives = () => {
    return todoList.reduce((acc, todo) => (todo.active ? (acc += 1) : acc), 0);
  };
  useEffect(() => setRemaining(remainActives()), [todoList]);

  const clearCompleted = () => {
    setTodoList(todoList.filter((todo) => todo.active));
  };
  return (
    <div className="todo-container todos-info">
      <div className="todo">
        <p className="items-left">{remaining} items left</p>
        <button className="clear" onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};
export default TodosInfo;
