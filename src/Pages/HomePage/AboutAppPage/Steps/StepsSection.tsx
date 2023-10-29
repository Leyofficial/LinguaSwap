import style from './StepsSection.module.scss'
import StepItem from "./Step/StepItem.js";
import {PiNumberFiveBold, PiNumberFourBold, PiNumberOneBold, PiNumberThreeBold, PiNumberTwoBold} from "react-icons/pi";
import {useNavigate} from "react-router";
import {useState} from "react";
import arrow from '../../../../images/arrowItem.png'
import registerImage from '../../../../images/screens/register.png'
import teachers from '../../../../images/screens/teacher.png'
import courses from '../../../../images/screens/courses.png'
import course from '../../../../images/screens/course.png'
import courseChat from '../../../../images/screens/chat.png'
import createCourse from '../../../../images/screens/createCourse.png'
import createProfile from '../../../../images/screens/createProfile.png'


const StepsSection = (props:{userType:string | undefined}) => {

   const {userType} = props

   const navigate = useNavigate()

   const [isOpen, setIsOpen] = useState<boolean>(true)

   const moveBack = () => {
      navigate(-1)
   }

   const forStudent = [{
      title: "Register as a Student using registration form", icon: <PiNumberOneBold/>, image: registerImage,isOpen:true},
      {title: "Find the best tutor", icon: <PiNumberTwoBold/>, image: teachers},
      {title: "Take lessons anytime", icon: <PiNumberThreeBold/>, image: courses},
      {title: "Enter virtual classroom", icon: <PiNumberFourBold/>, image: course},
      {title: "Enjoy structured learning", icon: <PiNumberFiveBold/>, image: courseChat}
   ]
   const forTeacher = [{
      title: "Register as a Teacher using registration form and chose your native language", icon: <PiNumberOneBold/>, image: registerImage,isOpen:true},
      {title: "Fill out your business profile correctly and honestly", icon: <PiNumberThreeBold/>, image: createProfile},
      {title: "Set up time for your students", icon: <PiNumberFourBold/>, image: course},
      {title: "Create your own learn program and share it with students", icon: <PiNumberFiveBold/>, image: createCourse}]

   return (
      <div className={style.container}>
         {userType === 'student' ?
            <>
               {forStudent.map(item => <StepItem
                                                 icon={item.icon} image={item.image}
                                                 title={item.title} isOpen={item.isOpen}
               ></StepItem>)}
            </>
            :
            <>
               {forTeacher.map(item => <StepItem
                                                 icon={item.icon} image={item.image}
                                                 title={item.title} isOpen={item.isOpen}
               ></StepItem>)}
            </>

         }

         <div className={style.backButton} onClick={moveBack}>
            <img src={arrow} alt={'arrow'}/>
         </div>
      </div>
   );
};

export default StepsSection;