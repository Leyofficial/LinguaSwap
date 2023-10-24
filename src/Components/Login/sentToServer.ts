import {loginUser} from "../../ApiRequests/Courses/AuthUser.js";
import {loginUserAC} from "../../Redux/login/loginUserAC.ts";
import {authAC} from "../../Redux/isAuth/isAuthAC.ts";
import {errorToaster} from "../../Utility/Toaster/Toaster.ts";
import {teacherChats} from "../../ApiRequests/TeacherChats/TeacherChats.js";
import {chatsWithStudentsAC} from "../../Redux/Course/ChatsWithStudents/chatsWithStudentsAC.js";
import {Dispatch} from "redux";


export function createInfo(email: string, password: string) {
    const obj = {
        email: email,
        password: password,
    };
    return async (dispatch : Dispatch) => {
        try {
            const res = await loginUser(obj);
            if (res.status === 200) {
                dispatch(loginUserAC(res.data.user));
                localStorage.setItem('loginUser', JSON.stringify(res.data.user.token));
                dispatch(authAC());
            }
        } catch (err) {
            errorToaster('Something went wrong (check console)');
            console.log(err);
        }
    };
}
