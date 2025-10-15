import { useEffect } from "react";
import Form from "../components/Form";
import List from "../components/List";
import axios from "axios";
import { useState } from "react";

export default function HomePage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/todo", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setTodos(res.data.todos);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="flex flex-col gap-4 bg-white p-4 rounded-md">
      <Form setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </section>
  );
}
