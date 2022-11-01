import { useRef } from "react";
import classes from "./input.module.css";

function Input(porps) {
  const taskInputRef = useRef();
  const enteredInput = taskInputRef.current.value;

  function saveTaskHandler(event) {
    event.preventDefault();
    porps.onSave(enteredInput);
  }

  return (
    <section className={classes.form}>
      <label htmlFor="input">To Do</label>
      <input id="input" ref={taskInputRef} />
      <button onClick={saveTaskHandler}>Save Task</button>
    </section>
  );
}

export default Input;
