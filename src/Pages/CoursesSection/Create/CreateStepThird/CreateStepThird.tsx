import React, {useState} from 'react';
import style from './CreateStepThird.module.scss'
import CustomButton from "../../../../Utility/CustomButton/CustomButton.jsx";
import {useDispatch} from "react-redux";
import {getTopicAC} from "../../../../Redux/Courses/CreateCourseData/createCourseAC.ts";
import toast, {Toaster} from "react-hot-toast";
import TopicDescription from "./TopicDescription/TopicDescription.js";
import {IoListCircleSharp} from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {
    createCourseThunkCreator,
    ICreateCourse
} from "../../../../Redux/Courses/CreateCourseData/createCourseReducer.ts";
import CreateTopic from "./CreateTopic/CreateTopic.js";
import {useTypedSelector} from "../../../../hooks/useTypedSelector.ts";
import {ICreateCourseData, ICreateTypesProps} from "../createTypes.ts";
import {ICourseSubject} from "../../courseType.ts";

const CreateStepThird = (props: ICreateTypesProps) => {
    const {moveStepBackCallback, currentStep, photoCourse} = props

    const [topic, setTopic] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false)
    const [succeed, setSucceed] = useState(false)
    const createCourseData:ICreateCourseData = useTypedSelector((state) => state.createCourseData)
    const currentUser = useTypedSelector((state) => state.loginUser)
    const dispatch = useDispatch()
    const [toastError, setToastError] = useState(false)
    const navigate = useNavigate()

    const addTopic = () => {

        if (!topic && !description) {
            setError(true)

        } else if (createCourseData.topics.length >= 3) {
            toast.error("You can add only 3 topics. If you want to change you can do it in course");
            setToastError(true)

        } else if (topic && description) {
            const data = {
                topic,
                description,
            }
            dispatch(getTopicAC(data))
            setDescription("")
            setTopic("")

        } else if (!topic || !description) {
            setError(true)
        }

    }
    const createCourseHandler = () => {
        if (createCourseData.topics.length === 3) {

            if (currentUser._id) {
                const data = {
                    teacher: {
                        id: currentUser._id,
                        name: currentUser.user.data.name
                    },
                    course: {
                        name: createCourseData.title,
                        startCourse: createCourseData.startDate,
                        finishCourse: createCourseData.finishDate,
                        durationCourse: createCourseData.duration,
                        members: [],
                        image: photoCourse || "",
                        subjects: createCourseData.topics,
                        level: createCourseData.level,
                        language: createCourseData.language,
                        enrolment: "Free",
                        description: createCourseData.description
                    }
                }
                const params: ICreateCourse = {
                    data,
                    setSucceed,
                    navigate,
                    setError
                }
                createCourseThunkCreator(params)(dispatch)
            }
        } else {
            toast.error("All required fields must be fill");
            setError(true)
        }
    }
    const moveHandler = () => {
        if(moveStepBackCallback)
        moveStepBackCallback(currentStep)
    }

    return (
        <section className={style.container}>
            {toastError ? <Toaster position="top-right" reverseOrder={false}/> : null}
            {succeed ? <Toaster position="top-right" reverseOrder={false}/> : null}
            <CreateTopic error={error} description={description} setTopic={setTopic} topic={topic}
                         setDescription={setDescription} addTopicCallback={addTopic}></CreateTopic>
            <div className={style.showTopics}>
                <h2><IoListCircleSharp></IoListCircleSharp> Topics</h2>
                {createCourseData.topics.length >= 1 ? createCourseData.topics.map((topic:ICourseSubject, index:number) => <TopicDescription
                    topic={topic} index={index}
                ></TopicDescription>) : null}
            </div>

            <div className={style.move}>
                <CustomButton rotateIcon={true} callback={moveHandler}
                              title={"Back"}></CustomButton>
                <CustomButton rotateIcon={false} callback={createCourseHandler} title={"Create"}></CustomButton>
            </div>
        </section>
    );
};

export default CreateStepThird;