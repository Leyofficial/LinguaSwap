export const initialState = {
  isStart: true,
  name: '',
  userTag : '',
  bio : '',
  photo : '',
  status : 'Student',
  nameDirty : true,
  hashDirty : true,
  languagesKnow : [],
  languagesLearn : [],
  courses:[],
  teachers : [],
  loginUser:null,
  registerUser: null,
  isAuth:false,
  currentCourse:null,
  currentChat:[],
  timeCurrentChat:null,
  socket:null,
  chatStatus:"course",
  messagesWithStudent:[],
  onlineUsers:[]
}