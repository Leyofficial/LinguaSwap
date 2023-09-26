import {  createStore } from "redux";
import { initialState } from "./initialState";

import combinedReducers from './combineReducer'

const store = createStore(
    combinedReducers , 
    initialState ,
)

export default store
window.state = store.getState()