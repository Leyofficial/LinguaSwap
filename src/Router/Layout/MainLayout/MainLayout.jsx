import style from "../Layout.module.scss";
import {Outlet} from "react-router-dom";
import SideBar from "../../../Components/Sidebar/index.tsx";

const MainLayout = () => {


  return (
    <div className={style.container}>
       <aside>
          <SideBar/>
       </aside>

      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;