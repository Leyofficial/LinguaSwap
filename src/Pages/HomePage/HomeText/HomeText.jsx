import style from './HomeText.module.scss'
import {TypeAnimation} from "react-type-animation";

const HomeText = () => {
  return (
      <div className={style.wrapperText}>
        <h1>Lin<span style={{fontStyle:'normal'}}>gua</span> is a service for <span>learning languages</span> using</h1>
        <div className={style.wrapperType}>
          <TypeAnimation sequence={[
            'Student',4000,'Teacher',3000
          ]} wrapper={'span'} speed={50} style={{ display: 'inline-block' }} repeat={Infinity}></TypeAnimation>
        </div>
      </div>
  );
};

export default HomeText;