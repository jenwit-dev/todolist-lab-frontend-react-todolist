import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

axios.defaults.baseURL = "http://localhost:5555";

export default function LoginPage() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChangeInput = (event) =>
    setInput({ ...input, [event.target.name]: event.target.value });

  const handleSubmitForm = (event) => {
    event.preventDefault();
    axios
      .post("/auth/login", input)
      .then((response) => {
        console.log(response.data.accessToken);
        localStorage.setItem("accessToken", response.data.accessToken);
      })
      .catch((err) => {
        console.log(err);
        // window.alert("Login failed");
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: "Invalid credential",
        });
      });
  };

  return (
    <form
      className="flex flex-col gap-4 bg-white p-4 rounded-md"
      onSubmit={handleSubmitForm}
    >
      <div>
        <label className="block mb-1 font-semibold">Username</label>
        <input
          type="text"
          className="w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-500"
          value={input.username}
          name="username"
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Password</label>
        <input
          type="text"
          className="w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-500"
          value={input.password}
          name="password"
          onChange={handleChangeInput}
        />
      </div>

      <button className="bg-blue-500 px-3 py-1.5 text-white rounded-md hover:cursor-pointer hover:bg-blue-900 transition">
        Sign In
      </button>
    </form>
  );
}
