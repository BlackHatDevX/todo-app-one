import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
function App() {
  const data = [
    { name: "Go to school", date: "04/10/2023" },
    { name: "Go to College", date: "04/11/2023" },
    { name: "v important work", date: "05/05/2023" },
  ];

  return (
    <>
      <center className="todo-container">
        <AppName />
        <div className="container text-center">
          <AddTodo />
          <TodoItem data={data} />
        </div>
      </center>
    </>
  );
}

export default App;
