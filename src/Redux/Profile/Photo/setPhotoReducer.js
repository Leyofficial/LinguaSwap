import {initialState} from "../../initialState.ts";
import {SET_PHOTO} from "./setPhotoAC.js";
import {DELETE_PHOTO} from "./deletePhotoAC.js";

export function setPhotoReducer(state = initialState.photo , action){
switch (action.type) {
    case SET_PHOTO :
        return   action.photo ;
    case DELETE_PHOTO :
        return '' ;
    default : return state
}
}
