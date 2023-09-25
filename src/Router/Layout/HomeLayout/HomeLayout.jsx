import style from "../Layout.module.scss";
import {Outlet} from "react-router-dom";
import Header from "../../../Components/Header/index.jsx";

const HomeLayout = () => {


  const navItems = [
    {text: "Overview", link: "#test"},
    {text: "Features", link: "#test"},
    {text: "Get in touch", link: "#test"},
    {text: "FAQ", link: "#test"},
    {text: "Help", link: "#test"},
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