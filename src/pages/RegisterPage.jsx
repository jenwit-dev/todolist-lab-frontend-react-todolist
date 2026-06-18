import { useState } from "react";
import Joi from "joi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// define Joi schema for validation (Joi is a popular validation library)
// use Joi library at fronend to validate user input before sending to backend
// P Earth used joi to validate user input in project todolist-lab-frontend-react-todolist
// P Earth also used joi in project cc15-fakebuck-mvc-express to validate user input at backend
// therefore, joi can be used at both frontend and backend
const schema = Joi.object({
  username: Joi.string().max(30).min(3).required(),
  password: Joi.string().min(6).alphanum().required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // value: the validated and possibly transformed data after validation (object value)
    // error: ValidationError object if validation fails, otherwise undefined (object error)
    const { value, error } = schema.validate(
      // since the schema to validate is Joi.object({}), we need to pass in an object to validate()
      {
        username,
        password,
        confirmPassword,
      },
      { abortEarly: false }
    );
    console.log(value);
    // if you do not input any value to the fields, object value will return { username: '', password: '', confirmPassword: '' }
    if (error) {
      // console.log(error);
      // console.log(typeof error); // ValidationError object
      // console.dir(error);
      // console.dir(error.message);
      // console.dir = directory (show full object details) whereas console.log(error) just shows a summary
      const nextError = { username: "", password: "", confirmPassword: "" };
      for (let item of error.details) {
        nextError[item.path[0]] = item.message;
      }
      // error = the result destructured from schema.validate() which is a single entire object (ValidationError object)
      // error.details = an array of many smaller error objects
      // item = each small error object of error.details
      return setError(nextError);
    }

    // if no error, error destructured from schema.validate() will be undefined
    console.log(typeof error); // undefined

    // if no error, clear all error messages
    setError({ username: "", password: "", confirmPassword: "" });

    // loading spinner starts
    setIsLoading(true);

    axios
      // .post("http://localhost:5555/auth/register", {
      //   username,
      //   password,
      //   confirmPassword,
      // })
      .post("http://localhost:5555/auth/register", value)
      //  backend route (http://localhost:5555)
      .then(() => {
        // window.alert("successful registration");
        navigate("/login");
        // navigate() is frontend route (react-router-dom, http://localhost:5173)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form
      className="flex flex-col gap-4 bg-white p-4 rounded-md"
      onSubmit={handleSubmitForm}
    >
      <div>
        <label className="block mb-1 font-semibold">Username</label>
        <input
          type="text"
          className={`w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 ${
            error.username
              ? "border-red-500 focus:ring-red-500"
              : "focus:ring-blue-500"
          } `}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        {error.username && (
          <span className="text-red-500 text-xs">{error.username}</span>
        )}
      </div>
      <div>
        <label className="block mb-1 font-semibold">Password</label>
        <input
          type="text"
          className={`w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 ${
            error.password
              ? "border-red-500 focus:ring-red-500"
              : "focus:ring-blue-500"
          } `}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {error.password && (
          <span className="text-red-500 text-xs">{error.password}</span>
        )}
      </div>
      <div>
        <label className="block mb-1 font-semibold">Confirm Password</label>
        <input
          type="text"
          className={`w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 ${
            error.confirmPassword
              ? "border-red-500 focus:ring-red-500"
              : "focus:ring-blue-500"
          } `}
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        {error.confirmPassword && (
          <span className="text-red-500 text-xs">{error.confirmPassword}</span>
        )}
      </div>
      <button className="bg-blue-500 px-3 py-1.5 text-white rounded-md hover:cursor-pointer hover:bg-blue-900 transition">
        Sign Up
      </button>
    </form>
  );
}
