import style from './CoursesSection.module.scss'
import {useEffect, useState} from "react";
import Pagination from "../../Utility/Pagination/Pagination.jsx";
import CoursesBlock from "./CoursesBlock/CoursesBlock.js";
import SearchInput from "../../Utility/SearchInput/SearchInput.tsx";
import CreateCourse from "./CoursesBlock/CreateCourse/CreateCourse.js";
import {useDispatch} from "react-redux";
import {filterCourseThunkCreator, getCoursesThunkCreator} from "../../Redux/Courses/coursesReducer.ts";
import CourseFilters from "./CourseFilters/CourseFilters.js";
import NotFoundItems from "../../Utility/NotFound/NotFoundItems.tsx";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {ICourse} from "./courseType.ts";

const CoursesSection = () => {

    const [searchValue, setSearchValue] = useState("")
    const [languageFilter, setLanguageFilter] = useState('')
    const [enrolment, setEnrolment] = useState("")
    const [category, setCategory] = useState('')
    const [courseForOnePage, setCourseForOnePage] = useState(6)
    const [currentCoursePage, setCurrentCoursePage] = useState(1)
    const [foundCourse, setFoundCourse] = useState([])
    const [loadCourses, setLoadCourses] = useState(false)
    const currentUser = useTypedSelector((state) => state.loginUser)
    const courses = useTypedSelector((state) => state.courses)
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
            const item = searchCoursesItem()
            setFoundCourse(item)
        } else {
            setFoundCourse([])
        }

    }, [courses, searchValue])


    useEffect(() => {

        if (languageFilter || enrolment) {
           filterCourseThunkCreator(languageFilter, enrolment)(dispatch)
        }

    }, [languageFilter, enrolment])

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

                {!currentCourses.length && !foundCourse ? <NotFoundItems></NotFoundItems> : (
                    !foundCourse.length ? currentCourses.map((course : ICourse, index : number) => <CoursesBlock key={index}
                                                                                       course={course}></CoursesBlock>) :
                        foundCourse.map((foundItems : ICourse, index : number) => <CoursesBlock key={index}
                                                                             course={foundItems}></CoursesBlock>)

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