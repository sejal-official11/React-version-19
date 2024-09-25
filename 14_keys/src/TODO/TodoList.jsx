import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  data,
  onhandleDeleteTodo,
  onhandleCheckedTodo,
  checked,
}) => {
  return (
    <>
      <li className="todo-item">
        <span className={checked ? "line-through" : "none"}>{data}</span>
        <button className="check-btn" onClick={() => onhandleCheckedTodo(data)}>
          <MdCheck />
        </button>
        <button className="delete-btn" onClick={() => onhandleDeleteTodo(data)}>
          <MdDeleteForever />
        </button>
      </li>
    </>
  );
};
