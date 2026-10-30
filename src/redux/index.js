import { combineReducers } from "redux";
import { wheatherReducer } from "./reducer/wheatherReducer";

const rootReducer = combineReducers({
    wheatherDetails: wheatherReducer
})

export default rootReducer;