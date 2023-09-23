
import style from "./HomePage.module.scss";
import firstImage from "../../images/HomePage/first.png"
import secondImage from "../../images/HomePage/second.png";
import thirdImage from "../../images/HomePage/third.png";
import Header from "../../Components/Header/index.jsx";
import {TypeAnimation} from "react-type-animation";
import CustomButton from "../../Utility/CustomButton/CustomButton.jsx";
import Sidebar from "../../Components/Sidebar";

const HomePage = () => {
  return (
    <>
          <Sidebar/>
      {/* <div className={style.container}>
        <div className={style.header}>
          <Header></Header>
        </div>
        <div className={style.wrapperHome}>

          <div className={style.wrapperText}>
            <h1>Lin<span style={{fontStyle:'normal'}}>gua</span> is a service for <span>learning languages</span> using</h1>
            <div className={style.wrapperType}>
              <TypeAnimation sequence={[
                'Student',4000,'Teacher',3000
              ]} wrapper={'span'} speed={50} style={{ display: 'inline-block' }} repeat={Infinity}></TypeAnimation>
            </div>
            <div className={style.wrapperInfo}>
              <p>
                Connect with native speakers around the world for language exchange,
                practice speaking and monitor your progress while having fun!
              </p>
            </div>
            <CustomButton title={'Start to learn'} callback={null} typeOfButton={'link'} path={'login'}></CustomButton>

          </div>
          <div className={style.containerImages}>
            <div className={style.wrapperImages + " " + style.firstImage}>
              <img alt={"home-image"} src={firstImage} />
            </div>
            <div className={style.wrapperImages + " " + style.secondImage}>
              <img alt={"home-image"} src={secondImage} />
            </div>
            <div className={style.wrapperImages + " " + style.thirdImage}>
              <img alt={"home-image"} src={thirdImage} />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HomePage;
