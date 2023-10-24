import React, {useState} from 'react';
import style from './TopicDescription.module.scss'
import {ICourseSubject} from "../../../courseType.ts";

interface ITopicProps {
    topic:ICourseSubject,
    index:number
}
const TopicDescription = (props:ITopicProps) => {

    const {topic,index} = props
   const [openDescription, setOpenDescription] = useState(false)
   return (
      <div className={style.container}>
         <p onClick={() => setOpenDescription(!openDescription)} className={style.item}>{index + 1}. {topic.topic}</p>
         {openDescription ? <p className={style.description}>{topic.description}</p> : null}
      </div>
   );
};

export default TopicDescription;