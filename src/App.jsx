import { useRef, useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import EmptyMessage from "./components/EmptyMessage";
import { ItemsData } from "./store/ItemsData";
function App() {
  const valRef = useRef();
  const dateRef = useRef();

  const [data, setData] = useState([]);

  const AddData = (event) => {
    event.preventDefault();
    const finalVal = valRef.current.value;
    const finalDate = dateRef.current.value;
    valRef.current.value = "";
    dateRef.current.value = "";
    handleData(finalVal, finalDate);
  };

  const handleData = (v, d) => {
    setData((currVal) => [...currVal, { name: v, date: d }]);
  };

  const DeleteData = (name, date) => {
    const newData = data.filter(
      (item) => item.name !== name || item.date !== date
    );
    setData(newData);
  };

  return (
    <ItemsData.Provider value={{ data, AddData, DeleteData }}>
      <>
        <center className="todo-container">
          <AppName />
          <div className="container text-center">
            <AddTodo valRef={valRef} dateRef={dateRef} />

            {data.length == 0 ? <EmptyMessage /> : <TodoItem />}
          </div>
        </center>
      </>
    </ItemsData.Provider>
  );
}

export default App;
