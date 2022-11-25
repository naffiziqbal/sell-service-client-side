import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";
import useAdmin from "../Hooks/useAdmin";
import useSeller from "../Hooks/useSeller";
import { AuthContext } from "../UserContext/UserContext";

const DashboardLayOut = () => {
  const {user}=  useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email)
  return (
    <div>
      <Header />
      <div className="drawer">
        <input id="dashDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
          {/* <!-- Page content here --> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="dashDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {isAdmin && (
              <>
                <li>
                  <Link to="admin/users">All User</Link>
                </li>
                <li>
                  <Link to="admin/sellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="admin/reported">Reported Items</Link>
                </li>
              </>
            )}
            {
              isSeller && <Link >HEllo</Link>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayOut;
