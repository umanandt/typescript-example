import { useRef } from "react";
import classes from "./NewTodo.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // here we are making it clear
  // that the ref is going to be htmlinput type in typescript
  // null - no initial value - typescript

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      //
      return;
    }
    todoCtx.addTodo(enteredText);
  };

  // react.form event when we are submitiing the form
  // if we were using mouse event then whould have used
  // React.mouseEvent in typescript

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button> Add Todo</button>
    </form>
  );
};

export default NewTodo;
