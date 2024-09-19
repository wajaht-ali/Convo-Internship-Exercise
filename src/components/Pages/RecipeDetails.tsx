import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recipe from "../../models/Recipe.model";
import img from "../../assets/list-style-type.png";
import "../../styles/recipe-details.css";

const RecipeDetails: React.FC = () => {
  const RECIPES_URL_KEY = import.meta.env.VITE_BASE_URL;
  const { id } = useParams<{ id: string }>();

  const [recipeDetails, setRecipeDetails] = useState<Recipe>();

  const fetchRecipeDetails = async (id: string) => {
    try {
      const res = await fetch(`${RECIPES_URL_KEY}/recipes/${id}`);
      const data: Recipe = await res.json();
      setRecipeDetails(data);
    } catch (error) {
      console.error(`Error with fetching recipe details: ${error}`);
    }
  };

  useEffect(() => {
    if (id) {
      fetchRecipeDetails(id);
    }
  }, [id]);

  if (!recipeDetails) {
    return <div>Loading recipe details...</div>;
  }

  return (
    <>
      <div className="home_banner">
        <h1>Food Diary</h1>
      </div>
      <div className="navigation_items_box">
        <div className="line"></div>
        <ul className="list_items">
          <li>Home</li>
          <li>Explore</li>
          <li>Help</li>
          <li>Profile</li>
        </ul>
        <div className="line"></div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="header_box">
            <h1>{recipeDetails.name}</h1>
            <p>{recipeDetails.instructions}</p>
          </div>
          <div className="content_box">
            <h2>Ingredients</h2>
            <hr />
            <ul>
              {recipeDetails.ingredients.map((ingredient, index) => (
                <div className="list_items" key={index}>
                  <div className="single_item">
                    <img
                      style={{ height: "20px", width: "20px" }}
                      src={img}
                      alt="✅"
                    />
                    <p>{ingredient}</p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="right">
          <img src={recipeDetails.image} alt={recipeDetails.name} />
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
