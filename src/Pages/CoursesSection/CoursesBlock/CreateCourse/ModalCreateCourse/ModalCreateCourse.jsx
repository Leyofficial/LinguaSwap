import React, {useRef, useState} from 'react';
import {Box, Button, Modal} from "@mui/material";
import CourseInput from "./CourseInput/CourseInput.jsx";
import CourseSelect from "./CourseSelect/CourseSelect.jsx";
import style from './ModalCreateCourse.module.scss'
import {BsImages, BsPlusSquareDotted} from "react-icons/bs";
import {Course} from "../../../../../ApiRequests/Courses/Courses.js";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";


const styleModal = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: "80%",
   bgcolor: 'background.paper',
   boxShadow: 24,
   borderRadius: "15px",
   p: 4,
};

const ModalCreateCourse = () => {

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);


   const [subjectsCourse, setSubjectsCourse] = useState('')
   const [courseName, setCourseName] = useState('')
   const [startCourse, setStartCourse] = useState('')
   const [finishCourse, setFinishCourse] = useState('')
   const [imageCourse, setImageCourse] = useState("")
   const [descriptionCourse, setDescriptionCourse] = useState('')

   const [courseImage, setCourseImage] = useState('')
   const [saveErrorImage, setSaveErrorImage] = useState(false)

  const [isCreatedCourse,setIsCreatedCourse] = useState(false)

   const [topics, setTopics] = useState([])

   //select level
   const [levelListSelect, setLevelListSelect] = useState('');
   const levelsList = ['Beginner', "Elementary", "Pre-Intermediate", "Intermediate", "Upper-Intermediate"]

   // select time
   const [timesCourse, setTimesCourse] = useState("")
   const timesList = ["10 minutes", "30 minutes", "1 hour", "2 hours"]

   // select languages

   const [language, setLanguage] = useState("")
   const languagesList = ['English', 'Turkish', "Germany", "Poland", "Italy", "Spanish", "Japan"]

   const fileInputRef = useRef(null);

   const handleClickOpenInputFile = () => {
      fileInputRef.current.click()
   }

   const addTopic = (topic) => {

      if (topics.length < 3) {
         setTopics(prev => [...prev, topic])
         setSubjectsCourse("")
      }
   }

   const createCourse = () => {
      const data = {
         teacher: {
            id: 'default',
            name: 'Tamara Vasilyevna'
         },
         course: {
            name: courseName,
            startCourse: startCourse,
            finishCourse: finishCourse,
            durationCourse: timesCourse,
            members: [],
            image: courseImage,
            subjects: topics,
            level: levelListSelect,
            language: language
         }
      }
      Course.create(data).then(res => {
         if (res.status === 200) {


           toast.success("The course was created");
            setIsCreatedCourse(true)
            axios.post('http://localhost:3000/chat/chatroom', {
               idCourse: res.data.createCourse._id
            })

            setLevelListSelect("")
            setTimesCourse("")
            setLanguage("")
            setTopics([])
            setCourseImage('')
            setDescriptionCourse('')
            setStartCourse('')
            setCourseName("")
            setFinishCourse("")
            setOpen(false)

         }
      }).catch(error => console.log(error)
      )
   }


   const handleImage = (e) => {

      setImageCourse(e.name)

      const data = new FormData()

      data.append('image', e)

      Course.saveImage(data).then(res => {
         setCourseImage(res.data.image.path)
        console.log(res)
      }).catch(error => {
         toast.error("Image has different type from PNG, JPEG,JPG or size of image too big");
         setSaveErrorImage(true)
         console.log(error)

      })

   }

   return (

      <div>
        {isCreatedCourse ? <Toaster position="top-right" reverseOrder={false}/> : null}
         <Button onClick={handleOpen}>Create Course</Button>
         <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
         >
            <Box sx={styleModal}>
              {saveErrorImage ? <Toaster position="top-right" reverseOrder={false}/> : null}
               <div className={style.container}>
                  <div className={style.sectionOne}>
                     <CourseInput name={'Courses Title'} placeholder={"course name"} value={courseName}
                                  callback={setCourseName}></CourseInput>
                     <div className={style.wrapeprSelects}>
                        <CourseSelect value={language} callback={setLanguage} items={languagesList}
                                      title={'Languages'}></CourseSelect>
                        <CourseSelect value={levelListSelect} callback={setLevelListSelect} items={levelsList}
                                      title={'Level'}></CourseSelect>
                     </div>

                     <div className={style.wrapperTopics}>
                        <label htmlFor={'topics'}>Write 3 topics about this course</label>
                        <div className={style.wrapperInput}>
                           <input name={'topics'} value={subjectsCourse}
                                  onChange={(e) => setSubjectsCourse(e.target.value)}/>
                           <BsPlusSquareDotted onClick={() => addTopic(subjectsCourse)}></BsPlusSquareDotted>
                        </div>
                        <div className={style.wrapperTopicItems}>
                           <ul>
                              {topics.map((topic, index) => <li key={index}><span>{index + 1}</span> {topic}</li>)}
                           </ul>
                        </div>
                     </div>


                     <CourseInput changeElement={true} heightInput={'200px'} name={'Description'}
                                  value={descriptionCourse}
                                  callback={setDescriptionCourse}></CourseInput>
                  </div>
                  <div className={style.sectionTwo}>
                     {/*<CourseInput type={'file'} name={'Image'} value={imageCourse} callback={setImageCourse}></CourseInput>*/}
                     <div className={style.imageWrapper}>
                        <label htmlFor={'image'}>Image</label>
                        <div className={style.wrapper} onClick={handleClickOpenInputFile}>
                           <BsImages className={courseImage ? style.hiddenSvg : null}></BsImages>
                           <input name={'image'} ref={fileInputRef} type={'file'}
                                  onChange={(e) => handleImage(e.target.files[0])}/>

                           {courseImage ? <img src={courseImage} alt={'course image'}/> : null}
                        </div>

                     </div>
                     <div className={style.wrapperDate}>
                        <CourseInput type={'date'} name={'Start'} value={startCourse}
                                     callback={setStartCourse}></CourseInput>
                        <CourseInput type={'date'} name={'Finish'} value={finishCourse}
                                     callback={setFinishCourse}></CourseInput>
                     </div>
                     <CourseSelect value={timesCourse} callback={setTimesCourse} items={timesList}
                                   title={'Duration Courses'}></CourseSelect>
                  </div>


                  {/*<CourseInput name={'Courses Title'} placeholder={"course name"} value={courseName} callback={setCourseName}></CourseInput>*/}
                  {/*<CourseInput name={'Level'} value={courseLevel} callback={setCourseLevel}></CourseInput>*/}
                  {/*<CourseSelect value={timesCourse} callback={setTimesCourse} items={timesList} title={'Duration Courses'}></CourseSelect>*/}
               </div>
               <div className={style.button}>
                  <button onClick={createCourse}>Create Course</button>
               </div>
            </Box>
         </Modal>
      </div>

   );
};

export default ModalCreateCourse;