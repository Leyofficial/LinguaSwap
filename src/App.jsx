import {Route} from "react-router-dom";
import Layout from "./Router/Layout/Layout.jsx";
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
import {authAC} from "./Redux/isAuth/isAuthAC.js";
import CourseChat from "./Pages/CourseChat/CourseChat.jsx";
import TeachersSection from "./Pages/TeachersSection/index.tsx";
import PersonalProfile from "./Pages/PersonalProfile/index.tsx";
import {loginUserAC} from "./Redux/login/loginUserAC.ts";
import ChooseTypeOfChat from "./Pages/ChooseTypeOfChat/ChooseTypeOfChat.jsx";
import socketIO from 'socket.io-client'
import {webSocketAC} from "./Redux/WebSocket/webSocketReducer.js";
import {addOnlineUserAC, removeUserAC} from "./Redux/OnlineUsers/onlineUsersAC.js";
import {onlineUsers} from "./ApiRequests/OnlineUsers/onlineUsers.js";
import MainChat from "./Pages/Chat/MainChat.jsx";
import MessagesSection from "./Pages/Chat/MessagesSection/MessagesSection.jsx";
import Create from "./Pages/CoursesSection/Create/Create.jsx";
const App = () => {
  const isStart = useSelector((state) => state.isStart)
  const isAuth = useSelector((state) => state.isAuth)
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.loginUser)
  const userToken = JSON.parse(localStorage.getItem('loginUser'))
  const newSocket = useSelector((state) => state.socket)

  useEffect(() => {
    console.log(newSocket);

    if (newSocket) {
      newSocket.on("onlineUsers", () => {});

      newSocket.on("userConnected", (user) => {
        console.log(user);
        if (user) {
          dispatch(addOnlineUserAC(user));
          console.log("user was connected");
        }
      });

      newSocket.on("userDisconnected", (userId) => {
        dispatch(removeUserAC(userId));
        console.log(`User disconnected ${userId}`);
      });
    }
  }, [newSocket, currentUser]);

  useEffect(() => {
    if (newSocket && currentUser) {
      newSocket.emit("newUser", currentUser._id);
    }
  }, [newSocket, currentUser]);

  useEffect(() => {
    if (userToken) {
      getUserByToken(userToken).then(res => {
        if (res.status === 200) {
          dispatch(loginUserAC({...res.data.users[0]}));
          dispatch(authAC())
        }
      })
    }
  }, []);
  return (
      <>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={isStart ? <CoursesSection /> : <HomePage />} />
            <Route path={"/aboutApp/:userType"} element={<AboutAppPage />} />
            <Route path={"/login"} element={isAuth ? <PersonalProfile /> : <Login />} />
            <Route path={"/teacherregister"} element={<TeacherRegister />} />
            <Route path={"/createprofile"} element={<CreateProfile />} />
            <Route path={"/findteacher"} element={<TeachersSection />} />
            <Route path={"/findteacher/find/:id"} element={<PersonalProfile />} />
            <Route path={"/course/:idCourse"} element={<CourseSection />} />
            <Route path={"/course/:idCourse/chat"} element={<CourseChat />} />
            <Route path={"/course/create"} element={<Create />} />
            <Route path={"/course/chat"} element={<ChooseTypeOfChat />}>
              <Route path={"/course/chat/:idCourse"} element={<CourseChat />} />
              <Route index element={<CourseChat />} />
            </Route>
            <Route path={"/chat"} element={<MainChat />}>
              <Route path={"/chat/:idChat"} element={<MessagesSection />} />
              <Route index element={<MessagesSection />} />
            </Route>
            <Route path={"*"} element={<ErrorUrl />} />
          </Route>
        </Routes>
      </>
  );
};

export default App;