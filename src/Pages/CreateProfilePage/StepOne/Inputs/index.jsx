import CustomInput from "../../../../Utility/CustomInput/CustomInput.jsx";
import style from "./Inputs.module.scss";
import {FaHashtag} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {nameInputEmptyCreater} from "../../../../Redux/Profile/Inputs/name/nameInputEmptyCreater.ts";
import {hashInputEmptyAC} from "../../../../Redux/Profile/Inputs/hash/hashInputEmptyAC.ts";

export function  Inputs () {
    const dispatch = useDispatch();

    const dirtyName = useSelector((state) => state.nameDirty);
    const dirtyHash = useSelector((state) => state.hashDirty);
    const name = useSelector((state) => state.name);
    const userTag = useSelector((state) => state.userTag);

    function checkNameDirty(name) {
        if (name.trim().length > 1) {
            dispatch(nameInputEmptyCreater(false));
        } else {
            dispatch(nameInputEmptyCreater(true));
        }
    }

    function checkHashDirty(hash) {
        if (hash.trim().length > 1) {
            dispatch(hashInputEmptyAC(false));
        } else {
            dispatch(hashInputEmptyAC(true));
        }
    }

    return (
        <>
            <CustomInput
                necessarily={true}
                callback={checkNameDirty}
                heg={false}
                value={name}
                width={"44%"}
                placeholder={"Type your name"}
            />
            {dirtyName ? <p className={style.warningMessage}><b>The input field must not be empty or less<br/>
                two characters..</b></p> : null}

            <div className={style.hashBlock}>
                <FaHashtag className={style.hashImg}/>
                <CustomInput
                    necessarily={true}
                    callback={checkHashDirty}
                    value={userTag}
                    width={"100%"}
                    placeholder={"Type your user tag"}
                    heg={true}
                />
            </div>
            {dirtyHash ? <p className={style.warningMessage}><b>The input field must not be empty or less<br/>
                two characters..</b></p> : null}
        </>
    )
}