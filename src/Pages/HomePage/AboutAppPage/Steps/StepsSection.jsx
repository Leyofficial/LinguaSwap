import style from './StepsSection.module.scss'
import StepItem from "./Step/StepItem.jsx";
import {PiNumberFiveBold, PiNumberFourBold, PiNumberOneBold, PiNumberThreeBold, PiNumberTwoBold} from "react-icons/pi";
import formImage from '../../../../images/joinImage.png'
import {GiImbricatedArrows} from "react-icons/gi";
import {useNavigate} from "react-router";
import {useState} from "react";

const StepsSection = (props) => {

  const {userType} = props

  const navigate = useNavigate()

  const [isOpen,setIsOpen] = useState(true)

  const moveBack = () => {
    navigate(-1)
  }

  return (
    <div className={style.container}>
      {userType === 'student' ?
        <>
          <StepItem setIsOpen={setIsOpen} callback={isOpen} indexStart={true} icon={<PiNumberOneBold/>} image={formImage}
                    title={"Register as a Student using registration form"}
          ></StepItem>

          <StepItem setIsOpen={setIsOpen} callback={isOpen} icon={<PiNumberTwoBold/>} image={formImage}
                    title={"Find the best tutor"}
          ></StepItem>

          <StepItem setIsOpen={setIsOpen} callback={isOpen} icon={<PiNumberThreeBold/>} image={formImage}
                    title={"Take lessons anytime"}
          ></StepItem>

          <StepItem setIsOpen={setIsOpen} callback={isOpen} icon={<PiNumberFourBold/>} image={formImage}
                    title={"Enter virtual classroom"}
          ></StepItem>

          <StepItem setIsOpen={setIsOpen} callback={isOpen} icon={<PiNumberFiveBold/>} image={formImage}
                    title={"Enjoy structured learning"}
          ></StepItem>
        </>
        :
        <>
          <StepItem indexStart={true} icon={<PiNumberOneBold/>} image={formImage}
                    title={"Register as a Teacher using registration form and chose your native language"}
          ></StepItem>
          <StepItem  icon={<PiNumberTwoBold/>} image={formImage}
                    title={"Fill out your business profile correctly and honestly"}
          ></StepItem>
          <StepItem  icon={<PiNumberThreeBold/>} image={formImage}
                    title={"Set up time for your students"}
          ></StepItem>
          <StepItem  icon={<PiNumberFourBold/>} image={formImage}
                    title={"Create your own learn program and share it with students"}
          ></StepItem>
        </>

      }

      <div className={style.backButton} onClick={moveBack}>
        <GiImbricatedArrows></GiImbricatedArrows>
      </div>
    </div>
  );
};

export default StepsSection;