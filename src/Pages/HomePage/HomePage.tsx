import style from "./HomePage.module.scss";
import {useDispatch} from "react-redux";
import {moveToLogin} from "../../Redux/isStartToLogin/isStartToLoginAC.ts";
import HomeText from "./HomeText/HomeText.js";
import HomeOverview from "../../Components/Overview/HomeOverview.js";
import AboutApp from "../../Components/Overview/AboutApp/AboutApp.js";
import QuestionsSection from "../../Components/FAQ/QuestionsSction.js";
import JoinSection from "../../Components/HomeFooter/JoinSection/JoinSection.js";
import HomeFooter from "../../Components/HomeFooter/HomeFooter.js";
import {useEffect, useState} from "react";
import {GiImbricatedArrows} from "react-icons/gi";
import {scrollUp} from "../../Utility/ScrollUp/ScrollUp.jsx";

const HomePage = () => {

  const dispatch = useDispatch()
  const [showScrollUp,setShowScrollUp] = useState<boolean>(false)

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
          <HomeText></HomeText>
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
