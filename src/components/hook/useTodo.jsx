import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    if (newTodo.desc.trim().length >= 1) {
      dispatch({
        type: "add",
        payload: newTodo,
      });
    }
  };

  const deleteTodo = (id, e) => {
    e.preventDefault();

    const action = {
      type: "delete",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  return { todos, addTodo, deleteTodo, handleToggle };
};
