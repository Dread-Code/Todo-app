import React from "react";
import "./style.css";
import { TodoList } from "./TodoList/TodoList";
import { AddTodo } from "./AddTodo/AddTodo";
import { useTodo } from "./hook/useTodo";

export const TodoApp = () => {
  const { todos, addTodo, deleteTodo, handleToggle } = useTodo();
  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            deleteTodo={deleteTodo}
          />
        </div>
        <div className="col-5">
          <AddTodo addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
};
