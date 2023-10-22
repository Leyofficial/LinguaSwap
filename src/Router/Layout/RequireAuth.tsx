import {useLocation} from "react-router";
import {Route} from 'react-router-dom'
import {Routes} from "react-router-dom";
import Layout from "./Layout.tsx";
import React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";

function RequireAuth({children} : any) {

    const location = useLocation();
    const isStart = useTypedSelector((state) => state.isStart);



    if (!isStart) {
        return (
            <Routes>
                <Route path={'/'} element={<Layout/>}/>
            </Routes>
        )
    }

    return children
}

export default RequireAuth