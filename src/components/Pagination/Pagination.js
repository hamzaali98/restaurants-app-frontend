import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageNum } from "../../store/restaurants/restaurantsSlice";
import "./Pagination.css";

const Pagination = () => {
  const dispatch = useDispatch();
  const { data: restaurants, pageNum } = useSelector(
    (state) => state.restaurants,
  );

  const totalPages = Math.ceil(restaurants.length / 10);

  return (
    <div className="pagination">
      {Array(totalPages)
        .fill(1)
        .map((el, idx) => (
          <p
            key={idx}
            className={`page-item ${pageNum - 1 === idx ? "selected" : ""}`}
            onClick={() => {
              if (pageNum - 1 !== idx) {
                dispatch(setPageNum(idx + 1));
              }
            }}
          >
            {idx + 1}
          </p>
        ))}
    </div>
  );
};

export default Pagination;
