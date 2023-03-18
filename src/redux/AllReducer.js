import { combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { FetchData } from './Products/reducer'


const allReducer = combineReducers({
    authReducer, FetchData
})


export default allReducer
