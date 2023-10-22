import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import style from './Teachers.module.scss'
import {Teachers} from "../../ApiRequests/Teacher/Teachers.js";

import SearchInput from "../../Utility/SearchInput/SearchInput.tsx";
import TeacherCard from "./TeacherCard/TeacherCard.js";

import {teachersActionCreater} from "../../Redux/Teachers/teachersActionCreater.js";
import {Toaster} from "react-hot-toast";
import {Skeleton, Stack} from "@mui/material";
import {Select, Space} from "antd";
import List from "../../Utility/List/List.tsx";
import {ILanguagesTypes} from "../../Utility/Languages/languages.ts";
import {IUserInfo} from "../../types/userTypes.ts";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {errorToaster} from "../../Utility/Toaster/Toaster.ts";

const TeachersSection = () => {
    const languages: string[] = ['All', 'English', 'Russian', 'Poland', 'Germany', 'Spanish', 'Italy', 'Japan', 'Turkish']

    const [searchValue, setSearchValue] = useState<string>('')
    const [languageFilter, setLanguageFilter] = useState<string>('')
    const [foundTeacher, setFoundTeacher] = useState<IUserInfo[] | null>()
    const [loadTeacher, setLoadTeacher] = useState<boolean>(false)
    const dispatch = useDispatch()
    const teachers = useTypedSelector((state) => state.teachers);


    useEffect(() => {

        Teachers.getTeachers().then(res => {
            if (res.status === 200) {
                setTimeout(() => {
                    setLoadTeacher(true)
                }, 200)
                dispatch(teachersActionCreater(res.data.users))
            } else {
                errorToaster('Server error!')
            }
        })
    }, []);

    useEffect(() => {
        if (languageFilter && searchValue && languageFilter !== 'All')  {
            const item = searchTeacherItem();
            const filterInSearch = item.filter((u: IUserInfo) => u.user.data.languagesKnow.filter((lang: ILanguagesTypes) => lang.label === languageFilter));
            if (filterInSearch.length > 0) {
                setFoundTeacher(filterInSearch);
            } else {
                setFoundTeacher(null)
            }
        } else if (searchValue) {
            const item = searchTeacherItem();
            setFoundTeacher(item)
        }else {
            setFoundTeacher(null)
        }

        if (languageFilter && languageFilter !== 'All') {
            const item = filterLanguageItem()
            setFoundTeacher(item)
        }
    }, [languageFilter, searchValue])


    const filterLanguageItem = () => teachers.filter((item: IUserInfo) =>
        item.user.data.languagesKnow.find((item: ILanguagesTypes): boolean => item.label === languageFilter)
    )
    const searchTeacherItem = () => teachers.filter((item: IUserInfo) =>
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
                                placeholder={'Teachers'}
                                style={{width: 120}}
                                onChange={setLanguageFilter}
                                options={languages.map((language : string) => ({label: language, value: language}))}
                            />
                        </Space>
                    </div>
                </div>
                <>
                    <ul className={style.cardsItems}>
                        {!foundTeacher? teachers.map((item: IUserInfo) => {
                            if (!loadTeacher) {
                                return <Stack spacing={4}>
                                    <Skeleton variant="circular" width={75} height={75}/>
                                    <Skeleton variant="rectangular" width={210} height={60}/>
                                    <Skeleton variant="rounded" width={210} height={60}/>
                                </Stack>
                            } else {
                                return <TeacherCard _id={item._id}
                                                    name={item.user.data.name}
                                                    userTag={item.user.data.userTag}
                                                    photo={item.user.data.photo}
                                                    languagesKnow={item.user.data.languagesKnow}
                                                    bio={item.user.data.bio}
                                                    languagesLearn={item.user.data.languagesLearn}
                                />
                            }
                        }) : ( foundTeacher.length > 0 ?
                                <List items={foundTeacher} rerender={(item : IUserInfo) => <TeacherCard
                                    _id={item._id}
                                    name={item.user.data.name}
                                    userTag={item.user.data.userTag}
                                    photo={item.user.data.photo}
                                    languagesKnow={item.user.data.languagesKnow}
                                    bio={item.user.data.bio}
                                    languagesLearn={item.user.data.languagesLearn}
                                />}></List>
                                :  <div className={style.notFound}>
                                    No results <span className={style.span}>found</span> :( <br/>
                                    We <span className={style.span}>can’t find </span> any item matching your <span
                                    className={style.span}>search .</span>
                                </div>
                        )}
                    </ul>
                </>
            </div>
        </>
    );
}

export default TeachersSection;