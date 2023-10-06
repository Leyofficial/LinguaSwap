import React, {useEffect, useState} from 'react';
import style from './Teachers.module.scss'
import SearchInput from "../../Utility/SearchInput/SearchInput.jsx";
import {Select, Space} from "antd";
import TeacherCard from "./TeacherCard/TeacherCard.jsx";
import photo1 from './../../../uploads/30092023-092955_618-PaleMask_burning_heart_4c63719d-153d-4bbb-847a-ed651e2b1d81.png'
import Spinner from "../../Utility/Spinner/Spinner.jsx";

const TeachersSection = () => {
    const [searchValue, setSearchValue] = useState("")

    const languages = ['All', 'English', 'Poland', 'Germany', 'Spanish', 'Italy', 'Japan', 'Turkish']
    const enrolmentType = ["All", 'Free', 'Paid']
    const [enrolment, setEnrolment] = useState("")
    const [languageFilter, setLanguageFilter] = useState('')
    const categoryTypes = ["All", 'Popular', 'Recent']
    const [category, setCategory] = useState('')
    const [foundTeacher, setFoundTeacher] = useState(null)

    const searchTeacherItem = () => teachers.filter(item => item.hash.toLowerCase().includes(searchValue.toLowerCase()))

    const teachers = [
        {name: 'Danyil', photo: photo1, hash: 'ley', languages: []},
        {name: 'Danyil', photo: photo1, hash: 'ley', languages: []},
        {name: 'Danyil', photo: photo1, hash: 'ley', languages: []},{name: 'Danyil', photo: photo1, hash: 'ley', languages: []},
        {name: 'Danyil', photo: photo1, hash: 'ley', languages: []},{name: 'Danyil', photo: photo1, hash: 'ley', languages: []},
        {name: 'Danyil', photo: photo1, hash: 'ley', languages: []},
        {name: 'Danyil', photo: photo1, hash: 'ley', languages: []},
        {name: 'Danyil', photo: photo1, hash: 'ley', languages: []},
        {name: 'Danyil', photo: photo1, hash: 'ley', languages: []},
        {name: 'Danyil', photo: photo1, hash: 'ley', languages: []},
        {name: 'Danyil', photo: photo1, hash: 'ley', languages: []},
        {name: 'Andrew', photo: 'Ya', hash: 'aay', languages:  [{ label : 'English' , color :  '#ff0000' } , {label : "Ukrainian" , color : "#00a6ff"} , { label : 'English' , color :  '#5e134e' }]}
    ];

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
                            return <TeacherCard name={item.name} hash={item.hash} photo={item.photo} languages={item.languages}/>
                        }) : foundTeacher.map((item) => {
                            return <TeacherCard name={item.name} hash={item.hash} photo={item.photo} languages={item.languages}/>
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TeachersSection;