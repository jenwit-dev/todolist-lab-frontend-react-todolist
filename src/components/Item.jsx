import React from "react";
import axios from "axios";

export default function Item({ todo, setTodos }) {
  const handleDelete = () => {
    // console.log(todo.id);
    axios
      .delete(`http://localhost:5555/todo/${todo.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        // console.log(res.status);
        if (res.status === 204) {
          console.log(`successful DELETE /todo/:${todo.id}`);
          setTodos((prev) => prev.filter((item) => todo.id !== item.id));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <li className="flex justify-between border items-center border-gray-200 bg-white px-3 py-4 rounded-md">
      <span>{todo.title}</span>
      <div className="flex gap-2">
        <button className="bg-green-700 px-3 py-1.5 text-white rounded-md hover:cursor-pointer hover:bg-green-900">
          Edit
        </button>
        <button
          className="bg-red-700 px-3 py-1.5 text-white rounded-md hover:cursor-pointer hover:bg-red-900"
          onClick={handleDelete}
        >
          Del
        </button>
      </div>
    </li>
  );
}
