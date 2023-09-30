import {Route} from "react-router-dom";
import Layout from "./Router/Layout/Layout";
import { Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import TeacherRegister from "./Components/TeacherRegister/TeacherRegister";
import './App.css'
import {useSelector} from "react-redux";
import CreateProfile from "./Pages/CreateProfilePage/index"


import AboutAppPage from "./Pages/HomePage/AboutAppPage/AboutAppPage.jsx";
import CoursesSection from "./Pages/CoursesSection/CoursesSection.jsx";



function App() {

  const isStart = useSelector((state) => state.isStart);
  const name = useSelector((state) => state);
  console.log(name)

  return (
    <>

       {/* {!isStart ?
          <HomePage></HomePage>

       {!isStart ?
         <Routes>
           <Route path={'/'} element={<Layout layoutType={'home'}/>}>
             <Route index={true} element={<HomePage/>}></Route>
             <Route path={'aboutApp/:userType'} element={<AboutAppPage/>}></Route>
           </Route>
         </Routes>


        :
        } */}

        <Routes>
          <Route path={"/"} element={<Layout layoutType={'main'}/>}>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/teacherregister"} element={<TeacherRegister/>}/>
            <Route path={"/createprofile"} element={<CreateProfile/>} />
            <Route index={true} element={ <CoursesSection/>}></Route>
          </Route>
          
        </Routes> 
    </>
  );
}

export default App;
