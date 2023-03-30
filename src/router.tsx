import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Products />,
      },
    ],
  },
]);
