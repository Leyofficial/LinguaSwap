import style from './AbouItem.module.scss'
import {GiImbricatedArrows} from "react-icons/gi";
import {NavLink} from "react-router-dom";
import {ReactNode} from "react";
import arrow from '../../../../images/arrowItem.png'

interface IText {
    icon: ReactNode,
    text: string
}

interface IAboutItemProps {
    title: string,
    icon: ReactNode,
    text: IText[],
    path: string
}

const AboutItem = (props: IAboutItemProps) => {
    const {title, icon, text, path} = props


    return (
        <div className={style.container}>
            <NavLink to={`aboutApp/${path}`}>
                <p>{title}</p>
                <div className={style.box}>
                    {icon}
                    <div className={style.listWrapper}>
                        <ul>
                            {text.map((item, index) => <li key={index}>{item.icon} {item.text}</li>)}
                        </ul>
                        <div className={style.navigateArrow}>

                            <img src={arrow} alt={'arrow'}/>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>


    )
};


export default AboutItem;