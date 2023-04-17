import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProviderr from "./store/todos-context";

function App() {
  //const todos = [new Todo("Learn React"), new Todo("Learn typescript")];

  return (
    <TodosContextProviderr>
      <NewTodo />
      <Todos />
    </TodosContextProviderr>
  );
}

export default App;

  {/*  <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={deleteTodo} />
  */}