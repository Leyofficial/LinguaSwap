import CustomInput from "../../../../Utility/CustomInput/CustomInput.jsx";
import style from "./Inputs.module.scss";
import {FaHashtag} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {nameInputEmptyCreater} from "../../../../Redux/Profile/Inputs/name/nameInputEmptyCreater.js";
import {hashInputEmptyAC} from "../../../../Redux/Profile/Inputs/hash/hashInputEmptyAC.js";
import {useTypedSelector} from "../../../../hooks/useTypedSelector.ts";

export function  Inputs () {
    const dispatch = useDispatch();

    // Should be hook useTypedSelector (later)
    const dirtyName = useTypedSelector((state : any) => state.nameDirty);
    const dirtyHash = useTypedSelector((state : any) => state.hashDirty);
    const name = useTypedSelector((state : any) => state.name);
    const userTag = useTypedSelector((state : any) => state.userTag);

    function checkNameDirty(name : string) {
        if (name.trim().length > 1) {
            dispatch(nameInputEmptyCreater(false));
        } else {
            dispatch(nameInputEmptyCreater(true));
        }
    }

    function checkHashDirty(hash : string) {
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