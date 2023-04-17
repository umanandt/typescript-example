import Todo from "../models/todo";
import classes from "./TodoList.module.css";
import Todos from "./Todos";

const TodoList: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
 

  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoList;
