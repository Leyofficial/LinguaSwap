import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {currentMessageTimeAC} from "../../../../../../../Redux/Course/Chat/currentMessageTimeAC.js";

const ShowDate = ({date, formattedDate}) => {
   const [rerenderData, setRerenderData] = useState(0)
   const [draw, setDraw] = useState(false)
   const currentDayMessage = useSelector((state) => state.currentTimeMessage)
   const dispatch = useDispatch()


   useEffect(() => {
      if (currentDayMessage === date) {
         setRerenderData(rerenderData+1)

         dispatch(currentMessageTimeAC(date))
      }
   }, [currentDayMessage])

   console.log(rerenderData)
   return (
      <>
         {rerenderData >= 1 ? <p>{formattedDate}</p> : null}
      </>
   );
};

export default ShowDate;