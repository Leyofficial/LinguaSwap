import HeaderWrapper from "./HeaderWrapper"
import {INavItems} from "../../types/headerTypes.ts";

function Header ({ navItems } : INavItems) {
    return <HeaderWrapper navItems={navItems}/>
}
export default Header