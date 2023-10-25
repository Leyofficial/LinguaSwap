import React from 'react';
import style from './ChooseTypeOfChat.module.scss'
import CourseChats from "./CourseChats/CourseChats.js";
import {Outlet} from "react-router-dom";


const ChooseTypeOfChat = () => {

   return (
      <div className={style.container}>
         <aside>
            <nav>
               <p className={style.open}>Your current courses</p>
            </nav>
            <section>
               <CourseChats/>
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