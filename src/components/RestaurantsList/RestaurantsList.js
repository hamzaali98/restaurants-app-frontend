import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../../store/restaurants/restaurantsSlice";
import Restaurant from "../Restaurant/Restaurant";
import "./RestaurantsList.css";

const RestaurantsList = () => {
  const dispatch = useDispatch();
  const { data, pageNum, sortBy, loading, error } = useSelector(
    (state) => state.restaurants,
  );
  const [restaurants, setRestaurants] = useState([]);
  const [map, setMap] = useState(null);
  const [infowindow, setInfowindow] = useState(null);
  const [userLocation, setUserLocation] = useState({
    lat: 59.3293,
    lon: 18.0686,
  });

  useEffect(() => {
    const defaultLocation = { lat: 59.3293, lon: 18.0686 };

    const fetchAndInitialize = (location) => {
      setUserLocation(location);
      dispatch(fetchRestaurants(location));
    };

    const handleLocationError = () => {
      fetchAndInitialize(defaultLocation);
    };

    if (!loading && data.length === 0 && !error) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          fetchAndInitialize(userLocation);
        }, handleLocationError);
      } else {
        handleLocationError();
      }
    }
  }, [dispatch, loading, data.length]);

  useEffect(() => {
    if (data && data.length > 0) {
      setRestaurants(data.slice(10 * (pageNum - 1), 10 * pageNum));

      // Initialize map
      if (!map) {
        const location = new window.google.maps.LatLng(
          userLocation.lat,
          userLocation.lon,
        );
        const newMap = new window.google.maps.Map(
          document.getElementById("map"),
          {
            center: location,
            zoom: 15,
          },
        );
        setMap(newMap);
        setInfowindow(new window.google.maps.InfoWindow());
      }

      // Create markers
      if (map) {
        data.forEach((place) => {
          createMarker(place);
        });
      }
    }
  }, [data, pageNum, sortBy, map, userLocation]);

  const createMarker = (place) => {
    if (!place.geometry || !place.geometry.location) return;

    const marker = new window.google.maps.Marker({
      map,
      position: place.geometry.location,
    });

    window.google.maps.event.addListener(marker, "click", () => {
      infowindow.setContent(place.name || "");
      infowindow.open(map, marker);
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="error-message">Failed to Fetch Restaurants Near You</div>
    );
  }

  if (restaurants.length === 0) {
    return <div>No restaurants available.</div>;
  }
  return (
    <div className="restaurantsList">
      {restaurants.map((res, idx) => (
        <Restaurant
          id={res.place_id}
          number={idx}
          address={res.vicinity}
          name={res.name}
          noOfRatings={res.user_ratings_total}
          ratings={res.rating}
          coords={res.geometry?.location}
        />
      ))}
    </div>
  );
};

export default RestaurantsList;
