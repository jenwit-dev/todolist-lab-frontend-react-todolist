import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // Layout
      <div className="bg-gray-500 h-screen">
        <Header />
        <div className="p-8 max-w-xl mx-auto">
          <Outlet />
        </div>
      </div>
    ),
    children: [
      // path can be either absolute or relative
      // relative path, no slash, relative to parent path (recommended)
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
