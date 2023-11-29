import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import EmptyMessage from "./components/EmptyMessage";
function App() {
  const [data, setData] = useState([]);
  const [val, setVal] = useState("");
  const [date, setDate] = useState("");
  const getValue = (txt) => {
    setVal(txt);
  };
  const getDate = (datefinal) => {
    setDate(datefinal);
  };
  const AddData = () => {
    const newData = [...data, { name: val, date: date }];
    setData(newData);
    setVal("");
    setDate("");
  };
  const DeleteData = (name, date) => {
    const newData = data.filter(
      (item) => item.name !== name || item.date !== date
    );
    setData(newData);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <div className="container text-center">
          <AddTodo
            AddData={AddData}
            getValue={getValue}
            val={val}
            date={date}
            getDate={getDate}
          />

          {data.length == 0 ? (
            <EmptyMessage />
          ) : (
            <TodoItem data={data} DeleteData={DeleteData} />
          )}
        </div>
      </center>
    </>
  );
}

export default App;
