import React from 'react';
import style from "./NotFound.module.scss";

const NotFoundItems = () => {
   console.log('s')
   return (
      <div className={style.notFound}>
         No results <span className={style.span}>found</span> :( <br/>
         We <span className={style.span}>can’t find </span> any item matching your <span
         className={style.span}>search .</span>
      </div>
   );
};

export default NotFoundItems;