import style from './SearchInput.module.scss'
import {CgSearch} from "react-icons/cg";
import {ISearchInput} from "./types.ts";
import React from "react";

const SearchInput = (props : ISearchInput) => {
  const {placeholder,value,callback} = props
  return (
    <div className={style.container}>
      <CgSearch></CgSearch>
      <input placeholder={placeholder} type={'search'} value={value} onChange={(e : React.ChangeEvent<HTMLInputElement>) => callback(e.target.value)}/>
    </div>
  );
};

export default SearchInput;