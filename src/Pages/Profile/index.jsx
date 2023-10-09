import style from './Profile.module.scss';
import {useEffect} from "react";
import {useParams} from "react-router";
import {UserProfile} from "../../ApiRequests/Profile/UserProfile.js";
function Profile() {
    const params = useParams();
    useEffect(() => {
        UserProfile.getProfile(params.id).then(res => {
            console.log(res.data.user);
        })
    }, []);
    return (
        <></>
    )
}

export default Profile;