import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const users = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
  ];

  return (
    <header className="flex justify-between items-center p-4 bg-orange-200">
      <h1 className="font-bold text-2xl">Todo List App</h1>
      <ul className="flex gap-4">
        {/* Conditional rendering and JSX fragment */}
        {ctx.user ? (
          <>
            <li className="hover:cursor-pointer">
              <Link to="/">Home</Link>
            </li>{" "}
            <li
              className="hover:cursor-pointer"
              onClick={() => {
                // console.log("Hello from logout");
                ctx.setUser(false);
                localStorage.removeItem("accessToken");
                navigate("/login");
              }}
            >
              {/* Logout */}
              {/* {{ name: "user" }} JS Objects can not be rendered directly inside JSX */}
              {/* {"Logout"}  JS strings can be rendered directly inside JSX */}
              {/* {1234567890} JS numbers can be rendered directly inside JSX */}
              {/* {true} React renders boolean as nothing */}
              {/* {false} React renders boolean as nothing */}
              {/* {null} render nothing */}
              {/* {undefined} render nothing */}
              {/* {NaN} render NaN */}
              {/* {0} render zero */}
              {/* {""} render nothing */}
              {/* {<div className="text-pink-500 font-bold">Hello</div>} can render react element with or without { } */}
              {/* <div className="text-pink-500 font-bold">He</div> */}
              {/* {["John", 123, <li key="3">Item 3</li>]} array of renderables can be rendered directly */}
              {/* ["Jay", 123, <li key="3">Item 3</li>] must add { } to JS expression, otherwise it will be rendered as string */}
              {/* {() => console.log("hello world")} render nothing */}
              {/* {!@#$%} syntax error */}
              {/* {JSON.stringify({ name: "John" })} workaround for JS objects */}
              {/* <div className="font-bold text-green-600 text-2xl">!@#$%</div> workaround for rendering symbols */}
              Logout
            </li>
          </>
        ) : (
          <>
            <li className="hover:cursor-pointer">
              <Link to="/login">Login</Link>
            </li>{" "}
            <li className="hover:cursor-pointer">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}

        {/* 
        <li className="hover:cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link to="/login">Login</Link>
        </li>
        <li className="hover:cursor-pointer">Logout</li>
        <li className="hover:cursor-pointer">
          <Link to="/register">Register</Link>
        </li> */}
      </ul>

      {/*  error : objects are not valid as a react child */}
      {/* Should not render an array of objects inside JSX directly like this, otherwise it will throw an error */}
      {/* <div>
        {[
          { id: 1, name: "a" },
          { id: 2, name: "b" },
          { id: 3, name: "c" },
        ]}
      </div> */}
      {/* Should not do like this too  */}
      {/* <div>
        {users}
      </div>  */}
      {/* Should use array.map() instead, const users = [
          { id: 1, name: "a" },
          { id: 2, name: "b" },
          { id: 3, name: "c" },
        ] */}
      {/* <ul className="flex gap-4">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
    </header>
  );
}
