import React, {useEffect, useState} from 'react';
import FindTeacher from "./FindTeacher/FindTeacher.jsx";

const TeacherChats = ({items}) => {




   return (
      <div>
         {items && items.map(item => <FindTeacher item={item}></FindTeacher>)}

      </div>
   );
};

export default TeacherChats;