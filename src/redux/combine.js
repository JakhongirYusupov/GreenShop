import { combineReducers } from "redux";
import { CART } from "./reducers";

const combinedReducers = combineReducers({
  cart: CART
});

export default combinedReducers;