import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import "./styles/global.css";
import { RecipeContextProvider } from "./context/RecipeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecipeContextProvider>
      <RouterProvider router={router} />
    </RecipeContextProvider>
  </StrictMode>
);
