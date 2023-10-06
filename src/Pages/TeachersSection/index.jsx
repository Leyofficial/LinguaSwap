import React, {useEffect, useState} from 'react';
import style from './Teachers.module.scss'
import SearchInput from "../../Utility/SearchInput/SearchInput.jsx";
import {Select, Space} from "antd";
import TeacherCard from "./TeacherCard/TeacherCard.jsx";
import photo1 from './../../../uploads/30092023-092955_618-PaleMask_burning_heart_4c63719d-153d-4bbb-847a-ed651e2b1d81.png'
import Spinner from "../../Utility/Spinner/Spinner.jsx";
import axios from "axios";
import {Teachers} from "../../ApiRequests/Teacher/Teachers.js";
import {useDispatch, useSelector} from "react-redux";
import {teachersActionCreater} from "../../Redux/Teachers/teachersActionCreater.js";

const TeachersSection = () => {
    const [searchValue, setSearchValue] = useState("")
    const [enrolment, setEnrolment] = useState("")
    const [languageFilter, setLanguageFilter] = useState('')
    const [category, setCategory] = useState('')
    const [foundTeacher, setFoundTeacher] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
       Teachers.getTeachers().then(res => dispatch(teachersActionCreater(res.data.users)))
    }, [])

    const teachers = useSelector((state) => state.teachers);

    const languages = ['All', 'English', 'Poland', 'Germany', 'Spanish', 'Italy', 'Japan', 'Turkish']
    const enrolmentType = ["All", 'Free', 'Paid']
    const categoryTypes = ["All", 'Popular', 'Recent']

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