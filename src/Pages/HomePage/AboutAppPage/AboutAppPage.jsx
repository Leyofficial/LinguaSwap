import style from './AboutAppPage.module.scss'
import StepsSection from "./Steps/StepsSection.jsx";
import {useParams} from "react-router";

const AboutAppPage = () => {

  const {userType} = useParams()
  return (
    <div className={style.container}>
      <header>
        {userType === 'student' ? <>
            <h1>Guid for Students</h1>
            <p>Learn online using app with confidence</p>
          </>
          : <>
            <h1>Guid for Teachers</h1>
            <p>Teach and earn online using app with confidence and free</p>
          </>
        }
      </header>

      <section>
        <div className={style.wrapper}>
          <StepsSection userType={userType}></StepsSection>
        </div>
      </section>
    </div>
  );
};

export default AboutAppPage;