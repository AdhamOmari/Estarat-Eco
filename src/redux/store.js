import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import AllReducer from './AllReducer'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

const store = createStore(AllReducer, {}, composeEnhancer(applyMiddleware(thunk)))
export default store;
