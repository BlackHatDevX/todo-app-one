import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import DataTodo from "./components/DataTodo";
const data = ["Go to school", "Go to College"];
function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <div className="container text-center">
          <AddTodo />
          {data.map((values) => {
            return <DataTodo name={values} date="04/10/2023" />;
          })}
        </div>
      </center>
    </>
  );
}

export default App;
