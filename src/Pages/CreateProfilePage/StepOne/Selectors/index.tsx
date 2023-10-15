import style from "./Selectors.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setStatusActionCreate} from "../../../../Redux/Profile/Status/setStatusActionCreate.js";
import React from "react";

export function  Selectors () {
    const dispatch = useDispatch();

    // Should be hook useTypedSelector (later)
    const status = useSelector((state : any) => state.status);
    function  selectStatus (text : string) {
        dispatch(setStatusActionCreate(text));
    }
    return (
        <>
            <form className={style["radio-form"]}>
                <input onChange={(event : React.ChangeEvent<HTMLInputElement>) => selectStatus(event.target.value)} checked={status === 'Student'} value="Student" name="hopping" type="radio" id="a"/>
                <label htmlFor="a"><span className={style.span}></span>Student</label>
                <input onChange={(event : React.ChangeEvent<HTMLInputElement>) => selectStatus(event.target.value)} checked={status === 'Teacher'}  value="Teacher" name="hopping" type="radio" id="b"/>
                <label htmlFor="b"><span className={style.span}></span>Teacher</label>
                <div className={style.worm}>
                    <div className={style.worm__segment}></div>
                </div>
            </form>
        </>
    )
}