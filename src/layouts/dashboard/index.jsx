import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";

const DashboardLayout = () => {
  return (
    <>
      <aside className="main-aside">
        {/* Side Bar */}
        <SideBar />
      </aside>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
