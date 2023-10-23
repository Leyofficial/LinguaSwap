import React, {useEffect} from 'react';
import style from './ChooseTypeOfChat.module.scss'
import CourseChats from "./CourseChats/CourseChats.jsx";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";


const ChooseTypeOfChat = () => {


   const currentUser = useSelector((state) => state.loginUser)
   return (
      <div className={style.container}>
        <aside>
         <nav>
            <ul>
               <li className={ style.open }>Your current courses</li>
            </ul>
         </nav>
         <section>
           <CourseChats />
           <footer></footer>
         </section>
        </aside>
         <main>
            <Outlet></Outlet>
         </main>
      </div>

   );
};

export default ChooseTypeOfChat;