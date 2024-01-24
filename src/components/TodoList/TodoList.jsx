import Todo from "./Todo";

export default function TodoList(props) {
  const filteredRender = () => {
    return (
      <ul className="flex-item todo-list">
        {props.todos.map((todo) => {
          if (props.sortMode === "all") {
            return (
              <Todo
                onCompleteClick={props.onCompleteClick}
                onDeleteClick={props.onDeleteClick}
                id={todo.id}
                key={todo.id}
                status={todo.status}
              >
                {todo.todoText}
              </Todo>
            );
          } else if (todo.status === props.sortMode) {
            return (
              <Todo
                onCompleteClick={props.onCompleteClick}
                onDeleteClick={props.onDeleteClick}
                id={todo.id}
                key={todo.id}
                status={todo.status}
              >
                {todo.todoText}
              </Todo>
            );
          }
        })}
      </ul>
    );
  };

  return <>{filteredRender()}</>;
}
