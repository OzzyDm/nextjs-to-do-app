import { useState } from "react";

import Input from "../components/input";
import Tasks from "../components/task-list";

function HomePage() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Add something", id: "g1" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = <p style={{ textAlign: "center" }}>No tasks found.</p>;

  if (courseGoals.length > 0) {
    content = <Tasks tasks={courseGoals} onDelete={deleteItemHandler} />;
  }

  return (
    <div>
      <section id="goal-form">
        <Input onAddTask={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default HomePage;
