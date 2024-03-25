import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Series from "./Series";
import Movies from "./Movies";
import MyList from "./MyList";

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

  return <RouterProvider router={router} />;
};

export default Router;
