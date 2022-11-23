import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../UserContext/UserContext";

const Header = () => {
  // const {user, logOut, } = useContext(AuthContext);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        position: "top-middle",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  const menuItems = {
    childMenu: (
      <>
        <ul className="p-2">
          <li>
            <Link>Sports</Link>
          </li>
          <li>
            <Link>Classic</Link>
          </li>
          <li>
            <Link>Vintage</Link>
          </li>
        </ul>
      </>
    ),
    publicMenu: (
      <>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </>
    ),
    privateMenu: (
      <>
        <li>
          <Link onClick={handleLogOut}>Logout</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </>
    ),
  };

  return (
    <div classname="">
      <div className="navbar bg-base-100 shadow-lg">
        <div className="container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link>Home</Link>
                </li>
                <li tabIndex={0}>
                  <Link className="justify-between">
                    Products
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </Link>
                  {
                    // All Children Menu
                    menuItems.childMenu
                  }
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                {user?.uid ? menuItems.privateMenu : menuItems.publicMenu}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              Second-Sell
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link>Home</Link>
              </li>
              <li tabIndex={0}>
                <Link>
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                {
                  // All Children Menu
                  menuItems.childMenu
                }
              </li>
              <li>
                <Link>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          {user?.uid && (
            <div>
              <p className="font-bold">{user?.displayName}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
