import style from './QuestionSection.module.scss'
import Question from "./Question/Question.js";

const QuestionsSection = () => {
  return (
    <div className={style.container}>
      <Question answer={'Go the profile and than you can find favourites lectors'} question={'How to get into the list of my favourites-potencial lectors'}></Question>
      <Question answer={"Contact your tutor on the chat app and discuss it"} question={'I accidentally cancelled my class'}></Question>
      <Question answer={"Go to the course and find section with time"} question={'How do I set up a custom number of hours?'}></Question>
      <Question answer={"Please contact Lingua support for refunds: support@lingua.com"} question={'Can I take my money back?'}></Question>
      <Question answer={"Go to the My lessons page Click on your tutor's name and select a scheduled lesson Choose Reschedule"} question={'What does “leaves of something” mean?'}></Question>
    </div>
  );
};

export default QuestionsSection;