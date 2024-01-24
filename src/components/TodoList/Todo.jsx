import Button from "../Button";

import "../css/_base.css";

export default function Todo(props) {
  return (
    <li
      className="todo-item content-padding"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Button
        classes="btn btn-complete-circle"
        handleClick={() => props.onCompleteClick(props.id)}
      >
        <div
          className={`${
            props.status === "completed" ? "btn-complete-background-active" : ""
          } btn-complete-background`}
        >
          <img
            src="/icon-check.svg"
            className="btn-complete-img"
            width="25"
            height="25"
            alt="Complete button"
          />
        </div>
      </Button>
      {props.status === "completed" ? (
        <del style={{ display: "contents" }}>
          <p className={`todo-text todo-text-completed`}>{props.children}</p>
        </del>
      ) : (
        <p className={`todo-text`}>{props.children}</p>
      )}

      <Button classes="btn" handleClick={() => props.onDeleteClick(props.id)}>
        <img
          src="/icon-cross.svg"
          className="btn-delete"
          width="25"
          height="25"
          alt="Delete button"
        />
      </Button>
    </li>
  );
}
