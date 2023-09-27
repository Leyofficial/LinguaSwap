import style from './CoursesSection.module.scss'
import {useState} from "react";
import Pagination from "../../Utility/Pagination/Pagination.jsx";
import CoursesBlock from "./CoursesBlock/CoursesBlock.jsx";

const CoursesSection = () => {

  const [searchValue, setSearchValue] = useState("")

  return (
    <div className={style.container}>

      <div className={style.searchWrapper}>
        <input type={'search'} value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
      </div>

      <div className={style.paginationWrapper}>
        <Pagination></Pagination>
      </div>

      <div className={style.coursesWrapper}>
        <CoursesBlock></CoursesBlock>
        <CoursesBlock></CoursesBlock>
        <CoursesBlock></CoursesBlock>
        <CoursesBlock></CoursesBlock>
        <CoursesBlock></CoursesBlock>
        <CoursesBlock></CoursesBlock>
        <CoursesBlock></CoursesBlock>
        <CoursesBlock></CoursesBlock>
      </div>
    </div>
  );
};

export default CoursesSection;