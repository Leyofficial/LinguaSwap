import style from "../Login/Login.module.scss";
import React from "react";
import {useForm} from "react-hook-form";
import PasswordInput from "./PasswordInput.tsx";
import {Toaster} from "react-hot-toast";

interface IForm {
    submit : object | unknown | any,
    error : object  | unknown | any,
    showPassword : boolean,
    setShowPassword : (p: (prev: any) => boolean) => void,
    setCheckBox : (p: (prev: any) => boolean) => void,
    checkBox : boolean
    isSignUp? : boolean
}

export interface IInfo {
    email: string,
    password: string
}

export function FormItem ({submit , error , showPassword , setShowPassword , checkBox , setCheckBox , isSignUp } : IForm) {
    const {register, handleSubmit, formState : {errors}} = useForm<IInfo>({
        defaultValues: {},
    })
    return (
        <>
            <Toaster position="top-right"
                     reverseOrder={false} />
            <form onSubmit={handleSubmit(submit , error)}>
                <div className={style.inputs}>
                    <div>
                        <input
                            {...register("email" , {required : 'Input fields are required' , minLength : {
                                    value : 5,
                                    message : 'The input field must be more than 5 characters'
                                }})}
                            className={`${style.input} ${errors.email ? style.invalidInput : ''  } `} placeholder={'email'} type="email"
                            id="email" size={30}/>
                        <div className={style.warning}>{errors?.email  && <b>{errors?.email.message || 'Error!'}</b>}</div>
                    </div>
                    <div className={style.passwordBlock}>
                        <PasswordInput register={register} setShowPassword={setShowPassword} showPassword={showPassword} errors={errors} />
                        <div className={style.warning}>{errors?.password  && <b>{errors?.password.message || 'Error!'}</b>}</div>

                    </div>
                    <div className={style.checkbox}>
                        <input id='accept' type="checkbox" onChange={() => setCheckBox((prev => !prev))}
                               checked={checkBox}/>
                        <label className={style.label} htmlFor="accept">You agree with private
                            policy <br/> and your cookie preferences</label>
                    </div>
                </div>
                <button className={style.btn} >
                    {isSignUp ? 'Sign up' :  'Login' }
                </button>
            </form>
        </>

    )
}
