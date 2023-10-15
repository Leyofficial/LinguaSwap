import CustomButton from "../../../Utility/CustomButton/CustomButton";
import style from "./StepOne.module.scss";
import toast, {Toaster} from "react-hot-toast";
import {Selectors} from "./Selectors";
import {TextArea} from "./TextArea";
import {Inputs} from "./Inputs";
import {useSelector} from "react-redux";
import {IStepsProps} from "../types.ts";
const StepOne = (props : IStepsProps) => {

    // Should be hook useTypedSelector (later)
    const dirtyName = useSelector((state : any) => state.nameDirty);
    const dirtyHash = useSelector((state : any) => state.hashDirty);

    function errorToaster(text : string) {
        toast.error(text);
    }

    return (
        <div className={style.wholeContent}>
            <h2 className={style.title}>
                <b>About your :</b>
            </h2>
            <div className={style.container}>
                <div className={style.wrapper}>
                        <Inputs/>
                        <div className={style.selectors}>
                            <Selectors/>
                        </div>
                        <div className={style.textAreBlock}>
                            <TextArea/>
                        </div>
                        <div onClick={() => errorToaster("Input fields must not be empty!")}
                            className={style.buttonOne} >
                            {dirtyName || dirtyHash ? (
                                <>
                                    <Toaster position="top-right" reverseOrder={false}/>
                                    <CustomButton title={"Next"} typeOfButton={"button"}/>
                                </>
                            ) : (
                                <CustomButton
                                    title={"Next"}
                                    typeOfButton={"button"}
                                    callback={props.nextStep}
                                />
                            )}
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default StepOne;
