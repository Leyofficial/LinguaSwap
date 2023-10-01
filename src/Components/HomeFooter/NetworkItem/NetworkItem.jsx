import style from './NetworkItem.module.scss'
const NetworkItem = (props) => {

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