import style from './PersonalProfile.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {UserProfile} from "../../ApiRequests/Profile/UserProfile.js";
import WholeProfile from "./WholeProfile/index.jsx";
import {getUserByToken} from "../../ApiRequests/Courses/AuthUser.js";
import {loginUserAC} from "../../Redux/login/loginUserAC.js";

function PersonalProfile() {
    const params = useParams();
    const [actualProfile , setActualProfile ] = useState(null);
    const currentUser = useSelector((state) => state.loginUser);
    const [active , setActive ] = useState(false)
    const userToken = JSON.parse(localStorage.getItem('loginUser'));
    const dispatch = useDispatch();
    useEffect(() => {
        if (params.id) {
            UserProfile.getProfile(params.id).then(res => {
                if (res.status === 200) {
                    setActualProfile(res.data.user);
                }
            })
        } else {
                getUserByToken(userToken).then(res => {
                    if (res.status === 200) {
                        dispatch(loginUserAC({...res.data.users[0]}));
                    }
                })
            }
    }, []);
    useEffect(() => {
        console.log(params)
        if (params.id) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [params]);
    console.log(currentUser , actualProfile);
    return (
        // <></>
       <WholeProfile user={active ? actualProfile : currentUser}/>
    )
}
export default PersonalProfile