import {Outlet} from "react-router-dom";
import style from './Layout.module.scss'


const Layout = () => {

  return (
    <>
      <div className={style.container}>
      <header>HEADER</header>
      <aside>ASIDE</aside>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  </>)
}

export default Layout;
