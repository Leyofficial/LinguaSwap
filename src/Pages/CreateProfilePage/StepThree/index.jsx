import React from "react";
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
import {ProfileUser} from "../../../ApiRequests/CreateProfile/Profile.js";

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
    function sendDataToServer() {
        const obj = {
            name: name,
            status: status,
            userTag: userTag,
            experience: '0',
            bio: bio,
            photo: photo,
            languagesKnow: languagesKnow,
            languagesLearn: languagesLearn,
        }
        ProfileUser.createProfile(id ,  obj).then(res => {
            console.log(res)

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
                <Spinner loaderIsOpen={false}/>
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
                            props.nextStep()
                            console.log(state)
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default StepThree;
