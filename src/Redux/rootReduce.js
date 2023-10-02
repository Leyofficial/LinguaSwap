import {  createStore } from "redux";
import { initialState } from "./initialState";

import combinedReducers from './combineReducer'
import thunk from "redux-thunk";

const store = createStore(
    combinedReducers , 
    initialState ,applyMiddleware(thunk)

)

export default store
window.state = store.getState()