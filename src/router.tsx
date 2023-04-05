import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Error } from "./components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    errorElement: <Error />,
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
  {
    path: "/contact/:id?",
    element: <Contact />,
  },
]);
