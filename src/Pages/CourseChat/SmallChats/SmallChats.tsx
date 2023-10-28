import React, {useEffect, useState} from 'react';
import SingleCourseChat from "../../ChooseTypeOfChat/CourseChats/SingleCourseChat/SingleCourseChat.tsx";
import {ICourse} from "../../../types/coursesTypes.ts";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";
import {getCoursesHelper} from "../../ChooseTypeOfChat/CourseChatsHelper.ts";
import SearchInput from "../../../Utility/SearchInput/SearchInput.tsx";
import style from './SmallChats.module.scss'
import {RxHamburgerMenu} from "react-icons/rx";

const SmallChats = () => {
    const [courses, setCourses] = useState<ICourse[] | null>(null)
    const currentUser = useTypedSelector((state) => state.loginUser)
    const [search, setSearch] = useState<string>('')
    useEffect(() => {
        getCoursesHelper(currentUser, setCourses)

    }, [currentUser])
    return (
        <div className={style.container}>
            <div className={style.search}>
                <SearchInput placeholder={'Search'} value={search} callback={setSearch}></SearchInput>
            </div>
            {courses && courses.map((course, index: number) => <SingleCourseChat key={index}
                                                                                 course={course}></SingleCourseChat>)}
        </div>
    );
};

export default SmallChats;