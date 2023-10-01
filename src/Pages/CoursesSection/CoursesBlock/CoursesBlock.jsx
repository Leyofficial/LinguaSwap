import style from './CoursesBlock.module.scss'
import {dateOfCourse} from "../../../Utility/CoutryFlag/DateOfCourse/dateOfCourse.js";
import memberImage from '../../../images/member.png';
import {levelEducation} from "../../../Utility/CoutryFlag/LevelEducation.js";
import {BsFillCalendarCheckFill, BsFillCalendarXFill} from "react-icons/bs";
import author from '../../../images/presentation.png'
import AvatarGroupSection from "./AvatarGroup/AvatarGroup.jsx";

const CoursesBlock = (props) => {

  const membersDefault = [1,2,3]

  const {flag,language,courseTitle,date,members,teacher,level} = props

  return (

    <div className={style.container}>
      <div className={style.containerWrapper}>
      <div className={style.imageWrapper}>
        <h3>{language}</h3>
        <img src={flag} alt={'flag'}/>
      </div>
      <div className={style.wrapper}>
        <div className={style.titleWrapper}>
          <h3>{courseTitle}</h3>
        </div>
        <div className={style.members}>
          {/*{members.length < 1 ? 'members' : members}*/}
          { <AvatarGroupSection items={membersDefault} image={memberImage}></AvatarGroupSection> }
          {/*<AvatarGroupSection></AvatarGroupSection>*/}
          {/*<AvatarGroupSection></AvatarGroupSection>*/}
        </div>
        <div className={style.infoWrapper}>
          <p style={levelEducation(level)}>{level}</p>
          <div className={style.wrapperLevel}>
            <div>{dateOfCourse(date.startDate) ? <p className={style.start}><BsFillCalendarCheckFill/>{date.startDate}</p> : <p className={style.finish}><BsFillCalendarXFill/>{date.finishDate}</p>}</div>
          </div>
          {/*<div>{dateOfCourse(date.startDate) ? <p className={style.start}>{date.startDate}</p> : <p className={style.finish}><BsFillCalendarXFill/>{date.finishDate}</p>}</div>*/}
        </div>
        <div className={style.author}>
          <img src={author} alt={'teacher'}/>
          <p>{teacher.name}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CoursesBlock;