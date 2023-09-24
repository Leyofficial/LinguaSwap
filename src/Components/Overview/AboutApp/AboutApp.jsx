import style from './AboutApp.module.scss'
import AboutItem from "./AboutItem/AboutItem.jsx";
import {PiStudentFill} from "react-icons/pi";
import {GiTeacher} from "react-icons/gi";
import {FaBusinessTime} from "react-icons/fa";
import {MdOutlineAccessibilityNew, MdPaid} from "react-icons/md";
import {RiGuideLine} from "react-icons/ri";
import {IoPricetagsOutline} from "react-icons/io5";
import {SiExpertsexchange} from "react-icons/si";

const AboutApp = () => {

  const listItemsForTeacher = [{
    text:"Find new students",
    icon:<MdOutlineAccessibilityNew></MdOutlineAccessibilityNew>
  },
    {
      text:"Grow your business",
      icon:<FaBusinessTime></FaBusinessTime>
    },
    {
      text:"Get paid securely",
      icon:<MdPaid></MdPaid>
    }

  ]
  const listItemsForStudent = [{
    text:"Expert tutors",
    icon:<SiExpertsexchange></SiExpertsexchange>
  },
    {
      text:"Get Full Guidance",
      icon:<RiGuideLine></RiGuideLine>
    },
    {
      text:"Low price lessons",
      icon:<IoPricetagsOutline></IoPricetagsOutline>
    }]

  return (
    <div className={style.container}>
      <header>
        <h1>Features</h1>
        <p>Our platform provides a space where you can partner with other developers to tackle exciting new projects,
          develop new skills and build valuable connections in the world of technology.</p>
      </header>
      <section>
        <AboutItem title={'For Student'} icon={<PiStudentFill fontSize={40} color={'rgba(17, 121, 176, 0.75)'}/>} text={listItemsForStudent}></AboutItem>
        <AboutItem title={'For Teacher'} icon={<GiTeacher fontSize={40} color={'rgba(17, 121, 176, 0.75)'}/>} text={listItemsForTeacher}></AboutItem>
      </section>

    </div>
  );
};

export default AboutApp;