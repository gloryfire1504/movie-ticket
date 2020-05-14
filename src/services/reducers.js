import {combineReducers} from "redux";
import MovieReducer from "./ListMovie/reducer";
import MovieDetailReducer from "./MovieDetail/reducer";

let rootReducer = combineReducers({
    MovieReducer,
    MovieDetailReducer,
})
export default rootReducer