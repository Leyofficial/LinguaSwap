import style from './CoursesSection.module.scss'
import {useEffect, useState} from "react";
import Pagination from "../../Utility/Pagination/Pagination.jsx";
import CoursesBlock from "./CoursesBlock/CoursesBlock.jsx";
import SearchInput from "../../Utility/SearchInput/SearchInput.tsx";
import CreateCourse from "./CoursesBlock/CreateCourse/CreateCourse.jsx";
import {useDispatch, useSelector} from "react-redux";
import {filterCourseThunkCreator, getCoursesThunkCreator} from "../../Redux/Courses/coursesReducer.js";
import CourseFilters from "./CourseFilters/CourseFilters.jsx";
import NotFoundItems from "../../Utility/NotFound/NotFoundItems.tsx";

const CoursesSection = () => {

   const [searchValue, setSearchValue] = useState("")
   const [languageFilter, setLanguageFilter] = useState('')
   const [enrolment, setEnrolment] = useState("")
   const [category, setCategory] = useState('')
   const [courseForOnePage, setCourseForOnePage] = useState(6)
   const [currentCoursePage, setCurrentCoursePage] = useState(1)
   const [foundCourse, setFoundCourse] = useState(null)
   const currentUser = useSelector((state) => state.loginUser)

   const dispatch = useDispatch()
   const courses = useSelector((state) => state.courses)

   const paginate = (numberPage) => setCurrentCoursePage(numberPage)

   const indexOfLastCourse = currentCoursePage * courseForOnePage
   const indexOfFirstCourse = indexOfLastCourse - courseForOnePage

   const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse)


   useEffect(() => {
      dispatch(getCoursesThunkCreator())
   }, [])


   const searchCoursesItem = () => courses.filter(item => item.course.name.toLowerCase().includes(searchValue.toLowerCase()))

   useEffect(() => {
      if (searchValue) {
         const item = searchCoursesItem()
         setFoundCourse(item)
      } else {
         setFoundCourse(null)
      }

   }, [courses, searchValue])


   useEffect(() => {

      if (languageFilter || enrolment) {
         dispatch(filterCourseThunkCreator(languageFilter, enrolment))
      }

   }, [languageFilter, enrolment])

   console.log(currentCourses)
   return (
      <div className={style.container}>
         <div className={style.searchWrapper}>
            <SearchInput value={searchValue} callback={setSearchValue}
                         placeholder={'Type course or teacher name'}></SearchInput>
         </div>
         <div className={style.filterWrapper}>
            <CourseFilters setLanguageFilter={setLanguageFilter}
                           setEnrolment={setEnrolment}
                           setCategory={setCategory}
            ></CourseFilters>
            <div className={style.create}>
               {currentUser && currentUser?.user.data?.status === "Teacher" ? <CreateCourse></CreateCourse> : null}
            </div>
         </div>
         <div className={style.coursesWrapper}>

            {!currentCourses.length && !foundCourse ?  <NotFoundItems></NotFoundItems> : (
               !foundCourse ? currentCourses.map((course,index) => <CoursesBlock key={index} course={course}></CoursesBlock>) :
                  foundCourse.map((foundItems,index) => <CoursesBlock key={index} course={foundItems}></CoursesBlock>)

            )}

         </div>
         <div className={style.paginationWrapper}>

            <Pagination paginate={paginate} coursesForOnePage={courseForOnePage}
                        totalCourses={courses.length}></Pagination>
         </div>
      </div>
   );
};

export default CoursesSection;