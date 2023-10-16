import style from './CoursesBlock.module.scss'
import memberImage from '../../../images/member.png';
import {levelEducation} from "../../../Utility/CoutryFlag/LevelEducation.js";
import AvatarGroupSection from "./AvatarGroup/AvatarGroup.jsx";
import {NavLink} from "react-router-dom";
import HeaderBlock from "./HeaderBlock/HeaderBlock.jsx";
import FooterBlock from "./FooterBlock/FooterBlock.jsx";


const CoursesBlock = ({course}) => {


   const membersDefault = [1, 2, 3, 4]
console.log(course)
   return (
      <article className={style.container}>
         <NavLink to={`/course/${course._id}`}>

            <section className={style.containerWrapper}>
               <HeaderBlock course={course}></HeaderBlock>
               <section className={style.wrapper}>
                  <div className={style.titleWrapper}>
                     <h3>{course.course.name}</h3>
                  </div>
                  <div className={style.members}>
                     {<AvatarGroupSection maxCount={2} items={course.course.members} image={memberImage}></AvatarGroupSection>}
                  </div>
                  <div className={style.infoWrapper}>
                     <p style={levelEducation(course.course.level)}>{course.course.level}</p>
                     <p className={style.duration}>{course.course.duration}</p>
                  </div>
                  <FooterBlock course={course}></FooterBlock>
               </section>
            </section>
         </NavLink>
      </article>
   );
};

export default CoursesBlock;