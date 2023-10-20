import style from './PersonalProfile.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {UserProfile} from "../../ApiRequests/Profile/UserProfile.js";

import WholeProfile from "./WholeProfile/index.jsx";
import {getUserByToken} from "../../ApiRequests/Courses/AuthUser.js";
import {loginUserAC} from "../../Redux/login/loginUserAC.js";
import SkeletonProfile from "./WholeProfile/SkeletonProfile.jsx";
import {loginUserThunkCreator} from "../../Redux/login/loginUserReducer.js";

function PersonalProfile() {
    const {id} = useParams<string>();
    const [contentLoad , setContentLoad] = useState<boolean>(false)
    const [actualProfile , setActualProfile ] = useState<object>();
    const currentUser = useSelector((state : any) => state.loginUser);
    const [active , setActive ] = useState<boolean>(false)
    const userToken = JSON.parse(localStorage.getItem('loginUser') || '');
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            UserProfile.getProfile(id).then(res => {
                if (res.status === 200) {
                    setActualProfile(res.data.user);
                    setTimeout(() => {
                        setContentLoad(true)
                    },600)
                }
            })
        } else {

                getUserByToken(userToken).then(res => {
                    if (res.status === 200) {
                        dispatch(loginUserAC({...res.data.users[0]}));
                        setTimeout(() => {
                            setContentLoad(true)
                        },600)
                    }
                })
            }
    }, []);
    useEffect(() => {

        if (id) {

            loginUserThunkCreator(userToken)(dispatch)
            setTimeout(() => {
                setContentLoad(true)
            }, 600)
            }
    }, [userToken , id]);
    useEffect(() => {
        if (id) {

            setActive(true)
        } else {
            setActive(false)
        }
    }, [id]);
    return (
        <>
            {contentLoad  ?  <WholeProfile user={active ? actualProfile : currentUser}/>   : <SkeletonProfile user={active ? actualProfile : currentUser}/>}
        </>

       // <WholeProfile user={active ? actualProfile : currentUser}/>
    )
}
export default PersonalProfile