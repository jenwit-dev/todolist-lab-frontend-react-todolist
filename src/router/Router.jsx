import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Authenticated from "../components/Authenticated";
import RedirectIfAuthenticated from "../components/RedirectIfAuthenticated";

const router = createBrowserRouter([
  {
    // "/" is frontend route (react-router-dom, http://localhost:5173)
    // "/" here is the parent route (root path) for all child routes
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
    // nested routes : adding key children to the parent route
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
