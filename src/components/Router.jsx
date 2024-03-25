import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "./Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/diziler",
      element: <Series />,
    },
    {
      path: "/filmler",
      element: <Movies />,
    },
    {
      path: "/listem",
      element: <MyList />,
    },
  ]);
};
