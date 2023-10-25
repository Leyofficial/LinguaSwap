import {IUserInfo} from "../types/userTypes.ts";
import {ICreateCourseData} from "../Pages/CoursesSection/Create/createTypes.ts";
import {ICourse} from "../types/coursesTypes.ts";

export const initialState = {
  isStart: false,
  name: '',
  userTag : '',
  bio : '',
  photo : '',
  status : 'Student',
  nameDirty : true,
  hashDirty : true,
  languagesKnow : [],
  languagesLearn : null,
  courses:[],
  teachers : [],
  loginUser: null as unknown as IUserInfo,
  registerUser: null,
  isAuth:false,
  currentCourse:null as unknown as ICourse,
  currentChat:[],
  socket:null,
  chatStatus:"course",
  messagesWithStudent:[],
  onlineUsers:[],
  currentCourseChat:null,
  currentCourseTeacher:null,
  chatsWithTeacher:null,
  chatsWithStudents:null,
  interlocutor:null,
  chatWithMemberCourse:null,
  createCourseData:{
    title:"",
    language:"",
    level:"",
    duration:"",
    startDate:"",
    finishDate:"",
    description:"",
    topics:[]
  },
  mainChat:null,
  mainChats:null
}