import "./utils/_utils.scss"; // Import SCSS used by the global project 
import React from 'react';
import ReactDOM from 'react-dom/client';

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ErrorPage } from "./pages/ErrorPage";
import { LogementPage } from "./pages/LogementPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";





const root = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/logement",
    element: <LogementPage />,
    errorElement: <ErrorPage />,
  }
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={root} />
  </React.StrictMode>
);
