import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";
import { RecipeContextProvider } from "./context/RecipeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecipeContextProvider>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </RecipeContextProvider>
  </StrictMode>
);
