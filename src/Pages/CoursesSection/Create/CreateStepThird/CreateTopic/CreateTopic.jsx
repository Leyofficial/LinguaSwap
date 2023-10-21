import React from 'react';
import style from './CreateTopic.module.scss'
import {GrAdd} from "react-icons/gr";

const CreateTopic = ({topic,setTopic,addTopicCallback,error,setDescription,description}) => {

   return (
      <div className={style.createTopics}>
         <div className={style.topic}>
            <label htmlFor={'topic'}>Topic</label>
            <div className={style.wrapperInput}>
               <input placeholder={"Name topic"} name={'topic'} value={topic}
                      onChange={(e) => setTopic(e.target.value)}/>

               <GrAdd onClick={addTopicCallback}></GrAdd>

            </div>

         </div>
         <div className={style.description}>
            <label htmlFor={"description"}>Description for topic</label>
            <textarea placeholder={'Try to explain about this topic. What you will teach and how it will going'}
                      name={"description"} value={description}
                      onChange={(e) => setDescription(e.target.value)}></textarea>
            {error ? <p className={style.error}>*** Name of topic and description should be fill ***</p> : null}
         </div>
      </div>
   );
};

export default CreateTopic;