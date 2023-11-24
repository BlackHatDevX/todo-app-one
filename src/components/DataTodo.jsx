const DataTodo = (props) => {
  return (
    <div className="row m-2 text-start ">
      <div className="col-6">{props.name}</div>
      <div className="col-4">{props.date}</div>
      <div className="col-2">
        <button className="btn btn-danger w-100">Delete</button>
      </div>
    </div>
  );
};
export default DataTodo;
