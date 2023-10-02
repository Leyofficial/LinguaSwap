import style from './Pagination.module.scss'
import {useEffect, useState} from "react";
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
console.log(pageNumbers)
  return (
    <div className={style.container}>
      <ul>
      {pageNumbers.map(item => <li onClick={() => changeActivePage(item)} key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

export default Pagination;