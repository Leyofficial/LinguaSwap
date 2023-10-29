import React, {useState} from 'react';
import style from './MainChatSearch.module.scss'

interface IMainChatSearchProps{

}
const MainChatSearch = () => {
    const [searchValue, setSearchValue] = useState<string>("")


    return (
      <div className={style.container}>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type={'search'}
               placeholder={"search"}/>
      </div>
    );
  }
;

export default MainChatSearch;