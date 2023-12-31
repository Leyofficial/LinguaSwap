import {loginUser, registerNewUser, saveToken} from "../../ApiRequests/Courses/AuthUser.js";
import {loginUserAC} from "../../Redux/login/loginUserAC.ts";
import {authAC} from "../../Redux/isAuth/isAuthAC.ts";
import {errorToaster, successToaster} from "../../Utility/Toaster/Toaster.ts";
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
            // @ts-ignore
            if  (err.request.status === 401) {
                errorToaster('Account not found or password incorrect!')
                return
            }
            errorToaster('Something went wrong (check console)')
            console.log(err);
        }
    };
}

export async function createProfile(email: string, password: string) {
    const obj = {
        email: email,
        password: password,
        confirmPassword : password
    }
    try {
        const res = await registerNewUser(obj);
        if (res.status === 201) {
            console.log(res)
            saveToken ( res.data.token ,  res.data.user._id)
            successToaster('Success!')
        } else if (res.status === 401) {
            errorToaster('Error!')
        }
    } catch (err) {
        errorToaster('Something went wrong (check console)')
    }
}

