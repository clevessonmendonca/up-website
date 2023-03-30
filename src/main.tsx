import React from "react";
import ReactDOM from "react-dom/client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
