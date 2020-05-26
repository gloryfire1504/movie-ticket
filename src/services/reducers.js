import {combineReducers} from "redux";
import MovieReducer from "./ListMovie/reducer";
import MovieDetailReducer from "./MovieDetail/reducer";
import LoginReducer from './Login/reducer'

let rootReducer = combineReducers({
    MovieReducer,
    MovieDetailReducer,
    LoginReducer
})
export default rootReducer