import React, {useState} from "react";
import style from './ShowTopicCourse.module.scss'
import {GiImbricatedArrows} from "react-icons/gi";

const ShowTopicCourse = (props) => {

   const {topic, changeTopic, curIndex, currentTopicIndex} = props
   const [open, setOpen] = useState(true)

   const changeTopicStatus = (topicIndex) => {
      if (curIndex === topicIndex) {
         changeTopic(null)
         setOpen(false)
      } else {
         changeTopic(topicIndex)
         setOpen(true)
      }
   }

   return (
      <>
            <div className={style.wrapper} key={topic._id}>
               <div className={style.topic}>
                  <p>{topic.topic}</p>
                  <GiImbricatedArrows className={open && curIndex === currentTopicIndex ? style.open : null} onClick={() => changeTopicStatus(currentTopicIndex)}></GiImbricatedArrows>
               </div>
               <span className={curIndex === currentTopicIndex ? style.show : style.hidden}>{topic.description}</span>
            </div>

      </>
   );
};

export default ShowTopicCourse;