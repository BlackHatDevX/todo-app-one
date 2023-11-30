import styles from "./AddTodo.module.css";
import { FaCheckCircle } from "react-icons/fa";
const AddTodo = ({
  AddData,

  valRef,
  dateRef,
}) => {
  return (
    <>
      <form
        className={"row m-2 text-start " + styles.inbox}
        onSubmit={(event) => {
          AddData(event);
        }}
      >
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" ref={valRef} />
        </div>
        <div className="col-4">
          <input ref={dateRef} type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success w-100 ">
            <FaCheckCircle />
          </button>
        </div>
      </form>
    </>
  );
};
export default AddTodo;
