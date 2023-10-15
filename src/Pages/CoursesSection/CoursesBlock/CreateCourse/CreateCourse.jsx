import style from './CreateCourse.module.scss'
import {NavLink} from "react-router-dom";


const CreateCourse = () => {
  return (
   <>
      <div className={style.container}>
         <NavLink className={style.create} to={'/course/create'}>CREATE COURSE</NavLink>
      </div>

   </>
  );
};

export default CreateCourse;