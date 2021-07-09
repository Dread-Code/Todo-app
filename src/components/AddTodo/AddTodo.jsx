import React from "react";
import { useForm } from "../../hooks/useForm";

export const AddTodo = ({ addTodo }) => {
  const [{ desc }, handleInputChange, reset] = useForm({
    desc: "",
  });

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      desc,
      done: false,
    };
    addTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={(e) => handleAddTodo(e)}>
        <input
          type="text"
          name="desc"
          placeholder="Aprender..."
          autoComplete="off"
          className="form-control"
          value={desc}
          onChange={(e) => handleInputChange(e)}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
