import {useState} from "react";
import CustomButton from "../../../Utility/CustomButton/CustomButton";
import style from "./StepOne.module.scss";
import CustomInput from "../../../Utility/CustomInput/CustomInput";
import iconImg from "../../../img/images/lilartsy-333oj7zFsdg-unsplash.jpg";
import {useDispatch, useSelector} from "react-redux";
import {setBioAC} from "../../../Redux/Profile/Bio/setBioAC";
import toast, {Toaster} from "react-hot-toast";


import {FaHashtag} from "react-icons/fa";
// creaters 
import {nameInputEmptyCreater} from "../../../Redux/Profile/Inputs/name/nameInputEmptyCreater";
import {hashInputEmptyAC} from "../../../Redux/Profile/Inputs/hash/hashInputEmptyAC";
import {setStatusActionCreate} from "../../../Redux/Profile/Status/setStatusActionCreate.js";

const StepOne = (props) => {
    //dispatch

    const dispatch = useDispatch();
    // useState

    const [isClicked, setIsClicked] = useState(false);

    // useSelector to get information about state

    const name = useSelector((state) => state.name);
    const userTag = useSelector((state) => state.userTag);
    const bio = useSelector((state) => state.bio);
    const dirtyName = useSelector((state) => state.nameDirty);
    const dirtyHash = useSelector((state) => state.hashDirty);
    const status = useSelector((state) => state.status);


    function checkNameDirty(name) {
        if (name.trim().length > 1) {
            dispatch(nameInputEmptyCreater(false));
        } else {
            dispatch(nameInputEmptyCreater(true));
        }
    }

    function checkHashDirty(hash) {
        if (hash.trim().length > 1) {
            dispatch(hashInputEmptyAC(false));
        } else {
            dispatch(hashInputEmptyAC(true));
        }
    }

    function errorToaster(text) {
        toast.error(text);
    }

    const handleTextareaClick = () => {
        setIsClicked(true);
    };
    const handleTextareaBlur = () => {
        setIsClicked(false);
    };
    function  selectStatus (text) {
        dispatch(setStatusActionCreate(text));
    }
    return (
        <div className={style.wholeContent}>
            <h2 className={style.title}>
                <b>About your :</b>
            </h2>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.leftBlock}>
                        <div className={style.textAreaBlock}>
                            <div className={style.inputBlock}>
                                <CustomInput
                                    callback={checkNameDirty}
                                    heg={false}
                                    value={name}
                                    width={"70%"}
                                    placeholder={"Type your name"}
                                />
                                {dirtyName ? <p className={style.warningMessage}><b>Поле ввода не должно быть пустым или
                                    меньше <br/>
                                    двух символов..</b></p> : null}
                                <>
                                  <div className={style.hashBlock}>
                                      <FaHashtag className={style.hashImg}/>
                                      <CustomInput
                                          callback={checkHashDirty}
                                          value={userTag}
                                          width={"100%"}
                                          placeholder={"Type your user tag"}
                                          heg={true}
                                      />
                                  </div>
                                    {dirtyHash ?
                                        <p className={style.warningMessage}><b>Поле ввода не должно быть пустым или
                                            меньше <br/>
                                            двух символов..</b></p> : null}
                                </>
                                <div className={style.selectors}>
                                    <form className={style["radio-form"]}>
                                        <input onChange={() => selectStatus(event.target.value)} checked={status === 'Student'} value="Student" name="hopping" type="radio" id="a"/>
                                        <label htmlFor="a"><span></span>Student</label>
                                        <input onChange={() => selectStatus(event.target.value)} checked={status === 'Teacher'}  value="Teacher" name="hopping" type="radio" id="b"/>
                                        <label htmlFor="b"><span></span>Teacher</label>
                                        <div className={style.worm}>
                                            <div className={style.worm__segment}></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <p className={style.areaText}>
                                Write about <span>yourself </span> (option):
                            </p>
                            <textarea
                                value={bio}
                                onClick={handleTextareaClick}
                                onBlur={handleTextareaBlur}
                                onChange={() => dispatch(setBioAC(event.target.value))}
                                style={{
                                    border: isClicked ? "2px solid dodgerblue" : "1px solid gray",
                                }}
                                className={style.textArea}
                                cols="10"
                                rows="10"
                            ></textarea>
                        </div>
                    </div>
                    <div className={style.rightBlock}>
                        <div className={style.iconShape}>
                            <img max-width={50} src={iconImg} alt=""/>
                        </div>
                    </div>

                    <div
                        onClick={() => errorToaster("Поля ввода не должны быть пустыми!")}
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
