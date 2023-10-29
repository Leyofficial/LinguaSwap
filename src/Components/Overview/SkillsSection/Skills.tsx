import Skill from "./Skill/Skill.js";
import {BsBook} from "react-icons/bs";
import style from './Skills.module.scss'
import {VscCommentUnresolved} from "react-icons/vsc";
import {AiFillCrown} from "react-icons/ai";
import {SiTeamspeak} from "react-icons/si";
import brain from "../../../images/Overview/brain.png";
import {useEffect, useState} from "react";

const Skills = () => {

  const [show,setShow] = useState<boolean>(false)

  useEffect(() => {
    setShow(true)
  },[])

  return (
    <div className={`${style.container} ${show ? style.show : null}`}>
      <div className={style.header}>
        <h2>Focus on the skills you need</h2>
        <p>Prepare to achieve your goals with private tutors</p>
      </div>

      <div className={style.skillsWrapper}>
        <div>
          <Skill title={"Immerse yourself in a new culture"}
                 text={"Connect with language experts from around the world"} icon={<BsBook />}></Skill>
          <Skill title={"Get expert help when you need it"}
                 text={"Learn to solve any problem in any language"} icon={<VscCommentUnresolved />}></Skill>
        </div>
        <div>
          <Skill title={"Succeed in your career"}
                 text={"Develop your working vocabulary and communicate clearly"} icon={<AiFillCrown />}></Skill>
          <Skill title={"Speak naturally, always"}
                 text={"Make a good impression and build trust in any language"} icon={<SiTeamspeak />}></Skill>
        </div>

      </div>
    </div>
  );
};

export default Skills;