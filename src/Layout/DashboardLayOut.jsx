import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";

const DashboardLayOut = () => {
  return (
    <div>
        <Header/>
      <div className="drawer">
        <input id="dashDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <Outlet/>
          {/* <!-- Page content here --> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="dashDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to = 'admin/users'>All User</Link>
            </li>
            <li>
              <Link to='admin/sellers'>All Sellers</Link>
            </li>
            <li>
              <Link to='admin/reported'>Reported Items</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayOut;
