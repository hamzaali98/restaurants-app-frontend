// src/components/Sort/Sort.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy, sortData } from "../../store/restaurants/restaurantsSlice";
import "./Sort.css";

const Sort = () => {
    const dispatch = useDispatch();
    const sortBy = useSelector((state) => state.restaurants.sortBy);

    const onChange = (e) => {
        dispatch(setSortBy(e.target.id));
        dispatch(sortData());
    };

    return (
        <div className="sort_wrapper">
            <h4>Sort By:</h4>
            <span>
        <input
            type="radio"
            name="sort"
            id="restaurant_name"
            checked={sortBy === "restaurant_name"}
            onChange={onChange}
        />{" "}
                <label htmlFor="restaurant_name">Restaurant Name</label>
      </span>

            <span>
        <input
            type="radio"
            name="sort"
            id="ratings"
            checked={sortBy === "ratings"}
            onChange={onChange}
        />{" "}
                <label htmlFor="ratings">Ratings</label>
      </span>

        </div>
    );
};

export default Sort;
