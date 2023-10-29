import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";

import AboutAppPage from "../Pages/HomePage/AboutAppPage/AboutAppPage.tsx";
import TeacherRegister from "../Components/TeacherRegister/TeacherRegister.jsx";


import ChooseTypeOfChat from "../Pages/ChooseTypeOfChat/ChooseTypeOfChat.tsx";
import MainChat from "../Pages/Chat/MainChat.tsx";



import {useTypedSelector} from "../hooks/useTypedSelector.ts";


import CircularUnderLoad from "../Pages/Chat/ChatSingleMessage/LoaderChat/LoaderChat.jsx";
import CourseInfo from "../Pages/CourseChat/CourseInfo/CourseInfo.tsx";
import SmallChats from "../Pages/CourseChat/SmallChats/SmallChats.tsx";
import SmallPrivateChats from "../Pages/Chat/SmallPrivateChats/SmallPrivateChats.tsx";

interface IAppRoutersProps {
    isAuth: boolean
}

const TeachersSection = React.lazy(() => import ("../Pages/TeachersSection/index.tsx"));
const HomePage = React.lazy(() =>  import( "../Pages/HomePage/HomePage.tsx" ));
const ErrorUrl = React.lazy(() => import("../Router/ErrorUrl/ErrorUrl.tsx")) ;
const CreateProfile = React.lazy(() => import ("../Pages/CreateProfilePage/index.tsx"));
const PersonalProfile = React.lazy(() => import ("../Pages/PersonalProfile/index.tsx"));
const Layout = React.lazy(() => import ("../Router/Layout/Layout.tsx" )) ;
const SignUp = React.lazy(() => import("../Components/SignUp/SignUp.tsx"));
const Login = React.lazy( () =>  import ("../Components/Login/Login.tsx"));
const Form = React.lazy(  () => import("../Components/Form/Form.tsx"));
const CourseSection = React.lazy(() => import("../Pages/CourseSection/CourseSection.tsx"))
const MessagesSection = React.lazy(() => import("../Pages/Chat/MessagesSection/MessagesSection.tsx"))
const CourseChat = React.lazy(() => import("../Pages/CourseChat/CourseChat.tsx"))
const Create = React.lazy(() => import("../Pages/CoursesSection/Create/Create.tsx"))
const CoursesSection = React.lazy(() => import("../Pages/CoursesSection/CoursesSection.tsx"))
const AppRouters = (props:IAppRoutersProps) => {
   const {isAuth} = props

   const isStart = useTypedSelector((state) => state.isStart)
   return (
     <>
        <Routes>
           <Route path={'/'} element={<Suspense fallback={<CircularUnderLoad/>}><Layout/></Suspense> }>
              <Route index={true} element={isStart ? <Suspense fallback={<CircularUnderLoad/>}><CoursesSection/></Suspense> :<Suspense fallback={<CircularUnderLoad/>}><HomePage/></Suspense>}/>
              <Route path={'aboutApp/:userType'} element={<AboutAppPage/>}></Route>
              <Route path={ 'auth'} element={ isAuth ? <PersonalProfile/> : <Suspense fallback={<CircularUnderLoad/>}><Form/></Suspense>}>
                 <Route path={'login'} element={<Login />}/>
                 <Route path={'signup'} element={<SignUp/>} />
              </Route>
              <Route path={"/teacherregister"} element={<TeacherRegister/>}/>
              <Route path={ "/createprofile"} element={ <Suspense fallback={<CircularUnderLoad/>}><CreateProfile/></Suspense>}/>
              <Route path={"/findteacher"} element={<Suspense fallback={<CircularUnderLoad/>}><TeachersSection/></Suspense>}/>
              <Route path={"/findteacher/find/:id"} element={ <Suspense fallback={<CircularUnderLoad/>}><PersonalProfile/></Suspense>}/>
              <Route path={"/course/:idCourse"} element={<Suspense fallback={<CircularUnderLoad/>}><CourseSection/></Suspense>}></Route>
              <Route path={"/course/:idCourse/chat"} element={<Suspense fallback={<CircularUnderLoad/>}><CourseChat/></Suspense>}></Route>
              <Route path={'/course/create'} element={<Suspense fallback={<CircularUnderLoad/>}><Create/></Suspense>}></Route>
              <Route path={"/course/chat"} element={<ChooseTypeOfChat/>}>
                 <Route path={'/course/chat/:idCourse'} element={<Suspense fallback={<CircularUnderLoad/>}><CourseChat/></Suspense>}></Route>
                 <Route index element={<Suspense fallback={<CircularUnderLoad/>}><CourseChat/></Suspense>}></Route>
                 <Route path={'/course/chat/:idCourse/info'} element={<CourseInfo/>}></Route>
                 <Route path={'/course/chat/lists'} element={<SmallChats/>}></Route>
              </Route>
              <Route path={'/chat'} element={<MainChat></MainChat>}>
                 <Route path={'/chat/:idChat'} element={<Suspense fallback={<CircularUnderLoad/>}><MessagesSection/></Suspense>}></Route>
                 <Route index element={<Suspense fallback={<CircularUnderLoad/>}><MessagesSection/></Suspense>}></Route>
                 <Route path={"/chat/mb/private"} element={<SmallPrivateChats/>}></Route>
              </Route>
              <Route path={"*"} element={<Suspense fallback={<CircularUnderLoad/>}><ErrorUrl/></Suspense>}/>
           </Route>
        </Routes>
     </>
   );
};

export default AppRouters;