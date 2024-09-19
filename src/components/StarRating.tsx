import React from "react";

type StarRatingProps = {
  rating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        return <span key={index}>{index < rating ? "★" : "☆"} </span>;
      })}
    </div>
  );
};

export default StarRating;
