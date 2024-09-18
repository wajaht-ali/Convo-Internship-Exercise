import React, { Suspense, useContext } from "react";
import "../../styles/home.css";
import { RecipeContext } from "../../context/RecipeContext";
import Recipe from "../../models/Recipe.model";

type ContextTypes = {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

const RecipeData = React.lazy(() => import("../RecipeData"));
const Home: React.FC = () => {
  const { recipes, setRecipes } = useContext<ContextTypes>(RecipeContext);
  console.log(recipes);
  return (
    <>
      <div className="home_banner">
        <h1>Food Diary</h1>
      </div>
      <div className="recipes_data">
        {/* Lazy loading component */}
        <Suspense fallback={<div>Please Wait... Loading!</div>}>
          <RecipeData recipes={recipes} setRecipes={setRecipes} />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
