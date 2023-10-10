import style from './PersonalProfile.module.scss'
import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {UserProfile} from "../../ApiRequests/Profile/UserProfile.js";
import WholeProfile from "./WholeProfile/index.jsx";
function PersonalProfile() {
    const params = useParams();
    const [actualProfile , setActualProfile ] = useState(null);
    const currentUser = useSelector((state) => state.loginUser)
    console.log(currentUser)
    useEffect(() => {
        if (params.id) {
            UserProfile.getProfile(params.id).then(res => {
                if (res.status === 200) {
                    setActualProfile(res.data.user);
                }
            })
        }
    }, [params]);
    console.log(actualProfile)
    return (
        <>{actualProfile ? <WholeProfile user={actualProfile}/> : <WholeProfile user={currentUser}/>}
        </>
    )
}
export default PersonalProfile