import React, {useState} from 'react';
import style from "./TopicsSection.module.scss";
import ShowTopicCourse from "../ShowTopicCourse/ShowTopicCourse.js";
import {ICourse} from "../../../types/coursesTypes.ts";

interface ITopicSectionProps{
    currentCourse:ICourse
}
const TopicsSection = (props : ITopicSectionProps) => {

    const {currentCourse} = props
   const [currentTopic, setCurrentTopic] = useState<number | null>(0)

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