import React, { useState } from "react";
import "./rating.css";
import { FaStar } from "react-icons/fa";
const Rating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null);
  const getId = () => {
    return Math.random();
  };
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={getId()}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              key={i}
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              size={25}
            />
          </label>
        );
      })}
      {/* <p>the rating is {rating}</p> */}
    </div>
  );
};

export default Rating;
