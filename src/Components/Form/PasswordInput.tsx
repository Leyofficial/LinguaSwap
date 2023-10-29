import style from "../Login/Login.module.scss";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import React from "react";
import {FieldErrors} from "react-hook-form";
import {IInfo} from "./FormItem.tsx";


interface IPassword {
    register : unknown | any,
    setShowPassword : (p: (prev : string) => boolean) => void,
    showPassword : boolean,
    errors : FieldErrors<IInfo>
}

function PasswordInput ({register , setShowPassword , showPassword , errors} : IPassword)   {
    return (
        <>
            <input
                {...register("password" , {required : 'Input fields are required' , minLength : {
                        value : 5,
                        message : 'The input field must be more than 5 characters'
                    }})}
                className={`${style.input} ${errors.password ? style.invalidInput : ''  } `} type={ showPassword ? "text" : "password"} placeholder={'password'}/>
            <div className={style.eye} onClick={() => setShowPassword((prev) => !prev)}>
                {!showPassword ? <FaEyeSlash/> : <FaEye/>}
            </div></>
    )
}
export default PasswordInput