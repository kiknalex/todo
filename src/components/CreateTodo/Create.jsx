import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../Button";
import TodoInput from "./TodoInput";

export default function Create(props) {
  const [newTodo, setNewTodo] = useState("");

  const onValueChange = (event) => {
    setNewTodo(event.target.value);
  };
  const handleCreateClick = () => {
    if (newTodo !== "") {
      props.addTodo({
        todoText: newTodo,
        date: new Date(),
        id: Math.floor(Math.random() * 10000),
        status: "active",
      });
      setNewTodo("");
    }
  };

  return (
    <div
      className="content-padding"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Button classes="btn btn-complete-circle" handleClick={handleCreateClick}>
        <div className={`btn-create-background`}>
          <img
            src="../src/images/icon-check.svg"
            className="btn-complete-img"
            width="25"
            height="25"
            alt="Create button"
          />
        </div>
      </Button>
      <TodoInput onValueChange={onValueChange} newTodo={newTodo} />
    </div>
  );
}
