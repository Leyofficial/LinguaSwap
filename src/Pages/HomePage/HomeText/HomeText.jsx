import style from './HomeText.module.scss'
import {TypeAnimation} from "react-type-animation";

const HomeText = () => {
  return (
      <div className={style.wrapperText}>
          <a className={style.support}  target={"_blank"} href={'https://www.facebook.com/fundraisers/explore/search/charities/?query=ukraine'}>
              Support Ukraine 🇺🇦
              Help Provide Humanitarian Aid to Ukraine.
          </a>

        <h1>Lin<span style={{fontStyle:'normal'}}>gua</span> is a service for <span>learning languages</span> using</h1>
        <div className={style.wrapperType}>
          <TypeAnimation sequence={["The best teachers",4000,
            'Useful programs',4000,'Personal courses',3000
          ]} wrapper={'span'} speed={50} style={{ display: 'inline-block' }} repeat={Infinity}></TypeAnimation>
        </div>
      </div>
  );
};

export default HomeText;