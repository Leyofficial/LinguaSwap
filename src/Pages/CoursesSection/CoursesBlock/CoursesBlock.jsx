import style from './CoursesBlock.module.scss'
import {dateOfCourse} from "../../../Utility/CoutryFlag/DateOfCourse/dateOfCourse.js";
import memberImage from '../../../images/member.png';
import {levelEducation} from "../../../Utility/CoutryFlag/LevelEducation.js";
import {BsFillCalendarCheckFill, BsFillCalendarXFill} from "react-icons/bs";

const CoursesBlock = (props) => {

  const membersDefault = [1,2,3]

  const {flag,language,courseTitle,date,members,teacher,level} = props

  console.log(date.startDate)
  return (

    <div className={style.container} style={{background:`url(${flag})`}}>
      <div className={style.imageWrapper}>
        <h3>{language} <span className={style.text}>with</span> <span className={style.name}>{teacher.name}</span></h3>
      </div>
      <div className={style.wrapper}>
        <div className={style.titleWrapper}>
          <h3>{courseTitle}</h3>
        </div>
        <div className={style.members}>
          {/*{members.length < 1 ? 'members' : members}*/}
          {membersDefault.map(member => <img src={memberImage}/>)}
        </div>
        <div className={style.infoWrapper}>
          <p style={levelEducation(level)}>{level}</p>
          <div className={style.wrapperLevel}>
            {dateOfCourse(date.startDate) ? <BsFillCalendarCheckFill/> : <BsFillCalendarXFill/> }
            <div>{dateOfCourse(date.startDate) ? <p className={style.start}>{date.startDate}</p> : <p className={style.finish}>{date.finishDate}</p>}</div>
          </div>
          {/*<div>{dateOfCourse(date.startDate) ? <p className={style.start}>{date.startDate}</p> : <p className={style.finish}><BsFillCalendarXFill/>{date.finishDate}</p>}</div>*/}
        </div>
        <div className={style.buttons}>
        </div>
      </div>
    </div>
  );
};

export default CoursesBlock;