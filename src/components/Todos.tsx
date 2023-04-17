import React, { useContext } from "react";

import { TodosContext}  from '../store/todos-context';
import TodoList from "./TodoList";
import classes from "./Todos.module.css";


const Todos: React.FC= () => {

  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoList
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

// changing fucntion component to const
// and use generic type
// props which has array of string type
// proper type anotations
// we can use this with other component
// defineing generic type for props in typescript
