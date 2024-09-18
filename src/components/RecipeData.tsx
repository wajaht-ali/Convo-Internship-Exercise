import React from "react";
import Recipe from "../models/Recipe.model";
import "../styles/recipe-data.css";
import { CiClock2 } from "react-icons/ci";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

interface Props {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RecipeData: React.FC<Props> = ({ recipes, setRecipes }) => {
  return (
    <div className="recipe_data_list">
      <div className="navigation_items">
        <div className="line"></div>
        <ul className="list_items">
          <li>Home</li>
          <li>Explore</li>
          <li>Help</li>
          <li>Profile</li>
        </ul>
        <div className="line"></div>
      </div>
      <div className="recipes_collection">
        {recipes.map((item) => (
          <Link
            className="recipe_card"
            to={`recipe-details/${item.id}`}
            key={item.id}
          >
            <div className="top">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="bottom">
              <div className="box box_one">
                <h2>{item.name}</h2>
                <p>Reviews: {item.reviewCount}</p>
              </div>
              <div className="box box_two">
                <span>
                  <CiClock2 />
                  <p>{item.cookTimeMinutes} minutes</p>
                </span>
                <p>{item.mealType}</p>
              </div>
              <div className="box box_three">
                <StarRating rating={item.rating} />
                {item.rating}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeData;
