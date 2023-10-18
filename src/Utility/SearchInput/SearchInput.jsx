import style from './SearchInput.module.scss'
import {CgSearch} from "react-icons/cg";
<<<<<<< HEAD:src/Utility/SearchInput/SearchInput.jsx
=======
import {ISearchInput} from "./types.ts";
import React from "react";
>>>>>>> 643f76ace336b8c32896b2a86575a8afab9e9e53:src/Utility/SearchInput/SearchInput.tsx

const SearchInput = (props) => {

  const {placeholder,value,callback} = props
  return (
    <div className={style.container}>
      <CgSearch></CgSearch>
      <input placeholder={placeholder} type={'search'} value={value} onChange={(e : React.ChangeEvent<HTMLInputElement>) => callback(e.target.value)}/>
    </div>
  );
};

export default SearchInput;