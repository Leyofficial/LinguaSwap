import {Route} from "react-router-dom";
import Layout from "./Router/Layout/Layout";
import {Routes} from "react-router-dom";
import {useState} from "react";

import HomePage from "./Pages/HomePage/HomePage.jsx";


function App() {

  const [auth] = useState(false)

  return (
    <>
      {!auth ?
          <HomePage></HomePage>
        :
        <Routes>
          <Route path={"/"} element={<Layout/>}>

          </Route>
        </Routes>}
    </>
  );
}

export default App;
