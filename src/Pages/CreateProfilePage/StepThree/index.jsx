import React, {useState} from "react";
import CustomButton from "../../../Utility/CustomButton/CustomButton";
import style from './StepThree.module.scss'

import {
    setLanguagesKnowActionCreater
} from "../../../Redux/Profile/Languages/languagesKnow/setLanguagesKnowActionCreater.js";
import {useSelector} from "react-redux";
import {
    setLanguagesLearnActionCreater
} from "../../../Redux/Profile/Languages/languagesLearn/setLanguagesLearnActionCreater.js";
import CustomSelector from "../../../Utility/CustomSelector/CustomSelector.jsx";
import Spinner from "../../../Utility/Spinner/Spinner.jsx";
import {ProfileUser, saveProfileImage} from "../../../ApiRequests/CreateProfile/Profile.js";
import {savePhoto} from "../../../ApiRequests/Courses/AuthUser.js";

const StepThree = (props) => {
    const languagesKnow = useSelector((state) => state.languagesKnow);
    const languagesLearn = useSelector((state) => state.languagesLearn);
    const name = useSelector((state) => state.name);
    const status = useSelector((state) => state.status);
    const userTag = useSelector((state) => state.userTag);
    const bio = useSelector((state) => state.bio);
    const photo = useSelector((state) => state.photo)
    const state = useSelector(state => state)
    const id = useSelector((state) => state.loginUser._id)

    const [isOpen , setOpen]  = useState(false)

    function sendDataToServer() {
        const obj = {
            name: name,
            status: status,
            userTag: userTag,
            experience: '0',
            bio: bio,
            photo:"",
            languagesKnow: languagesKnow,
            languagesLearn: languagesLearn,
        }
        ProfileUser.createProfile(id ,  obj).then(res => {
            if (res.status === 200) {
                const data = new FormData()

                data.append('image', photo)
                saveProfileImage(data).then(res => {
                    if(res.status === 200) {
                        savePhoto(res.data.image.path,id)
                        console.log(res.data.image.path)
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
                        callback={() => {
                            event.preventDefault()
                            sendDataToServer()
                            setOpen(true)
                            console.log(state)
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default StepThree;
