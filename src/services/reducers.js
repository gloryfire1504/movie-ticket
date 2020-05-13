import {combineReducers} from "redux";
import MovieReducer from "./ListMovie/reducer";

let rootReducer = combineReducers({
    MovieReducer,
})
export default rootReducer