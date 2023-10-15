import React, {useState} from 'react';
import style from './CreateStepThird.module.scss'
import CustomButton from "../../../../Utility/CustomButton/CustomButton.jsx";
import {GrAdd} from "@react-icons/all-files/gr/GrAdd.js";
import {useDispatch, useSelector} from "react-redux";
import {getTopicAC} from "../../../../Redux/Courses/CreateCourseData/createCourseAC.js";
import toast, {Toaster} from "react-hot-toast";
import TopicDescription from "./TopicDescription/TopicDescription.jsx";
import {IoListCircleSharp} from "react-icons/io5";
import {Course} from "../../../../ApiRequests/Courses/Courses.js";

const CreateStepThird = ({moveStepBackCallback, saveCallback, currentStep}) => {

   const [topic, setTopic] = useState("")
   const [description, setDescription] = useState("")
   const [error, setError] = useState(false)
   const createCourseData = useSelector((state) => state.createCourseData)
   const currentUser = useSelector((state) => state.loginUser)
   const dispatch = useDispatch()
   const [toastError, setToastError] = useState(false)
   const photo = useSelector((state) => state.photo)
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
      if (currentUser._id) {
         const data = {
            teacher: {
               id: currentUser._id,
               name: currentUser.user.data.user.name
            },
            course: {
               name: createCourseData.title,
               startCourse: createCourseData.startDate,
               finishCourse: createCourseData.finishDate,
               durationCourse: createCourseData.duration,
               members: [],
               image: photo,
               subjects: createCourseData.topics,
               level: createCourseData.level,
               language: createCourseData.language
            }
         }
         Course.create(data)
      }

   }
   return (
      <section className={style.container}>
         <div className={style.createTopics}>
            {toastError ? <Toaster position="top-right" reverseOrder={false}/> : null}
            <div className={style.topic}>
               <label htmlFor={'topic'}>Topic</label>
               <div className={style.wrapperInput}>
                  <input placeholder={"Name topic"} name={'topic'} value={topic}
                         onChange={(e) => setTopic(e.target.value)}/>

                  <GrAdd onClick={addTopic}></GrAdd>

               </div>

            </div>
            <div className={style.description}>
               <label htmlFor={"description"}>Description for topic</label>
               <textarea placeholder={'Try to explain about this topic. What you will teach and how it will going'}
                         name={"description"} value={description}
                         onChange={(e) => setDescription(e.target.value)}></textarea>
               {error ? <p className={style.error}>*** Name of topic and description should be fill ***</p> : null}
            </div>
         </div>
         <div className={style.showTopics}>
            <h2><IoListCircleSharp></IoListCircleSharp> Topics</h2>
            {createCourseData.topics.length >= 1 ? createCourseData.topics.map((topic, index) => <TopicDescription
               topic={topic} index={index}
            ></TopicDescription>) : null}
         </div>

         <div className={style.move}>
            <CustomButton rotateIcon={true} callback={() => moveStepBackCallback(currentStep)}
                          title={"Back"}></CustomButton>
            <CustomButton rotateIcon={false} callback={createCourseHandler} title={"Create"}></CustomButton>
         </div>
      </section>
   );
};

export default CreateStepThird;