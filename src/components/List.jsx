import React from "react";
import Item from "./Item";

export default function List({ todos, setTodos }) {
  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
}
