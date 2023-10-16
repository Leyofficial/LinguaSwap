import React from 'react';
import advanced from '../../images/course/career.png'
import beginner from '../../images/course/dawn.png'
import intermediate from '../../images/course/intermediate-level.png'

export const ImageLevelEducation = (level) => {

   switch (level){
      case 'Advanced' : return advanced
      case 'Beginners' : return beginner
      case 'Intermadiate' : return intermediate
      case 'Intermediate' : return intermediate
      case 'Pre-intermediate': return intermediate
      case "Pre-Intermediate" : return intermediate
      case 'Upper-Intermediate' : return intermediate
      case 'Elementary' : return intermediate
      default : return
   }
}