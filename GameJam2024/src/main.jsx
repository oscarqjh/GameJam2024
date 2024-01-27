import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'regenerator-runtime/runtime'
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";

import "./styles/index.css";
import GamePage from "./routes/GamePage";

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
      {
        path: "game",
        element: <ProtectedLayout />,
        children: [
          {
            index: true,
            element: <GamePage/>,
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
