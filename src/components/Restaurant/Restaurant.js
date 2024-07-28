import React from "react";
import "./Restaurant.css";
import { ReactComponent as StarIcon } from "../../assets/svg/StarIcon.svg";
import { useDispatch } from "react-redux";
import { fetchRestaurantById } from "../../store/restaurants/restaurantsSlice";

const Restaurant = ({ id, number, name, address, ratings, noOfRatings }) => {
  const dispatch = useDispatch();
  const handleCardClick = () => {
    dispatch(fetchRestaurantById(id));
  };

  return (
    <div className="restaurant" onClick={handleCardClick}>
      <p className="num">{number + 1}</p>
      <div className="restaurant-details">
        <h3>{name}</h3>
        <h6>{address}</h6>
      </div>
      <div className="restaurant-info">
        <p className="rating">
          {ratings}/5 <StarIcon width="1rem" fill="gold" /> ({noOfRatings})
        </p>
      </div>
    </div>
  );
};

export default Restaurant;
