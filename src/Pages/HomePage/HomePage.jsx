import style from "./HomePage.module.scss";
import Header from "../../Components/Header/index.jsx";
import {useDispatch} from "react-redux";
import {moveToLogin} from "../../Redux/isStartToLogin/isStartToLoginAC.js";
import HomeText from "./HomeText/HomeText.jsx";
import HomeImages from "./HomeImages/HomeImages.jsx";
import HomeOverview from "../../Components/Overview/HomeOverview.jsx";

const HomePage = () => {
  const navItems = [
    { text: "Overview", link: "#test" },
    { text: "Features", link: "#test" },
    { text: "Get in touch", link: "#test" },
    { text: "FAQ", link: "#test" },
    { text: "Help", link: "#test" },
  ];

  const dispatch = useDispatch()

  const toLogin = () => {
    dispatch(moveToLogin())
  }

  return (
    <>

      <div className={style.container}>
        <div className={style.header}>
          <Header navItems={navItems}></Header>
        </div>
        <div className={style.wrapperHome}>
          <HomeText toLogin={toLogin}></HomeText>
          <HomeImages></HomeImages>
        </div>
        <div className={style.wrapperOverview}>
          <HomeOverview></HomeOverview>
        </div>
      </div>
    </>
  );
};

export default HomePage;