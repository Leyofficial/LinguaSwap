import {Link} from "react-scroll";
import style from '../Header.module.scss'
import {INavItem} from "../types.ts";
export function HeaderItem({link , text , index} : INavItem) {
    return (
        <li key={index} className={style.navItem}>
            <Link to={link} >
                <p className={style.text}>{text}</p>
            </Link>
        </li>
        )
}
