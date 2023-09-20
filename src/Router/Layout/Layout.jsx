import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>Hello</header>
      <aside>H@</aside>
      <main>
      <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;
