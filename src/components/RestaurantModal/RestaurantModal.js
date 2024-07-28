import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearRestaurantData } from "../../store/restaurants/restaurantsSlice";
import "./RestaurantModal.css";

const RestaurantModal = () => {
  const dispatch = useDispatch();
  const { restaurant, loading, error } = useSelector(
    (state) => state.restaurants,
  );

  const handleClose = () => {
    dispatch(clearRestaurantData());
  };

  if (!restaurant) return null;

  const {
    name,
    formatted_address,
    formatted_phone_number,
    rating,
    user_ratings_total,
    opening_hours,
    website,
  } = restaurant;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    name,
  )} ${encodeURIComponent(formatted_address)}`;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            <h2>{name}</h2>
            <p>{formatted_address}</p>
            {formatted_phone_number && <p>Phone: {formatted_phone_number}</p>}
            <p>Ratings: {rating} / 5</p>
            <p>Number of Ratings: {user_ratings_total}</p>
            {opening_hours && (
              <>
                <h3>Opening Hours:</h3>
                <ul>
                  {opening_hours.weekday_text.map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                </ul>
              </>
            )}
            <div className="modal-links">
              <a href={googleMapsUrl} target="_blank" rel="noreferrer">
                View on Map
              </a>
              {website && (
                <a href={website} target="_blank" rel="noreferrer">
                  View Website
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantModal;
