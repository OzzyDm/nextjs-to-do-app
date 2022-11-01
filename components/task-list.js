import Task from "./task";

function Tasks(props) {
  return (
    <ul>
      {props.tasks.map((task) => (
        <Task key={task.id} id={task.id} onDelete={props.onDelete}>
          {task.text}
        </Task>
      ))}
    </ul>
  );
}

export default Tasks;
