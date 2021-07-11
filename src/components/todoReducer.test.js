import { todoReducer } from "./todoReducer";

describe("todoReducer", () => {
  const actionAdd = {
    type: "add",
    payload: {
      id: new Date().getTime(),
      desc: "Estudiar jest",
      done: false,
    },
  };

  test("should return a default state", () => {
    const result = todoReducer();
    expect(result).toEqual([]);
  });

  test("should add todo", () => {
    const result = todoReducer([], actionAdd);
    expect(result).toEqual([actionAdd.payload]);
  });

  test("should delete a todo", () => {
    const result = todoReducer([], actionAdd);
    const actionDelete = {
      type: "delete",
      payload: result[0].id,
    };
    expect(todoReducer(result, actionDelete)).toEqual([]);
  });

  test("should toggle todo", () => {
    const result = todoReducer([], actionAdd);
    const actionToggle = {
      type: "toggle",
      payload: result[0].id,
    };

    expect(todoReducer(result, actionToggle)).toEqual([
      { ...actionAdd.payload, done: !actionAdd.payload.done },
    ]);
  });
});
