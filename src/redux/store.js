import { combineReducers } from "redux";
import { authReducer } from "./Reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
