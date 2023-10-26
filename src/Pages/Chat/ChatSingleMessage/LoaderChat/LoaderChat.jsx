import {CircularProgress} from "@mui/material";
import style from './LoaderChat.module.scss'

export default function CircularUnderLoad() {
   return (
      <div className={style.container}>
         <CircularProgress disableShrink />
      </div>
   );
}