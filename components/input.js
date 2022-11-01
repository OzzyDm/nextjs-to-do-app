import { useState } from "react";
import classes from "./input.module.css";

function Input(props) {
  const [enteredInput, setEnteredInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  function inputChangeHandler(event) {
    if (event.target.value.trim().lenght > 0) {
      setIsValid(true);
    }
    setEnteredInput(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (enteredInput.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTask(enteredInput);
  }

  console.log(enteredInput);
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="input">To Do</label>
        <input type="text" id="input" onChange={inputChangeHandler}></input>
      </div>
      <button type="submit">Save Task</button>
    </form>
  );
}

export default Input;
