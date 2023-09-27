import style from './HomeOverview.module.scss'
import {useState} from "react";
import HowWork from "./HowWorkSection/HowWork.jsx";
import Skills from "./SkillsSection/Skills.jsx";
import AdvantageSection from "./AdvantageSection/AdvantageSection.jsx";

const HomeOverview = () => {

  const [currentItem, setCurrentItem] = useState("How it works")

  const sliderItems = ["How it works", "What skills can you achieve", "Advantages"]


  return (
    <div className={style.container}>
      <div className={style.sliderItems}>
        {sliderItems.map((item, index) => <p onClick={() => setCurrentItem(item)} key={index}
                                             className={currentItem === item ? style.active : style.textItem}>{item}</p>)}
      </div>
      {currentItem === 'How it works' ? <HowWork></HowWork> : currentItem === 'What skills can you achieve' ?  <Skills></Skills> : <AdvantageSection></AdvantageSection>}
    </div>
  );
};

export default HomeOverview;