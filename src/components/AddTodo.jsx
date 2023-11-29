import styles from "./AddTodo.module.css";
const AddTodo = ({ AddData, getValue, getDate, val, date }) => {
  return (
    <>
      <div className={"row m-2 text-start " + styles.inbox}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={val}
            onChange={(event) => {
              getValue(event.target.value);
            }}
          />
        </div>
        <div className="col-4">
          <input
            value={date}
            type="date"
            onChange={(event) => {
              getDate(event.target.value);
            }}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success w-100 " onClick={AddData}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};
export default AddTodo;
