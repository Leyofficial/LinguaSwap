import style from './StepsSection.module.scss'
import StepItem from "./Step/StepItem.jsx";

const StepsSection = () => {
  return (
    <div className={style.container}>
      <StepItem indexStart={true}></StepItem>
      <StepItem></StepItem>
      <StepItem></StepItem>
      <StepItem></StepItem>
    </div>
  );
};

export default StepsSection;