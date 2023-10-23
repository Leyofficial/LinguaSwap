

import {ISidebarItems} from "../../Components/Sidebar/types.js";

import {FC} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {getImageFromServer} from "../../ApiRequests/ServerFiles/getImage.js";
import {IUserInfo} from "../../types/userTypes.ts";

interface ISideBar {
    currentUser : any
    callback : () => void
}
export function sidebarList (currentUser , callback){
    let photo ;
    if (currentUser) {
        getImageFromServer(currentUser , callback);
        photo = callback
    }

    return sidebarList
}
