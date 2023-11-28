import css from "./DataTodo.module.css";

const DataTodo = ({ name, date }) => {
  return (
    <div className={css.bgCustom + " row m-2 text-start "}>
      <div className="col-6">{name}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button className="btn btn-danger w-100">Delete</button>
      </div>
    </div>
  );
};
export default DataTodo;
