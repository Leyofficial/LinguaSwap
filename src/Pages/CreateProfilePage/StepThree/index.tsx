import React, {useState} from "react";
import CustomButton from "../../../Utility/CustomButton/CustomButton";
import style from './StepThree.module.scss'

import {
    setLanguagesKnowActionCreater
} from "../../../Redux/Profile/Languages/languagesKnow/setLanguagesKnowActionCreater.js";
import {
    setLanguagesLearnActionCreater
} from "../../../Redux/Profile/Languages/languagesLearn/setLanguagesLearnActionCreater.js";
import CustomSelector from "../../../Utility/CustomSelector/CustomSelector.jsx";
import Spinner from "../../../Utility/Spinner/Spinner.tsx";
import {ProfileUser, saveProfileImage} from "../../../ApiRequests/CreateProfile/Profile.js";
import {savePhoto} from "../../../ApiRequests/Courses/AuthUser.js";
import {IStepsProps} from "../../../types/stepsTypes.ts";
import {IUserObj} from "../../../types/userTypes.ts";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";

const StepThree = (props : IStepsProps) => {
    const languagesKnow = useTypedSelector((state : any) => state.languagesKnow);
    const languagesLearn = useTypedSelector((state : any) => state.languagesLearn);
    const name = useTypedSelector((state : any) => state.name);
    const status = useTypedSelector((state : any) => state.status);
    const userTag = useTypedSelector((state : any) => state.userTag);
    const bio = useTypedSelector((state : any) => state.bio);
    const photo = useTypedSelector((state : any) => state.photo)
    const id = useTypedSelector((state : any) => state.loginUser._id)

    const [isOpen , setOpen]  = useState<boolean>(false)

    function sendDataToServer() {
        const obj : IUserObj = {
            name: name,
            status: status,
            userTag : userTag,
            experience: '0',
            bio: bio,
            photo:"",
            languagesKnow: languagesKnow,
            languagesLearn: languagesLearn,
        }
        ProfileUser.createProfile(id ,  obj).then(res => {
            if (res.status === 200) {
                const data : FormData = new FormData()
                data.append('image', photo)
                saveProfileImage(data).then(res => {
                    if(res.status === 200) {
                        savePhoto(res.data.image.path , id)
                    }
                })

                setTimeout(() => {
                    props.nextStep()
                    setOpen(false)
                } , 500)

            } else {
                setOpen(true)
            }

        })
    }

    return (
        <div className={style.wholeContent}>
            <h2 className={style.title}>
                <b>About your language skills :</b>
            </h2>
            <div className={style.container}>
                <div className={style.selectBlock}>
                    <h3 style={{marginBottom: '15px'}}>Language/s you <span className={style.span}>speak</span> :</h3>
                    <CustomSelector selecter={languagesKnow} actionCreater={setLanguagesKnowActionCreater}/>
                </div>
                <div className={style.selectBlock}>
                    <h3 style={{marginBottom: '15px'}}>Language/s you are <span className={style.span}>learning</span> :
                    </h3>
                    <CustomSelector selecter={languagesLearn} actionCreater={setLanguagesLearnActionCreater}/>
                </div>
                <Spinner loaderIsOpen={isOpen}/>
                {/*loaderIsOpen*/}
                <div className={style.buttonsThree}>
                    <CustomButton
                        title={"Before"}
                        typeOfButton={"button"}
                        callback={props.previousStep}
                    />
                    <CustomButton
                        title={"Save"}
                        typeOfButton={"button"}
                        callback={(event : React.MouseEvent) => {
                            event.preventDefault()
                            sendDataToServer()
                            setOpen(true)
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
export default StepThree;
