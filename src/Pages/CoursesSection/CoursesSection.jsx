import style from './CoursesSection.module.scss'
import {useEffect, useState} from "react";
import Pagination from "../../Utility/Pagination/Pagination.jsx";
import CoursesBlock from "./CoursesBlock/CoursesBlock.jsx";
import SearchInput from "../../Utility/SearchInput/SearchInput.jsx";
import CreateCourse from "./CoursesBlock/CreateCourse/CreateCourse.jsx";
import {Course} from "../../ApiRequests/Courses/Courses.js";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesAC} from "../../Redux/Courses/coursesAC.js";
import {countryFlag} from "../../Utility/CoutryFlag/CountryFlag.js";

const CoursesSection = () => {

  const [searchValue, setSearchValue] = useState("")
  const test = [1, 2, 3, 4, 5, 6, 7, 8]

  const dispatch = useDispatch()

  const courses = useSelector((state) => state.courses)

  useEffect(() => {
    Course.getCourses().then(res => dispatch(getCoursesAC(res.data.courses)))
  }, [])

  // courses.length = 6

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
            <CreateCourse></CreateCourse>
          </div>
        </div>
      </div>
      <div className={style.coursesWrapper}>
        {courses.map(course => <CoursesBlock flag={countryFlag(course.course.language)}
                                             language={course.course.language}
                                             courseTitle={course.course.name}
                                             date={{startDate:course.course.startCourse, finishDate:course.course.finishCourse}}
                                             members={course.course.members} teacher={course.teacher} level={course.course.level}


        ></CoursesBlock>)}
      </div>
    </div>
  );
};

export default CoursesSection;