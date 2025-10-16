import { useState } from "react";
import axios from "axios";

export default function Form({ setTodos }) {
  const [input, setInput] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // ignore validation for simplicity
    axios
      .post(
        "http://localhost:5555/todo",
        { title: input },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log("successful POST /todo");
        setInput("");
        // Option 2: update todos state by adding new todo from response of POST /todo
        setTodos((prev) => [...prev, res.data.todo]);

        // Option 1 : duplicate request to get updated todo list, reducing performance for the server
        // return axios.get("http://localhost:5555/todo", {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        //   },
        // });
      })
      // .then((res) => {
      //   console.log("successful GET /todo");
      //   setTodos(res.data.todos);
      // })
      .catch((err) => console.log(err));
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmitForm}>
      <input
        type="text"
        className="outline-none px-3 py-1.5 border rounded-md flex-grow"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-500 px-3 py-1.5 text-white rounded-md hover:cursor-pointer hover:bg-blue-800">
        Create
      </button>
    </form>
  );
}
