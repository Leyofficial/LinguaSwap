import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage.tsx";
import AboutAppPage from "../Pages/HomePage/AboutAppPage/AboutAppPage.tsx";
import TeacherRegister from "../Components/TeacherRegister/TeacherRegister.jsx";
import CreateProfile from "../Pages/CreateProfilePage/index.tsx";
import TeachersSection from "../Pages/TeachersSection/index.tsx";
import ChooseTypeOfChat from "../Pages/ChooseTypeOfChat/ChooseTypeOfChat.tsx";
import MainChat from "../Pages/Chat/MainChat.tsx";
import ErrorUrl from "../Router/ErrorUrl/ErrorUrl.tsx";
import Layout from "../Router/Layout/Layout.tsx";
import PersonalProfile from "../Pages/PersonalProfile/index.tsx";
import Login from "../Components/Login/Login.tsx";
import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import SignUp from "../Components/SignUp/SignUp.tsx";
import Form from "../Components/Form/Form.tsx";
import CircularUnderLoad from "../Pages/Chat/ChatSingleMessage/LoaderChat/LoaderChat.jsx";
import CourseInfo from "../Pages/CourseChat/CourseInfo/CourseInfo.tsx";
import SmallChats from "../Pages/CourseChat/SmallChats/SmallChats.tsx";

interface IAppRoutersProps {
    isAuth: boolean
}

const CourseSection = React.lazy(() => import("../Pages/CourseSection/CourseSection.tsx"))
const MessagesSection = React.lazy(() => import("../Pages/Chat/MessagesSection/MessagesSection.tsx"))
const CourseChat = React.lazy(() => import("../Pages/CourseChat/CourseChat.tsx"))
const Create = React.lazy(() => import("../Pages/CoursesSection/Create/Create.tsx"))
const CoursesSection = React.lazy(() => import("../Pages/CoursesSection/CoursesSection.tsx"))
const AppRouters = (props: IAppRoutersProps) => {
    const {isAuth} = props

    const isStart = useTypedSelector((state) => state.isStart)
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index={true}
                           element={isStart ? <Suspense fallback={<CircularUnderLoad/>}><CoursesSection/></Suspense> :
                               <HomePage/>}/>
                    <Route path={'aboutApp/:userType'} element={<AboutAppPage/>}></Route>
                    <Route path={'auth'} element={isAuth ? <PersonalProfile/> : <Form/>}>
                        <Route path={'login'} element={<Login/>}/>
                        <Route path={'signup'} element={<SignUp/>}/>
                    </Route>
                    <Route path={"/teacherregister"} element={<TeacherRegister/>}/>
                    <Route path={"/createprofile"} element={<CreateProfile/>}/>
                    <Route path={"/findteacher"} element={<TeachersSection/>}/>
                    <Route path={"/findteacher/find/:id"} element={<PersonalProfile/>}/>
                    <Route path={"/course/:idCourse"}
                           element={<Suspense fallback={<CircularUnderLoad/>}><CourseSection/></Suspense>}></Route>
                    <Route path={"/course/:idCourse/chat"}
                           element={<Suspense fallback={<CircularUnderLoad/>}><CourseChat/></Suspense>}></Route>
                    <Route path={'/course/create'}
                           element={<Suspense fallback={<CircularUnderLoad/>}><Create/></Suspense>}></Route>
                    <Route path={"/course/chat"} element={<ChooseTypeOfChat/>}>
                        <Route path={'/course/chat/:idCourse'}
                               element={<Suspense fallback={<CircularUnderLoad/>}><CourseChat/></Suspense>}></Route>
                        <Route index
                               element={<Suspense fallback={<CircularUnderLoad/>}><CourseChat/></Suspense>}></Route>
                        <Route path={'/course/chat/:idCourse/info'} element={<CourseInfo/>}></Route>
                        <Route path={'/course/chat/lists'} element={<SmallChats/>}></Route>
                    </Route>
                    <Route path={'/chat'} element={<MainChat></MainChat>}>
                        <Route path={'chat/:idChat'} element={<Suspense
                            fallback={<CircularUnderLoad/>}><MessagesSection/></Suspense>}></Route>
                        <Route index element={<Suspense
                            fallback={<CircularUnderLoad/>}><MessagesSection/></Suspense>}></Route>
                    </Route>
                    <Route path={"*"} element={<ErrorUrl/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default AppRouters;