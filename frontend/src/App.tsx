import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./containers/Auth";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth/>,
  },

  {
    path: "/home",
    element: <Auth/>,
  },

]);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
