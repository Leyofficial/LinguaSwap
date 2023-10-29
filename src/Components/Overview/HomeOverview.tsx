import style from './HomeOverview.module.scss'
import {useState} from "react";
import HowWork from "./HowWorkSection/HowWork.js";
import Skills from "./SkillsSection/Skills.js";
import AdvantageSection from "./AdvantageSection/AdvantageSection.js";
import CustomButton from "../../Utility/CustomButton/CustomButton.jsx";
import {moveToLogin, TLoginAction} from "../../Redux/isStartToLogin/isStartToLoginAC.ts";
import {useDispatch} from "react-redux";


const HomeOverview = () => {
   const [currentItem, setCurrentItem] = useState<string>("How it works")
   const dispatch = useDispatch()

   const sliderItems = ["How it works", "What skills can you achieve", "Advantages"]
   const navigateToMainContent = () => {
      dispatch<TLoginAction>(moveToLogin())
       localStorage.setItem('alreadyStart' , String (true));
   }

   return (
      <div className={style.container}>
         <div className={style.wrapperButton}><CustomButton callback={navigateToMainContent}
                                                            title={'Start to learn'}></CustomButton></div>
         <div className={style.sliderItems}>
            {sliderItems.map((item, index) => <p onClick={() => setCurrentItem(item)} key={index}
                                                 className={currentItem === item ? style.active : style.textItem}>{item}</p>)}
         </div>
         {currentItem === 'How it works' ? <HowWork></HowWork> : currentItem === 'What skills can you achieve' ?
            <Skills></Skills> : <AdvantageSection></AdvantageSection>}
      </div>
   );
};

export default HomeOverview;