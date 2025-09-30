import React from "react";

export default function Item() {
  return (
    <li className="flex justify-between border items-center border-gray-200 bg-white px-3 py-4 rounded-md">
      <span>Todo</span>
      <div className="flex gap-2">
        <button className="bg-green-700 px-3 py-1.5 text-white rounded-md">
          Edit
        </button>
        <button className="bg-red-700 px-3 py-1.5 text-white rounded-md">
          Del
        </button>
      </div>
    </li>
  );
}
