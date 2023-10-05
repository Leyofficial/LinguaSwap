import React, {useState} from "react";
import style from './ShowTopicCourse.module.scss'
import {GiImbricatedArrows} from "react-icons/gi";

const ShowTopicCourse = (props) => {

   const {topic, changeTopic, curIndex, currentTopicIndex} = props
   const [open, setOpen] = useState(false)

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
         <div>
            <div className={style.wrapper}>
               <div className={style.topic}>
                  <p>{topic}</p>
                  <GiImbricatedArrows className={open && curIndex === currentTopicIndex ? style.open : null} onClick={() => changeTopicStatus(currentTopicIndex)}></GiImbricatedArrows>
               </div>
               <span className={curIndex === currentTopicIndex ? style.show : style.hidden}>Lorem ipsum dolor sit amet,
               consectetur adipisicing elit. A consectetur consequuntur debitis fuga ipsam iste laboriosam
               mollitia nihil nobis non, pariatur recusandae sed sint temporibus ullam veritatis vero voluptate voluptatibus.</span>
            </div>
         </div>
      </>
   );
};

export default ShowTopicCourse;