import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Todo from "./Todo";
import TodosInfo from "./TodosInfo";
const Todos = ({ todoList, setTodoList, sortTodos, rerender, setRerender }) => {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = todoList;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodoList(items);
    setRerender(!rerender);
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <div
            className="todos-container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todoList.map((todo, index) => {
              return (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Todo
                        todo={todo}
                        key={todo.id}
                        todoList={todoList}
                        setTodoList={setTodoList}
                        sortTodos={sortTodos}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
            <TodosInfo todoList={todoList} setTodoList={setTodoList} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Todos;
