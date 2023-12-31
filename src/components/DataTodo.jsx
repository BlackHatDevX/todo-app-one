import { useContext } from "react";
import css from "./DataTodo.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { ItemsData } from "../store/ItemsData";

const DataTodo = ({ name, date }) => {
  const { DeleteData } = useContext(ItemsData);
  return (
    <div className={css.bgCustom + " row m-2 text-start "}>
      <div className="col-6">{name}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button
          className="btn btn-danger w-100"
          onClick={() => {
            DeleteData(name, date);
          }}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};
export default DataTodo;
