import React from 'react';
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import CoursesSection from "../Pages/CoursesSection/CoursesSection.tsx";
import HomePage from "../Pages/HomePage/HomePage.tsx";
import AboutAppPage from "../Pages/HomePage/AboutAppPage/AboutAppPage.tsx";
import TeacherRegister from "../Components/TeacherRegister/TeacherRegister.jsx";
import CreateProfile from "../Pages/CreateProfilePage/index.tsx";
import TeachersSection from "../Pages/TeachersSection/index.tsx";
import CourseSection from "../Pages/CourseSection/CourseSection.tsx";
import CourseChat from "../Pages/CourseChat/CourseChat.tsx";
import Create from "../Pages/CoursesSection/Create/Create.tsx";
import ChooseTypeOfChat from "../Pages/ChooseTypeOfChat/ChooseTypeOfChat.tsx";
import MainChat from "../Pages/Chat/MainChat.tsx";
import MessagesSection from "../Pages/Chat/MessagesSection/MessagesSection.tsx";
import ErrorUrl from "../Router/ErrorUrl/ErrorUrl.tsx";
import Layout from "../Router/Layout/Layout.tsx";
import PersonalProfile from "../Pages/PersonalProfile/index.tsx";
import Login from "../Components/Login/Login.tsx";

const AppRouters = ({isAuth}) => {

   const isStart = useSelector((state) => state.isStart)
   return (
     <>
        <Routes>
           <Route path={'/'} element={<Layout/>}>
              <Route index={true} element={isStart ? <CoursesSection/> : <HomePage/>}/>
              <Route path={'aboutApp/:userType'} element={<AboutAppPage/>}></Route>
              <Route path={"/login"} element={isAuth ? <PersonalProfile/> : <Login/>}/>
              <Route path={"/teacherregister"} element={<TeacherRegister/>}/>
              <Route path={"/createprofile"} element={<CreateProfile/>}/>
              <Route path={"/findteacher"} element={<TeachersSection/>}/>
              <Route path={"/findteacher/find/:id"} element={<PersonalProfile/>}/>
              <Route path={"/course/:idCourse"} element={<CourseSection/>}></Route>
              <Route path={"/course/:idCourse/chat"} element={<CourseChat/>}></Route>
              <Route path={'/course/create'} element={<Create/>}></Route>
              <Route path={"/course/chat"} element={<ChooseTypeOfChat/>}>
                 <Route path={'/course/chat/:idCourse'} element={<CourseChat/>}></Route>
                 <Route index element={<CourseChat/>}></Route>
              </Route>
              <Route path={'/chat'} element={<MainChat></MainChat>}>
                 <Route path={'chat/:idChat'} element={<MessagesSection/>}></Route>
                 <Route index element={<MessagesSection/>}></Route>
              </Route>
              <Route path={"*"} element={<ErrorUrl/>}/>

           </Route>
        </Routes>
     </>
   );
};

export default AppRouters;