import Skill from "./Skill/Skill.jsx";
import {BsBook} from "react-icons/bs";
import style from './Skills.module.scss'
import {VscCommentUnresolved} from "react-icons/vsc";
import {AiFillCrown} from "react-icons/ai";
import {SiTeamspeak} from "react-icons/si";
import brain from "../../../images/Overview/brain.png";

const Skills = () => {
  return (
    <div className={style.container}>
      <div className={style.headerIcon}>
        <img src={brain} alt={'icon'}/>
      </div>
      <div className={style.header}>
        <h2>Focus on the skills you need</h2>
        <p>Prepare to achieve your goals with private tutors</p>
      </div>

      <div className={style.skillsWrapper}>
        <div>
          <Skill title={"Immerse yourself in a new culture"}
                 text={"Connect with language experts from around the world"} icon={<BsBook color={'#0878afbf'}/>}></Skill>
          <Skill title={"Get expert help when you need it"}
                 text={"Learn to solve any problem in any language"} icon={<VscCommentUnresolved color={'#0878afbf'}/>}></Skill>
        </div>
        <div>
          <Skill title={"Succeed in your career"}
                 text={"Develop your working vocabulary and communicate clearly"} icon={<AiFillCrown color={'#0878afbf'}/>}></Skill>
          <Skill title={"Speak naturally, always"}
                 text={"Make a good impression and build trust in any language"} icon={<SiTeamspeak color={'#0878afbf'}/>}></Skill>
        </div>

      </div>
    </div>
  );
};

export default Skills;