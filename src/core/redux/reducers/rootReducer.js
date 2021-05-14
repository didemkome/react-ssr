import { combineReducers } from "redux";
import bettingReducer from "./bettingReducer";

const rootReducer = combineReducers({
	betting: bettingReducer,
});

export default rootReducer;
