import React from 'react';
import style from './ChatTextarea.module.scss'
import {AiOutlinePaperClip} from "react-icons/ai";
import {LuSend} from "react-icons/lu";

interface IChatTextarea{
    valueTextarea:string,
    setValueTextarea:(arg:string) => void,
    submitCallback:() => void
}
const ChatTextarea = (props:IChatTextarea) => {
    const {valueTextarea,setValueTextarea,submitCallback} = props
   return (
      <section className={style.wrapperTextarea}>
         <AiOutlinePaperClip fontSize={40}></AiOutlinePaperClip>
         <div className={style.textarea}>
                  <textarea placeholder={'Type a message'} value={valueTextarea}
                            onChange={(e) => setValueTextarea(e.target.value)}></textarea>
         </div>
         <div className={style.icons}>
            <LuSend onClick={() => submitCallback()} fontSize={40}
                    color={valueTextarea ? 'rgba(12,87,197,0.98)' : 'rgba(12,87,197,0.12)'}></LuSend>
         </div>

      </section>
   );
};

export default ChatTextarea;