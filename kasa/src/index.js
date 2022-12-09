import React from 'react';
import ReactDOM from 'react-dom/client';
import "./global.scss"; // Import all SCSS not used by Components and then used by the global project

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ErrorPage } from "./pages/ErrorPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";





const root = createBrowserRouter([
  {
    path: "/",
    element: HomePage,
    errorElement: ErrorPage,
  },
  {
    path: "/about",
    element: AboutPage,
    errorElement: ErrorPage,
  }


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={root} />
  </React.StrictMode>
);