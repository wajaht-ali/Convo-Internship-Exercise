import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from "react";
import Recipe from "../models/Recipe.model";

const RECIPES_URL_KEY = import.meta.env.VITE_BASE_URL;
interface RecipeContextType {
  recipes: Recipe[] | null;
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[] | null>>;
}

export const RecipeContext = createContext<RecipeContextType>({
  recipes: null,
  setRecipes: () => {},
});

export const RecipeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [recipes, setRecipes] = useState<Recipe[] | null>([]);
  const fetchRecipes = async () => {
    try {
      const response = await fetch(`${RECIPES_URL_KEY}/recipes`);
      const data = await response.json();
      return data.recipes;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return null;
    }
  };

  useEffect(() => {
    const getRecipes = async () => {
      const fetchedRecipes = await fetchRecipes();
      setRecipes(fetchedRecipes);
    };

    getRecipes();
  }, []);

  const memoizedRecipesData = useMemo(() => recipes, [recipes]);

  return (
    <RecipeContext.Provider
      value={{ recipes: memoizedRecipesData, setRecipes }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
