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
import {TypeAnimation} from "react-type-animation";

const TeachersSection = () => {
    const languages = ['All', 'English', 'Poland', 'Germany', 'Spanish', 'Italy', 'Japan', 'Turkish']

    const [searchValue, setSearchValue] = useState("")
    const [languageFilter, setLanguageFilter] = useState('')
    const [foundTeacher, setFoundTeacher] = useState(null)
    const [loadTeacher , setLoadTeacher] = useState(false)
    const dispatch = useDispatch()
    const teachers = useSelector((state) => state.teachers);

    function errorToaster(text) {
        toast.error(text);
    }

    useEffect(() => {
        Teachers.getTeachers().then(res => {
            if (res.status === 200) {
                setTimeout(() => {
                    setLoadTeacher(true)
                } , 1000)
                dispatch(teachersActionCreater(res.data.users))
            } else {
                dispatch(teachersActionCreater([]))
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
                            if (!loadTeacher) {
                               return  <Stack spacing={4}>
                                    <Skeleton variant="circular" width={75} height={75} />
                                    <Skeleton variant="rectangular" width={210} height={60} />
                                    <Skeleton variant="rounded" width={210} height={60} />
                                </Stack>
                            } else {
                                return <TeacherCard name={item.user.data.name} hash={item.user.data.userTag} photo={item.user.data.photo} languages={item.user.data.languagesKnow}/>
                            }
                        }) : (foundTeacher.length < 0 ? foundTeacher.map((item) => {
                            return <TeacherCard name={item.user.data.name} hash={item.user.data.userTag} photo={item.user.data.photo} languages={item.user.data.languagesKnow}/>
                        }):
                            <div className={style.notFound}>
                                No results <span className={style.span}>found</span> :( <br/>
                                We <span className={style.span}>can’t find </span> any item matching your <span className={style.span}>search .</span>
                            </div>
                        )}
                    </ul>
                </>
            </div>
        </>
    );
}

export default TeachersSection;