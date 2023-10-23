import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {UserProfile} from "../../ApiRequests/Profile/UserProfile.js";

import WholeProfile from "./WholeProfile/index.jsx";
import {getUserByToken} from "../../ApiRequests/Courses/AuthUser.js";
import {loginUserAC} from "../../Redux/login/loginUserAC.js";
import SkeletonProfile from "./WholeProfile/SkeletonProfile.jsx";
import {loginUserThunkCreator} from "../../Redux/login/loginUserReducer.js";
import {useMine} from "../../hooks/useMine.ts";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";

function PersonalProfile() {
    const {id} = useParams<string>();
    const [contentLoad , setContentLoad] = useState<boolean>(false)
    const [actualProfile , setActualProfile ] = useState<object>();
    const currentUser = useTypedSelector((state) => state.loginUser);
    const [active , setActive ] = useState<boolean>(false)
    const userTokenString = localStorage.getItem('loginUser');
    let userToken: string | null = null;
    if (userTokenString) {
        userToken = JSON.parse(userTokenString);
    }

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
        useMine({ _id: id , callback: setActive , currentUser : currentUser });
    }, [id]);

    return (
        <>
            {contentLoad  ?  <WholeProfile  user={active ? actualProfile : currentUser} isMine={!active}/>  : <SkeletonProfile user={active ? actualProfile : currentUser}/>}
        </>
    )
}
export default PersonalProfile