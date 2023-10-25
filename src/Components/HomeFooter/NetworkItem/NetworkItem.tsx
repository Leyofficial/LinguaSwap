import style from './NetworkItem.module.scss'
import {ReactNode} from "react";
interface INetworkItemProps{
  icon:ReactNode,
  path:string
}
const NetworkItem = (props:INetworkItemProps) => {

  const {icon, path} = props
  return (
    <>
        <a className={style.item} href={path} target="_blank" rel="noopener noreferrer">
          {icon}
          </a>
    </>
  );
};

export default NetworkItem;