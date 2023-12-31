import style from './CoursesSection.module.scss'
import React, {useEffect, useState} from "react";
import Pagination from "../../Utility/Pagination/Pagination.jsx";
import SearchInput from "../../Utility/SearchInput/SearchInput.tsx";
import CreateCourse from "./CoursesBlock/CreateCourse/CreateCourse.tsx";
import {useDispatch} from "react-redux";
import {filterCourseThunkCreator, getCoursesThunkCreator} from "../../Redux/Courses/coursesReducer.ts";
import CourseFilters from "./CourseFilters/CourseFilters.tsx";
import NotFoundItems from "../../Utility/NotFound/NotFoundItems.tsx";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {ICourse} from "./courseType.ts";
import CoursesBlock from "./CoursesBlock/CoursesBlock.tsx";


const CoursesSection = () => {

    const [searchValue, setSearchValue] = useState("")
    const [languageFilter, setLanguageFilter] = useState('')
    const [enrolment, setEnrolment] = useState("")
    const [category, setCategory] = useState('')
    const [courseForOnePage, setCourseForOnePage] = useState(6)
    const [currentCoursePage, setCurrentCoursePage] = useState(1)
    const [foundCourse, setFoundCourse] = useState([])
    const [loadCourses, setLoadCourses] = useState<boolean>(false)
    const [loadFilter,setLoadFilter] = useState<boolean>(false)
    const currentUser = useTypedSelector((state) => state.loginUser)
    const courses = useTypedSelector((state : any) => state.courses)
    const dispatch = useDispatch()
    const paginate = (numberPage: number) => setCurrentCoursePage(numberPage)

    const indexOfLastCourse = currentCoursePage * courseForOnePage
    const indexOfFirstCourse = indexOfLastCourse - courseForOnePage

    const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse)

    useEffect(() => {
        getCoursesThunkCreator(setLoadCourses)(dispatch)
    }, [])

    const searchCoursesItem = () => courses.filter((item:ICourse) => item.course.name.toLowerCase().includes(searchValue.toLowerCase()))

    useEffect(() => {
        if (searchValue) {
            const item = searchCoursesItem();
            setFoundCourse(item)
        } else {
            setFoundCourse([])
        }
    }, [courses, searchValue])


    useEffect(() => {
        if (languageFilter || enrolment) {
           filterCourseThunkCreator(languageFilter, enrolment,setLoadFilter)(dispatch)
        }
    }, [languageFilter, enrolment])

    return (
        <div className={style.container}>
            <div className={style.searchWrapper} >
                <SearchInput value={searchValue} callback={setSearchValue}
                             placeholder={'Type course or teacher name'}></SearchInput>
            </div>
            <div className={style.filterWrapper}>
                <CourseFilters setLanguageFilter={setLanguageFilter}
                               setEnrolment={setEnrolment}
                               setCategory={setCategory}
                               loadFilter={loadFilter}
                ></CourseFilters>
                <div className={style.create}>
                    {currentUser && currentUser?.user.data?.status === "Teacher" ? <CreateCourse></CreateCourse> : null}
                </div>
            </div>
            <div className={style.coursesWrapper}>
                {currentCourses.length >= 1 && foundCourse.length === 0 && searchValue.length === 0 ? currentCourses.map((course : ICourse,index : number) =>  <CoursesBlock isLoad={loadCourses} course={course} key={index}></CoursesBlock>) : (
                    foundCourse.length >= 1 ? foundCourse.map((foundItems,index) => <CoursesBlock isLoad={loadCourses} course={foundItems} key={index}></CoursesBlock> ) :<NotFoundItems></NotFoundItems>)}
                </div>
            <div className={style.paginationWrapper}>

                <Pagination paginate={paginate} coursesForOnePage={courseForOnePage}
                            totalCourses={ foundCourse.length === 0 && searchValue.length === 0 ? courses.length : foundCourse.length}></Pagination>
            </div>
        </div>
    );
};

export default CoursesSection;