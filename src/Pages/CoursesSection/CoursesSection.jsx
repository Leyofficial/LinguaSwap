import style from './CoursesSection.module.scss'
import {useEffect, useState} from "react";
import Pagination from "../../Utility/Pagination/Pagination.jsx";
import CoursesBlock from "./CoursesBlock/CoursesBlock.jsx";
import SearchInput from "../../Utility/SearchInput/SearchInput.jsx";
import CreateCourse from "./CoursesBlock/CreateCourse/CreateCourse.jsx";
import {Select, Space} from 'antd';
import {Course} from "../../ApiRequests/Courses/Courses.js";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesAC} from "../../Redux/Courses/coursesAC.js";
import {countryFlag} from "../../Utility/CoutryFlag/CountryFlag.js";
import {filterCourseThunkCreator} from "../../Redux/Courses/coursesReducer.js";

const CoursesSection = () => {

  const [searchValue, setSearchValue] = useState("")

  const dispatch = useDispatch()

  // selectors
  const languages = ['English', 'Poland', 'Germany', 'Spanish', 'Italy', 'Japan', 'Turkish']
  const [languageFilter, setLanguageFilter] = useState('')
  const enrolmentType = ['Free', 'Paid']
  const [enrolment, setEnrolment] = useState("")
  const categoryTypes = ['Popular', 'Recent']
  const [category, setCategory] = useState('')

  const [courseForOnePage,setCourseForOnePage] = useState(6)

  const [foundCourse, setFoundCourse] = useState(null)

  const courses = useSelector((state) => state.courses)

  const [currentCoursePage,setCurrentCoursePage] = useState(1)
  //pagination
  const paginate = (numberPage) => setCurrentCoursePage(numberPage)

  const indexOfLastCourse = currentCoursePage * courseForOnePage
  const indexOfFirstCourse = indexOfLastCourse - courseForOnePage

  const currentCourses = courses.slice(indexOfFirstCourse,indexOfLastCourse)


  useEffect(() => {
    Course.getCourses().then(res => dispatch(getCoursesAC(res.data.courses)))
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
      dispatch(filterCourseThunkCreator(languageFilter,enrolment))
    }

  }, [languageFilter,enrolment])



  return (
    <div className={style.container}>
      <div className={style.searchWrapper}>
        <SearchInput value={searchValue} callback={setSearchValue}
                     placeholder={'Type course or teacher name'}></SearchInput>
      </div>
      <div className={style.titleWrapper}>
        <div>
          <Space wrap>
            <Select
              defaultValue={'Language'}
              style={{width: 120}}
              onChange={setLanguageFilter}
              options={languages.map((language) => ({label: language, value: language}))}
            />
            <Select
              style={{width: 120}}
              defaultValue={'Enrolment Type'}
              onChange={setEnrolment}
              options={enrolmentType.map((enrol) => ({label: enrol, value: enrol}))}
            />
            <Select
              style={{width: 120}}
              defaultValue={'Category'}
              onChange={setCategory}
              options={categoryTypes.map((category) => ({label: category, value: category}))}
            />
          </Space>
          <div>
            {/*<CreateCourse></CreateCourse>*/}
          </div>
        </div>
      </div>
      <div className={style.coursesWrapper}>
        {!foundCourse ? currentCourses.map(course => <CoursesBlock flag={countryFlag(course.course.language)}
                                                            language={course.course.language}
                                                            courseTitle={course.course.name}
                                                            date={{
                                                              startDate: course.course.startCourse,
                                                              finishDate: course.course.finishCourse
                                                            }}
                                                            members={course.course.members} teacher={course.teacher}
                                                            level={course.course.level}
                                                            duration={course.course.durationCourse}
                                                            image={course.course.image}


        ></CoursesBlock>) : foundCourse.map(course => <CoursesBlock flag={countryFlag(course.course.language)}
                                                                    language={course.course.language}
                                                                    courseTitle={course.course.name}
                                                                    date={{
                                                                      startDate: course.course.startCourse,
                                                                      finishDate: course.course.finishCourse
                                                                    }}
                                                                    members={course.course.members}
                                                                    teacher={course.teacher}
                                                                    level={course.course.level}
                                                                    duration={course.course.durationCourse}
                                                                    image={course.course.image}


        ></CoursesBlock>)}

      </div>
      <div className={style.paginationWrapper}>

        <Pagination paginate={paginate} coursesForOnePage={courseForOnePage} totalCourses={courses.length}   ></Pagination>
      </div>
    </div>
  );
};

export default CoursesSection;