import React from "react";
import { shallow } from "enzyme";
import { TodoList } from "./TodoList";

describe("TodoList", () => {
  const handleToggle = jest.fn();
  const deleteTodo = jest.fn();
  const todos = [
    {
      id: 1625964511944,
      desc: "Estudiar jest",
      done: false,
    },
    {
      id: 1625964511945,
      desc: "Estudiar Mongo",
      done: false,
    },
  ];
  const wrapper = shallow(
    <TodoList
      todos={todos}
      handleToggle={handleToggle}
      deleteTodo={deleteTodo}
    />
  );
  test("should match snapshoot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have 2 TodoItem", () => {
    expect(wrapper.find("TodoItem").length).toBe(todos.length);
  });

  test("should have rigth props", () => {
    expect(wrapper.find("TodoItem").at(0).prop("deleteTodo")).toEqual(
      expect.any(Function)
    );
    expect(wrapper.find("TodoItem").at(0).prop("handleToggle")).toEqual(
      expect.any(Function)
    );
  });
});
