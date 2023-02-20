import TodoItem from "./TodoItem";
import "./TodoList.css";
const TodoList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} onDelete={props.onDeleteItem}>
          {todo.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
