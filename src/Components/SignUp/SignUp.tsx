import {FormItem, IInfo} from "../Form/FormItem.tsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {SubmitErrorHandler, SubmitHandler} from "react-hook-form";
import { createProfile} from "../Form/sentToServer.ts";
import {errorToaster} from "../../Utility/Toaster/Toaster.ts";

function SignUp () {
    const [showPassword , setShowPassword] = useState<boolean>(false)
    const [checkBox, setCheckBox] = useState<boolean>(false)
    const submit: SubmitHandler<IInfo> = data => {
        createProfile(data.email, data.password);
    }
    const error : SubmitErrorHandler<IInfo> = data => {
        errorToaster('Fill in all inputs fields');
    }

    return (
        <>
        <FormItem isSignUp={true} submit={submit} error={error} showPassword={showPassword} setShowPassword={setShowPassword} setCheckBox={setCheckBox} checkBox={checkBox} />
        </>
    )
}
export default SignUp