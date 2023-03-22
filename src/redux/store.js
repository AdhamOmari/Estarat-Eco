import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import AllReducer from './AllReducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(AllReducer, {}, composeEnhancers(applyMiddleware(thunk)))
export default store;
