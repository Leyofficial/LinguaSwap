import React from 'react';
import advanced from '../../images/course/career.png'
import beginner from '../../images/course/dawn.png'
import intermediate from '../../images/course/intermediate-level.png'

export const ImageLevelEducation = (level) => {
   switch (level){
      case 'Advanced' : return advanced
      case 'Beginner' : return beginner
      case 'Intermadiate' : return intermediate
      case 'Pre-intermediate' : return intermediate
      case 'Uper-intermediate' : return intermediate
      default : return
   }
}