import style from './CoursesSection.module.scss'
import {useEffect, useState} from "react";
import Pagination from "../../Utility/Pagination/Pagination.jsx";
import CoursesBlock from "./CoursesBlock/CoursesBlock.jsx";
import SearchInput from "../../Utility/SearchInput/SearchInput.jsx";
import CreateCourse from "./CoursesBlock/CreateCourse/CreateCourse.jsx";
import { Select, Space } from 'antd';
import {Course} from "../../ApiRequests/Courses/Courses.js";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesAC} from "../../Redux/Courses/coursesAC.js";
import {countryFlag} from "../../Utility/CoutryFlag/CountryFlag.js";
import CourseSelect from "./CoursesBlock/CreateCourse/ModalCreateCourse/CourseSelect/CourseSelect.jsx";

const CoursesSection = () => {

  const [searchValue, setSearchValue] = useState("")
  // const test = [1, 2, 3, 4, 5, 6, 7, 8]

  const dispatch = useDispatch()

  // selectors
  const languages = ['English', 'Poland', 'Germany', 'Spanish', 'Italy', 'Japan', 'Turkish']
  const [languageFilter, setLanguageFilter] = useState('')

  const enrolmentType = ['Free', 'Paid']
  const [enrolment, setEnrolment] = useState("")

  const categoryTypes = ['Popular', 'Recent']
  const [category, setCategory] = useState('')

  const courses = useSelector((state) => state.courses)

  useEffect(() => {
    Course.getCourses().then(res => dispatch(getCoursesAC(res.data.courses)))
  }, [])

  // courses.length = 6

  return (
    <div className={style.container}>
      <div className={style.searchWrapper}>
        <SearchInput value={searchValue} callback={setSearchValue}
                     placeholder={'Type course or teacher name'}></SearchInput>
        {/*<Pagination test={test}></Pagination>*/}
      </div>
      <div className={style.titleWrapper}>
        <div>
          <Space wrap>
            <Select
              defaultValue={'Language'}
              style={{ width: 120 }}
              onChange={setLanguageFilter}
              options={languages.map((language) => ({ label: language, value: language }))}
            />
            <Select
              style={{ width: 120 }}
              defaultValue={'Enrolment Type'}
              onChange={setEnrolment}
              options={enrolmentType.map((enrol) => ({ label: enrol, value: enrol }))}
            />
            <Select
              style={{ width: 120 }}
              defaultValue={'Category'}
              onChange={setCategory}
              options={categoryTypes.map((category) => ({ label: category, value: category }))}
            />
          </Space>

          {/*<CourseSelect items={languages} title={"Language"} callback={setLanguageFilter}*/}
          {/*              value={languageFilter}></CourseSelect>*/}
          {/*<CourseSelect items={enrolmentType} title={"Enrolment types"} callback={setEnrolment}*/}
          {/*              value={enrolment}></CourseSelect>*/}
          {/*<CourseSelect items={categoryTypes} title={"Category"} callback={setCategory}*/}
          {/*              value={category}></CourseSelect>*/}
          <div>
            {/*<CreateCourse></CreateCourse>*/}
          </div>
        </div>
      </div>
      <div className={style.coursesWrapper}>
        {courses.map(course => <CoursesBlock flag={countryFlag(course.course.language)}
                                             language={course.course.language}
                                             courseTitle={course.course.name}
                                             date={{
                                               startDate: course.course.startCourse,
                                               finishDate: course.course.finishCourse
                                             }}
                                             members={course.course.members} teacher={course.teacher}
                                             level={course.course.level}


        ></CoursesBlock>)}
      </div>
    </div>
  );
};

export default CoursesSection;