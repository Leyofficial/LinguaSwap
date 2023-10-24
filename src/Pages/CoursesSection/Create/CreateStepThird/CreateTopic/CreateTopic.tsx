import React from 'react';
import style from './CreateTopic.module.scss'
import {GrAdd} from "react-icons/gr";


interface ICreateTopic {
    topic :string,
    setTopic:(event:string) => void,
    addTopicCallback:() => void,
    error:boolean,
    setDescription:(event:string) => void,
    description:string
}
const CreateTopic = (props:ICreateTopic) => {

    const {topic,setTopic,addTopicCallback,error,setDescription,description} = props

    const setTopicHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTopic(event.target.value)
    }

    const setDescriptionHandler = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value)
    }
   return (
      <div className={style.createTopics}>
         <div className={style.topic}>
            <label htmlFor={'topic'}>Topic</label>
            <div className={style.wrapperInput}>
               <input placeholder={"Name topic"} name={'topic'} value={topic}
                      onChange={(event:React.ChangeEvent<HTMLInputElement>) => setTopicHandler(event)}/>

               <GrAdd onClick={addTopicCallback}></GrAdd>

            </div>

         </div>
         <div className={style.description}>
            <label htmlFor={"description"}>Description for topic</label>
            <textarea placeholder={'Try to explain about this topic. What you will teach and how it will going'}
                      name={"description"} value={description}
                      onChange={(event:React.ChangeEvent<HTMLTextAreaElement>) => setDescriptionHandler(event)}></textarea>
            {error ? <p className={style.error}>*** Name of topic and description should be fill ***</p> : null}
         </div>
      </div>
   );
};

export default CreateTopic;