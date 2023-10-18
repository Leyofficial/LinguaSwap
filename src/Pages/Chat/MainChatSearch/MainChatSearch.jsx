import React from 'react';
import style from './MainChatSearch.module.scss'

const MainChatSearch = () => {
  return (
    <div className={style.container}>
      <input type={'search'} placeholder={"search"}/>
    </div>
  );
};

export default MainChatSearch;