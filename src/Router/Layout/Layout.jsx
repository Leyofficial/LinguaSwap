import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <main>
      <Outlet>
        
      </Outlet>
      </main>
    </div>
  );
};

export default Layout;
