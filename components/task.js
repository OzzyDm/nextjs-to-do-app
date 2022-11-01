function Task(props) {
  function deleteHandler() {
    props.onDelete(props.id);
  }

  return <li onClick={deleteHandler}>{props.children}</li>;
}

export default Task;
