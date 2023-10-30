import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";

import AboutAppPage from "../Pages/HomePage/AboutAppPage/AboutAppPage.tsx";


import ChooseTypeOfChat from "../Pages/ChooseTypeOfChat/ChooseTypeOfChat.tsx";
import MainChat from "../Pages/Chat/MainChat.tsx";

import {useTypedSelector} from "../hooks/useTypedSelector.ts";


import CircularUnderLoad from "../Pages/Chat/ChatSingleMessage/LoaderChat/LoaderChat.jsx";
import CourseInfo from "../Pages/CourseChat/CourseInfo/CourseInfo.tsx";
import SmallChats from "../Pages/CourseChat/SmallChats/SmallChats.tsx";
import SmallPrivateChats from "../Pages/Chat/SmallPrivateChats/SmallPrivateChats.tsx";
import {
   CourseChat, CourseSection,
   CoursesSection, CreateProfile,
   ErrorUrl, Form,
   HomePage,
   Layout,
   Login,
   MessagesSection,
   PersonalProfile, SignUp, TeachersSection
} from "./Lazy/Lazy.tsx";
import Create from "../Pages/CoursesSection/Create/Create.tsx";

interface IAppRoutersProps {
    isAuth: boolean
}


const AppRouters = (props: IAppRoutersProps) => {

   const {isAuth} = props
   const isStart = useTypedSelector((state) => state.isStart);
   return (
       <>
          <Routes>
             <Route path={'/'} element={<Suspense fallback={<CircularUnderLoad/>}><Layout/></Suspense>}>
                <Route index={true}
                       element={isStart ? <Suspense fallback={<CircularUnderLoad/>}><CoursesSection/></Suspense> :
                           <Suspense fallback={<CircularUnderLoad/>}><HomePage/></Suspense>}/>
                <Route path={'aboutApp/:userType'} element={<AboutAppPage/>}></Route>
                <Route path={'auth'} element={isAuth ? <PersonalProfile/> :
                    <Suspense fallback={<CircularUnderLoad/>}><Form></Form></Suspense>}>
                   <Route path={'login'} element={<Login/>}/>
                   <Route path={'signup'} element={<SignUp/>}/>
                </Route>
                <Route path={"/createprofile"}
                       element={<Suspense fallback={<CircularUnderLoad/>}><CreateProfile/></Suspense>}/>
                <Route path={"/findteacher"}
                       element={<Suspense fallback={<CircularUnderLoad/>}><TeachersSection/></Suspense>}/>
                <Route path={"/findteacher/find/:id"}
                       element={<Suspense fallback={<CircularUnderLoad/>}><PersonalProfile/></Suspense>}/>
                <Route path={"/course/:idCourse"}
                       element={<Suspense fallback={<CircularUnderLoad/>}><CourseSection/></Suspense>}></Route>
                <Route path={"/course/:idCourse/chat"}
                       element={<Suspense fallback={<CircularUnderLoad/>}><CourseChat/></Suspense>}></Route>
                <Route path={'/course/create'}
                       element={<Suspense fallback={<CircularUnderLoad/>}><Create/></Suspense>}></Route>
                <Route path={"/course/chat"} element={<ChooseTypeOfChat/>}>
                   <Route path={'/course/chat/:idCourse'}
                          element={<Suspense fallback={<CircularUnderLoad/>}><CourseChat/></Suspense>}></Route>
                   <Route index element={<Suspense fallback={<CircularUnderLoad/>}><CourseChat/></Suspense>}></Route>
                   <Route path={'/course/chat/:idCourse/info'} element={<CourseInfo/>}></Route>
                   <Route path={'/course/chat/lists'} element={<SmallChats/>}></Route>
                </Route>
                <Route path={'/chat'} element={<MainChat></MainChat>}>
                   <Route path={'/chat/:idChat'}
                          element={<Suspense fallback={<CircularUnderLoad/>}><MessagesSection/></Suspense>}></Route>
                   <Route index
                          element={<Suspense fallback={<CircularUnderLoad/>}><MessagesSection/></Suspense>}></Route>
                   <Route path={"/chat/mb/private"} element={<SmallPrivateChats/>}></Route>
                </Route>
                <Route path={"*"} element={<Suspense fallback={<CircularUnderLoad/>}><ErrorUrl/></Suspense>}/>
             </Route>
          </Routes>
       </>
   );



};

export default AppRouters;