import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./../pages/ErrorPage";
import Home from "../pages/HomePage";
import BrandsPage from "../pages/BrandsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from './../pages/AboutPage';
import MyProfilePage from "../pages/MyProfilePage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/brands",
        element: <BrandsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/profile",
        element: <MyProfilePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },

    ],
  },
]);

export default Routes;
