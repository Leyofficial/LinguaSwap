import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header></header>
      <aside></aside>
      <main><Outlet><p>Hello Layout </p></Outlet></main>
    </div>
  );
};

export default Layout;
