import CustomButton from "../../../Utility/CustomButton/CustomButton";
import style from "./StepOne.module.scss";
import toast, {Toaster} from "react-hot-toast";

import {Selectors} from "./Selectors/index.jsx";
import {TextArea} from "./TextArea/index.jsx";
import {Inputs} from "./Inputs/index.jsx";
import {useSelector} from "react-redux";
const StepOne = (props) => {

    const dirtyName = useSelector((state) => state.nameDirty);
    const dirtyHash = useSelector((state) => state.hashDirty);

    function errorToaster(text) {
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
                        <div
                            onClick={() => errorToaster("Input fields must not be empty!")}
                            className={style.buttonOne}
                        >
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
