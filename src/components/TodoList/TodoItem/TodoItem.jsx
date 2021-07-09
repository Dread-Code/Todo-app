import React from "react";

export const TodoItem = ({ todo, index, handleToggle, deleteTodo }) => {
  return (
    <>
      <li key={todo.id} className="list-group-item">
        <p
          className={`${todo.done && "complete"}`}
          onClick={() => handleToggle(todo.id)}
        >
          {index + 1}. {todo.desc}
        </p>
        <button
          className="btn btn-danger"
          onClick={(e) => deleteTodo(todo.id, e)}
        >
          Eliminar
        </button>
      </li>
    </>
  );
};
