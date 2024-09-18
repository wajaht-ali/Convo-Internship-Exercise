import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import RecipeDetails from "../components/Pages/RecipeDetails.tsx";
import PageNotFound from "../components/PageNotFound.tsx";
import Home from "../components/Pages/Home.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "recipe-details/:id",
        element: <RecipeDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
