import style from './PersonalProfile.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {UserProfile} from "../../ApiRequests/Profile/UserProfile.js";
import WholeProfile from "./WholeProfile/index.jsx";
import {getUserByToken} from "../../ApiRequests/Courses/AuthUser.js";
import {fetchUserAC} from "../../Redux/login/loginactions.js";
import {authAC} from "../../Redux/isAuth/isAuthAC.js";

function PersonalProfile() {
    const params = useParams();
    const [actualProfile , setActualProfile ] = useState(null);
    const currentUser = useSelector((state) => state.loginUser)
    const userToken = JSON.parse(localStorage.getItem('loginUser'))
    const dispatch = useDispatch();
    console.log(params)
    useEffect(() => {
        if (params.id) {
            UserProfile.getProfile(params.id).then(res => {
                if (res.status === 200) {
                    setActualProfile(res.data.user);
                }
            })
        } else {
                getUserByToken(userToken).then(res => {
                    if(res.status === 200) {
                        dispatch(fetchUserAC(...res.data.users));
                        dispatch(authAC())
                    }
                })
            }
    }, []);
    console.log(actualProfile)
    return (
        <>{actualProfile ? <WholeProfile user={actualProfile}/> : <WholeProfile user={currentUser} isPersonal={true}/>}
        </>
    )
}
export default PersonalProfile