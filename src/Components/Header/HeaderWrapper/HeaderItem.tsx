import {Link} from "react-scroll";
import style from './Header.module.scss'
import {INavItem} from "../../../types/headerTypes.ts";
export function HeaderItem({link , text , index} : INavItem) {
    return (
        <li key={index} className={style.navItem}>
            <Link className={style.text} to={link} >
                <p >{text}</p>
            </Link>
        </li>
        )
}
