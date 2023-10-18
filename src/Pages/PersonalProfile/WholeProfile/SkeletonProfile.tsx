import style from "./WholeProfile.module.scss";
import {Skeleton, Stack} from "@mui/material";
import {CgProfile} from "react-icons/cg";
import {AiOutlineMail, AiOutlineStar} from "react-icons/ai";
import React from "react";
import {IUserProfile} from "./types.ts";
import List from "../../../Utility/List/List.tsx";
import {ILanguages} from "../../../Utility/ModalProfile/types.ts";

function SkeletonProfile ({user} : IUserProfile) {
    return (
        <div className={style.container}>
        <Stack spacing={1}>
            <div className={style.block}>
            <div className={style.leftBlock}>
                <div className={style.blockCenter}>
                    <div className={style.avatar}>
                        <Skeleton variant="circular" width={104} height={104} />
                    </div>
                    <Skeleton sx={{marginBottom : '20px'}} variant="rectangular" width={200} height={20} />
                    <Skeleton sx={{marginBottom : '20px'}} variant="rectangular" width={150} height={20} />
                    <Skeleton variant="rectangular" width={200} height={50} />
                </div>
                <div className={style.avatarBlock}>
                    <CgProfile className={style.profile} size={30}/>
                    <Skeleton variant="rectangular" width={150} height={20} />
                </div>
                <div className={style.avatarBlock}>
                    <AiOutlineMail className={style.profile} size={30}/>
                    <Skeleton variant="rectangular" width={150} height={20} />
                </div>
                <div className={style.avatarBlock}>
                    <AiOutlineStar className={style.profile} size={30}/>
                    <Skeleton variant="rectangular" width={150} height={20} />
                </div>
            </div>
            <div className={style.rightBlock}>

                <h2  className={style.titleRight}>Projects & Skills</h2>
                <div className={style.blockRightText}>
                    On the site since  :  <b><Skeleton variant="rectangular" width={100} height={20} /> </b>
                </div>
                <div className={style.course}>
                    On course :
                    <Skeleton variant="rectangular" width={100} height={20} />
                </div>
                <p className={style.languagesTitle}>Languages know :</p>
                <div className={style.languagesBlock}>
<<<<<<< HEAD:src/Pages/PersonalProfile/WholeProfile/SkeletonProfile.jsx
                    {user?.user.data.languagesKnow.map((item) => {
                        return <div key={item.label}>
                            <Skeleton variant="rectangular" width={50} height={30} />
                        </div>
                    })}
                </div>
                <p className={style.languagesTitle}>Languages learn :</p>
                <div className={style.languagesBlock}>
                    {user?.user.data.languagesLearn.map((item) => {
                        return <div key={item.label}>
                            <Skeleton variant="rectangular" width={50} height={30} />
                        </div>
                    })}
=======
                    <List items={user?.user.data?.languagesKnow} rerender={(item : ILanguages) =><div key={item.label}>
                        <Skeleton variant="rectangular" width={50} height={30} />
                    </div>}></List>
                </div>
                <p className={style.languagesTitle}>Languages learn :</p>
                <div className={style.languagesBlock}>
                    <List items={user?.user.data?.languagesLearn} rerender={(item : ILanguages) => <div key={item.label}>
                        <Skeleton variant="rectangular" width={50} height={30} />
                    </div>}></List>
>>>>>>> 643f76ace336b8c32896b2a86575a8afab9e9e53:src/Pages/PersonalProfile/WholeProfile/SkeletonProfile.tsx
                </div>
            </div>
            </div>
        </Stack>
        </div>
    )
}
export default SkeletonProfile