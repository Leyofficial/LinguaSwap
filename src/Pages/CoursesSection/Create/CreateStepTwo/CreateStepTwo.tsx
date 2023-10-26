import React, {useState} from 'react';
import style from './CreateStepTwo.module.scss'
import {useDispatch} from "react-redux";
import {
   getDescriptionAC,
   getFinishDateAC,
   getStartDateAC
} from "../../../../Redux/Courses/CreateCourseData/createCourseAC.ts";
import CreateTooltip from "../CreateTooltip/CreateTooltip.jsx";
import CourseInput from "../../CoursesBlock/CreateCourse/ModalCreateCourse/CourseInput/CourseInput.js";
import CustomButton from "../../../../Utility/CustomButton/CustomButton.jsx";
import {Toaster} from "react-hot-toast";
import SelectorSection from "./SelectorSection/SelectorSection.js";
import {validationFields} from "./ValidationFields/validationFields.js";
import {useTypedSelector} from "../../../../hooks/useTypedSelector.ts";
import {ICreateCourseData, ICreateTypesProps} from "../createTypes.ts";

const CreateStepTwo = (props : ICreateTypesProps) => {
   const {moveStepCallback, currentStep, moveStepBackCallback} = props

   const [error, setError] = useState(false)
   const createCourseData:ICreateCourseData = useTypedSelector((state) => state.createCourseData)
   const dispatch = useDispatch()
   const changeStartDate = (start : string) => {
      dispatch(getStartDateAC(start))
   }
   const changeFinishDate = (finish : string) => {
      dispatch(getFinishDateAC(finish))
   }
   const changeDescription = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(getDescriptionAC(event.target.value))
   }

   const clickHandler = () => {
      //@ts-ignore
      validationFields(createCourseData,moveStepCallback,currentStep,setError)
   }

   const handlerMove = () => {
      if(moveStepBackCallback)
      moveStepBackCallback(currentStep)
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
              <textarea name={'description'} value={createCourseData.description} onChange={(event:React.ChangeEvent<HTMLTextAreaElement>) => changeDescription(event)}
                        placeholder={"Enter a description more then 30 worlds." +
                           "Try to explain what students " +
                           "will do in your course and why they need to chose your course"}>
              </textarea>
            </div>

         </section>
         <div className={style.move}>
            <CustomButton rotateIcon={true} callback={() => handlerMove}
                          title={"Back"}></CustomButton>
            <CustomButton rotateIcon={false} callback={clickHandler} title={"Next"}></CustomButton>
         </div>
      </article>
   );
};

export default CreateStepTwo;