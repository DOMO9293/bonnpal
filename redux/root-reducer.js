import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { counterReducer } from "./counter/counter.reducer";

export default combineReducers({
  user: userReducer,
  counter: counterReducer,
});
