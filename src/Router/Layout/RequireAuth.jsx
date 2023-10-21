import {useLocation} from "react-router";
import {useSelector} from "react-redux";
import {Route} from 'react-router-dom'
import {Routes} from "react-router-dom";
import Layout from "./Layout.jsx";

function RequireAuth({children}) {

    const location = useLocation();
    const isStart = useSelector((state) => state.isStart);



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