import style from './AboutAppPage.module.scss'
import StepsSection from "./Steps/StepsSection.jsx";

const AboutAppPage = () => {
  return (
    <div className={style.container}>
      <header>
        <h1>Guid for Students</h1>
        <p>Learn online using app with confidence</p>
      </header>

      <section>
        <div className={style.wrapper}>
          <StepsSection></StepsSection>
        </div>
      </section>
    </div>
  );
};

export default AboutAppPage;