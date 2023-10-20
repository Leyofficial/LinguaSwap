import {setTeachers, teacherAction} from "./teachersActionCreater.ts";
import {initialState} from "../initialState.ts";
import {IUserInfo} from "../../types/userTypes.ts";

export function teachersReducer(state: IUserInfo[] = initialState.teachers , action : setTeachers  ) : object {
    switch (action.type) {
        case teacherAction.SET_TEACHERS:
            return  action.teachers
        default:
            return state;
    }
}
