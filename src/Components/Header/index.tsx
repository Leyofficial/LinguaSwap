import HeaderWrapper from "./HeaderWrapper"
import {INavItems} from "./types";



export function Header ({ navItems } : INavItems) {
    return (
        <>
        <HeaderWrapper navItems={navItems}/>
        </>
    )
}