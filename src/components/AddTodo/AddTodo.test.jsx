import React from "react";
import { shallow } from "enzyme";
import { AddTodo } from "./AddTodo";

describe("AddTodo", () => {
  const addTodo = jest.fn();
  const wrapper = shallow(<AddTodo addTodo={addTodo} />);

  test("should  match snapshoot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("shouldn't call handleAddTodo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });
    expect(addTodo).toHaveBeenCalledTimes(0);
  });

  test("should call handleAddTodo", () => {
    const value = "Estudiar Enzyme";

    wrapper.find("input").simulate("change", {
      target: { name: "desc", value },
    });

    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(addTodo).toHaveBeenCalledTimes(1);
    expect(addTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(addTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
