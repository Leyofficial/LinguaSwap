import React, {useEffect, useState} from 'react';
import style from './ChooseTypeOfChat.module.scss'
import {useSelector} from "react-redux";
import {getCoursesForUserChat} from "../../ApiRequests/Chat.jsx";

const ChooseTypeOfChat = () => {
   const [courses, setCourses] = useState(null)

   const currentUser = useSelector((state) => state.loginUser)
   console.log(currentUser)
   useEffect(() => {
      getCoursesForUserChat(currentUser._id).then(res => {
         if (res.status === 200) {
            setCourses(res.data.courses)
         }
      })
   }, [currentUser])
   return (
      <div className={style.container}>
         <section>
            <div className={style.courses}>
               <h3>Courses Chat</h3>
               <div className={style.courseItems}>
                  {courses && courses.map((course) =><div className={style.item}>
                     <img src={`../../../${course.course.image}`} alt={'course'}/>
                     <p>{course.course.name}</p>
                     </div>
                  )}
               </div>
            </div>
            <div className={style.friends}>
               <h3>Teachers Chat</h3>
               <div>

               </div>
            </div>
         </section>
      </div>
   );
};

export default ChooseTypeOfChat;