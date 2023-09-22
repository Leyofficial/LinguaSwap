import { Route } from "react-router-dom";
import "./App.css";
import Layout from "./Router/Layout/Layout";
import { Routes } from "react-router-dom";
// import HomePage from "./Pages/HomePage/HomePage.jsx";



function App() {
  return (
    <>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            {/*<Route index={true} element={<HomePage />}></Route>*/}
          </Route>
        </Routes>
    </>
  );
}

export default App;
