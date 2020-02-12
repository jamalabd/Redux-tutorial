import { combineReducers } from "redux";
import counterReducers from "./counter";
import loggedReducer from "./isLoggedIn";

const allReducers = combineReducers({
  counter: counterReducers,
  loggedIn: loggedReducer
});

export default allReducers;
