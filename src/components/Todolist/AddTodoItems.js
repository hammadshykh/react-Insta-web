import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

const AddTodoItems = () => {
  const [courseTodo, setCourseTodo] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);
  const addGoalHandler = (enteredText) => {
    setCourseTodo((prevGoals) => {
      const updateTodo = [...prevGoals];
      updateTodo.unshift({ text: enteredText, id: Math.random().toString() });
      return updateTodo;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseTodo((prevGoals) => {
      const updatedTodo = prevGoals.filter((goal) => goal.id !== goalId);
      if (updatedTodo) {
        console.log("deleted");
      }
      return updatedTodo;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseTodo.length > 0) {
    content = <TodoList items={courseTodo} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <div>
      <section id="goal-form">
        {/* <CourseInput onAddGoal={addGoalHandler} /> */}
      </section>
      <TodoForm onAddTodo={addGoalHandler} />
      <section id="goals">{content}</section>
    </div>
  );
};

export default AddTodoItems;
