import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";
import {format} from "date-fns";
import {es} from "date-fns/locale";


export const getInterlocutor = (currentUserId : string,dialog : any,callback:any ) => {

  if (currentUserId && currentUserId !== dialog?.members?.first) {
    getUser(dialog?.members?.first).then(res => {

      if (res.status === 200) {
        callback(res.data.user)
      }
    })
  } else if(currentUserId) {
    getUser(dialog?.members.second).then(res => {
      if (res.status === 200) {

        callback(res.data.user)
      }
    })
  }
}

export  const groupedChatMessage = (chat:any) => {
  let data = null

  chat?.reduce((acc:any, message:any) => {
    const newDate = new Date(message.date)
    const date = format(newDate, 'd MMMM', {locale: es});
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(message)
    data = acc
    return acc
  }, {});
  return data
}

export const getDateMessage = (date:any) => {
  const newDate = new Date(date)
  const time = newDate.getHours()
  const minutes = newDate.getMinutes()

  return `${time <= 10 ? "0" + time : time} : ${minutes < 10 ? "0" + minutes : minutes}`

}

