import {Route} from "react-router-dom";
import Layout from "./Router/Layout/Layout.tsx";
import {Routes} from "react-router-dom";
import Login from "./Components/Login/Login";
import TeacherRegister from "./Components/TeacherRegister/TeacherRegister";
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import CreateProfile from "./Pages/CreateProfilePage/index.tsx"
import AboutAppPage from "./Pages/HomePage/AboutAppPage/AboutAppPage.jsx";
import CoursesSection from "./Pages/CoursesSection/CoursesSection.jsx";
import ErrorUrl from "./Router/ErrorUrl/ErrorUrl.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import CourseSection from "./Pages/CourseSection/CourseSection.jsx";
import {useEffect} from "react";
import {getUserByToken} from "./ApiRequests/Courses/AuthUser.js";
import {authAC} from "./Redux/isAuth/isAuthAC.js";
import CourseChat from "./Pages/CourseChat/CourseChat.jsx";
import TeachersSection from "./Pages/TeachersSection/index.jsx";
import PersonalProfile from "./Pages/PersonalProfile/index.jsx";
import {loginUserAC} from "./Redux/login/loginUserAC.js";
import ChooseTypeOfChat from "./Pages/ChooseTypeOfChat/ChooseTypeOfChat.jsx";
import ChatWithMemberOfCourse from "./Pages/CourseChat/ChatWithTeacher/ChatWithMemberOfCourse.jsx";
import socketIO from 'socket.io-client'
import {webSocketAC} from "./Redux/WebSocket/webSocketReducer.js";
import {addOnlineUserAC, onlineUsersAC, removeUserAC} from "./Redux/OnlineUsers/onlineUsersAC.js";
import {onlineUsers} from "./ApiRequests/OnlineUsers/onlineUsers.js";
import Create from "./Pages/CoursesSection/Create/Create.jsx";
import {addChatMessage} from "./Redux/ChatWithTeacher/ChatMessages/chatMessagesAC.js";


function App() {
   const isStart = useSelector((state) => state.isStart)
   const isAuth = useSelector((state) => state.isAuth)
   const dispatch = useDispatch()
   const currentUser = useSelector((state) => state.loginUser)
   const userToken = JSON.parse(localStorage.getItem('loginUser'))
   const newSocket = useSelector((state) => state.socket)
   const chat = useSelector((state) => state.chatWithStudent)
   useEffect(() => {
      if (userToken && !isAuth) {
         const socket = socketIO.connect('http://localhost:3000')
         getUserByToken(userToken).then(res => {

            if (res.status === 200) {
               dispatch(webSocketAC(socket))
               dispatch(loginUserAC(...res.data.users));
               dispatch(authAC())

            }
         })
      }

   }, [userToken, isAuth])

   useEffect(() => {
      if (newSocket) {
         newSocket.on("onlineUsers", (users) => {
            dispatch(onlineUsersAC(users))
         })

         newSocket.emit("newUser", currentUser?._id)

         newSocket.on("userConnected", (user) => {
            if (user) {
               dispatch(addOnlineUserAC(user))
            }
         })

         newSocket.on("userDisconnected", (userId) => {
            dispatch(removeUserAC(userId))
            console.log(`User disconnected ${userId}`)
         })
         newSocket.on("privateResponse", (data) => {
            console.log('t')
            dispatch(addChatMessage(data))

         })
      }
   }, [newSocket, currentUser])
   // useEffect(() => {
   //    if (newSocket)
   //       newSocket.on("privateResponse", (data) => {
   //          console.log(data)
   //          dispatch(addChatMessage(data))
   //       })
   //
   // }, [newSocket])
   return (
      <>
         <Routes>
            <Route path={'/'} element={<Layout/>}>
               <Route index={true} element={isStart ? <CoursesSection/> : <HomePage/>}/>
               <Route path={'aboutApp/:userType'} element={<AboutAppPage/>}></Route>
               <Route path={"/login"} element={isAuth ? <PersonalProfile/> : <Login/>}/>
               <Route path={"/teacherregister"} element={<TeacherRegister/>}/>
               <Route path={"/createprofile"} element={isAuth ?  <CreateProfile/> : <Login/> }/>
               <Route path={"/findteacher"} element={<TeachersSection/>}/>
               <Route path={"/findteacher/find/:id"} element={<PersonalProfile/>}/>
               <Route path={"/course/:idCourse"} element={<CourseSection/>}></Route>
               <Route path={'/course/create'} element={<Create/>}></Route>
               <Route path={"/course/chat"} element={<ChooseTypeOfChat/>}>
                  <Route path={'/course/chat/:idCourse'} element={<CourseChat/>}></Route>
                  <Route path={'/course/chat/teacher/:idTeacher/:idStudent'} element={<ChatWithMemberOfCourse/>}></Route>
               </Route>
               <Route path={"*"} element={<ErrorUrl/>}/>
            </Route>
         </Routes>
      </>
   );
}

export default App;
