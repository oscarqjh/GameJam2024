import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";

import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
      {
        path: "user",
        element: <ProtectedLayout />,
        children: [
          {
            index: true,
            element: <AboutPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
