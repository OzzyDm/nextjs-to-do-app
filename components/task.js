import classes from "./task.module.css";

function Task(props) {
  function deleteHandler() {
    props.onDelete(props.id);
  }

  return (
    <li onClick={deleteHandler} className={classes.task}>
      {props.children}
    </li>
  );
}

export default Task;
