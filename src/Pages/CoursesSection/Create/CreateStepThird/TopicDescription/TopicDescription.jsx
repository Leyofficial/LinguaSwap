import React, {useState} from 'react';
import style from './TopicDescription.module.scss'
const TopicDescription = ({topic,index}) => {
   const [openDescription, setOpenDescription] = useState(false)
   return (
      <div className={style.container}>
         <p onClick={() => setOpenDescription(!openDescription)} className={style.item}>{index + 1}. {topic.topic}</p>
         {openDescription ? <p className={style.description}>{topic.description}</p> : null}
      </div>
   );
};

export default TopicDescription;