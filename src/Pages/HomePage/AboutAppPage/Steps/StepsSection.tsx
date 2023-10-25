import style from './StepsSection.module.scss'
import StepItem from "./Step/StepItem.js";
import {PiNumberFiveBold, PiNumberFourBold, PiNumberOneBold, PiNumberThreeBold, PiNumberTwoBold} from "react-icons/pi";
import formImage from '../../../../images/joinImage.png'
import {GiImbricatedArrows} from "react-icons/gi";
import {useNavigate} from "react-router";
import {useState} from "react";

const StepsSection = (props:{userType:string | undefined}) => {

   const {userType} = props

   const navigate = useNavigate()

   const [isOpen, setIsOpen] = useState<boolean>(true)

   const moveBack = () => {
      navigate(-1)
   }

   const forStudent = [{
      title: "Register as a Student using registration form", icon: <PiNumberOneBold/>, image: formImage},
      {title: "Find the best tutor", icon: <PiNumberTwoBold/>, image: formImage},
      {title: "Take lessons anytime", icon: <PiNumberThreeBold/>, image: formImage},
      {title: "Enter virtual classroom", icon: <PiNumberFourBold/>, image: formImage},
      {title: "Enjoy structured learning", icon: <PiNumberFiveBold/>, image: formImage}
   ]
   const forTeacher = [{
      title: "Register as a Teacher using registration form and chose your native language", icon: <PiNumberOneBold/>, image: formImage},
      {title: "Fill out your business profile correctly and honestly", icon: <PiNumberThreeBold/>, image: formImage},
      {title: "Set up time for your students", icon: <PiNumberFourBold/>, image: formImage},
      {title: "Create your own learn program and share it with students", icon: <PiNumberFiveBold/>, image: formImage}]

   return (
      <div className={style.container}>
         {userType === 'student' ?
            <>
               {forStudent.map(item => <StepItem
                                                 icon={item.icon} image={item.image}
                                                 title={item.title}
               ></StepItem>)}
            </>
            :
            <>
               {forTeacher.map(item => <StepItem
                                                 icon={item.icon} image={item.image}
                                                 title={item.title}
               ></StepItem>)}
            </>

         }

         <div className={style.backButton} onClick={moveBack}>
            <GiImbricatedArrows></GiImbricatedArrows>
         </div>
      </div>
   );
};

export default StepsSection;