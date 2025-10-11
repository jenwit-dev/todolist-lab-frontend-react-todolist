import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Authenticated from "../components/Authenticated";
import RedirectIfAuthenticated from "../components/RedirectIfAuthenticated";

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
      {
        path: "",
        element: (
          <Authenticated>
            <HomePage />
          </Authenticated>
        ),
      },
      {
        path: "login",
        element: (
          <RedirectIfAuthenticated>
            <LoginPage />
          </RedirectIfAuthenticated>
        ),
      },
      {
        path: "register",
        element: (
          <RedirectIfAuthenticated>
            <RegisterPage />
          </RedirectIfAuthenticated>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
