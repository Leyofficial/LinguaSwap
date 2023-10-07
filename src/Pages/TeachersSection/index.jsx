import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from './Teachers.module.scss'
import {Select, Space} from "antd";
import {Teachers} from "../../ApiRequests/Teacher/Teachers.js";

import SearchInput from "../../Utility/SearchInput/SearchInput.jsx";
import TeacherCard from "./TeacherCard/TeacherCard.jsx";

import {teachersActionCreater} from "../../Redux/Teachers/teachersActionCreater.js";
import toast, {Toaster} from "react-hot-toast";
import {Skeleton, Stack} from "@mui/material";

const TeachersSection = () => {
    const languages = ['All', 'English', 'Poland', 'Germany', 'Spanish', 'Italy', 'Japan', 'Turkish']

    const [searchValue, setSearchValue] = useState("")
    const [languageFilter, setLanguageFilter] = useState('')
    const [foundTeacher, setFoundTeacher] = useState(null)

    const dispatch = useDispatch()
    const teachers = useSelector((state) => state.teachers);

    function errorToaster(text) {
        toast.error(text);
    }

    useEffect(() => {
        Teachers.getTeachers().then(res => {
            console.log(res.status)
            if (res.status === 200) {
                dispatch(teachersActionCreater(res.data.users))
            } else {
                errorToaster('Ошибка!')
            }
        })
    }, []);

    useEffect(() => {
        if (searchValue) {
            const item = searchTeacherItem()
            setFoundTeacher(item)
        } else {
            setFoundTeacher(null)
        }

    }, [searchValue])
    const searchTeacherItem = () => teachers.filter(item =>
        item.user.data.userTag.toLowerCase().includes(searchValue.toLowerCase())
    )

    return (
        <>
            <div className={style.container}>
                <div className={style.topBlock}>
                    <Toaster position="top-right" reverseOrder={false}/>
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
                <>
                    <ul className={style.cardsItems}>
                        { !foundTeacher ?  teachers.map((item) => {
                            return <TeacherCard name={item.user.data.name} hash={item.user.data.userTag} photo={item.user.data.photo} languages={item.user.data.languagesKnow}/>
                        }) : foundTeacher.map((item) => {
                            return <TeacherCard name={item.user.data.name} hash={item.user.data.userTag} photo={item.user.data.photo} languages={item.user.data.languagesKnow}/>
                        })}
                    </ul>
                </>
            </div>
        </>
    );
}

export default TeachersSection;