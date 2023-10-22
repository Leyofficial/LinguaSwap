import style from "./HomePage.module.scss";
import {useDispatch} from "react-redux";
import {moveToLogin} from "../../Redux/isStartToLogin/isStartToLoginAC.ts";
import HomeText from "./HomeText/HomeText.jsx";
import HomeImages from "./HomeImages/HomeImages.jsx";
import HomeOverview from "../../Components/Overview/HomeOverview.jsx";
import AboutApp from "../../Components/Overview/AboutApp/AboutApp.jsx";
import QuestionsSection from "../../Components/FAQ/QuestionsSction.jsx";
import JoinSection from "../../Components/HomeFooter/JoinSection/JoinSection.jsx";
import HomeFooter from "../../Components/HomeFooter/HomeFooter.jsx";
import {useEffect, useState} from "react";
import {GiImbricatedArrows} from "react-icons/gi";
import {scrollUp} from "../../Utility/ScrollUp/ScrollUp.jsx";

const HomePage = () => {

  const dispatch = useDispatch()
  const [showScrollUp,setShowScrollUp] = useState(false)

  const toLogin = () => {
    dispatch(moveToLogin())
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
  },[window.pageYOffset])

  const handleScroll = () => {
    if (window.pageYOffset > 1200) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.wrapperHome}>
          <HomeText toLogin={toLogin}></HomeText>
          <HomeImages></HomeImages>
        </div>

          <div className={style.wrapperInfo}>
            <p>
              Connect with <span>native speakers</span> around the world for language exchange,
              <span>practice speaking </span>and monitor your progress while having fun!
            </p>
          </div>

        <div id={"Overview"} className={style.wrapperOverview}>
          <HomeOverview></HomeOverview>
        </div>
        <div id={"AboutApp"}>
          <AboutApp></AboutApp>
        </div>
        <div id={'FAQ'} className={style.wrapperQuestion}>
          <header>
            <h1>Got a question?</h1>
            <p>Some questions that were often asked</p>
          </header>
          <QuestionsSection></QuestionsSection>
        </div>
        <div id={"Join"}>
          <JoinSection></JoinSection>
        </div>
        <div id={"Footer"}>
          <HomeFooter></HomeFooter>
        </div>
        <div onClick={scrollUp} className={`${style.scrollUp} ${showScrollUp ? style.showScroll : null}`}>
          <GiImbricatedArrows></GiImbricatedArrows>
        </div>
      </div>
    </>
  );
};

export default HomePage;
