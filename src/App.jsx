import {Route} from "react-router-dom";
import Layout from "./Router/Layout/Layout";
import { Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import TeacherRegister from "./Components/TeacherRegister/TeacherRegister";

import './App.css'

import HomePage from "./Pages/HomePage/HomePage.jsx";
import {useSelector} from "react-redux";
import CreateProfile from "./Pages/CreateProfilePage/index"


function App() {

  const isStart = useSelector((state) => state.isStart);

  return (
    <>
       {!isStart ?
          <HomePage></HomePage>
        :
        <Routes>
          <Route path={"/"} element={<Layout/>}>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/teacherregister"} element={<TeacherRegister/>}/>
            <Route path={"/createprofile"} element={<CreateProfile/>} />
          </Route>
        </Routes>}
    </>
  );
}

export default App;
