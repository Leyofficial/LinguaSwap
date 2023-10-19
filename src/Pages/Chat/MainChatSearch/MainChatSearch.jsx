import React, {useEffect, useState} from 'react';
import style from './MainChatSearch.module.scss'
import {getInterlocutor} from "../MainChatHelper/MainChatHelper.js";
import {useSelector} from "react-redux";

const MainChatSearch = ({dialogs, setFoundUsers}) => {
    const [searchValue, setSearchValue] = useState("")
    const currentUser = useSelector((state) => state.loginUser)
    const [interlocutors, setInterlocutors] = useState([])


    useEffect(() => {
      if (interlocutors) {

        const foundDialogs = interlocutors.filter(item => item.user.data.name.toLowerCase().includes(searchValue.toLowerCase()))
        setFoundUsers(foundDialogs)
      }

    }, [searchValue, interlocutors])

    const getInterlocutors = (interlocutor) => {

      setInterlocutors(prev => {
        const newInterlocutors = prev.filter(item => item._id !== interlocutor._id)
        return [...newInterlocutors, interlocutor]
      })

    }
    useEffect(() => {
      if (searchValue)
        dialogs?.map(dialog => {
          getInterlocutor(currentUser?._id, dialog, getInterlocutors)
        })
    }, [dialogs, searchValue])


    return (
      <div className={style.container}>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type={'search'}
               placeholder={"search"}/>
      </div>
    );
  }
;

export default MainChatSearch;