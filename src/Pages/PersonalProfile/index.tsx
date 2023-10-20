import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {UserProfile} from "../../ApiRequests/Profile/UserProfile.js";
import WholeProfile from "./WholeProfile";
import SkeletonProfile from "./WholeProfile/SkeletonProfile.js";
import {loginUserThunkCreator} from "../../Redux/login/loginUserReducer.js";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {IUserOutside} from "../../types/userTypes.ts";

function PersonalProfile() {
    const {id} = useParams<string>();
    const [contentLoad , setContentLoad] = useState<boolean>(false)
    const [actualProfile , setActualProfile ] = useState<IUserOutside[]>();
    const currentUser : any = useTypedSelector((state) => state.loginUser);
    const [active , setActive ] = useState<boolean>(false)
    const userToken = JSON.parse(localStorage.getItem('loginUser') || '');
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            UserProfile.getProfile(id).then(res => {
                if (res.status === 200) {
                    setActualProfile({...res.data.user});
                    setTimeout(() => {
                        setContentLoad(true)
                    },200)
                }
            })
        } else {
            loginUserThunkCreator(userToken)(dispatch)
            setTimeout(() => {
                setContentLoad(true)
            }, 200)
            }
    }, []);
    useEffect(() => {
        console.log(id , currentUser?._id)
        if (id) {
            if (id === currentUser?._id) {
                setActive(false )
            } else {
                setActive(true)
            }
        } else {
            setActive(false)
        }
    }, [id]);
    return (
        <>
            {contentLoad  ?  <WholeProfile user={active ? actualProfile : currentUser} isMine={!active}/>  : <SkeletonProfile user={active ? actualProfile : currentUser}/>}
        </>
    )
}
export default PersonalProfile