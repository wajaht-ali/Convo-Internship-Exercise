import React, { Suspense, useContext } from "react";
import "../../styles/home.css";
import { RecipeContext } from "../../context/RecipeContext";

const RecipeData = React.lazy(() => import("../RecipeData"));
const Home: React.FC = () => {
  const { recipes, setRecipes } = useContext(RecipeContext);
  return (
    <>
      <div className="home_banner">
        <h1>Food Diary</h1>
      </div>
      <div className="recipes_data">
        {/* Lazy loading component */}
        <Suspense
          fallback={
            <div className="lazy_loading_text">Please Wait... Loading!</div>
          }
        >
          <RecipeData recipes={recipes} setRecipes={setRecipes} />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
