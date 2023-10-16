import React, {useState} from 'react';
import style from "./TopicsSection.module.scss";
import ShowTopicCourse from "../ShowTopicCourse/ShowTopicCourse.jsx";

const TopicsSection = ({currentCourse}) => {
   const [currentTopic, setCurrentTopic] = useState(0)

   return (
      <div className={style.descriptionContainer}>
         <div className={style.description}>
            <h2>We will learn</h2>
            <p>{currentCourse?.course.description}</p>
         </div>
         <div className={style.topics}>
            {currentCourse?.course.subjects.map((topic, index) => <ShowTopicCourse curIndex={currentTopic}
                                                                                   topic={topic}
                                                                                   currentTopicIndex={index}
                                                                                   changeTopic={setCurrentTopic}></ShowTopicCourse>)}
         </div>
      </div>
   );
};

export default TopicsSection;