import { combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { FetchData } from './Products/reducer'
import { addToCardReducer } from './Card/reducer'



const allReducer = combineReducers({
    authReducer, FetchData, addToCardReducer
})


export default allReducer
