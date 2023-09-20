import { Route } from "react-router-dom";
import "./App.css";
import Layout from "./Router/Layout/Layout";
import { Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path={"/main"} element={<Layout/>}></Route>
      </Routes>
    </>
  );
}

export default App;
