import React, {useState} from 'react';
import style from './CreateStepTwo.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {
   getDescriptionAC,
   getFinishDateAC,
   getStartDateAC
} from "../../../../Redux/Courses/CreateCourseData/createCourseAC.js";
import CreateTooltip from "../CreateTooltip/CreateTooltip.jsx";
import CourseInput from "../../CoursesBlock/CreateCourse/ModalCreateCourse/CourseInput/CourseInput.jsx";
import CustomButton from "../../../../Utility/CustomButton/CustomButton.jsx";
import toast, {Toaster} from "react-hot-toast";
import SelectorSection from "./SelectorSection/SelectorSection.jsx";

const CreateStepTwo = ({moveStepCallback, currentStep, moveStepBackCallback}) => {

   const [error, setError] = useState(false)
   const createCourseData = useSelector((state) => state.createCourseData)
   const dispatch = useDispatch()

   const changeStartDate = (start) => {
      dispatch(getStartDateAC(start))
   }
   const changeFinishDate = (finish) => {
      dispatch(getFinishDateAC(finish))
   }
   const changeDescription = (e) => {
      dispatch(getDescriptionAC(e.target.value))
   }

   const clickHandler = () => {
      if (!createCourseData.level) {
         toast.error("Level of course must be in");
         setError(true)
      } else if (!createCourseData.duration) {
         setError(true)
         toast.error("Duration of lesson must be in");
      } else if (!createCourseData.language) {
         setError(true)
         toast.error("Language of course must be in");
      } else if (!createCourseData.startDate) {
         setError(true)
         toast.error("Start date of course must be in");
      } else if (!createCourseData.finishDate) {
         setError(true)
         toast.error("Finish date of course must be in");
      } else {
         moveStepCallback(currentStep)
      }

   }
   return (
      <article className={style.container}>
         <section className={style.wrapeprSelects}>
            {error ? <Toaster position="top-right" reverseOrder={false}/> : null}
            <SelectorSection></SelectorSection>

            <div className={style.data}>

               <div className={style.wrapperData}>
                  <CourseInput type={'date'} name={'Start course'} value={createCourseData.startDate}
                               callback={changeStartDate}></CourseInput>
                  <CourseInput type={'date'} name={'Finish course'} value={createCourseData.finishDate}
                               callback={changeFinishDate}></CourseInput>
               </div>
               <CreateTooltip description={"Data of start the course and finish the course"}></CreateTooltip>
            </div>
         </section>
         <section className={style.description}>
            <label htmlFor={"description"}>Description</label>
            <div className={style.wrapperTextarea}>
              <textarea name={'description'} value={createCourseData.description} onChange={changeDescription}
                        placeholder={"Enter a description more then 30 worlds." +
                           "Try to explain what students " +
                           "will do in your course and why they need to chose your course"}>
              </textarea>
            </div>

         </section>
         <div className={style.move}>
            <CustomButton rotateIcon={true} callback={() => moveStepBackCallback(currentStep)}
                          title={"Back"}></CustomButton>
            <CustomButton rotateIcon={false} callback={clickHandler} title={"Next"}></CustomButton>
         </div>
      </article>
   );
};

export default CreateStepTwo;