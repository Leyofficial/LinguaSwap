import React, {useState} from "react";
import socketIO, {io} from "socket.io-client";
import {webSocketAC} from "../../Redux/WebSocket/webSocketReducer.js";
import  {FormItem, IInfo} from "../Form/FormItem.tsx";
import {SubmitErrorHandler, SubmitHandler} from "react-hook-form";
import {createInfo} from "../Form/sentToServer.ts";
import {errorToaster} from "../../Utility/Toaster/Toaster.ts";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";


function Login()  {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [checkBox, setCheckBox] = useState<boolean>(false)
    const dispatch = useDispatch();
    const submit: SubmitHandler<IInfo> = data => {
        createInfo(data.email , data.password)(dispatch);
    }
    const error : SubmitErrorHandler<IInfo> = data => {
        errorToaster('Fill in all inputs fields');
    }

    return (
        <>
            <FormItem submit={submit} error={error} showPassword={showPassword} setShowPassword={setShowPassword}
                      setCheckBox={setCheckBox} checkBox={checkBox}/>

        </>
    )
}

export default Login