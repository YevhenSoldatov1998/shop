import {combineReducers} from "redux";
import {shopReducer} from "./shopReducers";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

const reducers = combineReducers({
    shop: shopReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers,  composeEnhancers(
    applyMiddleware(thunk)
));