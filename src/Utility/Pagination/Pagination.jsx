import style from './Pagination.module.scss'
import {useState} from "react";
const Pagination = (props) => {

  const {coursesForOnePage,totalCourses,paginate} = props
  const [currentCoursePage,setCurrentCoursePage] = useState(1)

  const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalCourses / coursesForOnePage); i++) {
      pageNumbers.push(i)
    }

  const changeActivePage = (pageNumber) => {

    paginate(pageNumber)
    setCurrentCoursePage(pageNumber)
  }

  return (
    <div className={style.container}>
      <ul>
      {pageNumbers.map(item => {
        return item === 1 ? "" : <li className={currentCoursePage === item ? style.active : null} onClick={() => changeActivePage(item)} key={item}>{item}</li>


      })}
      </ul>
    </div>
  );
};

export default Pagination;