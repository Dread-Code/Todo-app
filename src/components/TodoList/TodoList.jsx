import React from "react";
import { TodoItem } from "./TodoItem/TodoItem";

export const TodoList = ({ todos, handleToggle, deleteTodo }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {todos.map((todo, i) => (
          <TodoItem
            todo={todo}
            index={i}
            handleToggle={handleToggle}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        ))}
      </ul>
    </>
  );
};
