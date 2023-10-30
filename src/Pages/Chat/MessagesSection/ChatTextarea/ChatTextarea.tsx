import React from 'react';
import style from './ChatTextarea.module.scss'
import {AiOutlinePaperClip} from "react-icons/ai";
import {LuSend} from "react-icons/lu";
import {ColorRing} from "react-loader-spinner";

interface IChatTextarea{
    valueTextarea:string,
    setValueTextarea:(arg:string) => void,
    submitCallback:() => void,
    waitResponse:boolean
}
const ChatTextarea = (props:IChatTextarea) => {
    const {valueTextarea,setValueTextarea,submitCallback,waitResponse} = props
   return (
      <section className={style.wrapperTextarea}>
         <AiOutlinePaperClip className={style.clip} fontSize={40}></AiOutlinePaperClip>
         <div className={style.textarea}>
                  <textarea placeholder={'Type a message'} value={valueTextarea}
                            onChange={(e) => setValueTextarea(e.target.value)}></textarea>
         </div>
         <div className={style.icons}>
             {waitResponse ? <div className={style.waitResponse}><ColorRing
                 visible={true}
                 height="40"
                 width="40"
                 ariaLabel="blocks-loading"
                 wrapperStyle={{}}
                 wrapperClass="blocks-wrapper"
                 colors={["blue","blue","blue","blue","blue"]}
             /></div>: <LuSend onClick={() => submitCallback()} fontSize={40}
                    color={valueTextarea ? 'rgba(12,87,197,0.98)' : 'rgba(12,87,197,0.12)'}></LuSend>}
         </div>

      </section>
   );
};

export default ChatTextarea;