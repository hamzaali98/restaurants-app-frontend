// src/store/restaurants/restaurantsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    restaurant: null,
    loading: false,
    success: false,
    error: '',
    pageNum: 1,
    sortBy: '',
};

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        fetchRestaurants: (state) => {
            state.loading = true;
            state.success = false;
            state.error = '';
        },
        fetchRestaurantsSuccess: (state, action) => {
            state.loading = false;
            state.success = true;
            state.data = action.payload;
        },
        fetchRestaurantsError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchRestaurantById: (state) => {
            state.success = false;
            state.error = '';
        },
        fetchRestaurantByIdSuccess: (state, action) => {
            state.loading = false;
            state.success = true;
            state.restaurant = action.payload;
        },
        fetchRestaurantByIdError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearRestaurantData: (state) => {
            state.restaurant = null;
            state.loading = false;
            state.success = false;
            state.error = '';
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        sortData: (state) => {
            switch (state.sortBy) {
                case 'restaurant_name':
                    state.data.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'ratings':
                    state.data.sort((a, b) => b.rating - a.rating);
                    break;
                default:
                    break;
            }
        },
        setPageNum: (state, action) => {
            state.pageNum = action.payload;
        },
    },
});

export const {
    fetchRestaurants,
    fetchRestaurantsSuccess,
    fetchRestaurantsError,
    fetchRestaurantById,
    fetchRestaurantByIdSuccess,
    fetchRestaurantByIdError,
    clearRestaurantData,
    setSortBy,
    sortData,
    setPageNum,
} = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
