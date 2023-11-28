import DataTodo from "./DataTodo";

const TodoItem = ({ data }) => {
  return (
    <>
      {data.map((values) => {
        return (
          <DataTodo name={values.name} key={values.name} date={values.date} />
        );
      })}
    </>
  );
};

export default TodoItem;
