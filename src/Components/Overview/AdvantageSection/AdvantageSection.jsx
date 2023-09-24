import style from './AdvantageSection.module.scss'
import gear from "../../../images/Overview/gear.png";
import Skill from "../SkillsSection/Skill/Skill.jsx";
import {CiGrid2V, CiGrid31, CiGrid32, CiGrid41, CiGrid42} from "react-icons/ci";
import {useEffect, useState} from "react";
const AdvantageSection = () => {

  const [show,setShow] = useState(false)


  useEffect(() => {
    setShow(true)
  },[])

  return (
    <div className={`${style.container} ${show ? style.show : null}`}>
      <div className={style.headerIcon}>
        <img src={gear} alt={'icon'}/>
      </div>
      <div className={style.header}>
        <h2>Make the world your comfort zone</h2>
        <p>Speak naturally with professional online tutors from 185 countries</p>
      </div>

      <div className={style.wrapperItems}>
        <Skill title={"Expert tutors"} text={"Find native speakers and certified private tutors"} icon={<CiGrid2V/>}></Skill>
        <Skill title={"Verified profiles"} text={"We carefully check and confirm each tutor's profile"} icon={<CiGrid31/>}></Skill>
        <Skill title={"Learn anytime"} text={"Take online lessons at the perfect time for your busy schedule"} icon={<CiGrid32/>}></Skill>
        <Skill title={"Affordable prices"} text={"Choose an experienced tutor that fits your budget"} icon={<CiGrid41/>}></Skill>
        <Skill title={"Text, voice chat, video, and more"} text={"Communicate with language partners via text and voice messages, stickers, audio and video calls, as well as interactive voice rooms and live broadcasts"} icon={<CiGrid42/>}></Skill>
      </div>
    </div>
  );
};

export default AdvantageSection;