import React, {useState} from 'react';
import {Box, Button, Modal, Typography} from "@mui/material";
import CourseInput from "./CourseInput/CourseInput.jsx";
import CourseSelect from "./CourseSelect/CourseSelect.jsx";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalCreateCourse = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [subjectsCourse, setSubjectsCourse] = useState('')
  const [courseName, setCourseName] = useState('')
  const [courseDuration, setCourseDuration] = useState('')
  const [imageCourse, setImageCourse] = useState('')
  const [courseLevel,setCourseLevel] = useState('')
  const [descriptionCourse,setDescriptionCourse] = useState('')
  const [courseLanguage,setCourseLanguage] = useState('')


  //select level
  const [levelListSelect, setLevelListSelect] = useState('');
  const levelsList = ['Beginner',"Elementary","Pre-Intermediate","Intermediate","Upper-Intermediate"]

  // select time
  const [timesCourse,setTimesCourse] = useState("")
  const timesList = ["10 minutes","30 minutes","1 hour","2 hours"]

  // select languages

  const [language,setLanguage] = useState("")
  const languagesList = ['English','Turkish',"Germany","Poland","Italy","Spanish","Japan"]
  return (

    <div>
      <Button onClick={handleOpen}>Create Course</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div>
            <CourseInput name={'Course Title'} placeholder={"course name"} value={courseName} callback={setCourseName}></CourseInput>
            <CourseInput name={'Time of course'} value={courseDuration} callback={setCourseDuration}></CourseInput>

            <CourseSelect value={timesCourse} callback={setTimesCourse} items={timesList} title={'Duration Course'}></CourseSelect>
            <CourseSelect value={language} callback={setLanguage} items={languagesList} title={'Languages'}></CourseSelect>

            <CourseInput name={'What we will learn'} value={subjectsCourse} callback={setSubjectsCourse}></CourseInput>
            {/*<CourseInput name={'Level'} value={courseLevel} callback={setCourseLevel}></CourseInput>*/}
            <CourseSelect value={timesCourse} callback={setTimesCourse} items={timesList} title={'Duration Course'}></CourseSelect>
            <CourseInput type={'file'} name={'image'} value={imageCourse} callback={setImageCourse}></CourseInput>
            <CourseInput heightInput={'200px'} name={'Description'} value={descriptionCourse} callback={setDescriptionCourse}></CourseInput>

            <CourseSelect value={levelListSelect} callback={setLevelListSelect} items={levelsList} title={'Level'}></CourseSelect>
          </div>
          <div>
            <button>create course</button>
          </div>
        </Box>
      </Modal>
    </div>

  );
};

export default ModalCreateCourse;