import React, {useEffect, useState} from 'react';
import {getUser} from "../../../../ApiRequests/Courses/AuthUser.js";
import defaultAvatar from '../../../../images/member.png'
import style from './FindTeacher.module.scss'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {styled} from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';


const StyledBadge = styled(Badge)(({theme}) => ({
   '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
         position: 'absolute',
         top: 0,
         left: 0,
         width: '100%',
         height: '100%',
         borderRadius: '50%',
         animation: 'ripple 1.2s infinite ease-in-out',
         border: '1px solid currentColor',
         content: '""',
      },
   },
   '@keyframes ripple': {
      '0%': {
         transform: 'scale(.8)',
         opacity: 1,
      },
      '100%': {
         transform: 'scale(2.4)',
         opacity: 0,
      },
   },
}));
const StyledBadgeOffline = styled(Badge)(({theme}) => ({
   '& .MuiBadge-badge': {
      backgroundColor: '#e70303',
      color: '#f10202',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
         position: 'absolute',
         top: 0,
         left: 0,
         width: '100%',
         height: '100%',
         borderRadius: '50%',
         animation: 'ripple 1.2s infinite ease-in-out',
         border: '1px solid currentColor',
         content: '""',
      },
   },
   '@keyframes ripple': {
      '0%': {
         transform: 'scale(.8)',
         opacity: 1,
      },
      '100%': {
         transform: 'scale(2.4)',
         opacity: 0,
      },
   },
}));

const FindTeacher = ({item, itemPath}) => {
   console.log(item)

   const [teacher, setTeacher] = useState(null)
   const chatStatus = useSelector((state) => state.chatStatus)
   const [isOnline, setIsOnline] = useState(false)
   const onlineUsers = useSelector((state) => state.onlineUsers)
<<<<<<< HEAD

   useEffect(() => {

      getUser(chatStatus === "teacher" ? item.idTeacher : item.idStudent).then(res => {
         if (res.status === "Succeed") {
            setTeacher(res.user)
         }
      })
=======
   // const interlocutor = useSelector((state) => state.interlocutor)
   const [interlocutor,setInterlocutor] = useState(null)
   const dispatch = useDispatch()

   useEffect(() => {

      dispatch(getInterlocutorThunkCreator(chatStatus,item,setInterlocutor))
>>>>>>> 643f76ace336b8c32896b2a86575a8afab9e9e53

   }, [item, chatStatus])


   const getTime = (date) => {
      const newDate = new Date(date)
      const time = newDate.getHours()
      const minutes = newDate.getMinutes()

      return `${time < 10 ? "0" + time : time}:${minutes < 10 ? "0" + minutes : minutes}`

   }


   useEffect(() => {

      if (onlineUsers && teacher) {
         setIsOnline(onlineUsers.some(user => user._id === teacher._id))
      } else {
         setIsOnline(false)
      }
   }, [onlineUsers, teacher])


   return (
      <div className={style.container}>
         <NavLink to={`${itemPath}/${item.idTeacher}/${item.idStudent}`}>
            <div className={style.author}>
               {isOnline ? <StyledBadge
                  overlap="circular"
                  anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                  variant="dot"
               >
                  <Avatar alt="Remy Sharp"
                          src={teacher?.user.data.photo ? `../../../../../${teacher?.user.data.photo}` : defaultAvatar}/>
               </StyledBadge> : <StyledBadgeOffline
                  overlap="circular"
                  anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                  variant="dot"
               >
                  <Avatar alt="Remy Sharp"
                          src={teacher?.user.data.photo ? `../../../../../${teacher?.user.data.photo}` : defaultAvatar}/>
               </StyledBadgeOffline>}

               <div className={style.wrapper}>
                  <p className={style.nameAuthor}>{teacher?.user.data.name}</p>
                  <div className={style.message}>
                     <p className={style.text}>{item ? item?.messages[item.messages.length - 1]?.message : "default message"}</p>
                     <p className={style.time}>{item && getTime(item?.messages[item.messages.length - 1]?.date)}</p>
                  </div>
               </div>
            </div>
         </NavLink>
      </div>
   );
};

export default FindTeacher;