import React from "react";
import { mount, shallow } from "enzyme";
import { TodoApp } from "./TodoApp";
import { act } from "@testing-library/react";

describe("TodoApp", () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => {});

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
  test("should match snapshoot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should add todo", () => {
    /**
     * We use mount when we need to test all
     * Application's context in general.
     * And the functionality is similar to
     * shallow,  the only difference is the render's
     * level.
     *
     * We need more informatioon of the component's
     * child
     */
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find("AddTodo").prop("addTodo")(todos[0]);
      wrapper.find("AddTodo").prop("addTodo")(todos[1]);
    });
    expect(wrapper.find("h1").text().trim()).toBe(`TodoApp (${todos.length})`);
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("should delete a todo", () => {
    wrapper.find("AddTodo").prop("addTodo")(todos[0]);
    expect(wrapper.find("h1").text().trim()).toBe(`TodoApp (${1})`);
    wrapper.find("TodoList").prop("deleteTodo")(todos[0].id, {
      preventDefault: () => {},
    });
    expect(wrapper.find("h1").text().trim()).toBe(`TodoApp (${0})`);
  });
});
