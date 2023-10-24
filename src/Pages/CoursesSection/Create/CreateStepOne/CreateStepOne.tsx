import React, {useState} from 'react';
import style from "./CreateStepOne.module.scss";
import CreateTooltip from "../CreateTooltip/CreateTooltip.jsx";
import {ImageInput} from "../../../../Utility/InputImage/InputImage.jsx";
import {setPhotoAC} from "../../../../Redux/Profile/Photo/setPhotoAC.ts";
import {useDispatch} from "react-redux";
import CustomButton from "../../../../Utility/CustomButton/CustomButton.jsx";
import {getTitleAC} from "../../../../Redux/Courses/CreateCourseData/createCourseAC.ts";
import toast, {Toaster} from "react-hot-toast";
import {Course} from "../../../../ApiRequests/Courses/Courses.js";
import {ICreateTypesProps} from "../createTypes.ts";
import {useTypedSelector} from "../../../../hooks/useTypedSelector.ts";

const CreateStepOne = (props: ICreateTypesProps) => {

    const {moveStepCallback, currentStep, setPhoto} = props

    const [error, setError] = useState(false)
    const photo = useTypedSelector((state) => state.photo)
    const createCourseData = useTypedSelector((state) => state.createCourseData)
    const dispatch = useDispatch()
    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(getTitleAC(e.target.value))
    }
    const clickHandler = () => {

        if (!createCourseData.title) {
            setError(true)
            toast.error("Title of course must be in");

        } else {
            const data = new FormData()
            data.append('file', photo)

            Course.saveImage(data).then(res => {
                if (setPhoto) {
                    setPhoto(res.data.file.filename)
                }


            }).catch(error => {
                setError(true)
                toast.error("Image has different type from PNG, JPEG,JPG or size of image too big");
                console.log(error)

            })
            moveStepCallback(currentStep)
        }
    }
    return (
        <>
            <section className={style.step}>
                <div className={style.title}>
                    <div className={style.wrapperTitle}>
                        {error ? <Toaster position="top-right" reverseOrder={false}/> : null}
                        <label htmlFor={'title'}>TITLE COURSE</label>
                        <CreateTooltip
                            description={"Students will search for your course by this name "}></CreateTooltip>
                    </div>
                    <input value={createCourseData.title} onChange={changeTitle} name={'title'}
                           placeholder={'ENTER A COURSE TITLE'}/>
                </div>
                <div>
                    <ImageInput selector={photo} actionCreater={setPhotoAC} avatarText={"Image"}></ImageInput>
                </div>
                <div className={style.move}>
                    <CustomButton callback={clickHandler} title={"Next step"}></CustomButton>
                </div>
            </section>
        </>
    );
};

export default CreateStepOne;