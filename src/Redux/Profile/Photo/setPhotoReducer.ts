import {initialState} from "../../initialState.ts";
import {PhotoActions, TPhotoActions} from "./setPhotoAC.ts";

export function setPhotoReducer(state = initialState.photo , action : TPhotoActions){
switch (action.type) {
    case PhotoActions.SET_PHOTO :
        return   action.photo ;
    case PhotoActions.DELETE_PHOTO :
        return '' ;
    default : return state
}
}
