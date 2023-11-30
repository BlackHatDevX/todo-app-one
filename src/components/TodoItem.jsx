import { useContext } from "react";
import { ItemsData } from "../store/ItemsData";
import DataTodo from "./DataTodo";

const TodoItem = () => {
  const { data } = useContext(ItemsData);
  return (
    <>
      {data.map((values) => {
        return (
          <DataTodo
            name={values.name}
            key={values.name + values.date + Math.random() * Math.random()}
            date={values.date}
          />
        );
      })}
    </>
  );
};

export default TodoItem;
