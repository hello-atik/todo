import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const props = {
  autoHideDuration: 3000,
  anchorOrigin: { horizontal: "center", vertical: "bottom" },
  sx: {
    "& .SnackbarContent-root": {},
  },
};

root.render(
  <React.StrictMode>
    <SnackbarProvider {...props}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
