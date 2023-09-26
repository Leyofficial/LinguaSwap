import style from "../Layout.module.scss";
import {Outlet} from "react-router-dom";
import Header from "../../../Components/Header/index.jsx";

const HomeLayout = () => {


  const navItems = [
    {text: "Overview", link: "Overview"},
    {text: "Features", link: "AboutApp"},
    {text: "Get in touch", link: "Join"},
    {text: "FAQ", link: "FAQ"},
    {text: "Help", link: "Footer"},
  ];

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Header navItems={navItems}></Header>
      </div>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default HomeLayout;