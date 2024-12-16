import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layouts/Layout";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { UnderConstruction } from "../pages/UnderConstruction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "underConstruction",
        element: <UnderConstruction />,
      },
    ],
  },
]);
