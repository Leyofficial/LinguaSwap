import { Route } from "react-router-dom";
import "./App.css";
import Layout from "./Router/Layout/Layout";
import { Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import TeacherRegister from "./Components/Login/TeacherRegister/TeacherRegister";


function App() {
  return (

    
    <>
        <Routes>
            <Route path={"/layout"} element={<Layout/>}>
          </Route>

          <Route path="/" element={<Login/>}/>
          <Route path="/teacherregister" element={<TeacherRegister/>}/>

        </Routes>
      
    </>
  );
}

export default App;
