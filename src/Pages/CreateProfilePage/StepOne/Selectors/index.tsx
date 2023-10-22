import style from "./Selectors.module.scss";
import {useDispatch} from "react-redux";
import {setStatusActionCreate} from "../../../../Redux/Profile/Status/setStatusActionCreate.ts";
import {useTypedSelector} from "../../../../hooks/useTypedSelector.ts";
import React from "react";

export function  Selectors () {
    const dispatch = useDispatch();
    const status = useTypedSelector((state) => state.status);
    function selectStatus(event: React.ChangeEvent<HTMLInputElement>) {
        const text = event.target?.value; // Use optional chaining to access event.target safely
        if (text) {
            dispatch(setStatusActionCreate(text));
        }
    }

    return (
        <>
            <form className={style["radio-form"]}>
                <input onChange={selectStatus} checked={status === 'Student'} value="Student" name="hopping" type="radio" id="a"/>
                <label htmlFor="a"><span className={style.span}></span>Student</label>
                <input onChange={selectStatus} checked={status === 'Teacher'}  value="Teacher" name="hopping" type="radio" id="b"/>
                <label htmlFor="b"><span className={style.span}></span>Teacher</label>
                <div className={style.worm}>
                    <div className={style.worm__segment}></div>
                </div>
            </form>
        </>
    )
}