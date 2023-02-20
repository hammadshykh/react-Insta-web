import React from "react";
import "./Todo.css";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [isAlert, setIsAlert] = useState({
    type: "danger",
    msg: "Something went wrong.",
    isOpen: false,
  });

  const showAlertHandler = (type = "danger", msg = "") => {
    setIsAlert((oldState) => {
      return {
        ...oldState,
        isOpen: true,
        type,
        msg,
      };
    });

    setTimeout(() => {
      setIsAlert((oldState) => {
        return {
          ...oldState,
          isOpen: false,
        };
      });
    }, 3000);
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      showAlertHandler(
        "danger form-control is-invalid",
        "Please enter the value"
      );
      return;
    } else {
      showAlertHandler("success form-control is-valid", "Add To List");
    }
    props.onAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <h1>Add a Todo</h1>
      <form className="todo-form" onSubmit={SubmitHandler}>
        <input
          placeholder="Add a todo"
          onChange={changeHandler}
          name="text"
          className={`todo-input ${isAlert.isOpen && isAlert.type}`}
          value={inputValue}
          list="datalistOptions"
          id="exampleDataList "
        />
      </form>
      <button className="todo-button" type="submit">
        Add todo
      </button>
      {isAlert.isOpen && (
        <p className={`alert alert-${isAlert.type}`}>{isAlert.msg}</p>
      )}
    </div>
  );
};

export default TodoForm;
