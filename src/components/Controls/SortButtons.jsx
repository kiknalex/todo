import Button from "../Button";

export default function SortButtons(props) {
  return (
    <div className="controls-flex">
      <Button
        labelClasses="btn-control"
        classes={`btn btn-control controls-flex-item ${
          props.sortMode === "all" ? "btn-control-active" : ""
        }`}
        handleClick={() => props.onSortClick("all")}
      >
        All
      </Button>
      <Button
        labelClasses="btn-control"
        classes={`btn btn-control controls-flex-item ${
          props.sortMode === "active" ? "btn-control-active" : ""
        }`}
        handleClick={() => props.onSortClick("active")}
      >
        Active
      </Button>
      <Button
        labelClasses="btn-control"
        classes={`btn btn-control controls-flex-item ${
          props.sortMode === "completed" ? "btn-control-active" : ""
        }`}
        handleClick={() => props.onSortClick("completed")}
      >
        Completed
      </Button>
    </div>
  );
}
