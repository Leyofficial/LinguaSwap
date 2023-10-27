import React from 'react';
import {Select, Space} from "antd";
import {categoryTypes, enrolmentType, languageItems} from "./filterItems.js";
import style from './CourseFilters.module.scss'
interface ICourseFiltersProps {
    setLanguageFilter: (arg:string) => void,
    setEnrolment: (arg:string) => void,
    setCategory: (arg:string) => void,
    loadFilter:boolean
}

const CourseFilters = (props: ICourseFiltersProps) => {
    const {setLanguageFilter, setEnrolment, setCategory,loadFilter} = props

    return (
        <Space wrap>
            <Select
                defaultValue={'Language'}
                style={{width: 120}}
                onChange={setLanguageFilter}
                options={languageItems.map((language) => ({label: language, value: language}))}
                disabled={loadFilter}
            />
            <Select
                style={{width: 120}}
                defaultValue={'Enrolment Type'}
                onChange={setEnrolment}
                options={enrolmentType.map((enrol) => ({label: enrol, value: enrol}))}
                disabled={loadFilter}
            />
            <Select
                style={{width: 120}}
                defaultValue={'Category'}
                disabled={loadFilter}
                onChange={setCategory}
                options={categoryTypes.map((category) => ({label: category, value: category}))}
            />
        </Space>
    );
};

export default CourseFilters;