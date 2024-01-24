import { useState } from "react";

export default function TodoInput(props) {
  return (
    <input
      value={props.newTodo}
      className="todo-input"
      placeholder="Create a new todo..."
      onChange={(e) => props.onValueChange(e)}
    />
  );
}
