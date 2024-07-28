import React from "react";
import {
  Footer,
  Header,
  Pagination,
  RestaurantsList,
  Sort,
  Spinner,
  RestaurantModal,
} from "./components";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";

function App() {
  const { loading } = useSelector((state) => state.restaurants);

  return (
    <div className="app-container">
      <Header />
      <div id="map"></div>
      {loading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <>
          <Sort />
          <RestaurantsList />
          <Pagination />
        </>
      )}
      <RestaurantModal />
      <Footer />
    </div>
  );
}

export default App;
