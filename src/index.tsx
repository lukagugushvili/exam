import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLout from "./components/layouts/MainLout";
import Header from "./components/layouts/Header";
import Todo from "./pages/Todo";
import Shop from "./pages/Shop";
import DarkMode from "./pages/DarkMode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLout />,
  },
  {
    path: "/todo",
    element: (
      <>
        <Header />
        <Todo />
      </>
    ),
  },
  {
    path: "/darkMode",
    element: (
      <>
        <Header />
        <DarkMode />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <Header />
        <Shop />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
