import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserByToken} from "../ApiRequests/Courses/AuthUser.js";
import {authAC} from "../Redux/isAuth/isAuthAC.ts";
import {loginUserAC} from "../Redux/login/loginUserAC.ts";
import socketIO from 'socket.io-client'
import {webSocketAC} from "../Redux/WebSocket/webSocketReducer.js";
import {loginUserThunkCreator} from "../Redux/login/loginUserReducer.ts";
import {backFromLogin, moveToLogin} from "../Redux/isStartToLogin/isStartToLoginAC.ts";
import AppRouters from "./AppRouters.tsx";

function App() {

   const isAuth = useSelector((state) => state.isAuth)
   const dispatch = useDispatch()
   const currentUser = useSelector((state) => state.loginUser)
   const newSocket = useSelector((state) => state.socket)
   const userToken = JSON.parse(localStorage.getItem('loginUser'));
    const alreadyStart = JSON.parse(localStorage.getItem('alreadyStart'));

    useEffect(() => {
        if (alreadyStart) {
            dispatch(moveToLogin());
        } else {
            dispatch(backFromLogin());
        }
    }, []);

   useEffect(() => {
      if (currentUser) {
         const socket = socketIO.connect('https://linguaswap-9bebd1d452cf.herokuapp.com', {
            "forceNew": true
         })
         dispatch(webSocketAC(socket))
      }
   }, [currentUser])

   useEffect(() => {
      if (userToken) {
         loginUserThunkCreator(userToken)(dispatch)
         dispatch(authAC())
      }
   }, [])

   useEffect(() => {
      if (currentUser && newSocket) {
         newSocket.emit("newUser", currentUser?._id)

    }
  },[currentUser,newSocket])
  useEffect(() => {
    if (userToken && !isAuth) {
      getUserByToken(userToken).then(res => {
        if (res.status === 200) {
          dispatch(loginUserAC(...res.data.users)); // (...res.data.users[0]));
          dispatch(authAC())
        }
      })
    }
  }, [userToken, isAuth])

   return (
      <>
      <AppRouters isAuth={isAuth}></AppRouters>
      </>
   );
}

export default App;
