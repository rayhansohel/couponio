import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./contexts/AuthProvider";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={Routes} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
