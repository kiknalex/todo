import "./css/_base.css";
import "./css/button.css";

export default function Button(props) {
  return (
    <label for={props.id} className={props.labelClasses}>
      <button
        id={props.id}
        className={props.classes}
        onClick={props.handleClick}
      >
        {props.children}
      </button>
    </label>
  );
}
