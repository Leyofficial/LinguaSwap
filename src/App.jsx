import {Route} from "react-router-dom";
import Layout from "./Router/Layout/Layout";
import { Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import TeacherRegister from "./Components/TeacherRegister/TeacherRegister";
import {useState} from "react";

import HomePage from "./Pages/HomePage/HomePage.jsx";
import Header from "./Components/Header";


function App() {

  const [auth] = useState(false)

  return (
    <>
       <Header></Header>
      {/* {!auth ?
          <HomePage></HomePage>
        :
        <Routes>
          <Route path={"/"} element={<Layout/>}>
            <Route path="/" element={<Login/>}/>
            <Route path="/teacherregister" element={<TeacherRegister/>}/>
          </Route>
        </Routes>} */}
    </>
  );
}

export default App;
