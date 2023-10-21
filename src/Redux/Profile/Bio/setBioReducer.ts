import { initialState } from "../../initialState.ts";
import {BioActions,  TBioActions} from "./setBioAC.ts";

export function setBioReducer(state: string = initialState.bio, action: TBioActions) {
    switch (action.type) {
        case BioActions.SET_BIO :
          return action.bio
        default : return state
    }
}