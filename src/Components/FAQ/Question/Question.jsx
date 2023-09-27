import style from './Question.module.scss'
import {useState} from "react";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const Question = (props) => {
  const {answer, question} = props

  const [isOpen, setIsOpen] = useState(false)
  return (
    <section>
      <div className={style.container}>
        <div className={style.icon} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineMinus></AiOutlineMinus> : <AiOutlinePlus></AiOutlinePlus>}
        </div>
        <p className={style.question}>{question}</p>
      </div>
      <div className={`${style.answerWrapper}  ${isOpen ? style.openAnswer : null}`}>
        <p className={style.answer}>{answer}</p>
      </div>
    </section>
  );
};

export default Question;