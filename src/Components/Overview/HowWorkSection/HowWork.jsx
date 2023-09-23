import style from './HowWork.module.scss'
import tutor from '../../../images/HomePage/third.png'
import WorkSection from "./WorkSection/WorkSection.jsx";

const HowWork = () => {

  const textTutor = "Choose from over 32,000 online tutors.Use filters to narrow your search and find the perfect fit"
  const textLessons = "Find the perfect time for your busy schedule. Book lessons in seconds via desktop or mobile"
  const textVirtual = "When it’s lesson time, connect with your tutor through our comprehensive video platform"
  const textEnjoy = "Keep track of your learning progress. Improve your speaking and vocabulary with our Learning plans"
  return (
    <div className={style.container}>
      <WorkSection image={tutor} title={"Find the best tutor"}
                   text={textTutor} count={1}
      ></WorkSection>
      <WorkSection image={tutor} title={"Take lessons anytime"}
                   text={textLessons} count={2}
      ></WorkSection>
      <WorkSection image={tutor} title={"Enter virtual classroom"}
                   text={textVirtual} count={3}
      ></WorkSection>
      <WorkSection image={tutor} title={"Enjoy structured learning"}
                   text={textEnjoy} count={4}
      ></WorkSection>
    </div>
  );
};

export default HowWork;