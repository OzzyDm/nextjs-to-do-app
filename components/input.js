import { useState } from "react";
import classes from "./input.module.css";

function Input(props) {
  const [enteredInput, setEnteredInput] = useState("");

  function inputChangeHandler(event) {
    setEnteredInput(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (enteredInput.trim().length === 0) {
      return;
    }
    props.onAddTask(enteredInput);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="input">To Do</label>
        <br></br>
        <input
          type="text"
          id="input"
          onChange={inputChangeHandler}
          placeholder="Add something"
        ></input>
      </div>
      <button type="submit">Save Task</button>
    </form>
  );
}

export default Input;
