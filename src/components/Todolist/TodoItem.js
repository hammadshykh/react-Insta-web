import "./TodoItem.css";
import Button from "../UI/Button/Button";

const TodoItem = (props) => {
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };
  return (
    <div>
      <li className="todo-item">
        {props.children}
        <Button type="button" onClick={deleteHandler}>
          Delete
        </Button>
      </li>
    </div>
  );
};
export default TodoItem;
