import { Route } from "react-router-dom";
import "./App.css";
import Layout from "./Router/Layout/Layout";
import { Routes } from "react-router-dom";
import Main from "./Components/Main";



function App() {
  return (
    <>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route path={"/main"} element={<Main />}></Route>
          </Route>
        </Routes>
    </>
  );
}

export default App;
