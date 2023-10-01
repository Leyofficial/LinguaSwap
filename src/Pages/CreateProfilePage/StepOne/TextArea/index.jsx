import style from "./TextArea.module.scss";
import {setBioAC} from "../../../../Redux/Profile/Bio/setBioAC.js";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export function  TextArea () {
    const bio = useSelector((state) => state.bio);
    const dispatch = useDispatch();
    const [isClicked, setIsClicked] = useState(false);
    const handleTextareaClick = () => {
        setIsClicked(true);
    };
    const handleTextareaBlur = () => {
        setIsClicked(false);
    };
    return (
        <>
            <p className={style.areaText}>
                Write about <span>yourself </span> (option):
            </p>
            <textarea
                value={bio}
                onClick={handleTextareaClick}
                onBlur={handleTextareaBlur}
                onChange={() => dispatch(setBioAC(event.target.value))}
                style={{
                    border: isClicked ? "2px solid dodgerblue" : "1px solid gray",
                }}
                className={style.textArea}
                cols="10"
                rows="10"
            ></textarea>
        </>
    )
}