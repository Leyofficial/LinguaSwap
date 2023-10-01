import MainLayout from "./MainLayout/MainLayout.jsx";
import HomeLayout from "./HomeLayout/HomeLayout.jsx";

const Layout = (props) => {

  const {layoutType} = props
  return (
    <>
      {layoutType === 'main' ? <MainLayout/> : <HomeLayout/>}
    </>)
}

export default Layout;
