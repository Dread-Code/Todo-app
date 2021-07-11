import React from "react";
import { shallow } from "enzyme";
import { TodoItem } from "./TodoItem";

describe("TodoItem", () => {
  const handleToggle = jest.fn();
  const deleteTodo = jest.fn();
  const todo = {
    id: 1625964511944,
    desc: "Estudiar jest",
    done: false,
  };
  const wrapper = shallow(
    <TodoItem
      todo={todo}
      index={0}
      handleToggle={handleToggle}
      deleteTodo={deleteTodo}
    />
  );

  test("should match to snapshoot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should call the handleToggle function", () => {
    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenCalledWith(todo.id);
  });

  test("should call the deleteTodo function", () => {
    wrapper.find("button").simulate("click");
    expect(deleteTodo).toHaveBeenCalledWith(todo.id);
  });

  test("should show the text correctlty", () => {
    const p = wrapper.find("p");
    expect(p.text()).toBe(`1. ${todo.desc}`);
  });

  test("should have the complete class if todo.done equal true", () => {
    const newTodo = {
      ...todo,
      done: !todo.done,
    };

    const wrapper = shallow(
      <TodoItem
        todo={newTodo}
        index={0}
        handleToggle={handleToggle}
        deleteTodo={deleteTodo}
      />
    );
    const p = wrapper.find("p");

    expect(wrapper).toMatchSnapshot();
    expect(p.hasClass("complete")).toBe(true);
  });
});
