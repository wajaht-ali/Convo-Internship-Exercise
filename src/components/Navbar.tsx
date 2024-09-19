import React, { FormEvent, useContext, useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { FiLogIn } from "react-icons/fi";
import { PiUserFill } from "react-icons/pi";
import logo from "../assets/main_logo.png";
import "../styles/navbar.css";
import Recipe from "../models/Recipe.model";
import { RecipeContext } from "../context/RecipeContext"; // Import context

type ContextTypes = {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

const Navbar: React.FC = () => {
  const { recipes, setRecipes } = useContext<ContextTypes>(RecipeContext);

  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (query === "") {
      // If the search is cleared, reset to all recipes
      setRecipes(recipes);
    }
  }, [query, setQuery, recipes]);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    try {
      if (query === "") {
        // If the search is cleared, reset to all recipes
        setRecipes(recipes); // Or fetch original recipes from the API or context if needed
      } else {
        const searchResults = recipes.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        setRecipes(searchResults);
        // Directly update the global state with filtered recipes
      }
    } catch (error) {
      console.log(`Error searching for recipes: ${error}`);
    }
  };

  return (
    <div className="main_header">
      <nav className="navbar">
        <ul className="unordered_list">
          <li>Community</li>
          <li>Books</li>
          <li>Recipe Index</li>
          <li>Popular</li>
        </ul>
        <div className="auth_links">
          <ul className="unordered_list">
            <li className="auth_items">
              <FiLogIn className="icon" />
              Register
            </li>
            <li className="auth_items">
              <PiUserFill className="icon" />
              Login
            </li>
          </ul>
        </div>
      </nav>
      <header className="sub_header">
        <div className="logo_img">
          <a href="/">
            <img src={logo} alt="Logo_image" />
          </a>
        </div>
        <div className="search_input">
          <SearchInput
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}
          />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
