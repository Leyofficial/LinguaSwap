import React from 'react';
import style from './CoursesSectionSkeleton.module.scss'
import {Skeleton, Stack} from "@mui/material";

const CoursesSectionSkeleton = () => {
   return (
    <>
       <Stack>
          <div className={style.skeletonHeader}>
             <Skeleton variant="rectangular" width={510} height={40}/>
          </div>

          <div className={style.skeletonAuthor}>
             <Skeleton variant="circular" width={75} height={75}/>
             <Skeleton variant="rectangular" width={310} height={40}/>
          </div>
          <div className={style.skeletonProcess}>
             <Skeleton variant="rectangular" width={710} height={50}/>
          </div>
          <div className={style.skeletonSideInfo}>
             <Skeleton variant="rounded" width={410} height={500}/>
             <Skeleton variant="rounded" width={410} height={500}/>
          </div>

       </Stack>
    </>
   );
};

export default CoursesSectionSkeleton;