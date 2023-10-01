import HeaderWrapper from "./HeaderWrapper"



function Header (props) {
    return (
        <>
        <HeaderWrapper navItems={props.navItems}/>
        </>
    )
}

export default Header