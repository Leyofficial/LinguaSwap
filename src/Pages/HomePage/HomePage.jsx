import style from "./HomePage.module.scss";
import Header from "../../Components/Header/index.jsx";
import {useDispatch} from "react-redux";
import {moveToLogin} from "../../Redux/isStartToLogin/isStartToLoginAC.js";
import HomeText from "./HomeText/HomeText.jsx";
import HomeImages from "./HomeImages/HomeImages.jsx";

const HomePage = () => {

  const dispatch = useDispatch()

  const toLogin = () => {
    dispatch(moveToLogin())
  }

  return (
    <>

      <div className={style.container}>
        <div className={style.header}>
          <Header></Header>
        </div>
        <div className={style.wrapperHome}>
          <HomeText toLogin={toLogin}></HomeText>
          <HomeImages></HomeImages>
        </div>
      </div>
    </>
  );
};

export default HomePage;
