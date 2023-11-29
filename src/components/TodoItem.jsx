import DataTodo from "./DataTodo";

const TodoItem = ({ data, DeleteData }) => {
  return (
    <>
      {data.map((values) => {
        return (
          <DataTodo
            name={values.name}
            key={values.name + values.date + Math.random() * Math.random()}
            date={values.date}
            DeleteData={DeleteData}
          />
        );
      })}
    </>
  );
};

export default TodoItem;
