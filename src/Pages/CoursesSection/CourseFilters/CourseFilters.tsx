import React from 'react';
import {Select, Space} from "antd";
import {categoryTypes, enrolmentType, languageItems} from "./filterItems.js";

interface ICourseFiltersProps {
    setLanguageFilter: (arg:string) => void,
    setEnrolment: (arg:string) => void,
    setCategory: (arg:string) => void
}

const CourseFilters = (props: ICourseFiltersProps) => {
    const {setLanguageFilter, setEnrolment, setCategory} = props

    return (
        <Space wrap>
            <Select
                defaultValue={'Language'}
                style={{width: 120}}
                onChange={setLanguageFilter}
                options={languageItems.map((language) => ({label: language, value: language}))}
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
    );
};

export default CourseFilters;