import {combineReducers} from 'redux';
import restaurantsSlice from "./restaurants/restaurantsSlice";
const appReducer = combineReducers({
    restaurants: restaurantsSlice,
});

export default appReducer;
