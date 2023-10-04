import {Route} from "react-router-dom";
import Layout from "./Router/Layout/Layout";
import {Routes} from "react-router-dom";
import Login from "./Components/Login/Login";
import TeacherRegister from "./Components/TeacherRegister/TeacherRegister";
import './App.css'
import {useSelector} from "react-redux";
import CreateProfile from "./Pages/CreateProfilePage/index"
import AboutAppPage from "./Pages/HomePage/AboutAppPage/AboutAppPage.jsx";
import CoursesSection from "./Pages/CoursesSection/CoursesSection.jsx";
import ErrorUrl from "./Router/ErrorUrl/ErrorUrl.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import CourseSection from "./Pages/CourseSection/CourseSection.jsx";


function App() {
    const isStart = useSelector((state) => state.isStart)
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index={true} element={isStart ? <CoursesSection/> : <HomePage/>}/>
                    <Route path={'aboutApp/:userType'} element={<AboutAppPage/>}></Route>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"/teacherregister"} element={<TeacherRegister/>}/>
                        <Route path={"/createprofile"} element={<CreateProfile/>} />
                        <Route path={"/course/:idCourse"} element={<CourseSection/>}></Route>
                    <Route path={"*"} element={<ErrorUrl/>}/>
                </Route>
            </Routes>


            {/*<Routes>*/}
            {/*  <Route path={"/"} element={<Layout layoutType={'main'}/>}>*/}
            {/*    <Route index={true} element={ <CoursesSection/>}></Route>*/}
            {/*    <Route path={"/login"} element={<Login/>}/>*/}
            {/*    <Route path={"/teacherregister"} element={<TeacherRegister/>}/>*/}
            {/*    <Route path={"/createprofile"} element={<CreateProfile/>} />*/}
            {/*    <Route path={"/course/:idCourse"} element={<CourseSection/>}></Route>*/}
            {/*    <Route path={"*"} element={<ErrorUrl/>} />*/}
            {/*  </Route>*/}
            {/*</Routes>}*/}
        </>
    );
}

export default App;
