import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";
import useAdmin from "../Hooks/useAdmin";
import useSeller from "../Hooks/useSeller";
import { AuthContext } from "../UserContext/UserContext";

const DashboardLayOut = () => {
  const { user } = useContext(AuthContext);
  const {email} = user;
  
  const [isSeller] = useSeller(email)
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Header />
      <div className="drawer  drawer-mobile ">
        <input id="dashDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
          {/* <!-- Page content here --> */}
        </div>
        <div className="drawer-side mr-2 shadow-2xl">
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
                  <Link to="admin/buyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="admin/reported">Reported Items</Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to="sellers/myproducts">My Products</Link>
                </li>
                <li>
                  <Link to="sellers/addproducts">Add A Products</Link>
                </li>
                <li>
                  <Link to="users/mybuyers">My Buyers</Link>
                </li>
              </>
            )}
            {
              !isSeller && !isAdmin && <>
              <li>
                <Link to ='users/myorders'>My Orders</Link>
              </li>
              </>
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayOut;
