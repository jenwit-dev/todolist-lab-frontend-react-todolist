import React from "react";

export default function Form() {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="outline-none px-3 py-1.5 border rounded-md flex-grow"
      />
      <button className="bg-blue-500 px-3 py-1.5 text-white rounded-md">
        Create
      </button>
    </div>
  );
}
