import SortButtons from "./SortButtons";
import Button from "../Button";
export default function Controls(props) {
  return (
    <div className="grid-container content-padding controls">
      <p className="items-left">{props.itemsLeft} items left</p>
      <SortButtons onSortClick={props.onSortClick} sortMode={props.sortMode} />
      <Button
        classes="btn btn-clear-completed"
        handleClick={props.onClearClick}
      >
        Clear Completed
      </Button>
    </div>
  );
}
