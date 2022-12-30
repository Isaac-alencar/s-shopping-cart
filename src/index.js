import React from "react";
import ReactDOM from "react-dom/client";

import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./styles/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </React.StrictMode>
);
