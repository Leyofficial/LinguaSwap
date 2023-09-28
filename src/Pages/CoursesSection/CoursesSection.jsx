import style from './CoursesSection.module.scss'
import {useState} from "react";
import Pagination from "../../Utility/Pagination/Pagination.jsx";
import CoursesBlock from "./CoursesBlock/CoursesBlock.jsx";
import SearchInput from "../../Utility/SearchInput/SearchInput.jsx";

const CoursesSection = () => {

  const [searchValue, setSearchValue] = useState("")
  const test = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className={style.container}>

      <div className={style.searchWrapper}>
        <SearchInput value={searchValue} callback={setSearchValue} placeholder={'Courses'}></SearchInput>
        <Pagination test={test}></Pagination>
      </div>
      <div className={style.titleWrapper}>
        <h1>Find course which <span>match you</span></h1>
        <div>
          filter
          <div>

          </div>
        </div>
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