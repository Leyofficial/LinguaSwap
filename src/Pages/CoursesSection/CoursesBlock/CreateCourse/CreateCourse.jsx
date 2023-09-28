import style from './CreateCourse.module.scss'
import ModalCreateCourse from "./ModalCreateCourse/ModalCreateCourse.jsx";


const CreateCourse = () => {
  return (
    <div className={style.container}>
      <ModalCreateCourse></ModalCreateCourse>
    </div>
  );
};

export default CreateCourse;