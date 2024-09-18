import React from "react";

type StarRatingProps = {
  rating: number; // Value between 1 and 5
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  // Create an empty array of 5 items
  const totalStars = 5;

  // Create an array from 1 to 5, map over it to create stars
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        // If index (0 to 4) is less than rating, show a filled star, otherwise an empty star
        return (
          <span key={index}>
            {index < rating ? "★" : "☆"}{" "}
            {/* Filled star for rating, empty for others */}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
