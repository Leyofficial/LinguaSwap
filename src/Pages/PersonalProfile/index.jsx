import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {UserProfile} from "../../ApiRequests/Profile/UserProfile.js";
import WholeProfile from "./WholeProfile/index.jsx";
import SkeletonProfile from "./WholeProfile/SkeletonProfile.jsx";
import {loginUserThunkCreator} from "../../Redux/login/loginUserReducer.js";

function PersonalProfile() {
    const params = useParams();
    const [contentLoad , setContentLoad] = useState(false)
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
                    setTimeout(() => {
                        setContentLoad(true)
                    },600)
                }
            })
        } else {
            dispatch(loginUserThunkCreator(userToken));
            setTimeout(() => {
                setContentLoad(true)
            }, 600)
            }
    }, [userToken , params]);
    useEffect(() => {
        if (params.id) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [params]);
    console.log(currentUser , actualProfile);
    return (
        <>
            {contentLoad ?  <WholeProfile user={active ? actualProfile : currentUser}/>  : <SkeletonProfile user={active ? actualProfile : currentUser}/>}
        </>
    )
}
export default PersonalProfile