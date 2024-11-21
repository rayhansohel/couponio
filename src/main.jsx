import "./index.css";
import Routes from "./routes/Routes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./contexts/AuthProvider";
import BrandProvider from "./contexts/BrandProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <BrandProvider>
          <RouterProvider router={Routes} />
          <ToastContainer />
        </BrandProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
