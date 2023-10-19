import HeaderWrapper from "./HeaderWrapper"
import {INavItems} from "../../types/headerTypes.ts";

export function Header ({ navItems } : INavItems) {
    return <HeaderWrapper navItems={navItems}/>
}