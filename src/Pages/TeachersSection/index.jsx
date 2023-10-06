import React, {useEffect, useState} from 'react';
import style from './Teachers.module.scss'
import SearchInput from "../../Utility/SearchInput/SearchInput.jsx";
import {Select, Space} from "antd";
import TeacherCard from "./TeacherCard/TeacherCard.jsx";
import {Teachers} from "../../ApiRequests/Teacher/Teachers.js";
import {useDispatch, useSelector} from "react-redux";
import {teachersActionCreater} from "../../Redux/Teachers/teachersActionCreater.js";

const TeachersSection = () => {
    const [searchValue, setSearchValue] = useState("")
    const [languageFilter, setLanguageFilter] = useState('')
    const [foundTeacher, setFoundTeacher] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
       Teachers.getTeachers().then(res => dispatch(teachersActionCreater(res.data.users)))
    }, [])

    const teachers = useSelector((state) => state.teachers);

    const languages = ['All', 'English', 'Poland', 'Germany', 'Spanish', 'Italy', 'Japan', 'Turkish']

    const searchTeacherItem = () => teachers.filter(item => item.user.data.userTag.toLowerCase().includes(searchValue.toLowerCase()))

    useEffect(() => {
        if (searchValue) {
            const item = searchTeacherItem()
            setFoundTeacher(item)
        } else {
            setFoundTeacher(null)
        }

    }, [searchValue])


    return (
        <>
            <div className={style.container}>
                <div className={style.topBlock}>

                    <div className={style.titleBlock}>
                        <h2>Find your dream <span className={style.span}>teacher</span> : </h2>
                    </div>
                    <div className={style.inputBlock}>
                        <SearchInput value={searchValue} callback={setSearchValue}
                                     placeholder={'Type teacher @'}></SearchInput>
                    </div>
                    <div className={style.filtersBlock}>
                        <Space wrap>
                            <Select
                                defaultValue={'Language'}
                                style={{width: 120}}
                                onChange={setLanguageFilter}
                                options={languages.map((language) => ({label: language, value: language}))}
                            />
                        </Space>
                    </div>
                </div>
                <div className={style.teachersBlock}>
                    <ul className={style.cardsItems}>
                        { !foundTeacher ?  teachers.map((item) => {
                            return <TeacherCard name={item.user.data.name} hash={item.user.data.userTag} photo={item.user.data.photo} languages={item.user.data.languagesKnow}/>
                        }) : foundTeacher.map((item) => {
                            return <TeacherCard name={item.user.data.name} hash={item.user.data.userTag} photo={item.user.data.photo} languages={item.user.data.languagesKnow}/>
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TeachersSection;