import style from "./TextArea.module.scss";
import {setBioAC} from "../../../../Redux/Profile/Bio/setBioAC.js";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";

export function  TextArea () {

    // Should be hook useTypedSelector (later)
    const bio = useSelector((state : any) => state.bio);
    const dispatch = useDispatch();
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const handleTextareaClick = () => {
        setIsClicked(true );
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
                onClick={() => handleTextareaClick()}
                onBlur={handleTextareaBlur}
                onChange={(event : React.ChangeEvent<HTMLTextAreaElement>) => dispatch(setBioAC(event.target.value))}
                style={{
                    border: isClicked ? "2px solid dodgerblue" : "1px solid gray",
                }}
                className={style.textArea}
                cols={10}
                rows={10}
            ></textarea>
        </>
    )
}
