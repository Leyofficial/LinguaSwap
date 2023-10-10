import {Route} from "react-router-dom";
import Layout from "./Router/Layout/Layout";
import {Routes} from "react-router-dom";
import Login from "./Components/Login/Login";
import TeacherRegister from "./Components/TeacherRegister/TeacherRegister";
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import CreateProfile from "./Pages/CreateProfilePage/index"
import AboutAppPage from "./Pages/HomePage/AboutAppPage/AboutAppPage.jsx";
import CoursesSection from "./Pages/CoursesSection/CoursesSection.jsx";
import ErrorUrl from "./Router/ErrorUrl/ErrorUrl.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import CourseSection from "./Pages/CourseSection/CourseSection.jsx";
import {useEffect} from "react";
import {getUserByToken} from "./ApiRequests/Courses/AuthUser.js";

import {fetchUserAC} from "./Redux/login/loginactions.js";
import {authAC} from "./Redux/isAuth/isAuthAC.js";
import CourseChat from "./Pages/CourseChat/CourseChat.jsx";
import TeachersSection from "./Pages/TeachersSection/index.jsx";
import ChooseTypeOfChat from "./Pages/ChooseTypeOfChat/ChooseTypeOfChat.jsx";


function App() {
   const isStart = useSelector((state) => state.isStart)

   const dispatch = useDispatch()
   const currentUser = useSelector((state) => state.loginUser)

   console.log(currentUser)

   const userToken = JSON.parse(localStorage.getItem('loginUser'))
   useEffect(() => {

      getUserByToken(userToken).then(res => {
         console.log(res)
         if (res.status === 200) {
            dispatch(fetchUserAC(...res.data.users));
            dispatch(authAC())
         }
      })

   }, [userToken])
   return (
      <>
         <Routes>
            <Route path={'/'} element={<Layout/>}>
               <Route index={true} element={isStart ? <CoursesSection/> : <HomePage/>}/>
               <Route path={'aboutApp/:userType'} element={<AboutAppPage/>}></Route>
               <Route path={"/login"} element={<Login/>}/>
               <Route path={"/teacherregister"} element={<TeacherRegister/>}/>
               <Route path={"/createprofile"} element={<CreateProfile/>}/>
               <Route path={"/findteacher"} element={<TeachersSection/>}/>
               <Route path={"/course/:idCourse"} element={<CourseSection/>}></Route>
               {/*<Route path={"/course/:idCourse/chat"} element={<CourseChat/>}></Route>*/}
               <Route path={"/course/chat"} element={<ChooseTypeOfChat/>}></Route>
               <Route path={"/course/chat/:idCourse"} element={<CourseChat/>}></Route>
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
